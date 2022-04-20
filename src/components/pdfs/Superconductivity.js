import React from "react";
import styles from "../Page_style.css";
import AllPages from "./AllPagesPDFViewer";
import phy_superconductivity from "./W_Superconductivity.pdf";
function Superconductivity() {
  return (
    <div className={styles.for_center}>
      <AllPages pdf={phy_superconductivity} />
    </div>
  );
}
export default Superconductivity;
