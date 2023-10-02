import styled from "styled-components"
import { LogoAF } from "./logoalura"
import { Colors } from "../colors"
import {useNavigate } from "react-router-dom"
import { MyBtn } from "./button"
import { useSetShowNV, useShowNV } from "../ContexProvider"

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
    const showNV = useShowNV()
    const setShowNV = useSetShowNV()
    const navigate = useNavigate()
    return (
        <FooterContainer>
            <ContainerLogo>
                <LogoAF />
            </ContainerLogo>
            <ContainerBtn>
                {
                    showNV ? (
                        <MyBtn onClick={()=>{setShowNV(false);navigate("/nuevo-video")}} primary="true" style={{ width: "100%" }}>Nuevo Video</MyBtn>
                    ):<LogoAF />
                }
            </ContainerBtn>
        </FooterContainer>
    )
}