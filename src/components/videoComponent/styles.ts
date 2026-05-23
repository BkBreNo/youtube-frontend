import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 0;
    width: 100%; 
    position: relative;
    cursor: pointer;
    box-sizing: border-box;
`;

export const ImageBanner = styled.img`
    width: 100%;
    aspect-ratio: 16 / 9;
    /* height: 240px; */
    border-radius: 12px;
    z-index: 2;
    margin-bottom: 8px;
    object-fit: cover;
`;

export const TitleContainer = styled.div`
    min-width: 0;
    width: 100%;
    display: flex;
    z-index: 1;
`;

export const ChannelImage = styled.div`
    background-color: beige;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 10px;
    z-index: 1;
`;

export const TextContainer = styled.div`
    min-width: 0;
    width: calc(100% - 55px);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    z-index: 1;
`;

export const Title = styled.span`
    display: block;
    font-weight: 600;
    color: #0f0f0f;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    z-index: 1;
`;

export const TextCard = styled.span`
    color: #8c8c8c;
    font-size: 14px;
    z-index: 1;
`;