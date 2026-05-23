import styled from "styled-components";

export const FormContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

export const FormContent = styled.div`
    margin-top: 40px;
    width: 40%;
    background-color: white;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 8px 16px rgba(0,0,0,.1);
    box-sizing: border-box;
    padding: 24px 80px;
`;

export const Title = styled.h1`
    font-size: 32px;
    font-weight: 700;
    margin: 0 0 12px 0;
`;

export const InputContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 12px;
    gap: 4px;

    span {
        color: rgba(0,0,0,.6)
    }
`;

export const InputText = styled.input`
    background: transparent;
    width: 100%;
    outline: none;
    height: 40px;
    border: 1px solid #d3d3d3;
    border-radius: 40px;
    box-sizing: border-box;
    padding-left: 12px;

    &:focus {
        border: 1px solid black;
    }
`;

export const FormButton = styled.button`
    cursor: pointer;
    background: black;
    width: 100%;
    outline: none;
    height: 45px;
    border: none;
    border-radius: 40px;
    box-sizing: border-box;
    color: white;
    font-size: 16px;
    font-weight: 500;
    margin-top: 12px;

    &:hover {
        background: #3ea6ff;
    }
`;

export const OptionContent = styled.div`
    width: 100%;
    display: flex;
    margin-top: 12px;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;

export const OptionButton = styled.div`
    color: #3ea6ff;
    cursor: pointer;
    font-weight: 500;
`;
