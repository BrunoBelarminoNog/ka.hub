import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FiMail, FiLock } from "react-icons/fi";
import { toast } from "react-toastify";

import Input from "../../components/Input";
import {
  Container,
  ImageContainer,
  FormContainer,
  FormContent,
} from "./styles";

import KenzieLogo from "../../assets/logokenzie.svg";
import { Link, useHistory } from "react-router-dom";
import api from "../../service/api";
import { motion } from "framer-motion";

function Home({ setAuthenticated }) {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const submitForm = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        const { token } = res.data;
        const { id } = res.data.user;

        localStorage.clear();
        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub:id", JSON.stringify(id));
        setAuthenticated(true);
      })
      .then((_) => {
        history.push("/dashboard");
      })
      .catch((error) => toast.error("Email ou senha inválidos"));
  };

  return (
    <Container>
      <ImageContainer>
        <motion.div
          initial={{opacity: 0, x: -200}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: .3, delay: .1}}
        >
          <div>
            <img src={KenzieLogo} alt="Logo Kenzie Academy" />
            <span>.HUB</span>
          </div>
          <h1>Faça seu login e entre no mundo Kenzie</h1>
        </motion.div>
      </ImageContainer>
      <FormContainer>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{duration: .3, delay: .1}}
        >
          <FormContent>
            <form onSubmit={handleSubmit(submitForm)}>
              <h1>Login</h1>

              <Input
                register={register}
                name="email"
                id="email"
                error={errors.email?.message}
                icon={FiMail}
                label="Email"
                placeholder="Digite seu email"
              />
              <Input
                register={register}
                name="password"
                id="password"
                error={errors.password?.message}
                icon={FiLock}
                label="Senha"
                placeholder="Digite sua senha"
                type="password"
              />

              <button type="submit">Enviar</button>
              <p>
                Não tem cadastro? Faça seu <Link to="/cadastro">cadastro</Link>
              </p>
            </form>
          </FormContent>
        </motion.div>
      </FormContainer>
    </Container>
  );
}

export default Home;
