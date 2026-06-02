import styled from "styled-components";

export const VideoContent = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 79vh;
    background-color: black;
`;

export const Video = styled.video`
    height: 100%;
`;

export const Content = styled.div<{ $width?: string, $flexDirection?: string, $padding?: string, $gap?: string, $justify?: string }>`
    display: flex;
    flex-direction: ${({ $flexDirection }) => $flexDirection ? $flexDirection : 'row'};
    width: ${({ $width }) => $width ? $width : '100%'};
    justify-content: ${({ $justify }) => $justify ? $justify : 'center'};
    padding: ${({ $padding }) => $padding ? $padding : 0};
    gap:${({ $gap }) => $gap ? $gap : 0};
    box-sizing: border-box;
`;

export const Title = styled.h1`
    font-weight: 600;
    color: #0f0f0f;
    font-size: 24px;
    margin: 0;
    padding: 0;
`;

export const ImageBanner = styled.img`
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 12px;
    margin-bottom: 8px;
    object-fit: cover;
`;

export const BoldText = styled.span`
    font-weight: 600;
    color: #0f0f0f;
    font-size: 16px;
    margin: 0;
    padding: 0;
`;

export const Text = styled.span`
    color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
`;

export const Icon = styled.svg`
    transition: .25s ease;
    width: 14px;
    path {
        fill: rgba(0, 0, 0, 0.5);
    }
`;

export const ButtonContainer = styled.div<{ $margin?: string, $gap?: string, $padding?: string, $width?: string }>`
    margin: ${({ $margin }) => $margin ? $margin : 0};
    gap: ${({ $gap }) => $gap ? $gap : 0};
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    padding: ${({ $padding }) => $padding ? $padding : '0px 12px'};
    background-color: #f2f2f2;
    width: ${({ $width }) => $width ? $width : 'fit-content'};
    height: 36px;

    &:hover {
        background-color: #E7E7E7;
    }
`;

export const SvgIcon = styled.svg`
    width: 24px;
`;

export const ButtonIcon = styled.img`
    width: 24px;
`;

export const ButtonText = styled.span`
    color: rgba(0, 0, 0, 1);
    font-size: 15px;
    font-weight: 600;
`;

export const ButtonSubscribe = styled.div<{ $margin?: string }>`
    margin: ${({ $margin }) => $margin ? $margin : 0};
    width: fit-content;
    height: 36px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    padding: 0px 12px;
    background: linear-gradient( #2a2a2a, #000000);
    white-space: nowrap;

    font-weight: 600;
    color: white;
    font-size: 15px;
    
    &:hover {
        background: linear-gradient( #3e3e3e, #000000);
    }
`;

export const LikeContainer = styled.div`
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    height: 36px;
    background-color: #f2f2f2;
`;


export const LikeContent = styled.div<{ $gap?: string, $padding?: string, $borderRadius: string }>`
    gap: ${({ $gap }) => $gap ? $gap : 0};
    border-radius: ${({ $borderRadius }) => $borderRadius ? $borderRadius : 0};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    padding: ${({ $padding }) => $padding ? $padding : '0px 12px'};
    background-color: #f2f2f2;
    width: fit-content;
    height: 100%;

    &:hover {
        background-color: #E7E7E7;
    }
`;

export const DescriptionContent = styled.div<{ $color: Array<any> }>`
    width: 100%;
    border-radius: 12px;
    /* height: 10px; */
    background: #f2f2f2;
    box-sizing: border-box;
    padding: 10px 8px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    &:hover {
        background: ${({ $color }) => `hsl(${$color[0]},${$color[1]}%,98.5%)`};
    }
`;

