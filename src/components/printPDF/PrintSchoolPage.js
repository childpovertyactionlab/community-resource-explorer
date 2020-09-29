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
    rect: true,
    rectFill: "#fcfcf8",
    rectX: 0,
    rectY: 0,
    rectHeight: 10,
  },
  {
    selector: ".demographics.row",
    page: 1,
    x: 0,
    y: 130,
    rect: true,
    rectFill: "#000",
    rectX: 50,
    rectY: 50,
    rectHeight: 20,
    rectWidth: 20,
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
    rectFill: "#fcfcf8",
    rectX: 0,
    rectY: 215,
    rectHeight: 70,
  },
  {
    selector: ".row-metric-comm",
    page: 7,
    x: 0,
    y: -200,
    rect: true,
    rectFill: "#fcfcf8",
    rectX: 0,
    rectY: 0,
    rectHeight: 20,
  },
  {
    selector: ".row-metric-hel",
    page: 8,
    x: 0,
    y: 0,
    rect: true,
    rectFill: "#fff",
    rectX: 0,
    rectY: 215,
    rectHeight: 70,
  },
  {
    selector: ".row-metric-hel",
    page: 9,
    x: 0,
    y: -200,
    rect: true,
    rectFill: "#fff",
    rectX: 0,
    rectY: 0,
    rectHeight: 20,
  },
  {
    selector: ".row-print-only",
    page: 9,
    x: 0,
    y: 60,
  },
]

const PrintSchoolPage = ({ ...props }) => {
  // Inserts a page element using an item from the array.
  const insertPageElement = (pdf, i, filename) => {
    console.log("insertPageElement, ", i)
    const el = pageElements[i]
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
        pdf.setFillColor(el.rectFill)
        pdf.rect(
          el.rectX,
          el.rectY,
          el.rectWidth ? el.rectWidth : pageWidth,
          el.rectHeight,
          "F"
        )
      }
      if (i === pageElements.length - 1) {
        console.log("Last one.")
        pdf.save(filename + ".pdf")
        printTakedown()
      } else {
        insertPageElement(pdf, i + 1, filename)
      }
    })
  }

  const printSetup = () => {
    const logosRow = document
      .querySelectorAll(".row-print-only")
      .forEach(el => {
        el.setAttribute("style", "visibility:visible;height:18rem;")
      })
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
    const logosRow = document
      .querySelectorAll(".row-print-only")
      .forEach(el => {
        el.setAttribute("style", "visibility:hidden;")
      })
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

    printSetup()
    // pageElements.forEach((el, i) => {
    //   console.log("forEach, el = ", el)
    //   if (i === pageElements.length - 1) {
    //     setTimeout(() => {
    //       console.log("Calling save.")
    //       pdf.save(filename + ".pdf")
    //       // printTakedown()
    //     }, 6000)
    //   }
    //   insertPageElement(pdf, 0)
    // })
    insertPageElement(pdf, 0, filename)
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
