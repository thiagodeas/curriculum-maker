import styled from "styled-components";

export const StyledFooter = styled.footer `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #f1efef;
    background-color: #546061;
    padding: 50px;
`

export const StyledLink = styled.a `
    font-size: 2.6rem;
    color: #f1efef;
    border-radius: 4px;
    transition: all;
    transition-duration: 500ms;
    padding: 5px;
    &:hover {
        background-color:#6D9CA1;
        
    }
`

export const StyledContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 1.7rem;
    column-gap: 10px;
`
