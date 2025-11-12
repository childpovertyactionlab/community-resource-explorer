#!/usr/bin/env node

/**
 * Script to patch cpal-components schools data with transformed z-score data
 *
 * Run with: node scripts/patchCpalSchools.js
 */

const fs = require('fs');
const path = require('path');

// Load schools data
const schoolsDataPath = path.join(__dirname, '../src/data/map/schools.json');
const schoolsData = require(schoolsDataPath);

// Define z-score ranges extracted from metrics.js
const metricRanges = {
  'cri/INDEX': { min: -5.75718734259168, max: 8.79027718632362 },
  'com/INDEX': { min: -1.95125534281779, max: 4.29674505559042 },
  'eco/INDEX': { min: -3.94333251135249, max: 3.55450225241591 },
  'hel/INDEX': { min: -4.085701107977, max: 7.25160252660173 },
  'yth/INDEX': { min: -2.87332492399244, max: 4.96635428272799 },
  // Individual metrics (using standard z-score range for now, can be refined)
  'com/comrec': { min: -3, max: 3 },
  'com/evics': { min: -3, max: 3 },
  'com/libvis': { min: -3, max: 3 },
  'com/parkcn': { min: -3, max: 3 },
  'eco/joball': { min: -3, max: 3 },
  'eco/snap': { min: -3, max: 3 },
  'eco/tanf5': { min: -3, max: 3 },
  'eco/vacrat': { min: -3, max: 3 },
  'hel/chkups': { min: -3, max: 3 },
  'hel/leadts': { min: -3, max: 3 },
  'hel/teenbr': { min: -3, max: 3 },
  'hel/lbwbrt': { min: -3, max: 3 },
  'yth/hsdrp': { min: -3, max: 3 },
  'yth/libart': { min: -3, max: 3 },
  'yth/readss': { min: -3, max: 3 },
  'yth/schabs': { min: -3, max: 3 },
  'yth/schsus': { min: -3, max: 3 }
};

// Helper function to normalize z-scores to 0-100 scale
const normalizeZScore = (zScore, min, max) => {
  if (zScore === null || zScore === undefined || isNaN(zScore)) {
    return null;
  }
  const clampedZ = Math.max(min, Math.min(max, parseFloat(zScore)));
  return Math.round(((clampedZ - min) / (max - min)) * 100);
};

// Transform schools data
const transformSchoolsForCpal = () => {
  console.log(`Processing ${schoolsData.length} schools...`);

  return schoolsData.map(school => {
    const transformed = { ...school };

    // Essential: Add cri_weight from cri/INDEX z-score (this is what Explorer uses!)
    if (school['cri/INDEX'] !== undefined) {
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
      if (school[indexKey] !== undefined) {
        const range = metricRanges[indexKey];
        transformed[weightKey] = normalizeZScore(
          school[indexKey],
          range.min,
          range.max
        );
      }
    });

    // Ensure TEA_ID is present (cpal-components expects this)
    if (!transformed.TEA_ID && transformed['TEA ID']) {
      transformed.TEA_ID = transformed['TEA ID'];
    }

    // Ensure geoid is present
    if (!transformed.geoid && transformed.GEOID) {
      transformed.geoid = transformed.GEOID;
    }

    // Keep school name
    if (!transformed.school_name && transformed['School']) {
      transformed.school_name = transformed['School'];
    }

    return transformed;
  });
};

// Main function
const main = () => {
  console.log('🚀 Starting transformation of schools data for cpal-components...\n');

  try {
    // Transform the data
    const transformedSchools = transformSchoolsForCpal();

    // Verify transformation
    const sampleSchool = transformedSchools[0];
    console.log('📊 Sample transformation:');
    console.log(`  School: ${sampleSchool.School || sampleSchool.school_name}`);
    console.log(`  Original CRI z-score: ${sampleSchool['cri/INDEX']}`);
    console.log(`  Transformed CRI weight: ${sampleSchool.cri_weight}`);
    console.log('');

    // Create the JavaScript module that matches cpal-components format
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

    // Path to cpal-components schools data
    const nodeModulesPath = path.join(__dirname, '../node_modules/cpal-components/lib/data/schools.js');

    if (fs.existsSync(nodeModulesPath)) {
      // Create backup if it doesn't exist
      const backupPath = nodeModulesPath + '.backup';
      if (!fs.existsSync(backupPath)) {
        fs.copyFileSync(nodeModulesPath, backupPath);
        console.log(`✅ Backup created at: ${backupPath}`);
      }

      // Apply patch
      fs.writeFileSync(nodeModulesPath, jsContent, 'utf8');
      console.log(`✅ Patched cpal-components schools data`);
      console.log(`   Location: ${nodeModulesPath}`);

      // Also save a copy for reference
      const patchPath = path.join(__dirname, '../patches/cpal-schools-data.js');
      const patchesDir = path.join(__dirname, '../patches');
      if (!fs.existsSync(patchesDir)) {
        fs.mkdirSync(patchesDir);
      }
      fs.writeFileSync(patchPath, jsContent, 'utf8');
      console.log(`✅ Reference copy saved to: patches/cpal-schools-data.js`);

      console.log('\n✨ SUCCESS! The explorer page should now display z-score based data.\n');
      console.log('⚠️  IMPORTANT NEXT STEPS:');
      console.log('   1. Clear gatsby cache: gatsby clean');
      console.log('   2. Restart dev server: gatsby develop');
      console.log('   3. Or build for production: gatsby build');
      console.log('\n📌 Note: The scores will now show as 0-100 values derived from z-scores.');
      console.log('   Schools with negative z-scores will show lower values (closer to 0)');
      console.log('   Schools with positive z-scores will show higher values (closer to 100)');

    } else {
      console.error('❌ Could not find cpal-components in node_modules.');
      console.error(`   Expected location: ${nodeModulesPath}`);
      console.error('   Please ensure cpal-components is installed: npm install');
      process.exit(1);
    }

    // Summary statistics
    const schoolsWithCRI = transformedSchools.filter(s => s.cri_weight !== null && s.cri_weight !== undefined);
    const avgCRI = schoolsWithCRI.reduce((sum, s) => sum + s.cri_weight, 0) / schoolsWithCRI.length;

    console.log('\n📈 Transformation Summary:');
    console.log(`   Total schools: ${transformedSchools.length}`);
    console.log(`   Schools with CRI scores: ${schoolsWithCRI.length}`);
    console.log(`   Average CRI weight (0-100): ${avgCRI.toFixed(1)}`);
    console.log(`   Z-score range: [${metricRanges['cri/INDEX'].min.toFixed(2)}, ${metricRanges['cri/INDEX'].max.toFixed(2)}]`);
    console.log(`   Mapped to: [0, 100]`);

  } catch (error) {
    console.error('❌ Error during transformation:', error);
    process.exit(1);
  }
};

// Run the script
main();