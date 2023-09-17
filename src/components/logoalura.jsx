import styled from "styled-components";
import logoAf from "../assets/images/logoaluraflix.png"

const ContainerImage = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 1rem;
    box-sizing: border-box;
`

export const LogoAF = () => {
    return (
        <ContainerImage>
            <img src={logoAf} alt="logo"/>
        </ContainerImage>
    )
}