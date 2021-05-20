import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 95vw;
  max-width: 980px;
  margin: 0 auto;
  min-height: 100vh;
  padding-top: 80px;
  align-items: stretch;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  min-height: 100%;
  padding: 2rem;
  margin-bottom: 80px;

  > div {
    display: flex;
    align-items: baseline;
    margin-bottom: 2rem;

    img {
      height: 120px;
    }

    span {
      font-size: 4rem;
      font-weight: 900;
      font-family: "Roboto Slab", serif;
      transform: translateY(-3px);
    }
  }

  h1 {
    font-size: 3rem;
    font-weight: 600;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin-bottom: 80px;
`;

export const FormContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--darkgray);
  border-radius: 8px;
  padding: 120px 50px;


  form {
    display: flex;
    flex-direction: column;

    button {
        padding: 0.8rem 1rem;
        margin-top: 8px;
        border-radius: 4px;
        font-weight: 600;
        background-color: var(--blue);
        color: var(--white);
        border: 4px solid var(--blue);
        transition: all 250ms;

        &:hover{
            background-color: var(--darkblue);
        }
    }

    p {
        margin-top: 18px;

        a {
            font-weight: 600;
            color: var(--blue);

            &:hover{
                text-decoration: underline;
            }
        }
    }
  }
`;
