// React
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Context
import { useAuthenticationContext } from "./hooks/useAuthenticationContext";

// Components
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Navbar from "./components/Navbar";

function App() {
  const { authenticationReady } = useAuthenticationContext();

  return (
    <div className="App">
      {authenticationReady && (
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
      )}
    </div>
  );
}

export default App;
