import React from "react"
import i18n from "@pureartisan/simple-i18n"
import { Button } from "react-bootstrap"
import { jsPDF } from "jspdf"

const PrintSchoolPage = ({ ...props }) => {
  const buildPDF = () => {
    const doc = new jsPDF()

    // const myFont = ... // load the *.ttf font file as binary string
    //
    // // add the font to jsPDF
    // doc.addFileToVFS("MyFont.ttf", myFont);
    // doc.addFont("MyFont.ttf", "MyFont", "normal");
    doc.html(document.body, {
      callback: function(doc) {
        doc.save()
      },
      x: 10,
      y: 10,
    })
  }

  const printPage = () => {
    if (window) {
      const trackingData = {
        event_category: "School View",
        event_action: "Print school view",
        event_label: props.school.SCHOOLNAME,
        value: props.school.SLN,
      }
      if (typeof window !== "undefined") {
        window.print()
        window.gtag("event", "print", { ...trackingData })
      }
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
