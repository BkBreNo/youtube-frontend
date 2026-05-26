import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    min-width: 0;
    width: 100%;
    height: 280px;
    position: relative;
    cursor: pointer;
    box-sizing: border-box;
    gap: 16px;
    border-radius: 12px;
`;

export const ImageBanner = styled.img`
    aspect-ratio: 16 / 9;
    height: 100%;
    border-radius: 12px;
    z-index: 2;
    object-fit: cover;
`;

export const ChannelContainer = styled.div`
    min-width: 0;
    width: 100%;
    display: flex;
    z-index: 1;
    align-items: center;
    gap: 8px;
    margin: 8px 0;
`;

export const ChannelImage = styled.div`
    background-color: beige;
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    z-index: 1;
    font-size: 12px;
`;

export const TextContainer = styled.div`
    min-width: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    z-index: 1;
    gap: 4px;
`;

export const Title = styled.span`
    display: block;
    font-weight: 600;
    color: #0f0f0f;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    z-index: 1;
    font-size: 18px;
`;

export const TextCard = styled.span`
    color: #8c8c8c;
    font-size: 12px;
    z-index: 1;
`;