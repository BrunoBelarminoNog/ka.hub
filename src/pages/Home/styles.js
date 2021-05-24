import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 95vw;
  max-width: 980px;
  margin: 0 auto;
  min-height: 100vh;
  padding-top: 80px;
  align-items: stretch;
  justify-content: center;

  @media screen and (min-width: 540px) {
    align-items: stretch;
  }
`;

export const ImageContainer = styled.div`
    margin-bottom: 100px;
  > div {
    display: none;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 50%;
    min-height: 100%;
    /* padding: 2rem; */    

    h1 {
      font-size: 3rem;
      font-weight: 600;
      width: 500px;
    }

    @media screen and (min-width: 540px) {
      display: flex;

      > div {
      display: flex;
      align-items: baseline;
      margin-bottom: 2rem;

      img {
        height: 80px;
      }

      span {
        font-size: 3rem;
        font-weight: 900;
        font-family: "Roboto Slab", serif;
        transform: translateY(-3px);
      }
    }

      h1 {
      font-size: 3rem;
      font-weight: 600;
      width: 250px;
    }
    }

    @media screen and (min-width: 980px) {
      > div {
      display: flex;
      align-items: baseline;
      margin-bottom: 2rem;
      width: 500px;

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
      width: 500px;
      }
  }}
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
  padding: 100px 50px;

  form {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 2rem;
      font-family: "Roboto Slab",serif;
    }

    button {
      padding: 0.8rem 1rem;
      margin-top: 8px;
      border-radius: 4px;
      font-weight: 600;
      background-color: var(--blue);
      color: var(--white);
      border: 4px solid var(--blue);
      transition: all 250ms;

      &:hover {
        background-color: var(--darkblue);
      }
    }

    p {
      margin-top: 18px;

      a {
        font-weight: 600;
        color: var(--blue);

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
