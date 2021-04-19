import styled from "styled-components";

export const CartDropDownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 80px;
    right: 40px;
    z-index: 5;
    display: none;

    &:hover{

    display: flex;
    
    }

`;

export const CartItemContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;