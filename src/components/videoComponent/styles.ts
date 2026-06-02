import styled from "styled-components";

export const ContentEF = styled.div<{ $color: any }>`
    position: absolute;
    width: 0%;
    height: 0%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 12px;
    transition: .25s ease;
    z-index: 1;
    background: ${({ $color }) => `hsl(${$color[0]},${$color[1]}%,98.5%)`};
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 0;
    position: relative;
    box-sizing: border-box;
    border-radius: 12px;
    z-index: 2;
`;

export const ImageBanner = styled.img`
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 12px;
    margin-bottom: 8px;
    object-fit: cover;
`;

export const ContentContainer = styled.div`
    min-width: 0;
    width: 100%;
    display: flex;
    gap: 10px;
    box-sizing: border-box;
`;

export const TitleContainer = styled.div`
    min-width: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
    box-sizing: border-box;
`;

export const TextContainer = styled.div`
    min-width: 0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    box-sizing: border-box;
`;

export const ChannelImage = styled.div`
    background-color: beige;
    min-width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`;

export const Title = styled.span`
    display: -webkit-box;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.9);
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    transition: .25s ease;
`;

export const TextCard = styled.span`
    color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
    transition: .25s ease;
`;

export const Icon = styled.svg`
    transition: .25s ease;
    width: 14px;
    path {
        fill: rgba(0, 0, 0, 0.5);
    }
`;

export const Container = styled.div<{ $color: Array<any> }>`
    position: relative;
    width: 100%;
    height: fit-content;
    box-sizing: border-box;
    cursor: pointer;
    transition: .25s ease;
    
    &:hover ${ContentEF}{
        width: 100%;
        height: 100%;
        transform: translate(-50%, -50%) scale(1.1);
    }

    &:hover ${Title}{
        color: ${({ $color }) => `hsl(${$color[0]},${$color[1]}%,30%)`};
    }

    &:hover ${TextCard}{
        color: ${({ $color }) => `hsl(${$color[0]},${$color[1]}%,60%)`};
    }

    &:hover ${Icon}{
        path {
            fill: ${({ $color }) => `hsl(${$color[0]},${$color[1]}%,60%)`};
        }
    }
`;