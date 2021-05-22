import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

import api from "../../service/api";

import {
  Container,
  HeaderContainer,
  ContentContainer,
  CardContainer,
  AsideContainer,
  AccountContainer,
  InputContainer,
  TechCOntainer,
  TechCard,
  ModalStyled,
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
  const id = JSON.parse(localStorage.getItem("@KenzieHub:id"));

  const [open, setOpen] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [techEdited, setTechEdit] = useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenModalEdit = (index) => {
    if (openModalEdit) {
      setOpenModalEdit(false);
      setTechEdit({});

    } else {
      console.log(index);
      const tech = user.techs[index]
      console.log(tech);
      setTechEdit({ ...tech });
      setOpenModalEdit(true);
    }
  };

  useEffect(() => {
    console.log(id);

    loadUserData(id)
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
  }

  const { register, handleSubmit } = useForm();

  const submitNewTech = (data) => {
    if (!data.tech) {
      return toast.error("Complete o campo para enviar");
    }

    const tech = {
      title: data.tech,
      status: level,
    };

    api
      .post(
        "/users/techs",
        {
          title: data.tech,
          status: level,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => {
        let { name, email, course_module, bio, contact, techs } = user;

        techs = [...techs, tech];

        setUser({ name, email, course_module, bio, contact, techs });
      })
      .catch((err) => toast.error("Erro ao inserir nova tecnologia"));
  };

  const submitEditTech = (data) => {
    console.log(techEdited);
    api
      .put(
        `/users/techs/${data.idTech}`,
        { status: techEdited.status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => {
        loadUserData(id)
        handleOpenModalEdit()
      })
      .catch((err) => toast.error("Erro ao atualizar tecnologia"));
  };

  const submitDeleteTech = (data) => {
    api
      .delete(
        `/users/techs/${data.idTech}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => {
        loadUserData(id)
        handleOpenModalEdit()
      })
      .catch((err) => toast.error("Erro ao deletar tecnologia"))

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
            <h3>Minhas hard skills</h3>

            <ModalStyled
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              <InputContainer onSubmit={handleSubmit(submitNewTech)}>
                <form>
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
                        control={
                          <Radio value="Intermediário" color="primary" />
                        }
                        label="Intermediário"
                      />

                      <FormControlLabel
                        control={<Radio value="Avançado" color="primary" />}
                        label="Avançado"
                      />
                    </RadioGroup>
                    <button type="submit">Inserir</button>
                  </div>
                </form>
              </InputContainer>
            </ModalStyled>

            <TechCOntainer>
              {user.techs?.length > 0 ? (
                <>
                  {user.techs?.map((tech, index) => (
                    <TechCard
                      key={index}
                      onClick={() => handleOpenModalEdit(index)}
                    >
                      <h5>{tech.title}</h5>
                      <span>{tech.status}</span>
                      <input type="hidden" name="id" value={tech.id} />
                    </TechCard>
                  ))}
                </>
              ) : (
                <h5>Não há nenhuma tecnologia cadastrada</h5>
              )}
            </TechCOntainer>

            <ModalStyled open={openModalEdit} onClose={handleOpenModalEdit}>
              <>
                <InputContainer>
                  <form onSubmit={handleSubmit(submitEditTech)}>
                    <div>
                      <Input
                        icon={FiEdit2}
                        placeholder="Nova tecnologia"
                        register={register}
                        name="tech"
                        id="tech"
                        label="Editar tecnologia"
                        value={techEdited.title}
                        disabled
                      />
                    </div>
                    <div className={"radio"}>
                      <h5>Nível</h5>
                      <RadioGroup
                        name="status"
                        row
                        value={techEdited.status}
                        onChange={(e) =>
                          setTechEdit({
                            ...techEdited,
                            status: e.target.value,
                          })
                        }
                      >
                        <FormControlLabel
                          control={<Radio value="Iniciante" color="primary" />}
                          label="Iniciante"
                        />

                        <FormControlLabel
                          control={
                            <Radio value="Intermediário" color="primary" />
                          }
                          label="Intermediário"
                        />

                        <FormControlLabel
                          control={<Radio value="Avançado" color="primary" />}
                          label="Avançado"
                        />
                      </RadioGroup>
                      <input
                        type="hidden"
                        name="idTech"
                        value={techEdited.id}
                        {...register('idTech')}
                      />

                      <button type="submit">Atualizar</button>
                    </div>  
                  </form>
                  <form onSubmit={handleSubmit(submitDeleteTech)}>
                    <input type="hidden" name="idTech" value={techEdited.id} />
                    <button type="submit">Excluir</button>
                  </form>
                </InputContainer>
              </>
            </ModalStyled>
            <button type="button" onClick={handleOpen}>
              Adicionar nova tecnologia
            </button>
          </CardContainer>
        </ContentContainer>
      </AccountContainer>
    </Container>
  );
}

export default Dashboard;
