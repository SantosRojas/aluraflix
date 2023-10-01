import styled from "styled-components";
import logoAf from "../assets/images/logoaluraflix.png"
import { Link } from "react-router-dom";

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
            <Link to={"/"}>
                <img src={logoAf} alt="logo"/>
            </Link>
        </ContainerImage>
    )
}