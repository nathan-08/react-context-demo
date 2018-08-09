import React from "react";
import { ThemeContext } from "../../theme-context";

export default function ThemedButton(props) {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div
          className="themed-button"
          style={{ background: theme.background, color: theme.color }}
          onClick={props.onclick}
        >
          {props.text}
        </div>
      )}
    </ThemeContext.Consumer>
  );
}
