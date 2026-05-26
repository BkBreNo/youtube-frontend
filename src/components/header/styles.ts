import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 55px;
    background-color: rgba(255,255,255,.95);
    backdrop-filter: blur(10px);
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0px;
    z-index: 999;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonContainer = styled.div<{ $margin?: string }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: ${({ $margin }) => $margin ? $margin : 0};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    &:hover {
        background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img`
    width: 20px;
`;

export const SearchContainer = styled.div`
    display: flex;
`;

export const SearchInputContainer = styled.div`
    width: 450px;
    height: 35px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;
`;

export const SearchInput = styled.input`
    background: transparent;
    width: 100%;
    height: 25px;
    outline: none;
    border: none;
`;

export const SearchButton = styled.div`
    border-radius: 0 40px 40px 0;
    height: 35px;
    width: 70px;
    background-color: #f8f8f8;
    border: 1px solid #d3d3d3;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        background-color: #f2f2f2;
    }
`;

export const HeaderButton = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonLoginIcon = styled.img`
    width: 24px;
`;

export const LoginItem = styled.div`
    width: fit-content;
    height: fit-content;
    border-radius: 20px;
    border: 1px solid #c3c3c3;
    cursor: pointer;
    padding: 6px 16px 6px 6px;
    margin-left: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    color: #3ea6ff;

    span {
        font-weight: 600;
        margin-left: 8px;
        font-size: 14px;
    }

    &:hover {
        background-color: rgba(62,166,255,.1);
        border: 1px solid rgba(62,166,255,.1);
    }
`;

export const DropDownContent = styled.div<{ $dropDown: boolean }>`
    display: ${({ $dropDown }) => $dropDown ? 'flex' : 'none'};
    flex-direction: column;
    position: fixed;
    top: 20%;
    right: 5%;
    background-color: white;
    width: 20%;
    border-radius: 12px;
    box-shadow: 0 0px 16px rgba(0,0,0,.1);
    z-index: 999;
`;

export const HeaderContent = styled.div`
    display: flex;
    box-sizing: border-box;
    align-items: center;
    padding: 10px;
    width: 100%;
    border-bottom: 1px solid #c3c3c3;
`;

export const MenuContent = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 0;
    border-bottom: 1px solid #c3c3c3;
`;

export const DropDownItem = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    padding: 0 10px;
    
    span {
        margin-left: 10px;
    }
    &:hover {
        background-color: #f2f2f2;
    }
`;