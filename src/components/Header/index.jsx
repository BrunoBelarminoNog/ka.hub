import React from "react";
import { Container, LogoContainer } from "./styles";

import KenzieLogo from "../../assets/logokenzie.svg";

const Header = ({authenticated}) => {
  return (
    <Container>
      <div>
        <LogoContainer>
          <img src={KenzieLogo} alt="Logo Kenzie Academy" />
          <span>.HUB</span>
        </LogoContainer>

        {
          authenticated && (
            <img src="" alt=""/>
          )
        }
      </div>
    </Container>
  );
};

export default Header;
