import hexToRgba from "hex-to-rgba";
import styled from "styled-components";
import { Colors } from "../colors";
import { useNavigate } from "react-router-dom"; // Importa useNavigate en lugar de useHistory
import { LogoAF } from "./logoalura";
import { MyBtnH } from "./button";
import { useSetShowNV, useShowNV } from "../ContexProvider";

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

    const showNv = useShowNV()
    const setShowNv = useSetShowNV()

    // Obtén la función de navegación
    const navigate = useNavigate();

    return (
        <MyHeader>
            <LogoAF />
            {
                showNv && (
                    // Utiliza navigate para redirigir al hacer clic en el botón
                    <MyBtnH onClick={() => { setShowNv(false); navigate("/nuevo-video"); }}>Nuevo Video</MyBtnH>
                )
            }
        </MyHeader>
    )
}
