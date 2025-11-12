#!/usr/bin/env node

/**
 * Script to update the schools data in cpal-components with transformed z-score data
 *
 * This script:
 * 1. Reads the current schools.json with z-scores
 * 2. Transforms z-scores to 0-100 scale
 * 3. Creates a patch file for cpal-components
 *
 * Run with: node scripts/updateCpalSchoolsData.js
 */

const fs = require('fs');
const path = require('path');

// Load schools data
const schoolsDataPath = path.join(__dirname, '../src/data/map/schools.json');
const schoolsData = require(schoolsDataPath);

// Load metrics data
const metricsDataPath = path.join(__dirname, '../src/data/map/metrics.js');
const metricsData = require(metricsDataPath).default || require(metricsDataPath);

// Helper function to normalize z-scores to 0-100 scale
const normalizeZScore = (zScore, min, max) => {
  if (zScore === null || zScore === undefined || isNaN(zScore)) {
    return null;
  }
  const clampedZ = Math.max(min, Math.min(max, parseFloat(zScore)));
  return Math.round(((clampedZ - min) / (max - min)) * 100);
};

// Get metric ranges
const getMetricRanges = () => {
  const metricRanges = {};
  Object.keys(metricsData).forEach(key => {
    const metric = metricsData[key];
    if (metric.range && metric.range.length === 2) {
      metricRanges[key] = {
        min: metric.range[0],
        max: metric.range[1]
      };
    }
  });
  return metricRanges;
};

// Transform schools data
const transformSchoolsForCpal = () => {
  const metricRanges = getMetricRanges();

  return schoolsData.map(school => {
    const transformed = { ...school };

    // Add cri_weight from cri/INDEX z-score
    if (school['cri/INDEX'] !== undefined && metricRanges['cri/INDEX']) {
      const range = metricRanges['cri/INDEX'];
      transformed.cri_weight = normalizeZScore(
        school['cri/INDEX'],
        range.min,
        range.max
      );
    }

    // Transform domain indices
    const domainIndices = {
      'com/INDEX': 'com_weight',
      'eco/INDEX': 'eco_weight',
      'hel/INDEX': 'hel_weight',
      'yth/INDEX': 'yth_weight'
    };

    Object.entries(domainIndices).forEach(([indexKey, weightKey]) => {
      if (school[indexKey] !== undefined && metricRanges[indexKey]) {
        const range = metricRanges[indexKey];
        transformed[weightKey] = normalizeZScore(
          school[indexKey],
          range.min,
          range.max
        );
      }
    });

    // Add individual metric weights
    const metrics = [
      'com/comrec', 'com/evics', 'com/libvis', 'com/parkcn',
      'eco/joball', 'eco/snap', 'eco/tanf5', 'eco/vacrat',
      'hel/chkups', 'hel/leadts', 'hel/teenbr', 'hel/lbwbrt',
      'yth/hsdrp', 'yth/libart', 'yth/readss', 'yth/schabs', 'yth/schsus'
    ];

    metrics.forEach(metric => {
      const zKey1 = `${metric}/z`;
      const zKey2 = `${metric.replace(/\//g, '_')}_z`;
      const value = school[zKey1] || school[zKey2];

      if (value !== undefined && metricRanges[metric]) {
        const range = metricRanges[metric];
        const weightKey = `${metric.replace(/\//g, '_')}_weight`;
        transformed[weightKey] = normalizeZScore(value, range.min, range.max);
      }
    });

    // Ensure geoid is present
    if (!transformed.geoid && transformed.GEOID) {
      transformed.geoid = transformed.GEOID;
    }

    return transformed;
  });
};

// Main function
const main = () => {
  console.log('Starting transformation of schools data...');

  try {
    // Transform the data
    const transformedSchools = transformSchoolsForCpal();

    // Output paths
    const outputPath = path.join(__dirname, '../src/data/transformed-schools-for-cpal.json');
    const patchPath = path.join(__dirname, '../patches/cpal-schools-data.js');

    // Create patches directory if it doesn't exist
    const patchesDir = path.join(__dirname, '../patches');
    if (!fs.existsSync(patchesDir)) {
      fs.mkdirSync(patchesDir);
    }

    // Write transformed JSON
    fs.writeFileSync(
      outputPath,
      JSON.stringify(transformedSchools, null, 2),
      'utf8'
    );
    console.log(`✓ Transformed schools data written to: ${outputPath}`);

    // Create a JavaScript module that matches cpal-components format
    const jsContent = `"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

// Auto-generated from z-score data - DO NOT EDIT MANUALLY
// Generated on: ${new Date().toISOString()}
// Source: src/data/map/schools.json (with z-score to 0-100 transformation)

var schools = ${JSON.stringify(transformedSchools, null, 2)};

exports.default = schools;
`;

    // Write the JS module
    fs.writeFileSync(patchPath, jsContent, 'utf8');
    console.log(`✓ JavaScript module written to: ${patchPath}`);

    // Try to find and patch cpal-components directly
    const nodeModulesPath = path.join(__dirname, '../node_modules/cpal-components/lib/data/schools.js');
    if (fs.existsSync(nodeModulesPath)) {
      // Create backup
      const backupPath = nodeModulesPath + '.backup';
      if (!fs.existsSync(backupPath)) {
        fs.copyFileSync(nodeModulesPath, backupPath);
        console.log(`✓ Backup created at: ${backupPath}`);
      }

      // Apply patch
      fs.writeFileSync(nodeModulesPath, jsContent, 'utf8');
      console.log(`✓ Patched cpal-components schools data at: ${nodeModulesPath}`);
      console.log('\n✨ Success! The explorer page should now use the transformed z-score data.');
      console.log('\nNOTE: You may need to:');
      console.log('1. Clear gatsby cache: gatsby clean');
      console.log('2. Rebuild the project: gatsby build');
      console.log('3. Or restart the dev server: gatsby develop');
    } else {
      console.log('\n⚠️  Could not find cpal-components in node_modules.');
      console.log('The patch file has been created at:', patchPath);
      console.log('You can manually copy it to: node_modules/cpal-components/lib/data/schools.js');
    }

    // Summary
    console.log('\n📊 Transformation Summary:');
    console.log(`- Total schools processed: ${transformedSchools.length}`);
    console.log(`- Sample school CRI weight: ${transformedSchools[0]?.cri_weight || 'N/A'}`);
    console.log(`- Z-score range for CRI: [${metricRanges['cri/INDEX']?.min}, ${metricRanges['cri/INDEX']?.max}]`);
    console.log(`- Transformed to: [0, 100]`);

  } catch (error) {
    console.error('❌ Error during transformation:', error);
    process.exit(1);
  }
};

// Get metric ranges for summary
const metricRanges = getMetricRanges();

// Run the script
main();