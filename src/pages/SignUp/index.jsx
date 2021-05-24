import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  FiMail,
  FiLock,
  FiPhone,
  FiUser,
  FiInfo,
  FiBook,
  FiCamera,
} from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import Input from "../../components/Input";
import {
  Container,
  ImageContainer,
  FormContainer,
  FormContent,
} from "./styles";

import KenzieLogo from "../../assets/logokenzie.svg";
import api from "../../service/api";
import { motion } from "framer-motion";

function SignUp() {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    avatar_url: yup.string().notRequired(),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    emailConfirm: yup
      .string()
      .oneOf([yup.ref("email")], "Emails diferentes")
      .required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"
      )
      .required("Campo obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const submitForm = ({
    email,
    password,
    name,
    bio,
    contact,
    course_module,
    avatar_url,
  }) => {
    const user = {
      email,
      password,
      name,
      bio,
      contact,
      course_module,
      avatar_url,
    };

    api
      .post("/users", user)
      .then((_) => {
        toast.success("Sucesso ao criar a conta, faça seu login");

        return history.push("/");
      })
      .catch((error) =>
        toast.error("Erro ao criar a conta, tente outro email")
      );
  };

  return (
    <Container>
      <FormContainer>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <FormContent>
            <h1>Cadastre-se</h1>
            <form onSubmit={handleSubmit(submitForm)}>
              <Input
                register={register}
                name="name"
                id="name"
                error={errors.name?.message}
                icon={FiUser}
                label="Nome"
                placeholder="Nome Completo"
              />
              <Input
                register={register}
                name="avatar_url"
                id="avatar_url"
                error={errors.avatar_url?.message}
                icon={FiCamera}
                label="Avatar (url)"
                type="url"
                placeholder="http://"
              />
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
                name="emailConfirm"
                id="emailConfirm"
                error={errors.emailConfirm?.message}
                icon={FiMail}
                label="Confirmar Email"
                placeholder="Repita seu email"
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
              <Input
                register={register}
                name="passwordConfirm"
                id="passwordConfirm"
                error={errors.passwordConfirm?.message}
                icon={FiLock}
                label="Confirmar Senha"
                placeholder="Repita sua senha"
                type="password"
              />
              <Input
                register={register}
                name="contact"
                id="contact"
                error={errors.contact?.message}
                icon={FiPhone}
                label="Telefone"
                placeholder="(__) _____-____ "
              />
              <Input
                register={register}
                name="course_module"
                id="course_module"
                error={errors.course_module?.message}
                icon={FiBook}
                label="Módulo no curso"
              />
              <Input
                register={register}
                name="bio"
                id="bio"
                error={errors.bio?.message}
                icon={FiInfo}
                label="Sobre você"
                placeholder="Conte-nos um pouco sobre você"
              />
              <button type="submit">Enviar</button>
              <p>
                Já tem cadastro? Faça seu <Link to="/">login</Link>
              </p>
            </form>
          </FormContent>
        </motion.div>
      </FormContainer>

      <ImageContainer>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div>
            <img src={KenzieLogo} alt="Logo Kenzie Academy" />
            <span>.HUB</span>
          </div>
          <h1>
            Agora falta pouco para fazer parte do maior Hub de dev's do Brasil
          </h1>
          <p>Junte-se a nossa comunidade!</p>
        </motion.div>
      </ImageContainer>
    </Container>
  );
}

export default SignUp;
