import hexToRgba from "hex-to-rgba";
import styled from "styled-components";
import { Colors } from "../colors";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    flex-shrink: 0;
    border: 1px solid #000;
    background:${hexToRgba(Colors.blackdark,0.9)};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`