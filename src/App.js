import { React } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Page from "./components/Page";
import "./components/Page_style.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  //const [userlist, setUserlist] = useState();
  return (
    // <Router>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Page} />
        <Route path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
    // </Router>
  );
}

export default App;
