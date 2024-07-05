import styled from "styled-components";

export const StyledEditorContainer = styled.section<{ fullPreview: boolean }>`
    width: ${({ fullPreview }) => (fullPreview ? "0" : "50vw")};
    border-right: 1px solid #E4E4E4;
    height: 100%;
    overflow: hidden;

    @media screen and (max-width: 835px) {
    border-right: 2px solid #E4E4E4;
    }

    @media screen and (max-width: 412px) {
        width: 100vw;
        height: 100vh;
        border: none;
    }
`;

export const StyledHeader = styled.h1<{ backgroundColorMode: 'light' | 'dark' }>`
    font-size: 20px;
    text-transform: uppercase;
    width: 100%;
    height: 42px;
    padding-left: 30px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    background-color: ${({ backgroundColorMode }) => (backgroundColorMode === 'light' ? '#979797' : '#979797')};

    @media screen and (max-width: 412px) {
        width: 100vw;
        padding-left: 15px;
    }
`;

export const StyledSection = styled.section<{ backgroundColorMode: 'light' | 'dark' }>`
    width: 100%;
    padding: 0 20px;
    height: 90vh;
    overflow: hidden;

    background-color: ${({ backgroundColorMode }) => (backgroundColorMode === 'light' ? '#ffffff' : '#1D1F22')};
    color: ${({ backgroundColorMode }) => (backgroundColorMode === 'light' ? '#000000' : '#ffffff')};

    @media screen and (max-width: 835px) {
        height: 88.5vh;
        padding: 0;
    }

    @media screen and (max-width: 412px) {
        width: 100vw;
        height: 79.5vh;
        padding: 0;
    }
`;

export const StyledTextArea = styled.textarea<{ backgroundColorMode: 'light' | 'dark' }>`
    width: 100%;
    height: 100%;
    margin: 10px;
    margin-bottom: 100px;
    line-height: 30px;
    border: none;
    outline: none;

    background-color: ${({ backgroundColorMode }) => (backgroundColorMode === 'light' ? '#ffffff' : '#1D1F22')};
    color: ${({ backgroundColorMode }) => (backgroundColorMode === 'light' ? '#000000' : '#ffffff')};

    @media screen and (min-width: 720px) {
        width: 100%;
        margin: 0;
        padding: 10px;
        height: 100%;
    }

    @media screen and (max-width: 412px) {
        width: 100%;
    }
`;
