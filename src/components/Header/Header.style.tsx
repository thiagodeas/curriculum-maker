import styled from "styled-components";

export const StyledContainer = styled.div `
    
`

export const StyledHeader = styled.header `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    width: 100%;

    img {
        height: 150px;
    }


    h1 {
        font-size: 3rem;
        font-weight: 800;
        letter-spacing: 1px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: #585989;
    }

    p {
        color: #585989;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 100;

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