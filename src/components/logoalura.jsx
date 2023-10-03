import styled from "styled-components";
import logoAf from "../assets/images/logoaluraflix.png"
import {useNavigate } from "react-router-dom";
import { useSetShowNV } from "../ContexProvider";

const ContainerImage = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 1rem;
    box-sizing: border-box;
    &:hover{
        cursor: pointer;
    }
`

export const LogoAF = () => {
    const navigate = useNavigate()
    const setShowNv = useSetShowNV()
    return (
        <ContainerImage onClick={(e)=>{setShowNv(true); navigate("/");}}>
            <img src={logoAf} alt="logo" />
        </ContainerImage>
    )
}