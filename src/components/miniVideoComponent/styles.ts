import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    min-width: 0;
    width: 100%;
    height: 100px;
    position: relative;
    cursor: pointer;
    box-sizing: border-box;
    gap: 8px;
    border-radius: 12px;
`;

export const ImageBanner = styled.img`
    aspect-ratio: 16 / 9;
    height: 100%;
    border-radius: 12px;
    z-index: 2;
    object-fit: cover;
`;

export const TextContainer = styled.div`
    min-width: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const Title = styled.span`
    font-size: 16px;
    display: -webkit-box;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.9);
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export const TextCard = styled.span`
    color: #8c8c8c;
    font-size: 12px;
`;