import React from "react";
import IconPopup from "../src";
export default function App() {
  return (
    <>
      <div style={{ padding: "20px" }}>
        <IconPopup
          popupTriggerer={<span>Popup Opener</span>}
          popupContent={
            <div
              onClick={() => {
                alert("popup clicked");
              }}
            >
              This is inside the Popup
            </div>
          }
          onPopupTrigger={(...args) => {
            console.log(args);
          }}
          popupWidthInPx={300}
        />
      </div>
      <div style={{ padding: "20px", float: "right" }}>
        <IconPopup
          popupTriggerer={<span>Right Sided</span>}
          popupContent={
            <div
              onClick={() => {
                alert("popup clicked");
              }}
            >
              This is inside the Popup
            </div>
          }
          onPopupTrigger={(...args) => {
            console.log(args);
          }}
          popupWidthInPx={500}
        />
      </div>
    </>
  );
}
