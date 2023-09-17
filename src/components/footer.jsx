import styled from "styled-components"
import { LogoAF } from "./logoalura"
import { Colors } from "../colors"

const  FooterContainer = styled.div`
    display: flex;
    height: 3rem;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.blackdark};
    height: 5rem;
`

export const Footer = () =>{
    return (
        <FooterContainer>
            <LogoAF />
        </FooterContainer>
    )
}