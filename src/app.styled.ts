import styled from "styled-components";

export const StyledApp = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 412px){
      margin-bottom: 30px;
  }

  &.light {
    background-color: #fff;
  }

  &.dark {
    background-color: #1d1f22;
  }
`;

export const LeftSidebar = styled.div`
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background: #1d1f22;
  padding: 20px 30px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: flex-start;
  z-index: 100;

  &.active {
    left: 0%;
  }
`;

export const SidebarTitle = styled.h1`
  height: 23px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  line-height: 16px;
  letter-spacing: 1.5px;
  color: #7c8187;
`;

export const CreateDocumentButton = styled.button`
  background: #e46643;
  border-radius: 4px;
  width: 202px;
  height: 40px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s ease-in;

  &:hover {
    background: #f39765;
  }
`;

export const CreatedDocumentsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: flex-start;
`;

export const DocumentContainer = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  border-top: 1px solid #1d1f22;
  border-bottom: 1px solid #1d1f22;
  transition: 0.3s ease-in;

  &:hover {
    border-top-color: rgba(100, 100, 100, 0.7);
    border-bottom-color: rgba(100, 100, 100, 0.7);
    cursor: pointer;
  }
`;

export const DocumentIcon = styled.div`
  width: 13.71px;
  height: 16px;
`;

export const IconImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const DocumentInfo = styled.div`
  display: flex;
  gap: 0px;
  flex-direction: column;
  align-items: flex-start;
  height: 40px;
`;

export const DocumentDate = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  padding: 0;
  margin: 0;
  font-weight: 300;
  font-size: 13px;
  color: #7c8187;
`;

export const DocumentName = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  padding: 0;
  margin: 0;
  font-weight: 400;
  font-size: 15px;
  color: #ffffff;
`;

export const ThemeContainer = styled.div`
  position: absolute;
  width: 104px;
  height: 24px;
  bottom: 10%;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const ToggleButtonContainer = styled.div`
  width: 48px;
  height: 24px;
  background-color: #b4b4b4;
  border-radius: 30px;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const ToggleButton = styled.div`
  width: 24px;
  height: 24px;
  background-color: #bb7e7e;
  border-radius: 100%;
`;

export const ThemeIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;


// Top sidebar
export const TopSidebar = styled.div`
  position: fixed;
  top: 0;
  height: 72px;
  width: 100vw;
  background-color: #2b2d31;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;

  &.moveLeft {
    left: 250px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  @media screen and (max-width: 412px) {
    gap: 0;
  }
`;

export const ToggleMenuIconsContainer = styled.div`
  width: 72px;
  height: 72px;
  background: #35393f;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  @media screen and (max-width: 412px) {
    width: 50px;
    height: 50px;
  }
`;

export const MenuIconImage = styled.img`
  position: absolute;
  width: 30px;
  height: 18px;
`;

export const MarkdownTitle = styled.h1`
  @media screen and (max-width: 412px) {
    display: none;
  }
`;

export const VerticalBar = styled.div`
  width: 1px;
  height: 40px;
  background: #5a6069;

  @media screen and (max-width: 412px) {
    display: none;
  }
`;

export const DocumentTitleContainer = styled.div`
  width: fit-content;
  height: 36px;
  display: flex;
  gap: 10px;
  align-items: center;

  /* padding: 30px; */
  @media screen and (max-width: 412px) {
    margin-left: 10px;
  }
`;

export const DocumentTitleIcon = styled.img`
  width: 13.71px;
  height: 16px;
`;

export const DocumentInfoContainer = styled.div`
  height: 36px;
`;

export const PlaceholderText = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;
  color: #7c8187;
`;

export const DocumentNameText = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
`;

export const DocumentNameInput = styled.input`
  width: fit-content;
  border: none;
  outline: none;
  background: transparent;
  border-bottom: 1px solid rgba(100, 100, 100, 0.7);
  color: #fff;
`;

export const ActionsContainer = styled.div`
  margin-right: 30px;
  width: 200px;
  display: flex;
  gap: 40px;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 412px) {
    max-width: 80px;
    gap: 10px;
    margin-right: 0;
  }
`;

export const DeleteButton = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const DeleteIconImage = styled.img`
  width: 18px;
  height: 20px;
`;

export const SaveButton = styled.div`
  width: 152px;
  height: 40px;
  border-radius: 10px;
  background-color: #e46643;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s ease-in;

  &:hover {
    background-color: #f39765;
  }

  @media screen and (max-width: 412px) {
    width: 40px;
    height: 40px;
    border-radius: 5px;
  }
`;

export const SaveIconImage = styled.img`
  width: 16px;
  height: 16px;
`;

export const SaveButtonText = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;

  @media screen and (max-width: 412px) {
    display: none;
  }
`;

export const MarkdownEditorSection = styled.section`
  position: absolute;
  top: 72px;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  background-color: #2b2d31;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e46643;
    border-radius: 10px;
  }

  &.moveLeft {
    left: 250px;
  }

  @media screen and (max-width: 412px) {
    padding: 0px;
  }
`;

export const TogglePreviewIcon = styled.img`
  position: absolute;
  top: 1.8%;
  right: 5%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  visibility: hidden;

  @media screen and (max-width: 412px){
    visibility: visible;
  }
`