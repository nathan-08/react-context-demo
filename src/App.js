import React, { Component } from "react";
import routes from "./routes";
import { HashRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { ThemeContext, themes } from "./theme-context";
import ThemedButton from "./components/themedButton/ThemedButton";

class App extends Component {
  state = {
    theme: "dark"
  };
  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === "dark" ? "light" : "dark"
    });
  };
  render() {
    return (
      <HashRouter>
        <div className="app">
          <ThemeContext.Provider value={themes[this.state.theme]}>
            <header className="app-header">
              <h1 className="App-title">Let's practice React Context API</h1>
              <Nav toggleTheme={this.toggleTheme} />
            </header>
            {routes}
          </ThemeContext.Provider>
        </div>
      </HashRouter>
    );
  }
}

export default App;

function Nav(props) {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <nav style={{ background: theme.background }}>
          <Link to="/">
            <ThemedButton text="Home" />
          </Link>
          <Link to="/about">
            <ThemedButton text="About" />
          </Link>
          <ThemedButton text="Toggle Theme" onclick={props.toggleTheme} />
        </nav>
      )}
    </ThemeContext.Consumer>
  );
}

function ThemedLink(props) {
  return <ThemeContext.Consumer>{theme => <Link to={props.path}> </Link>}</ThemeContext.Consumer>;
}
