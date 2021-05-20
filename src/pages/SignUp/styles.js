import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 95vw;
  max-width: 980px;
  margin: 0 auto;
  min-height: 100vh;
  align-items: stretch;
  position: relative;
`;


export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 50%;
  min-height: 100%;
  max-height: ${"calc(100vh - 80px)"};
  padding: 2rem;
  margin-bottom: 80px;
  text-align: right;
  position: sticky;
  top: 0;
  right: 0;

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
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.3rem;
  }
`;


export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin-bottom: 80px;
  margin-top: 100px;
  position: relative;
  z-index: 1;
`;


export const FormContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--darkgray);
  border-radius: 8px;
  padding: 80px 50px 100px;
  margin-top: 100px;

  h1 {
    width: 100%;
    font-size: 2rem;
    font-weight: 600;
    text-align: left;
    margin-bottom: 2rem;
    font-family: "Roboto Slab", serif;

  }

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
