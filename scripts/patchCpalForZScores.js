#!/usr/bin/env node

/**
 * Script to patch cpal-components to display Z-SCORES instead of 0-100 values
 *
 * This script:
 * 1. Loads the ORIGINAL schools data from cpal-components backup
 * 2. Updates ONLY the scoring fields with z-score values from our source data
 * 3. Preserves all other fields from the original (like Feeder, HIGH_SLN, etc.)
 * 4. Patches the chart axis to show z-score range
 *
 * Run with: node scripts/patchCpalForZScores.js
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Patching cpal-components to display z-scores...\n');

// Z-score ranges from metrics
const CRI_Z_SCORE_RANGE = {
  min: -5.75718734259168,
  max: 8.79027718632362
};

// Create patches directory
const patchesDir = path.join(__dirname, '../patches');
if (!fs.existsSync(patchesDir)) {
  fs.mkdirSync(patchesDir);
}

// ===========================
// PATCH 1: Schools Data
// ===========================

console.log('📊 PATCH 1: Updating schools data to use z-scores...');

// Load our source data with z-scores
const sourceDataPath = path.join(__dirname, '../src/data/map/schools.json');
const sourceData = require(sourceDataPath);

// Build a map of our source data by a unique key
const sourceDataMap = {};
sourceData.forEach(school => {
  // Try different keys to match schools
  const key1 = school.tea ? String(school.tea) : null;
  const key2 = school.sln ? String(school.sln) : null;
  const key3 = school.campus ? school.campus.toLowerCase() : null;

  if (key1) sourceDataMap[`tea_${key1}`] = school;
  if (key2) sourceDataMap[`sln_${key2}`] = school;
  if (key3) sourceDataMap[`name_${key3}`] = school;
});

// Function to update schools data
const updateSchoolsData = (originalPath, outputPath, isESModule) => {
  // Check if backup exists, if not create it
  const backupPath = originalPath + '.backup';

  let originalData;
  if (fs.existsSync(backupPath)) {
    // Use backup as source of truth for original data
    if (isESModule) {
      // ES module format: parse from backup
      const backupContent = fs.readFileSync(backupPath, 'utf8');
      const match = backupContent.match(/export\s+var\s+schools\s*=\s*(\[[\s\S]*\]);?/);
      if (match) {
        originalData = eval(match[1]);
      }
    } else {
      // CommonJS format: require it directly from backup
      // Clear require cache first
      delete require.cache[require.resolve(backupPath)];
      try {
        const backupModule = require(backupPath);
        originalData = backupModule.schools || backupModule.default || backupModule;
        if (!Array.isArray(originalData) && typeof originalData === 'object') {
          originalData = originalData.schools || null;
        }
      } catch (e) {
        console.error(`  ❌ Error requiring backup: ${e.message}`);
      }
    }
  } else if (fs.existsSync(originalPath)) {
    // Create backup
    fs.copyFileSync(originalPath, backupPath);
    console.log(`  ✅ Backup created: ${backupPath}`);

    // Read original
    if (isESModule) {
      const originalContent = fs.readFileSync(originalPath, 'utf8');
      const match = originalContent.match(/export\s+var\s+schools\s*=\s*(\[[\s\S]*\]);?/);
      if (match) {
        originalData = eval(match[1]);
      }
    } else {
      // CommonJS format: require it directly
      delete require.cache[require.resolve(originalPath)];
      try {
        const originalModule = require(originalPath);
        originalData = originalModule.schools || originalModule.default || originalModule;
        if (!Array.isArray(originalData) && typeof originalData === 'object') {
          originalData = originalData.schools || null;
        }
      } catch (e) {
        console.error(`  ❌ Error requiring original: ${e.message}`);
      }
    }
  }

  if (!originalData || !Array.isArray(originalData)) {
    console.error(`  ❌ Could not parse original data from ${originalPath}`);
    return false;
  }

  console.log(`  📝 Processing ${originalData.length} schools...`);

  // Transform the data: Keep original structure, just update scoring fields
  const transformedSchools = originalData.map(originalSchool => {
    // Keep all original fields
    const transformed = { ...originalSchool };

    // Try to find matching source school
    let sourceSchool = null;

    // Try matching by TEA
    if (originalSchool.TEA) {
      sourceSchool = sourceDataMap[`tea_${originalSchool.TEA}`];
    }

    // Try matching by SLN if TEA didn't work
    if (!sourceSchool && originalSchool.SLN) {
      sourceSchool = sourceDataMap[`sln_${originalSchool.SLN}`];
    }

    // Try matching by school name if others didn't work
    if (!sourceSchool && originalSchool.SCHOOLNAME) {
      sourceSchool = sourceDataMap[`name_${originalSchool.SCHOOLNAME.toLowerCase()}`];
    }

    if (sourceSchool) {
      // Update scoring fields with z-score values
      // CRITICAL: The Explorer popup expects fields with forward slash names like "cri/INDEX"
      if (sourceSchool['cri/INDEX'] !== undefined) {
        transformed.cri_weight = sourceSchool['cri/INDEX'];
        transformed['cri/INDEX'] = sourceSchool['cri/INDEX'];  // For popup display
        transformed.cri_index = sourceSchool['cri/INDEX'];      // Update old field too
      }

      // CRITICAL: The metrics.js expects these OLD field names, so we map to them
      if (sourceSchool['com/INDEX'] !== undefined) {
        transformed.ci_weight = sourceSchool['com/INDEX'];     // Community Index
        transformed.ci_index = sourceSchool['com/INDEX'];
        // Also keep new field names for compatibility
        transformed.com_weight = sourceSchool['com/INDEX'];
        transformed['com/INDEX'] = sourceSchool['com/INDEX'];
      }

      if (sourceSchool['eco/INDEX'] !== undefined) {
        transformed.eci_weight = sourceSchool['eco/INDEX'];    // Economics Index
        transformed.eci_index = sourceSchool['eco/INDEX'];
        // Also keep new field names for compatibility
        transformed.eco_weight = sourceSchool['eco/INDEX'];
        transformed['eco/INDEX'] = sourceSchool['eco/INDEX'];
      }

      if (sourceSchool['hel/INDEX'] !== undefined) {
        transformed.hi_weight = sourceSchool['hel/INDEX'];     // Health Index
        transformed.hi_index = sourceSchool['hel/INDEX'];
        // Also keep new field names for compatibility
        transformed.hel_weight = sourceSchool['hel/INDEX'];
        transformed['hel/INDEX'] = sourceSchool['hel/INDEX'];
      }

      if (sourceSchool['yth/INDEX'] !== undefined) {
        // Map Youth & Family to Education (edi_weight) since that's what we'll relabel
        transformed.edi_weight = sourceSchool['yth/INDEX'];    // Will show as "Youth & Family"
        transformed.edi_index = sourceSchool['yth/INDEX'];
        // Also keep new field names for compatibility
        transformed.yth_weight = sourceSchool['yth/INDEX'];
        transformed['yth/INDEX'] = sourceSchool['yth/INDEX'];
      }

      // CRITICAL: Delete Family Index fields to prevent them from showing
      delete transformed.fi_weight;
      delete transformed.fi_index;

      // Hide CRI by setting it to null (won't display if no data)
      if (sourceSchool['cri/INDEX'] !== undefined) {
        // Actually, let's keep it for now since hiding causes issues
        transformed.cri_weight = sourceSchool['cri/INDEX'];
        transformed.cri_index = sourceSchool['cri/INDEX'];
        transformed['cri/INDEX'] = sourceSchool['cri/INDEX'];
      }
    } else {
      console.log(`  ⚠️  No match found for: ${originalSchool.SCHOOLNAME || originalSchool.TEA}`);
    }

    // CRITICAL: Ensure both uppercase and lowercase coordinate fields exist
    // The map's getSchoolGeojson() expects lowercase point_x/point_y
    if (originalSchool.POINT_X !== undefined && originalSchool.POINT_Y !== undefined) {
      // Add lowercase versions for the map
      transformed.point_x = originalSchool.POINT_X;
      transformed.point_y = originalSchool.POINT_Y;
      // Keep uppercase for compatibility
      transformed.POINT_X = originalSchool.POINT_X;
      transformed.POINT_Y = originalSchool.POINT_Y;
    } else if (originalSchool.point_x !== undefined && originalSchool.point_y !== undefined) {
      // If lowercase exists, ensure uppercase also exists
      transformed.point_x = originalSchool.point_x;
      transformed.point_y = originalSchool.point_y;
      transformed.POINT_X = originalSchool.point_x;
      transformed.POINT_Y = originalSchool.point_y;
    }

    // Ensure TEA is an integer (required for map feature ID)
    if (transformed.TEA !== undefined) {
      transformed.TEA = parseInt(transformed.TEA, 10);
    }
    if (transformed.tea !== undefined) {
      transformed.tea = parseInt(transformed.tea, 10);
    }

    return transformed;
  });

  // Create output content based on format
  let outputContent;
  if (isESModule) {
    // ES module format
    outputContent = `// Auto-generated with Z-SCORE values - DO NOT EDIT MANUALLY
// Generated on: ${new Date().toISOString()}
// Preserves original structure, updates scoring to z-scores

export var schools = ${JSON.stringify(transformedSchools, null, 2)};
`;
  } else {
    // CommonJS format
    outputContent = `"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

// Auto-generated with Z-SCORE values - DO NOT EDIT MANUALLY
// Generated on: ${new Date().toISOString()}
// Preserves original structure, updates scoring to z-scores

var schools = ${JSON.stringify(transformedSchools, null, 2)};

exports.default = schools;
`;
  }

  // Write the transformed data
  fs.writeFileSync(outputPath, outputContent, 'utf8');
  console.log(`  ✅ Patched: ${outputPath}`);

  return true;
};

// Patch both CommonJS and ES modules versions
const paths = [
  {
    path: path.join(__dirname, '../node_modules/cpal-components/lib/data/schools.js'),
    isESModule: false
  },
  {
    path: path.join(__dirname, '../node_modules/cpal-components/es/data/schools.js'),
    isESModule: true
  }
];

let successCount = 0;
paths.forEach(({ path: filePath, isESModule }) => {
  if (fs.existsSync(filePath)) {
    if (updateSchoolsData(filePath, filePath, isESModule)) {
      successCount++;
    }
  } else {
    console.log(`  ⚠️  Not found: ${filePath}`);
  }
});

if (successCount === 0) {
  console.error(`  ❌ ERROR: Could not patch any schools.js files`);
  process.exit(1);
}

// ===========================
// PATCH 2: Chart Axis
// ===========================

console.log('\n📈 PATCH 2: Updating chart axis to z-score range...');

// Patch BOTH CommonJS and ES modules versions
const chartPaths = [
  path.join(__dirname, '../node_modules/cpal-components/lib/modules/cpal/explorer/FeederView/FeederSchoolsChart.js'),
  path.join(__dirname, '../node_modules/cpal-components/es/modules/cpal/explorer/FeederView/FeederSchoolsChart.js')
];

let chartPatchedCount = 0;

chartPaths.forEach(chartPath => {
  if (fs.existsSync(chartPath)) {
    let chartContent = fs.readFileSync(chartPath, 'utf8');

    // Create backup if needed
    const chartBackupPath = chartPath + '.backup';
    if (!fs.existsSync(chartBackupPath)) {
      fs.copyFileSync(chartPath, chartBackupPath);
      console.log(`  ✅ Backup: ${chartPath}`);
    }

    // Replace the hardcoded 0-100 axis with z-score range
    const axisPattern = /(xAxis:\s*\{[^}]*min:\s*)(?:0|-?\d+\.?\d*)(\s*,\s*max:\s*)(?:100|\d+\.?\d*)/;

    if (axisPattern.test(chartContent)) {
      chartContent = chartContent.replace(
        axisPattern,
        `$1${CRI_Z_SCORE_RANGE.min}$2${CRI_Z_SCORE_RANGE.max}`
      );

      fs.writeFileSync(chartPath, chartContent, 'utf8');
      console.log(`  ✅ Patched: ${chartPath}`);
      chartPatchedCount++;
    } else {
      console.log(`  ℹ️  Axis already patched or pattern not found in ${chartPath}`);
    }
  } else {
    console.log(`  ⚠️  Not found: ${chartPath}`);
  }
});

// ===========================
// PATCH 3: Hide metrics, update ranges for z-scores, rename labels
// ===========================

console.log('\n🔧 PATCH 3: Configuring metrics display and ranges...');

// Z-score ranges for each metric (from the data)
const Z_SCORE_RANGES = {
  'cri_weight': [-5.76, 8.79],
  'ci_weight': [-1.95, 4.30],  // Community
  'eci_weight': [-3.94, 3.55], // Economics
  'hi_weight': [-4.09, 7.25],  // Health
  'edi_weight': [-2.87, 4.97], // Education (now Youth & Family)
  'fi_weight': [-2.87, 4.97]   // Family (will be hidden)
};

// First, update metrics.js with correct ranges and hide unwanted metrics
const metricsPaths = [
  path.join(__dirname, '../node_modules/cpal-components/lib/constants/metrics.js'),
  path.join(__dirname, '../node_modules/cpal-components/es/constants/metrics.js')
];

metricsPaths.forEach(metricsPath => {
  if (fs.existsSync(metricsPath)) {
    let content = fs.readFileSync(metricsPath, 'utf8');

    // Hide fi_weight and cri_weight by setting tab_level to 1 (hidden)
    const metricsToHide = ['fi_weight', 'cri_weight'];

    metricsToHide.forEach(metric => {
      const pattern = new RegExp(`(id:\\s*['"]${metric}['"][^}]*?tab_level:\\s*)0`);
      if (pattern.test(content)) {
        content = content.replace(pattern, '$11');
        console.log(`  ✅ Hidden ${metric} metric`);
      }
    });

    // Update ranges for all metrics to use z-score ranges
    Object.keys(Z_SCORE_RANGES).forEach(metricId => {
      const range = Z_SCORE_RANGES[metricId];
      // Find and replace the range for this metric
      const rangePattern = new RegExp(
        `(id:\\s*['"]${metricId}['"][^}]*?range:\\s*)\\[[^\\]]+\\]`,
        'g'
      );
      if (rangePattern.test(content)) {
        content = content.replace(
          rangePattern,
          `$1[${range[0]}, ${range[1]}]`
        );
        console.log(`  ✅ Updated ${metricId} range to [${range[0]}, ${range[1]}]`);
      }
    });

    fs.writeFileSync(metricsPath, content, 'utf8');
  }
});

// Now change the labels in the translation files
const labelPaths = [
  path.join(__dirname, '../node_modules/cpal-components/lib/constants/en_US.js'),
  path.join(__dirname, '../node_modules/cpal-components/es/constants/en_US.js')
];

let metricsPatchedCount = 0;

labelPaths.forEach(labelPath => {
  if (fs.existsSync(labelPath)) {
    let content = fs.readFileSync(labelPath, 'utf8');

    // Change Education Index to Youth & Family Index (try multiple patterns)
    let changed = false;
    if (content.includes('Education Index')) {
      content = content.replace(/Education Index/g, 'Youth & Family Index');
      changed = true;
    }
    // Also try just "Education" in case it's abbreviated
    if (content.includes('UI_MAP_METRIC_TITLE_EDU_INDEX')) {
      content = content.replace(
        /(UI_MAP_METRIC_TITLE_EDU_INDEX:\s*)"[^"]*"/,
        '$1"Youth & Family Index"'
      );
      changed = true;
    }
    if (changed) {
      console.log(`  ✅ Renamed Education to Youth & Family in ${labelPath}`);
      metricsPatchedCount++;
    }

    // Also update the description if it exists
    content = content.replace(/Educational attainment/g, 'Youth and family support');

    fs.writeFileSync(labelPath, content, 'utf8');
  }
});

// ===========================
// PATCH 4: DISABLED - Depends on PATCH 3
// ===========================

console.log('\n🏷️  PATCH 4: SKIPPED (depends on PATCH 3)...');

let enUSPatchedCount = 0; // Keep for summary

// ===========================
// Summary
// ===========================

console.log('\n✨ SUCCESS! Z-score patches applied.\n');

console.log('📊 Data patching summary:');
console.log(`   Files patched: ${successCount}/2`);
console.log(`   Chart axes patched: ${chartPatchedCount}/2`);
console.log(`   Metrics configs patched: ${metricsPatchedCount}/2`);
console.log(`   Labels patched: ${enUSPatchedCount}/2`);

console.log('\n📈 Chart Axis:');
console.log(`   Range: ${CRI_Z_SCORE_RANGE.min} to ${CRI_Z_SCORE_RANGE.max}`);

console.log('\n⚠️  IMPORTANT NEXT STEPS:');
console.log('   1. Clear Gatsby cache: gatsby clean (or rm -rf .cache public)');
console.log('   2. Restart dev server: gatsby develop');
console.log('   3. Hard refresh browser: Cmd+Shift+R / Ctrl+Shift+R');
console.log('\n📌 The Explorer page will now show z-scores (e.g., -0.611, 2.5) instead of 0-100 values.');
console.log('   All original fields (Feeder, HIGH_SLN, etc.) are preserved.');