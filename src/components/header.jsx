import hexToRgba from "hex-to-rgba";
import styled from "styled-components";
import { Colors } from "../colors";
import { Link } from "react-router-dom";
import { LogoAF } from "./logoalura";
import { MyBtn } from "./button";

const MyHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    flex-shrink: 0;
    border: 1px solid #000;
    background:${hexToRgba(Colors.blackdark, 0.9)};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    flex-grow: 0;
    padding: 1.25rem 2.5rem;
    @media screen and (max-width: 768px){
        justify-content: center;
    }
`

export const Header = () => {
    const currentPath = window.location.pathname;
    const showNV = currentPath === "/"

    return (
        <MyHeader>
            <LogoAF />
            {
                showNV && (
                    <Link to="/nuevo-video">
                        <MyBtn>Nuevo Video</MyBtn>
                    </Link>
                )
            }
        </MyHeader>
    )
}