// import LANG from './en'
import { CRI_COLORS } from "./colors"
export const ROUTE_SET = [
  "view", // View, 'map' or 'feeder'
  "metric", // Metric ID to set for active metric.
  "quintiles", // quintiles that are active and inactive. Always length fo 5.
  "feeder", // TEA_ID of feeder that will be "locked" in feeder view.
  "school", // TEA_ID of a school that will be highlighted in feeder view.
  "layers", // To determine active layers, 'district_boundaries' and/or 'redlining'
  "lat", // Latitude
  "lng", // Longitude
  "zoom", // Zoom level
]

export const CPAL_FILTER_TABS = [
  {
    id: "com",
    title: "UI_MAP_METRIC_TITLE_COM",
    default_metric: "com/INDEX",
  },
  {
    id: "eco",
    title: "UI_MAP_METRIC_TITLE_ECO",
    default_metric: "eco/INDEX",
  },
  {
    id: "hel",
    title: "UI_MAP_METRIC_TITLE_HEL",
    default_metric: "hel/INDEX",
  },
  {
    id: "yth",
    title: "UI_MAP_METRIC_TITLE_YTH",
    default_metric: "yth/INDEX",
  },
  {
    id: "cri",
    title: "UI_MAP_METRIC_TITLE_CRI",
    default_metric: "cri/INDEX",
  }
]

export const CPAL_FEEDER_TIP_ITEMS = [
  {
    id: "com/INDEX",
    title: "UI_MAP_METRIC_TITLE_COM",
  },
  {
    id: "eco/INDEX",
    title: "UI_MAP_METRIC_TITLE_ECO",
  },
  {
    id: "hel/INDEX",
    title: "UI_MAP_METRIC_TITLE_HEL",
  },
  {
    id: "yth/INDEX",
    title: "UI_MAP_METRIC_TITLE_YTH",
  },
  {
    id: "cri/INDEX",
    title: "UI_MAP_METRIC_TITLE_CRI",
  }
]

export const CPAL_METRICS = [
  {
    id: "dem/poptot",
    title: "UI_MAP_METRIC_TITLE_DEM_POPTOT",
    abbrev: "",
    range: [10582, 445670],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "dem",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_DEM_POPTOT`,
    decimals: 0,
    as_percent: 0,
    mean: 201283.592592593,
    citation: "ACS 5yr Table B01001"
  },
  {
    id: "dem/undr18",
    title: "UI_MAP_METRIC_TITLE_DEM_UNDR18",
    abbrev: "",
    range: [3135, 93406],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "dem",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_DEM_UNDR18`,
    decimals: 0,
    as_percent: 0,
    mean: 47593.3086419753,
    citation: "ACS 5yr Table B09001"
  },
  {
    id: "dem/65over",
    title: "UI_MAP_METRIC_TITLE_DEM_65OVER",
    abbrev: "",
    range: [1179, 42293],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "dem",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_DEM_65OVER`,
    decimals: 0,
    as_percent: 0,
    mean: 22218.3004115226,
    citation: "ACS 5yr Table B09001"
  },
  {
    id: "dem/asian",
    title: "UI_MAP_METRIC_TITLE_DEM_ASIAN",
    abbrev: "",
    range: [0.000458779200704562, 0.231616959273681],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "dem",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_DEM_ASIAN`,
    decimals: 1,
    as_percent: 1,
    mean: 0.0271622914273142,
    citation: "ACS 5yr Table B02001"
  },
  {
    id: "dem/black",
    title: "UI_MAP_METRIC_TITLE_DEM_BLACK",
    abbrev: "",
    range: [0.0545134529204639, 0.615757092913036],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "dem",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_DEM_BLACK`,
    decimals: 1,
    as_percent: 1,
    mean: 0.234235891370768,
    citation: "ACS 5yr Table B02001"
  },
  {
    id: "dem/female",
    title: "UI_MAP_METRIC_TITLE_DEM_FEMALE",
    abbrev: "",
    range: [0.022322225194996, 0.0327466376878699],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "dem",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_DEM_FEMALE`,
    decimals: 1,
    as_percent: 1,
    mean: 0.0287585809057006,
    citation: "ACS 5yr Table B01001"
  },
  {
    id: "dem/hispan",
    title: "UI_MAP_METRIC_TITLE_DEM_HISPAN",
    abbrev: "",
    range: [0.174982443307002, 0.751210519181635],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "dem",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_DEM_HISPAN`,
    decimals: 1,
    as_percent: 1,
    mean: 0.459147306571634,
    citation: "ACS 5yr Table B03001"
  },
  {
    id: "dem/male",
    title: "UI_MAP_METRIC_TITLE_DEM_MALE",
    abbrev: "",
    range: [0.457590941780404, 0.536116471057391],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "dem",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_DEM_MALE`,
    decimals: 1,
    as_percent: 1,
    mean: 0.500587990297842,
    citation: "ACS 5yr Table B01001"
  },
  {
    id: "dem/white",
    title: "UI_MAP_METRIC_TITLE_DEM_WHITE",
    abbrev: "",
    range: [0.149790380128748, 0.658213873265249],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "dem",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_DEM_WHITE`,
    decimals: 1,
    as_percent: 1,
    mean: 0.415156429587444,
    citation: "ACS 5yr Table B02001"
  },
  {
    id: "com/comrec",
    title: "UI_MAP_METRIC_TITLE_COM_COMREC",
    abbrev: "",
    range: [0, 1.58805780530411],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "com",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_COM_COMREC`,
    decimals: 0,
    as_percent: 0,
    mean: 0.26430385196051,
    citation: "NCTCOG 2024"
  },
  {
    id: "com/evics",
    title: "UI_MAP_METRIC_TITLE_COM_EVICS",
    abbrev: "",
    range: [33.5052249597555, 218.671992011982],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "com",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_COM_EVICS`,
    decimals: 0,
    as_percent: 0,
    mean: 88.5682635208782,
    citation: "Dallas County Justice of the Peace Courts"
  },
  {
    id: "com/libs",
    title: "UI_MAP_METRIC_TITLE_COM_LIBS",
    abbrev: "",
    range: [0.126872157270726, 2.48262164846077],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "com",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_COM_LIBS`,
    decimals: 0,
    as_percent: 0,
    mean: 0.350782138673587,
    citation: "NCTCOG 2024"
  },
  {
    id: "com/urbhe",
    title: "UI_MAP_METRIC_TITLE_COM_URBHE",
    abbrev: "",
    range: [0.568019508796377, 2.62295527551273],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "com",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_COM_URBHE`,
    decimals: 0,
    as_percent: 0,
    mean: 1.76029706355504,
    citation: "Trust for Public Land Heat Effect Data"
  },
  {
    id: "com/vacbus",
    title: "UI_MAP_METRIC_TITLE_COM_VACBUS",
    abbrev: "",
    range: [0.0522452808267609, 0.177660370472044],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "com",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_COM_VACBUS`,
    decimals: 0,
    as_percent: 0,
    mean: 0.120450163567017,
    citation: "USPS HUD Vacancy Data 2024 Q2"
  },
  {
    id: "com/vacltb",
    title: "UI_MAP_METRIC_TITLE_COM_VACLTB",
    abbrev: "",
    range: [0.039013726684995, 0.14037923640339],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "com",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_COM_VACLTB`,
    decimals: 0,
    as_percent: 0,
    mean: 0.100802600771317,
    citation: "USPS HUD Vacancy Data Q2 2024"
  },
  {
    id: "com/vacltr",
    title: "UI_MAP_METRIC_TITLE_COM_VACLTR",
    abbrev: "",
    range: [0.0259672240751923, 0.540344270727202],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "com",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_COM_VACLTR`,
    decimals: 0,
    as_percent: 0,
    mean: 0.175879033020153,
    citation: "USPS HUD Vacancy Data Q2 2024"
  },
  {
    id: "com/vacres",
    title: "UI_MAP_METRIC_TITLE_COM_VACRES",
    abbrev: "",
    range: [0.00679635952010826, 0.0493894653738723],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "com",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_COM_VACRES`,
    decimals: 0,
    as_percent: 0,
    mean: 0.0257396827323618,
    citation: "USPS HUD Vacancy Data Q2 2024"
  },
  {
    id: "eco/joball",
    title: "UI_MAP_METRIC_TITLE_ECO_JOBALL",
    abbrev: "",
    range: [405.949073397014, 9545.91993124521],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "eco",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_ECO_JOBALL`,
    decimals: 0,
    as_percent: 0,
    mean: 3728.75408852239,
    citation: "Census On The Map 2022"
  },
  {
    id: "eco/lowjob",
    title: "UI_MAP_METRIC_TITLE_ECO_LOWJOB",
    abbrev: "",
    range: [0.0936902643787951, 0.192583841824418],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "eco",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_ECO_LOWJOB`,
    decimals: 0,
    as_percent: 0,
    mean: 0.136899987322143,
    citation: "Census On The Map 2022"
  },
  {
    id: "eco/midjob",
    title: "UI_MAP_METRIC_TITLE_ECO_MIDJOB",
    abbrev: "",
    range: [0.273833380874162, 0.561385567533017],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "eco",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_ECO_MIDJOB`,
    decimals: 0,
    as_percent: 0,
    mean: 0.423761521821436,
    citation: "Census On The Map 2022"
  },
  {
    id: "eco/owncb",
    title: "UI_MAP_METRIC_TITLE_ECO_OWNCB",
    abbrev: "",
    range: [0.197234038733102, 0.320858914144227],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "eco",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_ECO_OWNCB`,
    decimals: 0,
    as_percent: 0,
    mean: 0.259057305140382,
    citation: "ACS 5yr Table B25106"
  },
  {
    id: "eco/rentcb",
    title: "UI_MAP_METRIC_TITLE_ECO_RENTCB",
    abbrev: "",
    range: [0.401913211990086, 0.633143949162815],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "eco",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_ECO_RENTCB`,
    decimals: 0,
    as_percent: 0,
    mean: 0.48363233244211,
    citation: "ACS 5yr Table B25106"
  },
  {
    id: "hel/chkups",
    title: "UI_MAP_METRIC_TITLE_HEL_CHKUPS",
    abbrev: "",
    range: [68.6881583278239, 76.9436274142139],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "hel",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_HEL_CHKUPS`,
    decimals: 0,
    as_percent: 0,
    mean: 71.334481598926,
    citation: "CDC PLACES 2024"
  },
  {
    id: "hel/inscov",
    title: "UI_MAP_METRIC_TITLE_HEL_INSCOV",
    abbrev: "",
    range: [0.666950036450293, 0.882587739777156],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "hel",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_HEL_INSCOV`,
    decimals: 0,
    as_percent: 0,
    mean: 0.764418560950744,
    citation: "ACS 5yr Subject Table S2701"
  },
  {
    id: "hel/insrat",
    title: "UI_MAP_METRIC_TITLE_HEL_INSRAT",
    abbrev: "",
    range: [0.752054925145418, 4.32339331619537],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "hel",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_HEL_INSRAT`,
    decimals: 0,
    as_percent: 0,
    mean: 1.94063537638977,
    citation: "ACS 5yr Subject Tables S2703 and S2704"
  },
  {
    id: "hel/pharma",
    title: "UI_MAP_METRIC_TITLE_HEL_PHARMA",
    abbrev: "",
    range: [0.480954213158907, 27.526335291938],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "hel",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_HEL_PHARMA`,
    decimals: 0,
    as_percent: 0,
    mean: 2.81541646646059,
    citation: "Texas State Board of Pharmacy 2024"
  },
  {
    id: "hel/sleep",
    title: "UI_MAP_METRIC_TITLE_HEL_SLEEP",
    abbrev: "",
    range: [29.597039647055, 43.3111183572531],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "hel",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_HEL_SLEEP`,
    decimals: 0,
    as_percent: 0,
    mean: 36.1938471070009,
    citation: "CDC PLACES 2024"
  },
  {
    id: "yth/broad",
    title: "UI_MAP_METRIC_TITLE_YTH_BROAD",
    abbrev: "",
    range: [0.0218904221013307, 0.201612353266594],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "yth",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_YTH_BROAD`,
    decimals: 0,
    as_percent: 0,
    mean: 0.096203555221695,
    citation: "ACS 5yr Table B28005"
  },
  {
    id: "yth/aftscl",
    title: "UI_MAP_METRIC_TITLE_YTH_AFTSCL",
    abbrev: "",
    range: [0, 24.8795722830978],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "yth",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_YTH_AFTSCL`,
    decimals: 0,
    as_percent: 0,
    mean: 4.03201856578628,
    citation: "Dallas Afterschool Programs January 2022"
  },
  {
    id: "yth/cccafd",
    title: "UI_MAP_METRIC_TITLE_YTH_CCCAFD",
    abbrev: "",
    range: [4.72143531633617, 47.0759524387285],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "yth",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_YTH_CCCAFD`,
    decimals: 0,
    as_percent: 0,
    mean: 17.6624238779443,
    citation: "Texas Department of Family and Protective Services 2024"
  },
  {
    id: "yth/cccall",
    title: "UI_MAP_METRIC_TITLE_YTH_CCCALL",
    abbrev: "",
    range: [10.7263564793265, 57.2676534821645],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "yth",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_YTH_CCCALL`,
    decimals: 0,
    as_percent: 0,
    mean: 29.8036962752695,
    citation: "Texas Department of Family and Protective Services 2024"
  },
  {
    id: "yth/ecseat",
    title: "UI_MAP_METRIC_TITLE_YTH_ECSEAT",
    abbrev: "",
    range: [0.0467720685111989, 0.518077147081224],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "yth",
    tab_level: 1,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_YTH_ECSEAT`,
    decimals: 0,
    as_percent: 0,
    mean: 0.268752757527654,
    citation: "Texas Department of Family and Protective Services 2024"
  },
  {
    id: "com/INDEX",
    title: "UI_MAP_METRIC_TITLE_COM_INDEX",
    abbrev: "",
    range: [-1.95125534281779, 4.29674505559042],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "com",
    tab_level: 0,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_COM_INDEX`,
    decimals: 0,
    as_percent: 0,
    mean: 0.00306681596049848,
    citation: "Texas Department of Family and Protective Services 2024"
  },
  {
    id: "eco/INDEX",
    title: "UI_MAP_METRIC_TITLE_ECO_INDEX",
    abbrev: "",
    range: [-3.94333251135249, 3.55450225241591],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "eco",
    tab_level: 0,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_ECO_INDEX`,
    decimals: 0,
    as_percent: 0,
    mean: 0.00505660671863054,
    citation: "Texas Department of Family and Protective Services 2024"
  },
  {
    id: "hel/INDEX",
    title: "UI_MAP_METRIC_TITLE_HEL_INDEX",
    abbrev: "",
    range: [-4.085701107977, 7.25160252660173],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "hel",
    tab_level: 0,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_HEL_INDEX`,
    decimals: 0,
    as_percent: 0,
    mean: 0.00843739008598326,
    citation: "Texas Department of Family and Protective Services 2024"
  },
  {
    id: "yth/INDEX",
    title: "UI_MAP_METRIC_TITLE_YTH_INDEX",
    abbrev: "",
    range: [-2.87332492399244, 4.96635428272799],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "yth",
    tab_level: 0,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_YTH_INDEX`,
    decimals: 0,
    as_percent: 0,
    mean: 0.0149152077192188,
    citation: "Texas Department of Family and Protective Services 2024"
  },
  {
    id: "cri/INDEX",
    title: "UI_MAP_METRIC_TITLE_CRI_INDEX",
    abbrev: "",
    range: [-5.75718734259168, 8.79027718632362],
    high_is_good: 1,
    colors: CRI_COLORS,
    tab: "cri",
    tab_level: 0,
    tooltip: 1,
    desc: `UI_MAP_METRIC_DESC_CRI_INDEX`,
    decimals: 0,
    as_percent: 0,
    mean: 0.013115401685334,
    citation: "Texas Department of Family and Protective Services 2024"
  }
]

// [
//   {
//     "id": "1",
//     "title": "Adams"
//   },
//   {
//     "id": "2",
//     "title": "Adamson"
//   },
//   {
//     "id": "23",
//     "title": "Carter"
//   },
//   {
//     "id": "28",
//     "title": "Conrad"
//   },
//   {
//     "id": "6",
//     "title": "Hillcrest"
//   },
//   {
//     "id": "7",
//     "title": "Jefferson"
//   },
//   {
//     "id": "8",
//     "title": "Kimball"
//   },
//   {
//     "id": "9",
//     "title": "Lincoln"
//   },
//   {
//     "id": "32",
//     "title": "Madison"
//   },
//   {
//     "id": "5",
//     "title": "Molina"
//   },
//   {
//     "id": "24",
//     "title": "North Dallas"
//   },
//   {
//     "id": "12",
//     "title": "Pinkston"
//   },
//   {
//     "id": "13",
//     "title": "Roosevelt"
//   },
//   {
//     "id": "14",
//     "title": "Samuell"
//   },
//   {
//     "id": "15",
//     "title": "Seagoville"
//   },
//   {
//     "id": "25",
//     "title": "Skyline"
//   },
//   {
//     "id": "16",
//     "title": "South Oak Cliff"
//   },
//   {
//     "id": "17",
//     "title": "Spruce"
//   },
//   {
//     "id": "18",
//     "title": "Sunset"
//   },
//   {
//     "id": "21",
//     "title": "White"
//   },
//   {
//     "id": "380",
//     "title": "Wilmer-Hutchins"
//   },
//   {
//     "id": "22",
//     "title": "Wilson"
//   }
// ]
