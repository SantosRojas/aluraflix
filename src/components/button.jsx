import styled from "styled-components";
import { Colors } from "../colors";

const Btn = styled.button`
    height: 54px;
    font-style: normal; 
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    padding: 0.5rem 2rem; 
    border-radius: .3rem;
    margin: 1rem;
    &:hover{
        cursor: pointer;
    }
`

export const MyBtn = styled(Btn)`
    background-color: ${(props) => props.primary === "true" ? Colors.primary : Colors.graydark};
    color: ${(props) => props.primary === "true" ? Colors.graylighter:Colors.blackdark};
    
`;

export const MyBtnH = styled(Btn)`
    background-color: transparent;
    color: ${Colors.graylighter};
    border:0.1rem solid ${Colors.graylighter} ;
`
