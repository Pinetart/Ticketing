import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Pages/dashboard/Dashboard";
import CreateRequest from "./Pages/create/CreateRequest";
import Navbar from "./Components/Navbar";
import Request from "./Pages/request/Request";
import Edit from "./Pages/edit/Edit";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/create">
              <CreateRequest />
            </Route>
            <Route path="/requests/:id">
              <Request />
            </Route>
            <Route path="/editrequest/:id">
              <Edit />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
