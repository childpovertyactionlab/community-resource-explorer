import React from "react"
import i18n from "@pureartisan/simple-i18n"
import { Button } from "react-bootstrap"
import { jsPDF } from "jspdf"
import html2canvas from "html2canvas"

const pageElements = [
  {
    selector: "#hero",
    page: 1,
    x: 0,
    y: 0,
  },
  {
    selector: ".demographics.row",
    page: 1,
    x: 0,
    y: 130,
  },
  {
    selector: ".school-metadata.custom-feeder-prose.row",
    page: 2,
    x: 0,
    y: 0,
  },
  {
    selector: ".row-metric-econ",
    page: 3,
    x: 0,
    y: 0,
  },
  {
    selector: ".row-metric-edu",
    page: 4,
    x: 0,
    y: 0,
  },
  {
    selector: ".row-metric-fam",
    page: 5,
    x: 0,
    y: 0,
  },
  {
    selector: ".row-metric-comm",
    page: 6,
    x: 0,
    y: 0,
    rect: true,
    rectX: 0,
    rectY: 235,
    rectHeight: 50,
  },
  {
    selector: ".row-metric-comm",
    page: 7,
    x: 0,
    y: -200,
    rect: true,
    rectX: 0,
    rectY: 0,
    rectHeight: 40,
  },
  {
    selector: ".row-metric-hel",
    page: 8,
    x: 0,
    y: 0,
    rect: true,
    rectX: 0,
    rectY: 235,
    rectHeight: 50,
  },
  {
    selector: ".row-metric-hel",
    page: 9,
    x: 0,
    y: -200,
    rect: true,
    rectX: 0,
    rectY: 0,
    rectHeight: 40,
  },
  {
    selector: ".row-print-only",
    page: 9,
    x: 0,
    y: 150,
  },
]

const PrintSchoolPage = ({ ...props }) => {
  const insertPageElement = (pdf, el) => {
    const node = document.querySelector(el.selector)
    html2canvas(node).then(canvas => {
      console.log("Adding node, ", el)
      const imgData = canvas.toDataURL("image/jpeg")
      const imageWidth = canvas.width
      const imageHeight = canvas.height
      const pageWidth = pdf.internal.pageSize.getWidth()
      const ratio = pageWidth / imageWidth
      pdf.setPage(el.page)
      pdf.addImage(
        imgData,
        "JPEG",
        el.x,
        el.y,
        imageWidth * ratio,
        imageHeight * ratio
      )
      if (el.rect) {
        pdf.setFillColor(0, 0, 0)
        pdf.rect(el.rectX, el.rectY, pageWidth, el.rectHeight, "F")
      }

      return true
    })
  }

  const printSetup = () => {
    // const logosRow = document
    //   .querySelectorAll(".row-print-only")
    //   .forEach(el => {
    //     el.setAttribute("style", "visibilty:visible;")
    //   })
    // const hideElements = document
    //   .querySelectorAll(
    //     ".print-school-page, .branding-md-up, .menu-component, .link-mean-info-button"
    //   )
    //   .forEach(el => el.setAttribute("style", "display:none !important;"))
    // const catRows = document
    //   .querySelectorAll(".row, .school-hero")
    //   .forEach(el => el.setAttribute("style", "background-color:transparent;"))
  }

  const printTakedown = () => {
    // const logosRow = document
    //   .querySelectorAll(".row-print-only")
    //   .forEach(el => {
    //     el.setAttribute("style", "visibilty:hidden;")
    //   })
    // const hideElements = document
    //   .querySelectorAll(
    //     ".print-school-page, .branding-md-up, .menu-component, .link-mean-info-button"
    //   )
    //   .forEach(el => el.setAttribute("style", ""))
    // const catRows = document
    //   .querySelectorAll(".row, .school-hero")
    //   .forEach(el => el.setAttribute("style", ""))
  }

  const buildPDF = () => {
    // console.log("build pdf")
    const filename = String(props.school.SCHOOLNAME)
      .toLowerCase()
      .replace(/ /g, "-")

    // Start building a new PDF.
    const pdf = new jsPDF("p", "mm", "letter")
    for (var i = 0; i <= 7; i++) {
      pdf.addPage("letter", "p")
    }

    // printSetup()
    pageElements.forEach((el, i) => {
      console.log("forEach, el = ", el)
      if (i === pageElements.length - 1) {
        setTimeout(() => {
          console.log("Calling save.")
          pdf.save(filename + ".pdf")
          // printTakedown()
        }, 6000)
      }
      return insertPageElement(pdf, el)
    })
  }

  const printPage = () => {
    if (window) {
      buildPDF()
      const trackingData = {
        event_category: "School View",
        event_action: "Print school view",
        event_label: props.school.SCHOOLNAME,
        value: props.school.SLN,
      }
      // if (typeof window !== "undefined") {
      //   window.gtag("event", "print", { ...trackingData })
      // }
    }
  }
  return (
    <Button
      aria-label={i18n.translate("SCHOOL_BUTTON_PRINT")}
      color="none"
      onClick={printPage}
      className="print-school-page"
    >
      {i18n.translate("SCHOOL_BUTTON_PRINT")}
    </Button>
  )
}

export default PrintSchoolPage
