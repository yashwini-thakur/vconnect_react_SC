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
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
