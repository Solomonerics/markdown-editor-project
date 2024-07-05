import styled from "styled-components";

export const StyledPreviewContainer = styled.section<{ fullPreview: boolean }>`
    width: ${({ fullPreview }) => (fullPreview ? "100vw" : "50vw")};
    height: 100vh;
    overflow: hidden;

    @media screen and (max-width: 412px) {
        width: 100%;
        height: 100%;
    }
`;

export const StyledHeader = styled.div<{ backgroundColorMode: 'light' | 'dark' }>`
    width: 100%;
    height: 42px;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ backgroundColorMode }) => (backgroundColorMode === 'light' ? '#979797' : '#979797')};

    @media screen and (max-width: 412px) {
        width: 100vw;
        padding: 0 15px;
    }
`;

export const StyledHeaderTitle = styled.h1`
    font-size: 20px;
    text-transform: uppercase;
`;

export const StyledHeaderIcon = styled.img`
    width: 25px;
    height: 20px;
    cursor: pointer;

    @media screen and (max-width: 412px) {
        display: none;
    }
`;

export const StyledContentSection = styled.section<{backgroundColorMode: 'light' | 'dark'}>`
    width: 100%;
    padding: 0 20px 20px 20px;
    height: 100%;
    overflow: hidden;
    background-color: ${({ backgroundColorMode }) => (backgroundColorMode === 'light' ? '#ffffff' : '#1D1F22')};
    color: ${({ backgroundColorMode }) => (backgroundColorMode === 'light' ? '#000000' : '#ffffff')};

    @media screen and (max-width: 412px) {
        width: 100vw;
        height: 79.5vh;
        padding: 0;
    }
`;

// markdown ouput container

export const StyledOutput = styled.div<{backgroundColorMode: 'light' | 'dark'}>`
    word-wrap: break-word;
    width: 100%;
    padding: 5px 0;
    height: 85%;
    margin-top: 0px;
    line-height: 30px;
    overflow: auto;

    @media screen and (max-width: 412px) {
        height: 100%;
        width: 100%;
        padding: 10px;
    }

    code {
        background-color: ${({ backgroundColorMode }) => (backgroundColorMode === 'light' ? '#979797' : '#2B2D31')};
        color: ${({ backgroundColorMode }) => (backgroundColorMode === 'light' ? '#000' : '#fff')};
        border-radius: 4px;
    }


    blockquote {
        background-color: #979797;
        border-left: 5px solid #e46643;
        padding: 10px;
        margin: 10px 0;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        font-style: italic;
        color: ${({ backgroundColorMode }) => (backgroundColorMode === 'light' ? '#fff' : '#000')};
    }
`;
