import styled from "styled-components"
import { LogoAF } from "./logoalura"
import { Colors } from "../colors"
import { Link } from "react-router-dom"
import { MyBtn } from "./button"

const ContainerLogo = styled.div`
    width: 100%;
`
const ContainerBtn = styled.div`
    width: 90%;
`
const FooterContainer = styled.footer`
    display: flex;
    height: 5rem;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.blackdark};
    flex-grow: 0;
    @media screen and (max-width: 720px) {
        ${ContainerBtn} {
            display: block;
        }

        ${ContainerLogo}{
            display: none;
        }
    };

    @media screen and (min-width: 721px) {
        ${ContainerBtn} {
            display: none;
        }

        ${ContainerLogo}{
            display: block;
        }
    }
`


export const Footer = () => {
    const currentPath = window.location.pathname;
    const showNV = currentPath==="/"
    return (
        <FooterContainer>
            <ContainerLogo>
                <LogoAF />
            </ContainerLogo>
            <ContainerBtn>
            {
                showNV ? (
                        <Link to="/nuevo-video" style={{ textDecoration: "none" }}>
                            <MyBtn primary="true" style={{ width: "100%" }}>Nuevo Video</MyBtn>
                        </Link>
                ):<LogoAF />
            }
            </ContainerBtn>
        </FooterContainer>
    )
}