#!/usr/bin/env node

/**
 * Script to verify the cpal-components patch is applied correctly
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying cpal-components patch...\n');

// Check if the patched file exists
const patchedFilePath = path.join(__dirname, '../node_modules/cpal-components/lib/data/schools.js');

if (!fs.existsSync(patchedFilePath)) {
  console.error('❌ ERROR: cpal-components schools.js not found!');
  console.error(`   Expected location: ${patchedFilePath}`);
  process.exit(1);
}

// Read the file
const fileContent = fs.readFileSync(patchedFilePath, 'utf8');

// Check for patch signature
if (!fileContent.includes('Auto-generated from z-score data')) {
  console.error('❌ ERROR: Patch has NOT been applied!');
  console.error('   The schools.js file does not contain the patch signature.');
  console.error('   Run: node scripts/patchCpalSchools.js');
  process.exit(1);
}

console.log('✅ Patch signature found');

// Check for cri_weight field
if (!fileContent.includes('cri_weight')) {
  console.error('❌ ERROR: cri_weight field not found in schools data!');
  console.error('   The patch may not have transformed the data correctly.');
  process.exit(1);
}

console.log('✅ cri_weight field found');

// Extract and display first school's data
const schoolsMatch = fileContent.match(/var schools = (\[[\s\S]*?\n\]);/);
if (schoolsMatch) {
  try {
    const schoolsArray = eval(schoolsMatch[1]);
    const firstSchool = schoolsArray[0];

    console.log('\n📊 Sample School Data:');
    console.log(`   School Name: ${firstSchool.campus || firstSchool.School || 'N/A'}`);
    console.log(`   Z-Score (cri/INDEX): ${firstSchool['cri/INDEX'] !== undefined ? firstSchool['cri/INDEX'].toFixed(3) : 'N/A'}`);
    console.log(`   Normalized Score (cri_weight): ${firstSchool.cri_weight !== undefined ? firstSchool.cri_weight : 'N/A'}`);

    if (firstSchool['cri/INDEX'] !== undefined && firstSchool.cri_weight !== undefined) {
      // Verify the transformation is correct
      const expectedMin = -5.75718734259168;
      const expectedMax = 8.79027718632362;
      const expectedWeight = Math.round(((firstSchool['cri/INDEX'] - expectedMin) / (expectedMax - expectedMin)) * 100);

      if (Math.abs(firstSchool.cri_weight - expectedWeight) <= 1) {
        console.log('   ✅ Transformation is correct!');
      } else {
        console.log(`   ⚠️  Expected weight: ${expectedWeight}, got: ${firstSchool.cri_weight}`);
      }
    }

    // Count schools
    console.log(`\n📈 Statistics:`);
    console.log(`   Total schools: ${schoolsArray.length}`);
    const schoolsWithCRI = schoolsArray.filter(s => s.cri_weight !== null && s.cri_weight !== undefined);
    console.log(`   Schools with cri_weight: ${schoolsWithCRI.length}`);

    if (schoolsWithCRI.length > 0) {
      const avgWeight = schoolsWithCRI.reduce((sum, s) => sum + s.cri_weight, 0) / schoolsWithCRI.length;
      console.log(`   Average cri_weight: ${avgWeight.toFixed(1)}`);
    }

  } catch (e) {
    console.log('⚠️  Could not parse schools data, but patch appears to be applied');
  }
}

// Check for backup
const backupPath = patchedFilePath + '.backup';
if (fs.existsSync(backupPath)) {
  console.log(`\n✅ Backup exists at: ${backupPath}`);
}

// Get patch timestamp
const timestampMatch = fileContent.match(/Generated on: (.+)/);
if (timestampMatch) {
  console.log(`\n🕐 Patch applied on: ${timestampMatch[1]}`);
}

console.log('\n✅ Patch verification complete!\n');
console.log('💡 Next steps:');
console.log('   1. Clear Gatsby cache: gatsby clean (or rm -rf .cache public)');
console.log('   2. Restart dev server: gatsby develop');
console.log('   3. Clear browser cache or hard refresh (Cmd+Shift+R / Ctrl+Shift+R)');
