// React
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/login/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
