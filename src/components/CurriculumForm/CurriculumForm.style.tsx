import styled from "styled-components";

export const StyledMainContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledForm = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;    
    background-color: #f1efef;
    border-radius: 5px;
    box-shadow: 1px 0px 8px #363e3f;
    min-height: 100vh;
    width: 800px;
`

export const StyledInput = styled.input `
    width: 300px;
    height: 25px;
    margin-block: 1.2rem;
    padding: 6px 8px 6px 8px;
    border: solid 1px #6D9CA1;
    border-radius: 4px;
    outline: none;
    font-size: 1rem;
    text-align: center;

    &::placeholder {
        font-size: 15px;
    }
`

export const StyledTextArea = styled.textarea `
    max-width: 400px;
    min-width: 400px;
    height: 150px;
    font-size: 14px;
    border-radius: 4px;
    text-align: center;
    margin-block: 1.2rem;
    padding: 9px 8px 6px 8px;
    outline: none;
    border: solid 1px #6D9CA1;

    &::placeholder {
        font-size: 14px;
    }

    @media (max-width: 500px) {
        max-width: 300px;
        min-width: 300px;
    }
`

export const StyledBorderBox= styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: solid 2px #6D9CA1;
    width: 100%;
    padding-block: 2rem;
`

export const StyledLabel = styled.label `
    font-size: 2rem;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-weight: 600;
    padding-bottom: 2rem;
    color: #546061;

    @media (max-width: 600px) {
            font-size: 1.7rem;
        }
`

export const StyledLabelAA = styled.label `
    font-size: 2rem;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-weight: 600;
    margin-top: 2rem;
    padding-bottom: 2rem;
    color: #546061;

    @media (max-width: 600px) {
            font-size: 1.7rem;
        }
`

export const StyledContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const StyledLabelGeneric = styled.label `
    font-size: 1.1rem;
    padding: 20px 0px 0px 0px;
    color: #242323;
`

export const StyledButtonContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;
    text-align: center;
`

export const StyledButton = styled.button `
    width: 180px;
    height: 40px;
    border: solid 1px #a5a4a4;
    border-radius: 6px;
    font-size: 1rem;
    background-color: #F0F2F1;
    cursor: pointer;
    transition: all;
    transition-duration: 500ms;
    &:hover {
        background-color: #e5e6e5;
    }
`