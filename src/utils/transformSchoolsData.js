/**
 * Utility to transform z-score based schools data to 0-100 scale
 * for compatibility with cpal-components
 */

import metricsData from '../data/map/metrics';

// Helper function to normalize z-scores to 0-100 scale
export const normalizeZScore = (zScore, min, max) => {
  if (zScore === null || zScore === undefined || isNaN(zScore)) {
    return null;
  }
  // Clamp z-score to the expected range
  const clampedZ = Math.max(min, Math.min(max, parseFloat(zScore)));
  // Linear transformation to 0-100 scale
  return Math.round(((clampedZ - min) / (max - min)) * 100);
};

// Get metric ranges from the metrics configuration
export const getMetricRanges = () => {
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

// Transform a single school's data from z-scores to 0-100 scale
export const transformSchool = (school, metricRanges) => {
  const transformed = { ...school };

  // Transform the main CRI INDEX to cri_weight (0-100)
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

  // Transform individual metric z-scores
  // Map the z-score fields to weight fields for individual metrics
  const metricMappings = {
    'com/comrec/z': { key: 'com_comrec_weight', metric: 'com/comrec' },
    'com/evics/z': { key: 'com_evics_weight', metric: 'com/evics' },
    'com/libvis/z': { key: 'com_libvis_weight', metric: 'com/libvis' },
    'com/parkcn/z': { key: 'com_parkcn_weight', metric: 'com/parkcn' },
    'eco/joball/z': { key: 'eco_joball_weight', metric: 'eco/joball' },
    'eco/snap/z': { key: 'eco_snap_weight', metric: 'eco/snap' },
    'eco/tanf5/z': { key: 'eco_tanf5_weight', metric: 'eco/tanf5' },
    'eco/vacrat/z': { key: 'eco_vacrat_weight', metric: 'eco/vacrat' },
    'hel/chkups/z': { key: 'hel_chkups_weight', metric: 'hel/chkups' },
    'hel/leadts/z': { key: 'hel_leadts_weight', metric: 'hel/leadts' },
    'hel/teenbr/z': { key: 'hel_teenbr_weight', metric: 'hel/teenbr' },
    'hel/lbwbrt/z': { key: 'hel_lbwbrt_weight', metric: 'hel/lbwbrt' },
    'yth/hsdrp/z': { key: 'yth_hsdrp_weight', metric: 'yth/hsdrp' },
    'yth/libart/z': { key: 'yth_libart_weight', metric: 'yth/libart' },
    'yth/readss/z': { key: 'yth_readss_weight', metric: 'yth/readss' },
    'yth/schabs/z': { key: 'yth_schabs_weight', metric: 'yth/schabs' },
    'yth/schsus/z': { key: 'yth_schsus_weight', metric: 'yth/schsus' }
  };

  Object.entries(metricMappings).forEach(([zKey, { key: weightKey, metric }]) => {
    // Also check for underscore version of the key
    const underscoreKey = zKey.replace(/\//g, '_');
    const value = school[zKey] || school[underscoreKey];

    if (value !== undefined && metricRanges[metric]) {
      const range = metricRanges[metric];
      transformed[weightKey] = normalizeZScore(value, range.min, range.max);
    }
  });

  return transformed;
};

// Transform an array of schools from z-scores to 0-100 scale
export const transformSchoolsData = (schools) => {
  const metricRanges = getMetricRanges();
  return schools.map(school => transformSchool(school, metricRanges));
};

// Create a mapping function that can be used to transform data on the fly
export const createDataTransformer = () => {
  const metricRanges = getMetricRanges();

  return {
    transformSchool: (school) => transformSchool(school, metricRanges),
    transformSchools: (schools) => schools.map(s => transformSchool(s, metricRanges)),
    normalizeZScore: (zScore, metricKey) => {
      const range = metricRanges[metricKey];
      if (!range) return null;
      return normalizeZScore(zScore, range.min, range.max);
    },
    getRange: (metricKey) => metricRanges[metricKey]
  };
};