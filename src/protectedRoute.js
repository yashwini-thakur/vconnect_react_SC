import { React } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
// import Page from "./components/Page";
// import "./components/Page_style.css";
// import Login from "./components/Login";
// import Dashboard from "./components/Dashboard";
// import Cards from "./components/Cards";
// //from here importing all branches
// import Computer from "./components/branches/Computer";
// import EC from "./components/branches/EC";
// import IC from "./components/branches/IC";
// import Automobile from "./components/branches/Automobile";
// import Mechanical from "./components/branches/Mechanical";
// import Civil from "./components/branches/Civil";
// import IT from "./components/branches/IT";
// import ICT from "./components/branches/ICT";
// import Chemical from "./components/branches/Chemical";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  //const [userlist, setUserlist] = useState();
  const token = localStorage.getItem("token");
  console.log(token);
  return (
    // <BrowserRouter>
    //   <Switch>
    <Route
      {...restOfProps}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
    // exact path="/" component={Page} />
    // <Route path="/login" component={Login} />

    // <Route path="/dashboard" component={Dashboard} />
    // <Route path="/cards" component={Cards} />
    // {/* From here routing all branches */}
    // <Route path="/Computer" component={Computer} />
    // <Route path="/EC" component={EC} />
    // <Route path="/IC" component={IC} />
    // <Route path="/Automobile" component={Automobile} />
    // <Route path="/Mechanical" component={Mechanical} />
    // <Route path="/Civil" component={Civil} />
    // <Route path="/IT" component={IT} />
    // <Route path="/ICT" component={ICT} />
    // <Route path="/Chemical" component={Chemical} />
    //   </Switch>
    // </BrowserRouter>
  );
}

export default ProtectedRoute;
