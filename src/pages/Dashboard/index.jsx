import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import api from "../../service/api";

import {
  Container,
  HeaderContainer,
  ContentContainer,
  CardContainer,
  AsideContainer,
  AccountContainer,
  InputContainer,
} from "./styles";
import ImageNotFound from "../../assets/imagenotfound.webp";
import { FiEdit2, FiMail, FiPhone } from "react-icons/fi";
import Input from "../../components/Input";
import { Radio, FormControlLabel, RadioGroup } from "@material-ui/core";
import { toast } from "react-toastify";

function Dashboard({ userId }) {
  const [user, setUser] = useState({});
  const [level, setLevel] = useState("Iniciante");
  const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));


  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("@KenzieHub:id"));

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
  }, []);

  const { register, handleSubmit } = useForm();

  const submitNewTech = (data) => {
    console.log(data, level);
    if(!data.tech) {
        return toast.error("Complete o campo para enviar")
    }

    api.post("/users/tech", {
        tech: data.tech,
        status: level
    },
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(res => console.log(res))
    .catch(err => toast.error("Erro ao inserir nova tecnologia"))
  };

  return (
    <Container>
      <HeaderContainer></HeaderContainer>
      <AccountContainer>
        <AsideContainer>
          <CardContainer>
            <div>
              <img
                src={!!user.avatar_url ? user.avatar_url : ImageNotFound}
                alt={user.name}
              />
            </div>
            <h2>{user.name}</h2>
            <h4>{user.course_module}</h4>
          </CardContainer>
          <CardContainer>
            <h3>Contato</h3>
            <p>
              <FiMail /> {user.email}
            </p>
            <p>
              <FiPhone /> {user.contact}
            </p>
          </CardContainer>
        </AsideContainer>
        <ContentContainer>
          <CardContainer>
            <h3>Sobre mim</h3>
            <p>{user.bio}</p>
          </CardContainer>
          <CardContainer>
            <h3>Tecnologias</h3>
            <InputContainer onSubmit={handleSubmit(submitNewTech)}>
              <div>
                <Input
                  icon={FiEdit2}
                  placeholder="Nova tecnologia"
                  register={register}
                  name="tech"
                  id="tech"
                  label="Inserir nova tecnologia"
                />
              </div>
              <div className={"radio"}>
                <h5>Nível</h5>
                <RadioGroup
                  name="status"
                  row
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                >
                  <FormControlLabel
                    control={<Radio value="Iniciante" color="primary" />}
                    label="Iniciante"
                  />

                  <FormControlLabel
                    control={<Radio value="Intermediário" color="primary" />}
                    label="Intermediário"
                  />

                  <FormControlLabel
                    control={<Radio value="Avançado" color="primary" />}
                    label="Avançado"
                  />
                </RadioGroup>
                <button type="submit">Inserir</button>
              </div>
            </InputContainer>
          </CardContainer>
        </ContentContainer>
      </AccountContainer>
    </Container>
  );
}

export default Dashboard;
