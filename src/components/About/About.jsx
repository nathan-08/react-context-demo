import React from "react";
import { ThemeContext } from "../../theme-context";

export default props => (
  <div className="about-component">
    <ThemeContext.Consumer>
      {theme => (
        <div className="content-container" style={{ background: theme.background, color: theme.color }}>
          <h1>about_component</h1>
          <hr />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates quis tempore sunt illo. Quam quia
            ratione rem soluta, doloribus numquam deserunt voluptas possimus debitis nobis, eaque consequuntur nihil ea
            saepe!
          </p>
        </div>
      )}
    </ThemeContext.Consumer>
  </div>
);
