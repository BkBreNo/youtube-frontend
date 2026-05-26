import styled from "styled-components";

export const FilterContainer = styled.div`
    padding: 0px 32px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    box-sizing: border-box;
    gap: 12px;
    height: 55px;
    position: sticky;
    top: 55px;
    background-color: rgba(255,255,255,.95);
    backdrop-filter: blur(10px);
    overflow: hidden;
    z-index: 99;
`;

export const FilterCategory = styled.div`
    width: fit-content;
    padding: 4px 10px;
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    font-weight: 500;
    font-size: 15px;
    white-space: nowrap;
    cursor: pointer;
    box-sizing: border-box;
`;