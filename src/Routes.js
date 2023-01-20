import Navbar from "components/Navbar";
import Home from "pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" element={<Home />} />
      </Switch>
    </Router>
  );
};

export default Routes;
