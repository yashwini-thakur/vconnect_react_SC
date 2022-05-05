import React from "react";
import AllPages from "./AllPagesPDFViewer";
import test from "./W_Superconductivity.pdf";
function Superconductivity() {
  console.log(test);
  return (
    <div>
      <AllPages pdf={test} />
    </div>
  );
}
export default Superconductivity;
