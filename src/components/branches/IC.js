import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

function IC() {
  const [activeId, setActiveId] = useState("0");

  const toggleActive = (id) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  };
  return (
    <div>
      <Accordion defaultActiveKey={activeId}>
        <div
          className={
            activeId === "0" ? "panel-wrap active-panel" : "panel-wrap"
          }
        >
          <div className="panel-header">
            <Accordion.Toggle
              onClick={() => toggleActive("0")}
              className="panel-toggle"
              variant="link"
              eventKey="0"
            >
              Panel 1
            </Accordion.Toggle>
          </div>

          <Accordion.Collapse eventKey="0">
            <div className="panel-body">Body content for panel 1</div>
          </Accordion.Collapse>
        </div>

        <div
          className={
            activeId === "1" ? "panel-wrap active-panel" : "panel-wrap"
          }
        >
          <div className="panel-header">
            <Accordion.Toggle
              onClick={() => toggleActive("1")}
              className="panel-toggle"
              variant="link"
              eventKey="1"
            >
              Panel 2
            </Accordion.Toggle>
          </div>

          <Accordion.Collapse eventKey="1">
            <div className="panel-body">Body content for panel 2</div>
          </Accordion.Collapse>
        </div>
      </Accordion>
    </div>
  );
}
export default IC;
