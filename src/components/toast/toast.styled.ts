import styled from "styled-components";

export const StyledToastContainer = styled.div`
    position: absolute;
    inset: 0;
    width: 100%; 
    height: 100%;
    background-color: rgba(50, 50, 50, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledCard = styled.div<{ backgroundColorMode: 'light' | 'dark' }>`
    padding: 15px;
    width: 343px;
    height: 218px;
    border-radius: 5px;
    background-color: ${({ backgroundColorMode }) => (backgroundColorMode === 'light' ? '#fff' : '#000')};
`;

export const StyledCardHeader = styled.h1<{ backgroundColorMode: 'light' | 'dark' }>`
    width: 295px; 
    height: 26px;
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    margin: 10px 0;
    color: ${({ backgroundColorMode }) => (backgroundColorMode === 'light' ? '#35393F' : '#fff')};
`;

export const StyledCardText = styled.p<{ backgroundColorMode: 'light' | 'dark' }>`
    width: 295px;
    height: 72px;
    margin: 10px 0;
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: ${({ backgroundColorMode }) => (backgroundColorMode === 'light' ? '#7C8187' : '#C1C4CB')};
`;

export const StyledButtonContainer = styled.div``;

export const StyledButton = styled.button`
    width: 295px; 
    height: 40px;
    background: #E46643; 
    border-radius: 4px;
    border: none;
    outline: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #FFFFFF;
    transition: 0.3s ease-in;

    &:hover {
        cursor: pointer;
        background-color: #F39765;
    }
`;
