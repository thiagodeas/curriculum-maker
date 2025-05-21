import styled from "styled-components";

export const StyledHeader = styled.header `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    width: 100%;

    img {
        height: 150px;

        @media (max-width: 600px) {
            height: 120px;
        }

        @media (max-width: 500px) {
            height: 100px;
        }

        @media (max-width: 400px) {
            height: 80px;
        }
    }

    h1 {
        font-size: 3rem;
        font-weight: 800;
        letter-spacing: 1px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: #f1efef;

        @media (max-width: 600px) {
            font-size:2.5rem;
        }

        @media (max-width: 500px) {
            font-size: 2rem;
        }

        @media (max-width: 400px) {
            font-size: 1.8rem;
        }
    }

    p {
        color: #f1efef;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
        font-style: italic;
        font-weight: 100;

        @media (max-width: 500px) {
            font-size: 12px;
        }

        @media (max-width: 400px) {
            font-size: 11px;
        }
    }
    div {
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        text-align: center;
        gap: 5px;
    }
`