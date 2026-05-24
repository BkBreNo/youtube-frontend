import styled from "styled-components";

export const InputDescription = styled.textarea`
    background: transparent;
    width: 100%;
    outline: none;
    border: 1px solid #d3d3d3;
    border-radius: 16px;
    box-sizing: border-box;
    padding: 12px;
    resize: none;

    &:focus {
        border: 1px solid black;
    }
`;

export const InputFile = styled.input`
    background: transparent;
    width: 100%;
    outline: none;
    border-radius: 16px;
    box-sizing: border-box;
    padding: 12px;
`;
