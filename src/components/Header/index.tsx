import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

import Lune from "../../icons/luna.png";
import Sun from "../../icons/sol.png";

import { Container } from "./styles";

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <h1>Hello World</h1>

      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={
          <img
            src={Sun}
            style={{
              height: 18,
              width: 18,
              marginTop: 2,
              display: "flex",
              borderRight: 0,
            }}
          />
        }
        uncheckedIcon={
          <img
            src={Lune}
            style={{
              height: 15,
              width: 15,
              marginTop: 1,
              display: "flex",
              borderRight: 0,
            }}
          />
        }
        height={18}
        width={40}
        handleDiameter={20}
        offColor={colors.quaternary}
        onColor={colors.secondary}
      />
    </Container>
  );
};

export default Header;
