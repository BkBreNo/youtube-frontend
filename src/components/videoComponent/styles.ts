import styled from "styled-components";

export const ContentEF = styled.div<{ $color: any }>`
    position: absolute;
    width: 0%;
    height: 0%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 12px;
    transition: .3s ease;
    z-index: 1;
    background: ${({ $color }) => $color};
    opacity: 0.1;
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
    box-sizing: border-box;
    cursor: pointer;

    &:hover ${ContentEF}{
        /* background-color: rgba(255,0,0,.03); */
        width: 100%;
        height: 100%;
        transform: translate(-50%, -50%) scale(1.08);
    }
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

export const TitleContainer = styled.div`
    min-width: 0;
    width: 100%;
    display: flex;
    gap: 10px;
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

export const TextContainer = styled.div`
    min-width: 0;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.span`
    display: -webkit-box;
    font-weight: 600;
    color: #0f0f0f;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export const TextCard = styled.span`
    color: #8c8c8c;
    font-size: 14px;
`;