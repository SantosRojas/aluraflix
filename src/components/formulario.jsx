import styled from "styled-components";
import { Colors } from "../colors";


export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px){
        padding:0.2rem;
    }
`

export const Formulario = styled.form`
    background-color: ${Colors.blackmedium};
    padding: 2rem;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;
    gap: 2rem;
    box-sizing: border-box;
`