import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  margin-bottom: 24px;

  label {
    margin-bottom: 4px;
    display: block;
    span {
      color: var(--red);
    }
  }
`;

export const InputContainer = styled.div`
  background: var(--white);
  border-radius: 4px;
  border: 4px solid var(--white);
  color: var(--darkgray);
  width: 100%;
  display: flex;
  transition: 0.4s;
  align-items: center;
  padding: 0.5rem 1rem;


  ${(props) =>
    props.focus &&
    css`
      border-color: var(--blue);

      svg {
        color: var(--blue);
      }
    `}


    ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);

      svg {
        color: var(--red);
      }
    `}

    svg {
    margin-right: 16px;
  }

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--black);
    font-family: "Montserrat", sans-serif;

    &::placeholder {
      color: var(--gray);
    }
  }

  textarea {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    font-size: 1rem;
    color: var(--black);
    font-family: "Montserrat", sans-serif;

    &:focus {
      outline: none;
    }
  }

  select {
    border: none;
    background: transparent;
    flex: 1;
    font-size: 0.9rem;
    color: var(--black);

    &:focus {
      outline: none;
    }
  }
`;
