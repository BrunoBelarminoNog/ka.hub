import styled from "styled-components";

export const Container = styled.header`
  height: 80px;
  width: 100%;
  background-color: var(--darkgray);
  position: fixed;
  z-index: 2;

  > div {
    width: 95vw;
    max-width: 980px;
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: space-between;
  }

  img {
    height: 55px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: baseline;

  span {
    font-size: 2.1rem;
    font-weight: 900;
    font-family: "Roboto Slab", serif;
    transform: translateY(-3px);
  }
`;

export const UserLogo = styled.div`
  position: relative;

  img {
    width: 55px;
    object-fit: cover;
    background: #555;
    border-radius: 50%;
    border: 4px solid var(--white);
    cursor: pointer;
  }

  div {
    position: absolute;
    background: #333;
    box-shadow: 0px 0px 10px -2px var(--black);
    width: 200px;
    height: 100px;
    bottom: -112px;
    right: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;

    button {
      width: 50%;
      padding: 9px;
      border-radius: 4px;
      background: var(--blue);
      color: var(--white);
      font-weight: 500;
    }

    &::before {
      content: "";
      width: 0;
      height: 0;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-bottom: 20px solid #333;
      position: absolute;
      top: -20px;
      right: 17px;
    }
  }
`;
