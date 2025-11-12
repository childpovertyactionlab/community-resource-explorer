"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _echartsForReact = _interopRequireDefault(require("echarts-for-react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _simpleI18n = _interopRequireDefault(require("@pureartisan/simple-i18n"));

var _echarts = _interopRequireDefault(require("echarts/lib/echarts"));

var _metrics = require("./../../../../constants/metrics");

var _colors = require("./../../../../constants/colors");

var _schools = require("./../../../../data/schools");

var _store = _interopRequireDefault(require("./../store"));

var _utils = require("./../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FeederSchoolsChart = function FeederSchoolsChart(_ref) {
  var props = _extends({}, _ref);

  // Check loaded state
  var _useState = (0, _react.useState)(false),
      isLoaded = _useState[0],
      setIsLoaded = _useState[1]; // Default metric for color scheme


  var defaultMetric = (0, _store.default)(function (state) {
    return state.defaultMetric;
  }); // Currently active feeder

  var activeFeeder = (0, _store.default)(function (state) {
    return state.activeFeeder;
  });
  var feederSchools = (0, _store.default)(function (state) {
    return state.feederSchools;
  }); // Currently highlighted school in this chart, if there is one

  var highlightedSchool = (0, _store.default)(function (state) {
    return state.highlightedSchool;
  }); // Current breakpoint.

  var breakpoint = (0, _store.default)(function (state) {
    return state.breakpoint;
  });
  /**
   * Gets the count of items with a shared y-value (in node with an array containing [x,y])
   * @param  Number val         Y value
   * @param  Array schoolsData Array of objects
   * @return Number            Length of assembled array
   */

  var getCountOfSameYValue = function getCountOfSameYValue(val, schoolsData) {
    var objs = schoolsData.filter(function (el) {
      return el.value[0] === val;
    });
    return objs.length;
  };
  /**
   * Builds schools data to feed into scatterplot
   * @return Array Array of objects
   */


  var getSchoolsData = function getSchoolsData() {
    var schoolsData = [];

    _schools.schools.forEach(function (el) {
      // const school = schools.find(item => {
      //   return item.TEA === el.TEA
      // })
      // if (!school) return
      var x = (0, _utils.getRoundedValue)(el.cri_weight, 0);
      var y = getCountOfSameYValue(x, schoolsData);
      schoolsData.push({
        name: el.TEA + ',' + el.HIGH_SLN,
        label: el.SCHOOLNAME,
        value: [x, y],
        sd: el.cri_weight_sd
      });
    });

    return schoolsData;
  };
  /**
   * Gets label for the feeder
   * @param  String tea TEA id for school
   * @return String     Label for the feeder
   */


  var getFeederLabel = function getFeederLabel(tea) {
    var school = _schools.schools.find(function (item) {
      return item.TEA === Number(tea);
    });

    return school.Feeder;
  };
  /**
   * Splits string with school and feeder sln and returns feeder sln
   * @param  String str [description]
   * @return String   [description]
   */


  var getFeederSLN = function getFeederSLN(str) {
    var arr = String(str).split(',');
    return arr[1];
  };
  /**
   * Splits string with school and feeder sln and returns school sln
   * @param  String str
   * @return String
   */


  var getSchoolSLN = function getSchoolSLN(str) {
    var arr = String(str).split(',');
    return arr[0];
  };

  var getGridEdge = function getGridEdge() {
    // Set height differently depending upon the
    var val = '89';

    if (breakpoint === 'md') {
      val = '89';
    }

    if (breakpoint === 'sm') {
      val = '30';
    }

    if (breakpoint === 'xs') {
      val = '10';
    }

    return val;
  };

  var getSchoolsOptions = function getSchoolsOptions() {
    var options = {
      title: {
        show: false,
        text: _simpleI18n.default.translate('UI_FEEDER_TITLE_SCHOOLS_CHART'),
        textStyle: {
          fontFamily: 'halyard-text',
          fontSize: 18
        },
        top: 20,
        left: '5%'
      },
      grid: {
        show: false,
        left: getGridEdge(),
        right: getGridEdge() // bottom: 30,
        // top: 60,

      },
      // title: i18n.translate('UI_FEEDER_SCHOOL_CHART_DESC'),
      aria: {
        show: true,
        description: _simpleI18n.default.translate('UI_FEEDER_SCHOOL_CHART_DESC')
      },
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove|click'
      },
      yAxis: {
        show: false,
        inverse: false,
        min: 0,
        max: 8
      },
      xAxis: {
        show: true,
        position: 'right',
        nameLocation: 'middle',
        min: -5.75718734259168,
        max: 8.79027718632362,
        nameGap: 0,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      },
      emphasis: {
        itemStyle: {
          color: '#d0421b',
          opacity: 1,
          borderColor: '#fff'
        }
      },
      series: [{
        type: 'scatter',
        symbol: 'roundRect',
        data: getSchoolsData(),
        name: _simpleI18n.default.translate('UI_FEEDER_SCHOOL_CHART_DESC'),
        symbolSize: function symbolSize(val, params) {
          // Set symbol size differently based on breakpoint.
          var arr;

          if (breakpoint === 'xl') {
            arr = [11, 11];
          }

          if (breakpoint === 'lg') {
            arr = [8, 8];
          }

          if (breakpoint === 'md') {
            arr = [6, 6];
          }

          if (breakpoint === 'sm') {
            arr = [4, 4];
          }

          if (breakpoint === 'xs') {
            arr = [2, 2];
          }

          return arr;
        },
        itemStyle: {
          color: function color(params) {
            // console.log('coloring, params are ', params)
            // If it's highlighted, return that, else check for feeder.
            if (Number(getSchoolSLN(params.data.name)) === Number(highlightedSchool)) {
              return _colors.FEEDER_HIGHLIGHTED_SCHOOL;
            } else if (Number(getFeederSLN(params.data.name)) === Number(activeFeeder)) {
              return _colors.FEEDER_SCHOOL_COLLECTION;
            } else {
              return (0, _utils.getMetric)(defaultMetric, _metrics.CPAL_METRICS).colors[params.data.sd];
            }
          },
          opacity: function opacity(params) {
            return Number(getFeederSLN(params.data.name)) === Number(activeFeeder) ? 1 : 1;
          }
        },
        clip: false,
        hoverAnimation: true,
        animation: false,
        tooltip: {
          formatter: function formatter(params) {
            // console.log('tooltip params, ', params)
            return '<div class="school-tip">' + '<p>' + params.data.label + '<br>' + getFeederLabel(getFeederSLN(params.data.name)) + ' ' + (0, _utils.toTitleCase)(_simpleI18n.default.translate('TERM_PLURAL', {
              term: _simpleI18n.default.translate('TERM_SCHOOL')
            })) + '</p>' + '</div>';
          },
          padding: [16, 16, 8, 16],
          backgroundColor: '#fff',
          textStyle: {
            color: '#000',
            fontWeight: 300,
            fontSize: 14,
            lineHeight: 14
          },
          extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);border-radius:0;'
        }
      }]
    };
    return options;
  };

  var chartOptions = (0, _react.useMemo)(function () {
    return getSchoolsOptions();
  }, [highlightedSchool, activeFeeder, breakpoint]); // Events

  var schoolChartReady = function schoolChartReady(e) {
    // console.log('school chart ready')
    setIsLoaded(true);
  };

  var onSchoolMouseover = function onSchoolMouseover(e) {// console.log('onSchoolMouseover() ', e)
  };

  var onSchoolMouseout = function onSchoolMouseout(e) {// console.log('onSchoolMouseout() ', e)
  };

  var onSchoolClick = function onSchoolClick(e) {// console.log('onSchoolClick() ', e)
  };

  var schoolsEvents = {
    mouseover: onSchoolMouseover,
    mouseout: onSchoolMouseout,
    click: onSchoolClick
  };

  var getHeight = function getHeight() {
    // Set height differently depending upon the
    var height = '240px';

    if (breakpoint === 'md') {
      height = '200px';
    }

    if (breakpoint === 'sm') {
      height = '180px';
    }

    if (breakpoint === 'xs') {
      height = '200px';
    }

    return height;
  };

  return /*#__PURE__*/_react.default.createElement(_echartsForReact.default, _extends({
    onEvents: schoolsEvents,
    onChartReady: schoolChartReady,
    className: (0, _clsx.default)('chart-schools'),
    style: {
      height: getHeight(),
      width: '100%',
      left: '0',
      bottom: '0'
    },
    option: chartOptions,
    notMerge: false,
    lazyUpdate: false,
    silent: false,
    theme: 'theme_schools'
  }, props));
};

var _default = FeederSchoolsChart;
exports.default = _default;
module.exports = exports.default;