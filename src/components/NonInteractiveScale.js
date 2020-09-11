import React from "react"
import clsx from "clsx"
import i18n from "@pureartisan/simple-i18n"

// import "./NonInteractiveScale.scss"
import { getRoundedValue, getMetric } from "./../templates/utils/utils"
import { CPAL_METRICS } from "./../data/map/metrics"

const NonInteractiveScale = ({
  metric,
  quintiles,
  colors,
  showHash,
  hashLeft,
  hashValue,
  showMean,
  meanLeft,
  meanValue,
  showMinMax,
  showLegend = false,
}) => {
  const metricData = getMetric(metric, CPAL_METRICS)
  const styles = [
    {
      backgroundColor: !!quintiles[0] ? colors[0] : "transparent",
    },
    {
      backgroundColor: !!quintiles[1] ? colors[1] : "transparent",
    },
    {
      backgroundColor: !!quintiles[2] ? colors[2] : "transparent",
    },
    {
      backgroundColor: !!quintiles[3] ? colors[3] : "transparent",
    },
    {
      backgroundColor: !!quintiles[4] ? colors[4] : "transparent",
    },
  ]
  const getLeftStyles = val => {
    return { left: val + "%" }
  }
  const minMaxStyle = {
    display: !!showMinMax ? "block" : "none",
  }
  return (
    <div
      className={clsx("n-i-scale", showLegend ? "show-legend" : null)}
      key={metric}
    >
      <div className="n-i-scale-parent">
        <div className="n-i-scale-linear">
          <div className="n-i-scale-line">
            {!!showMean ? (
              <div className="n-i-scale-mean" style={getLeftStyles(meanLeft)}>
                <div className="n-i-scale-mean-line"></div>
                <div className="n-i-scale-mean-value">{meanValue}</div>
                {!!showLegend && (
                  <div className="n-i-scale-mean-legend">
                    {i18n.translate(`SCHOOL_SCALE_MEAN`)}
                  </div>
                )}
              </div>
            ) : null}
            {!!showHash ? (
              <div className="n-i-scale-hash" style={getLeftStyles(hashLeft)}>
                {!!showLegend && (
                  <div className="n-i-scale-hash-legend">
                    <span>{i18n.translate("SCHOOL_SCALE_COMM")}</span>
                    <svg
                      width="5"
                      height="14"
                      viewBox="0 0 5 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 1L2.5 11"
                        stroke="#606B44"
                        stroke-width="0.5"
                      />
                      <path
                        d="M2.5 13.5L0.334936 9.75H4.66506L2.5 13.5Z"
                        fill="#606B44"
                      />
                    </svg>
                  </div>
                )}
                <div className="n-i-scale-hash-value">{hashValue}</div>
                <div className="n-i-scale-hash-dot"></div>
              </div>
            ) : null}
          </div>
          {!!showMinMax ? (
            <div className="n-i-scale-minmax" style={minMaxStyle}>
              <div className="n-i-scale-min">
                {!!metricData.high_is_good
                  ? getRoundedValue(
                      metricData.range[0],
                      metricData.decimals,
                      false,
                      !!metricData.is_currency,
                      !!metricData.as_percent
                    )
                  : getRoundedValue(
                      metricData.range[1],
                      metricData.decimals,
                      false,
                      !!metricData.is_currency,
                      !!metricData.as_percent
                    )}
              </div>
              <div className="n-i-scale-max">
                {!!metricData.high_is_good
                  ? getRoundedValue(
                      metricData.range[1],
                      metricData.decimals,
                      false,
                      !!metricData.is_currency,
                      !!metricData.as_percent
                    )
                  : getRoundedValue(
                      metricData.range[0],
                      metricData.decimals,
                      false,
                      !!metricData.is_currency,
                      !!metricData.as_percent
                    )}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        {!!showLegend && (
          <div className={`n-i-scale-quintiles-legend-label metric-${metric}`}>
            {quintiles.map((el, i) => {
              return (
                <div className={clsx("n-i-scale-quintile", "quintile-" + i)}>
                  {!!quintiles[i] && (
                    <>
                      <span>{i18n.translate(`SCHOOL_SCALE_COMM_REL`)}</span>
                      <svg
                        width="5"
                        height="14"
                        viewBox="0 0 5 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.5 1L2.5 11"
                          stroke="#606B44"
                          stroke-width="0.5"
                        />
                        <path
                          d="M2.5 13.5L0.334936 9.75H4.66506L2.5 13.5Z"
                          fill="#606B44"
                        />
                      </svg>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        )}
        <div className={`n-i-scale-quintiles metric-${metric}`}>
          {quintiles.map((el, i) => {
            return (
              <div
                className={clsx("n-i-scale-quintile", "quintile-" + i)}
                style={styles[i]}
              ></div>
            )
          })}
        </div>
        {!!showLegend && (
          <div className={`n-i-scale-quintiles-legend metric-${metric}`}>
            <div className="n-i-scale-quintile quintile-0">
              {i18n.translate(`SCHOOL_SCALE_WBA`)}
            </div>
            <div className="n-i-scale-quintile quintile-1">
              {i18n.translate(`SCHOOL_SCALE_BA`)}
            </div>
            <div className="n-i-scale-quintile quintile-2">
              {i18n.translate(`SCHOOL_SCALE_A`)}
            </div>
            <div className="n-i-scale-quintile quintile-3">
              {i18n.translate(`SCHOOL_SCALE_AA`)}
            </div>
            <div className="n-i-scale-quintile quintile-4">
              {i18n.translate(`SCHOOL_SCALE_WAA`)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NonInteractiveScale
