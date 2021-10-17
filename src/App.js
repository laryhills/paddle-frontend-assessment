import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Homepage from "./components/Hompage";

import logo from "./logo.svg";
import "./App.css";

//Styles
import { GlobalStyle } from "./styles/GlobalStyles";
import Github from "./components/Github";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                <Link to="/homepage" className="App-link">
                  Homepage
                </Link>
                |
                <Link to="/github" className="App-link">
                  Github
                </Link>
              </p>
            </header>
          </div>
        </Route>
        <Route path="/github" exact={true}>
          <Github />
        </Route>
        <Route path="/homepage" exact={true}>
          <Homepage />
        </Route>
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
