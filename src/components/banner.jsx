import styled from "styled-components";
import backImage from "../assets/images/backimg.png"
import { Colors } from "../colors";
import hexToRgba from "hex-to-rgba";

const BannerContainer = styled.div`
    position: relative;
    height: 832px;
    background-image: url(${backImage});
    background-repeat: no-repeat;
    background-size: contain; /* Ajusta esto según tus preferencias */

    &::before {
        content: "";
        background-color: ${hexToRgba(Colors.primary,0.3)}; /* Color azul semitransparente */
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1; /* Coloca la capa sobre la imagen de fondo */
    }
`

export const  Banner = () =>{
    return (
        <BannerContainer>
        </BannerContainer>
    )
}