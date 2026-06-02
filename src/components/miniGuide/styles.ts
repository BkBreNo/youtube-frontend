import styled, { css } from "styled-components";

export const Container = styled.div<{ $openMenu: boolean, $positionMenu: boolean }>`
    ${({ $openMenu, $positionMenu }) => {
        if ($positionMenu) {
            return css`
                display: none;
            `
        } else {
            if ($openMenu) {
                return css`
                    display: flex;
                    position: sticky;
                    width: 240px;
                    
                `;
            } else {
                return css`
                    display: flex;
                    position: sticky;
                    width: 88px;
                `;
            }
        }
    }}
    height: calc(100vh - 55px);
    box-sizing: border-box;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    top: 55px;
    background-color: white;
    z-index: 2000;
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

export const FirstMenuContent = styled.div<{ $openMenu: boolean }>`
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    border-bottom: ${({ $openMenu }) => $openMenu ? '1px solid #c3c3c3' : 'none'};
`;

export const MenuContent = styled.div<{ $openMenu: boolean }>`
    display: ${({ $openMenu }) => $openMenu ? 'block' : 'none'};
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    border-bottom: 1px solid #c3c3c3;
`;

export const LoginContent = styled.div<{ $openMenu: boolean }>`
    display: ${({ $openMenu }) => $openMenu ? 'block' : 'none'};
    box-sizing: border-box;
    padding: 10px 28px;
    width: 100%;
    border-bottom: 1px solid #c3c3c3;
`;

export const ExplorarContent = styled.div<{ $openExplorar: boolean }>`
    height: ${({ $openExplorar }) => $openExplorar ? 'fit-content' : '135px'};
    overflow: hidden;
`;

export const MenuItem = styled.div<{ $openMenu?: boolean }>`
    width: 100%;
    min-height: ${({ $openMenu }) => $openMenu ? '45px' : '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding: 2px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({ $openMenu }) => $openMenu ? 'row' : 'column'};
    align-items: center;
    justify-content: ${({ $openMenu }) => $openMenu ? 'flex-start' : 'center'};

    span {
        font-weight: ${({ $openMenu }) => $openMenu ? '600' : '400'};
        margin-left: ${({ $openMenu }) => $openMenu ? '20px' : 'none'};
        font-size: ${({ $openMenu }) => $openMenu ? '14px' : '12px'};
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