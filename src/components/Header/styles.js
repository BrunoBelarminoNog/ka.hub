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
        font-family: 'Roboto Slab', serif;
        transform: translateY(-3px);
    }
`;