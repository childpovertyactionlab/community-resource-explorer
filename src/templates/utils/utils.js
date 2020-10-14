import i18n from "@pureartisan/simple-i18n"

/**
 * Converts string to title case
 * @param  String str String input
 * @return String
 */
export const toTitleCase = str => {
  str = str.toLowerCase().split(" ")
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
  }
  return str.join(" ")
}

/**
 * Returns a value rounded to the indicated number of decimals
 * @param  String value     Number or string, value passed to function
 * @param  Number decimals  Number of decimals to round to
 * @param  Boolan padZeroes If true, pad with extra zeroes to fill empty decimal spots
 * @return Number
 */
export const getRoundedValue = (
  value,
  decimals,
  padZeroes = false,
  isCurrency = false,
  isPercent = false
) => {
  const type = typeof value
  if (!!isPercent) {
    value = value * 100
  }
  let fixed = null
  if (type === "string") {
    if (padZeroes) {
      fixed = parseFloat(value)
        .toFixed(decimals)
        .toLocaleString()
    } else {
      fixed = +parseFloat(value)
        .toFixed(decimals)
        .toLocaleString()
    }
  } else {
    if (padZeroes) {
      fixed = Number(value.toFixed(decimals)).toLocaleString()
    } else {
      fixed = Number(value.toFixed(decimals)).toLocaleString()
    }
  }
  if (!!isCurrency) {
    fixed = "$" + fixed
  }
  if (!!isPercent) {
    fixed = fixed + "%"
  }

  return fixed
}

/**
 * Returns boolean if quintile is within active quintiles
 * @param  {[type]}  quintile        [description]
 * @param  {[type]}  activeQuintiles [description]
 * @return {Boolean}                 [description]
 */
export const isInActiveQuintile = (quintile, activeQuintiles) => {
  return true
}

/**
 * Returns an index value for the quintile, 0 for far left, 4 for far right
 * @type {[type]}
 */
export const getQuintile = (value, min, max, high_is_good = 1) => {
  // console.log('getQuintile()')
  const standardized = (Math.abs(value - min) / Math.abs(max - min)) * 100
  switch (true) {
    case standardized >= 80:
      return high_is_good ? 4 : 0
    case standardized < 80 && standardized >= 60:
      return high_is_good ? 3 : 1
    case standardized < 60 && standardized >= 40:
      return 2
    case standardized < 40 && standardized >= 20:
      return high_is_good ? 1 : 3
    case standardized < 20 && standardized >= 0:
      return high_is_good ? 0 : 4
    default:
      return 0
  }
}

/**
 * Calculates hash position (percent from left/0 based on min/max)
 * @param  Number value Value of metric
 * @param  Number min   Minimum of range for metric
 * @param  Number max   Maximum of range for metric
 * @return {[type]}       [description]
 */
export const getHashLeft = (value, min, max, high_is_good = true) => {
  if (!!high_is_good) {
    return ((value - min) / (max - min)) * 100
  } else {
    return 100 - ((value - min) / (max - min)) * 100
  }
}

/**
 * Filters an array of metrics, returns an object of metric data
 * @param  String metric string for metric
 * @return {[type]}        [description]
 */
export const getMetric = (metric, metrics) => {
  // console.log('getMetric, ', metric)
  const metricData = metrics.find(m => {
    return m.id === metric
  })
  if (!!metricData) {
    return metricData
  } else {
    console.error(`Unable to get metric ${metric}.`)
  }
}

export const getQuintilesPhrase = quintiles => {
  if (
    !!quintiles[0] &&
    !!quintiles[1] &&
    !!quintiles[2] &&
    !!quintiles[3] &&
    !!quintiles[4]
  ) {
    // all true, return
    return i18n.translate("ALL_FIVE") + " " + i18n.translate("QUINTILES")
  } else {
    let count = 0
    let last = 0
    for (let i = 1; i < quintiles.length; i++) {
      if (!!quintiles[i]) {
        last = i
        count++
      }
    }
    if (count === 0) {
      // No quintiles active
      return i18n.translate("NO") + " " + i18n.translate("QUINTILES")
    }
    if (count === 1) {
      // 1 quintiles active
      return (
        i18n.translate(getQuintileDesc(last)) + " " + i18n.translate("QUINTILE")
      )
    }
    let phrase = []
    quintiles.forEach((el, i) => {
      if (!!el) {
        phrase.push(i18n.translate(getQuintileDesc(i)))
      }
    })
    if (count === 2) {
      // 2 quintiles active
      // console.log('count is 2')
      phrase[phrase.length - 1] =
        i18n.translate("AND") + " " + phrase[phrase.length - 1]
      phrase.push(i18n.translate("QUINTILES"))
      phrase.join()
      phrase = String(phrase).replace(/,/g, " ")

      return phrase
    } else {
      phrase[phrase.length - 1] =
        i18n.translate("AND") + " " + phrase[phrase.length - 1]
      phrase.join(",")
      phrase = String(phrase).replace(/,/g, ", ")
      phrase = phrase + " " + i18n.translate("QUINTILES")

      return phrase
    }
  }
}

/**
 * Returns string placeholder based on quintile provided
 * @param  Number quintile Quintile 0 - 4
 * @return String          String referncing translation file constant
 */
export const getQuintileDesc = quintile => {
  switch (true) {
    case quintile === 0: {
      return "FIRST"
    }
    case quintile === 1: {
      return "SECOND"
    }
    case quintile === 2: {
      return "THIRD"
    }
    case quintile === 3: {
      return "FOURTH"
    }
    case quintile === 4: {
      return "FIFTH"
    }
    default: {
      return "FIRST"
    }
  }
}

export const getFeederAverage = (metric, schoolSet) => {
  // Get all the schools that are in that
  // console.log('getFeederAverage, ', schoolSet)
  const values = []
  schoolSet.forEach(el => {
    values.push(el[metric])
  })
  let total = 0
  values.forEach(v => (total = total + v))
  return total / values.length
}

export const getPercent = (portion, total) => {
  // console.log("getPercent, ", (portion / total) * 100)
  return (portion / total) * 100
}
