import styled from "styled-components";
import { Colors } from "../colors";

const Btn = styled.button`
    height: 3.375rem; 
    font-style: normal; 
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    padding: 0.5rem 3rem; 
    border-radius: .3rem;
    &:hover{
        cursor: pointer;
    }
    @media screen and (max-width: 768px){
        padding: 0.5rem 2rem; 
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
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const ContainerBtns = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;
    margin-bottom: 4rem;
    flex-wrap: wrap;
`
export const MyBtnD = styled(MyBtn)`
    margin:0 1rem;
`