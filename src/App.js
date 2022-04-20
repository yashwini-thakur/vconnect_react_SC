import { React } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Page from "./components/Page";
import "./components/Page_style.css";
import Login from "./components/Login";
//import Dashboard from "./components/Dashboard";
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
import ProtectedRoute from "./protectedRoute";
//from here importing all semesters for EC;
import Sem1_2 from "./components/Sem1&2";
import Sem3 from "./components/Sem3";
import Sem4 from "./components/Sem4";
import Sem5 from "./components/Sem5";
import Sem6 from "./components/Sem6";
import Sem7 from "./components/Sem7";
import Sem8 from "./components/Sem8";
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
//importing physics chapter
import Superconductivity from "./components/pdfs/Superconductivity";

function App() {
  //const [userlist, setUserlist] = useState();
  const token = localStorage.getItem("token");
  console.log(token);
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Page} />
        <Route path="/login" component={Login} />
        {/* <Route path="/dashboard" component={Dashboard} /> */}
        <ProtectedRoute path="/cards" component={Cards} />
        {/* From here routing all branches */}
        <ProtectedRoute path="/Computer" component={Computer} />
        <ProtectedRoute path="/EC" component={EC} />
        <ProtectedRoute path="/IC" component={IC} />
        <ProtectedRoute path="/Automobile" component={Automobile} />
        <ProtectedRoute path="/Mechanical" component={Mechanical} />
        <ProtectedRoute path="/Civil" component={Civil} />
        <ProtectedRoute path="/IT" component={IT} />
        <ProtectedRoute path="/ICT" component={ICT} />
        <ProtectedRoute path="/Chemical" component={Chemical} />
        {/* From here routing all semesters */}
        <ProtectedRoute path="/sem1_2" component={Sem1_2} />
        <ProtectedRoute path="/sem3" component={Sem3} />
        <ProtectedRoute path="/sem4" component={Sem4} />
        <ProtectedRoute path="/sem5" component={Sem5} />
        <ProtectedRoute path="/sem6" component={Sem6} />
        <ProtectedRoute path="/sem7" component={Sem7} />
        <ProtectedRoute path="/sem8" component={Sem8} />
        {/* From here routing all the subjects of EC of Sem 1 & 2*/}
        <ProtectedRoute path="/sem1_2_BE" component={Sem1_2_BE} />
        <ProtectedRoute path="/sem1_2_phy" component={Sem1_2_Phy} />
        <ProtectedRoute path="/sem1_2_bee" component={Sem1_2_BEE} />
        <ProtectedRoute path="/sem1_2_bme" component={Sem1_2_BME} />
        <ProtectedRoute path="/sem1_2_egd" component={Sem1_2_EGD} />
        <ProtectedRoute path="/sem1_2_english" component={Sem1_2_English} />
        <ProtectedRoute path="/sem1_2_es" component={Sem1_2_ES} />
        <ProtectedRoute path="/sem1_2_math1" component={Sem1_2_Math1} />
        <ProtectedRoute path="/sem1_2_math2" component={Sem1_2_Math2} />
        <ProtectedRoute path="/sem1_2_pps" component={Sem1_2_PPS} />
        {/* From here routing all subjects of EC of Sem 3 */}
        <ProtectedRoute path="/sem3_cs" component={Sem3_CS} />
        <ProtectedRoute path="/sem3_dsd" component={Sem3_DSD} />
        <ProtectedRoute path="/sem3_etc" component={Sem3_ETC} />
        <ProtectedRoute path="/sem3_ic" component={Sem3_IC} />
        <ProtectedRoute path="/sem3_ps" component={Sem3_PS} />
        <ProtectedRoute path="/sem3_nt" component={Sem3_NT} />
        {/* From here routing all subjects of EC of Sem 4 */}
        <ProtectedRoute path="/sem4_acd" component={Sem4_ACD} />
        <ProtectedRoute path="/sem4_et" component={Sem4_ET} />
        <ProtectedRoute path="/sem4_mm" component={Sem4_MM} />
        <ProtectedRoute path="/sem4_pe" component={Sem4_PE} />
        <ProtectedRoute path="/sem4_ss" component={Sem4_SS} />
        {/* From here routing all subjects of EC of Sem 5 */}
        <ProtectedRoute path="/sem5_adc" component={Sem5_ADC} />
        <ProtectedRoute path="/sem5_pe" component={Sem5_PE} />
        <ProtectedRoute path="/sem5_pom" component={Sem5_POM} />
        <ProtectedRoute path="/sem5_pp" component={Sem5_PP} />
        <ProtectedRoute path="/sem5_vlsid" component={Sem5_VLSID} />

        <ProtectedRoute
          path="/superconductivity"
          component={Superconductivity}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
