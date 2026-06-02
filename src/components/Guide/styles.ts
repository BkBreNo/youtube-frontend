import styled, { css } from "styled-components";

export const Drawer = styled.div<{ $openMenu: boolean, $positionMenu: boolean }>`
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 1500;
    transition: .3s ease;
    ${({ $openMenu, $positionMenu }) => {
        if ($positionMenu === false) {
            return css`
                display: none;
            `;
        } else {
            if ($openMenu) {
                return css`
                    background-color: rgba(0,0,0,.3);
                    pointer-events: all;
                `;
            } else {
                return css`
                    background-color: transparent;
                    pointer-events: none;
                `;
            }

        }
    }}
`;

export const Container = styled.div<{ $openMenu: boolean, $positionMenu: boolean }>`
    ${({ $openMenu, $positionMenu }) => {
        if ($positionMenu === false) {
            return css`
                display: none;
            `;
        } else {
            if ($openMenu) {
                return css`
                    display: flex;
                    transform: translateX(0);
                   
                `
            } else {
                return css`
                    display: flex;
                    transform: translateX(-240px);
                `
            }
        }
    }}
    height: 100vh;
    position: fixed;
    width: 240px;
    box-sizing: border-box;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    background-color: white;
    z-index: 2000;
    transition: .3s ease;
    
    &::-webkit-scrollbar-thumb {
        background-color: white;
    }

    &:hover {
        scrollbar-width: thin;
        &::-webkit-scrollbar-thumb:hover {
            background-color: #8c8c8c;
        }
    }
`;

export const ButtonContainer = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    &:hover {
        background-color: #f2f2f2;
    }
`;

export const CountryCode = styled.span`
    margin-left: 5px;
    color: rgba(0,0,0,.8);
    font-size: 10px;
    transform: translateY(-10px);
`;

export const FirstMenuContent = styled.div`
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    border-bottom: 1px solid #c3c3c3;
`;

export const MenuContent = styled.div`
    display: block;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    border-bottom: 1px solid #c3c3c3;
`;

export const LoginContent = styled.div`
    display: 'block';
    box-sizing: border-box;
    padding: 10px 28px;
    width: 100%;
    border-bottom: 1px solid #c3c3c3;
`;

export const ExplorarContent = styled.div<{ $openExplorar: boolean }>`
    height: ${({ $openExplorar }) => $openExplorar ? 'fit-content' : '135px'};
    overflow: hidden;
`;

export const MenuItem = styled.div`
    width: 100%;
    min-height: 45px;
    border-radius: 10px;
    cursor: pointer;
    padding: 2px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    span {
        font-weight: 600;
        margin-left: 20px;
        font-size: 14px;
    }

    &:hover {
        background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img`
    width: 24px;
`;

export const MenuTopic = styled.span`
    display: block; 
    padding-bottom: 10px;
    font-weight: 600;
    margin-left: 18px;
`;

export const LoginItem = styled.div`
    width: fit-content;
    border-radius: 20px;
    border: 1px solid #c3c3c3;
    cursor: pointer;
    padding: 6px 16px 6px 6px;
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