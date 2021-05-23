import React, { useEffect, useState } from "react";
import { Container, LogoContainer, UserLogo } from "./styles";

import KenzieLogo from "../../assets/logokenzie.svg";
import api from "../../service/api";
import ImageNotFound from "../../assets/imagenotfound.webp";
import { useHistory } from "react-router";

const Header = ({ authenticated, userId, setAuthenticated }) => {
  const [user, setUser] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const history = useHistory();


  useEffect(() => {
    loadUserData(userId);
    // eslint-disable-next-line
  }, []);

  const loadUserData = (id) => {
    api.get(`/users/${id}`).then((res) => {
      const { name, email, course_module, bio, contact, techs } = res.data;

      const user = {
        name,
        email,
        course_module,
        bio,
        contact,
        techs,
      };

      setUser({ ...user });
    });
  };

  const logOff = () => {
    localStorage.clear()
    setOpenDialog(false)
    setAuthenticated(false)
    history.push("/")
  }

  return (
    <Container>
      <div>
        <LogoContainer>
          <img src={KenzieLogo} alt="Logo Kenzie Academy" />
          <span>.HUB</span>
        </LogoContainer>

        {authenticated && (
          <UserLogo>
            <img
              src={!!user.avatar_url ? user.avatar_url : ImageNotFound}
              alt=""
              onClick={()=>setOpenDialog(!openDialog)}
            />
            {openDialog && (
              <div>
                <button type="button" onClick={() => logOff()} >Sair</button>
              </div>
            )}
          </UserLogo>
        )}
      </div>
    </Container>
  );
};

export default Header;
