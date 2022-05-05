import { React } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Page from "./components/Page";
import "./components/Page_style.css";
import Cards from "./components/Cards";
//from here importing all branches
import Computer from "./components/branches/Computer";
import EC from "./components/branches/EC";
import IC from "./components/branches/IC";
import Automobile from "./components/branches/Automobile";
import Mechanical from "./components/branches/Mechanical";
import Civil from "./components/branches/Civil";
import IT from "./components/branches/IT";
import ICT from "./components/branches/ICT";
import Chemical from "./components/branches/Chemical";
// import Route from "./protectedRoute";
//from here importing all semesters for EC;
import Sem1_2 from "./components/EC_semesters/Sem1&2";
import Sem3 from "./components/EC_semesters/Sem3";
import Sem4 from "./components/EC_semesters/Sem4";
import Sem5 from "./components/EC_semesters/Sem5";
import Sem6 from "./components/EC_semesters/Sem6";
import Sem7 from "./components/EC_semesters/Sem7";
import Sem8 from "./components/EC_semesters/Sem8";
//importing navbar and footer
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//importing all the subjects of EC
//following is sem 1 and 2
import Sem1_2_BE from "./components/subjects_ec/Sem1_2_BE";
import Sem1_2_Phy from "./components/subjects_ec/Sem1_2_Phy";
import Sem1_2_BEE from "./components/subjects_ec/Sem1_2_BEE";
import Sem1_2_BME from "./components/subjects_ec/Sem1_2_BME";
import Sem1_2_EGD from "./components/subjects_ec/Sem1_2_EGD";
import Sem1_2_English from "./components/subjects_ec/Sem1_2_English";
import Sem1_2_ES from "./components/subjects_ec/Sem1_2_ES";
import Sem1_2_Math1 from "./components/subjects_ec/Sem1_2_Math1";
import Sem1_2_Math2 from "./components/subjects_ec/Sem1_2_Math2";
import Sem1_2_PPS from "./components/subjects_ec/Sem1_2_PPS";
//importing all subjects of EC of sem 3
import Sem3_CS from "./components/subjects_ec/Sem3_CS";
import Sem3_DSD from "./components/subjects_ec/Sem3_DSD";
import Sem3_ETC from "./components/subjects_ec/Sem3_ETC";
import Sem3_IC from "./components/subjects_ec/Sem3_IC";
import Sem3_NT from "./components/subjects_ec/Sem3_NT";
import Sem3_PS from "./components/subjects_ec/Sem3_PS";
//importing all subjects of EC of Sem 4
import Sem4_ACD from "./components/subjects_ec/Sem4_ACD";
import Sem4_ET from "./components/subjects_ec/Sem4_ET";
import Sem4_MM from "./components/subjects_ec/Sem4_MM";
import Sem4_PE from "./components/subjects_ec/Sem4_PE";
import Sem4_SS from "./components/subjects_ec/Sem4_SS";
//importing all subjects of EC of Sem 5
import Sem5_ADC from "./components/subjects_ec/Sem5_ADC";
import Sem5_PE from "./components/subjects_ec/Sem5_PE";
import Sem5_POM from "./components/subjects_ec/Sem5_POM";
import Sem5_PP from "./components/subjects_ec/Sem5_PP";
import Sem5_VLSID from "./components/subjects_ec/Sem5_VLSID";
//importing all subjects of EC of Sem 6
import Sem6_AP from "./components/subjects_ec/Sem6_AP";
import Sem6_CN from "./components/subjects_ec/Sem6_CN";
import Sem6_FOC from "./components/subjects_ec/Sem6_FOC";
import Sem6_SATCOM from "./components/subjects_ec/Sem6_SATCOM";
import Sem6_WT from "./components/subjects_ec/Sem6_WT";
//importing all subjects of EC of Sem 7
import Sem7_AE from "./components/subjects_ec/Sem7_AE";
import Sem7_DIVP from "./components/subjects_ec/Sem7_DIVP";
import Sem7_DSP from "./components/subjects_ec/Sem7_DSP";
import Sem7_IOT from "./components/subjects_ec/Sem7_IOT";
import Sem7_MTT from "./components/subjects_ec/Sem7_MTT";
import Sem7_WC from "./components/subjects_ec/Sem7_WC";
//importing physics chapter
//import Superconductivity from "./components/pdfs/Superconductivity";
//import Dashboard from "./components/Dashboard";
// import Login from "./components/Login";

function App() {
  //const [userlist, setUserlist] = useState();
  const token = localStorage.getItem("token");
  console.log(token);
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Page} />
        {/* <Route path="/login" component={Login} /> */}
        {/* <Route path="/dashboard" component={Dashboard} /> */}
        <Route path="/cards" component={Cards} />
        {/* From here routing all branches */}
        <Route path="/Computer" component={Computer} />
        <Route path="/EC" component={EC} />
        <Route path="/IC" component={IC} />
        <Route path="/Automobile" component={Automobile} />
        <Route path="/Mechanical" component={Mechanical} />
        <Route path="/Civil" component={Civil} />
        <Route path="/IT" component={IT} />
        <Route path="/ICT" component={ICT} />
        <Route path="/Chemical" component={Chemical} />
        {/* From here routing all semesters */}
        <Route path="/sem1_2" component={Sem1_2} />
        <Route path="/sem3" component={Sem3} />
        <Route path="/sem4" component={Sem4} />
        <Route path="/sem5" component={Sem5} />
        <Route path="/sem6" component={Sem6} />
        <Route path="/sem7" component={Sem7} />
        <Route path="/sem8" component={Sem8} />
        {/* From here routing all the subjects of EC of Sem 1 & 2*/}
        <Route path="/sem1_2_BE" component={Sem1_2_BE} />
        <Route path="/sem1_2_phy" component={Sem1_2_Phy} />
        <Route path="/sem1_2_bee" component={Sem1_2_BEE} />
        <Route path="/sem1_2_bme" component={Sem1_2_BME} />
        <Route path="/sem1_2_egd" component={Sem1_2_EGD} />
        <Route path="/sem1_2_english" component={Sem1_2_English} />
        <Route path="/sem1_2_es" component={Sem1_2_ES} />
        <Route path="/sem1_2_math1" component={Sem1_2_Math1} />
        <Route path="/sem1_2_math2" component={Sem1_2_Math2} />
        <Route path="/sem1_2_pps" component={Sem1_2_PPS} />
        {/* From here routing all subjects of EC of Sem 3 */}
        <Route path="/sem3_cs" component={Sem3_CS} />
        <Route path="/sem3_dsd" component={Sem3_DSD} />
        <Route path="/sem3_etc" component={Sem3_ETC} />
        <Route path="/sem3_ic" component={Sem3_IC} />
        <Route path="/sem3_ps" component={Sem3_PS} />
        <Route path="/sem3_nt" component={Sem3_NT} />
        {/* From here routing all subjects of EC of Sem 4 */}
        <Route path="/sem4_acd" component={Sem4_ACD} />
        <Route path="/sem4_et" component={Sem4_ET} />
        <Route path="/sem4_mm" component={Sem4_MM} />
        <Route path="/sem4_pe" component={Sem4_PE} />
        <Route path="/sem4_ss" component={Sem4_SS} />
        {/* From here routing all subjects of EC of Sem 5 */}
        <Route path="/sem5_adc" component={Sem5_ADC} />
        <Route path="/sem5_pe" component={Sem5_PE} />
        <Route path="/sem5_pom" component={Sem5_POM} />
        <Route path="/sem5_pp" component={Sem5_PP} />
        <Route path="/sem5_vlsid" component={Sem5_VLSID} />
        {/* From here routing all subjects of EC of Sem 6 */}
        <Route path="/sem6_ap" component={Sem6_AP} />
        <Route path="/sem6_cn" component={Sem6_CN} />
        <Route path="/sem6_foc" component={Sem6_FOC} />
        <Route path="/sem6_satcom" component={Sem6_SATCOM} />
        <Route path="/sem6_wt" component={Sem6_WT} />
        {/* From here routing all subjects of EC of Sem 7 */}
        <Route path="/sem7_ae" component={Sem7_AE} />
        <Route path="/sem7_divp" component={Sem7_DIVP} />
        <Route path="/sem7_dsp" component={Sem7_DSP} />
        <Route path="/sem7_iot" component={Sem7_IOT} />
        <Route path="/sem7_mtt" component={Sem7_MTT} />
        <Route psth="/sem7_wc" component={Sem7_WC} />

        {/* <Route path="/superconductivity" component={Superconductivity} /> */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
