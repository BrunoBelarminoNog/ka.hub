import styled from "styled-components";
import { Modal } from "@material-ui/core";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 220px;
  opacity: 0.8;
  background-image: repeating-radial-gradient(
    circle at 17% 32%,
    rgb(235, 243, 60),
    rgb(149, 112, 197),
    rgb(115, 252, 224),
    rgb(116, 71, 5),
    rgb(223, 46, 169),
    rgb(73, 80, 75),
    rgb(231, 248, 17) 2px
  );
`;

export const AccountContainer = styled.main`
  width: 95vw;
  max-width: 980px;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const AsideContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateY(-3rem);

  img {
    width: 180px;
    background: #555;
    border-radius: 50%;
    border: 4px solid var(--white);
    margin-bottom: 2rem;
  }
`;

export const ContentContainer = styled.div`
  width: 60%;
`;

export const CardContainer = styled.section`
  width: 100%;
  background: var(--darkgray);
  border-radius: 6px;
  color: var(--white);
  padding: 3rem 1rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 3rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 1.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  h4 {
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1.2rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  p {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }

    svg {
      margin-right: 8px;
    }
  }

  button {
    width: 80%;
    padding: 16px;
    border-radius: 4px;
    background: var(--blue);
    color: var(--white);
    font-weight: 500;
    /* align-self: flex-end; */
  }
`;

export const InputContainer = styled.div`
  padding: 38px;
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  background-color: var(--darkgray);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  border-radius: 8px;

  form {
    width: 100%;

  &:last-of-type button{
      margin-top: 1rem;
      background: var(--red);
    }
  }

  &:last-child {
    bottom: 0;
  }

  > div {
    display: flex;
    width: 100%;

    > div {
      margin-bottom: 16px;
      width: 100%;
    }
  }

  .radio {
    display: flex;
    flex-direction: column;
    margin-top: 8px;

    > div {
      margin-top: 4px;
      display: flex;
      justify-content: space-between;
    }

    .MuiRadio-root {
      color: var(--white);
    }

    .MuiRadio-colorPrimary.Mui-checked {
      color: var(--blue);
    }
  }

  button {
    width: 100%;
    padding: 16px;
    border-radius: 4px;
    background: var(--blue);
    color: var(--white);
    font-weight: 500;
    align-self: flex-end;
    margin-top: 1rem;
    
  }

`;

export const TechCOntainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem;
  text-align: center;

  h5 {
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export const TechCard = styled.div`
  width: 48%;
  border: 2px solid var(--blue);
  border-radius: 6px;
  padding: 8px 4px;
  text-align: center;
  padding: 12px 6px;
  margin-bottom: 1rem;
  cursor: pointer;
transition: all 300ms;
  h5 {
    font-weight: 600;
  }

  span {
    display: block;
    margin-top: 4px;
    font-size: 0.9em;
  }

  &:hover {
   box-shadow: 0px 0px 15px -1px rgba(250,250,250,0.4);
  }
`;

export const ModalStyled = styled(Modal)`
  background-color: rgba(0, 0, 0, 0.5);
`;
