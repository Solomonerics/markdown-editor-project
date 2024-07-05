import { useState, useEffect } from "react";
import Editor from "./components/editor/Editor";
import Preview from "./components/preview/preview";
import IconDocument from './assets/icon-document.svg';
import IconDarkMode from './assets/icon-dark-mode.svg';
import IconLightMode from './assets/icon-light-mode.svg';
import eye from './assets/icon-show-preview.svg';
import IconMenu from './assets/icon-menu.svg';
import IconClose from './assets/icon-close.svg';
import DeleteIcon from './assets/icon-delete.svg';
import SaveIcon from './assets/icon-save.svg';
import Toast from "./components/toast/Toast";
import {
  StyledApp, LeftSidebar, SidebarTitle, CreateDocumentButton, CreatedDocumentsContainer, DocumentContainer, DocumentIcon, IconImage, DocumentInfo, DocumentDate, DocumentName, ThemeContainer,ToggleButtonContainer, ToggleButton, ThemeIcon, TopSidebar, LeftSection, ToggleMenuIconsContainer, MenuIconImage, MarkdownTitle, VerticalBar, DocumentTitleContainer, DocumentTitleIcon, DocumentInfoContainer, PlaceholderText, DocumentNameText, DocumentNameInput, ActionsContainer, DeleteButton, DeleteIconImage, SaveButton, SaveIconImage, SaveButtonText, MarkdownEditorSection, TogglePreviewIcon
} from './app.styled';

interface Document {
  name: string;
  content: string;
  createdAt: string;
}



function App() {
  



const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [backgroundColorMode, setBackgroundColorMode] = useState<'light' | 'dark'>('light');
  const [markdown, setMarkdown] = useState('');
  const [fileName, setFileName] = useState('undefined document');
  const [isEdit, setIsEdit] = useState(false);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [fullPreview, setFullPreview] = useState(false);

  // mobile view states
  const [hidePreview, setHidePreview] = useState(false);
  const [hideEditor, setHideEditor] = useState(false);

const handleDeviceWidth = () => {
    if (window.innerWidth <= 412) {
      setHidePreview(true);
      setHideEditor(false)
    } else {
      setHidePreview(false);
    }
  };

  useEffect(() => {
    // Load documents from localStorage when the component mounts
    const savedDocuments = JSON.parse(localStorage.getItem('documents') || '[]');
    setDocuments(savedDocuments);

    // Handle the initial device width check
    handleDeviceWidth();

    // Add event listener for window resize to handle device width changes
    const handleResize = () => {
      handleDeviceWidth();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs once on mount



  const handleSaveDocument = () => {
    const newDocument: Document = {
      name: fileName,
      content: markdown,
      createdAt: new Date().toLocaleString()
    };
    const existingDocumentIndex = documents.findIndex(doc => doc.name === fileName);

    if (existingDocumentIndex !== -1) {
      const confirmReplace = window.confirm('Document already exists. Do you want to replace it?');
      if (!confirmReplace) return;

      const updatedDocuments = [...documents];
      updatedDocuments[existingDocumentIndex] = newDocument;
      setDocuments(updatedDocuments);
      localStorage.setItem('documents', JSON.stringify(updatedDocuments));
    } else {
      const updatedDocuments = [...documents, newDocument];
      setDocuments(updatedDocuments);
      localStorage.setItem('documents', JSON.stringify(updatedDocuments));
    }

    alert('Document saved successfully!');
    setFileName('undefined document');
    setMarkdown('');
  };

  const handleLoadDocument = (name: string) => {
    const documentToLoad = documents.find(doc => doc.name === name);
    if (documentToLoad) {
      setFileName(documentToLoad.name);
      setMarkdown(documentToLoad.content);
    }
  };

  const handleCreateDocument = () => {
    setFileName('New Document');
    setMarkdown('');
  };

  const handleDeleteDocument = () => {
    if (!selectedDocument) return;

    const updatedDocuments = documents.filter(doc => doc.name !== selectedDocument.name);
    setDocuments(updatedDocuments);
    localStorage.setItem('documents', JSON.stringify(updatedDocuments));
    setSelectedDocument(null); 
  };

  const handleChangeName = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsEdit(false);
    }
  };

  const openDeleteConfirmation = (name: string) => {
    const documentToDelete = documents.find(doc => doc.name === name);
    if (documentToDelete) {
      setSelectedDocument(documentToDelete);
    }

    setMarkdown('');
  };

  const closeDeleteConfirmation = () => {
    setSelectedDocument(null);
  };

  return (
    <StyledApp className= {backgroundColorMode}>
      

{/* Left sidebar */}
      <LeftSidebar className={`${isSidebarActive ? 'active' : ''}`}>
        <SidebarTitle>My Documents</SidebarTitle>
        <CreateDocumentButton onClick={handleCreateDocument}>+ New Document</CreateDocumentButton>
        <CreatedDocumentsContainer>
          {documents.map(doc => (
            <DocumentContainer key={doc.name} onClick={() => handleLoadDocument(doc.name)}>
              <DocumentIcon>
                <IconImage src={IconDocument} alt="Document Icon" />
              </DocumentIcon>
              <DocumentInfo>
                <DocumentDate>
                  {doc.createdAt}
                </DocumentDate>
                <DocumentName>{doc.name}</DocumentName>
              </DocumentInfo>
            </DocumentContainer>
          ))}
        </CreatedDocumentsContainer>
        <ThemeContainer>
          <ThemeIcon src={IconDarkMode} alt="Dark Mode Icon" className="moon"  onClick={() => setBackgroundColorMode(curr => (curr === 'light' ? 'dark' : 'dark'))}/>
          <ToggleButtonContainer>
            <ToggleButton style={{translate: backgroundColorMode === 'light' ? '100%' : '0'}}/>
          </ToggleButtonContainer>
          <ThemeIcon src={IconLightMode} alt="Light Mode Icon" className="sun"  onClick={() => setBackgroundColorMode(curr => (curr === 'dark' ? 'light' : 'light'))}/>
        </ThemeContainer>
      </LeftSidebar>

      {/* Top sidebar */}
      <TopSidebar className={`${isSidebarActive ? 'moveLeft' : ''}`}>
        <LeftSection>
          <ToggleMenuIconsContainer onClick={() => setIsSidebarActive(prev => !prev)}>
            {isSidebarActive ? <MenuIconImage src={IconClose} alt="Close Icon" /> : <MenuIconImage src={IconMenu} alt="Menu Icon" />}
          </ToggleMenuIconsContainer>
          <MarkdownTitle>
            MARKDOWN
          </MarkdownTitle>
          <VerticalBar/>
          <DocumentTitleContainer>
            <DocumentTitleIcon src={IconDocument} alt="Document Icon" />
            <DocumentInfoContainer>
              <PlaceholderText>document name</PlaceholderText>
              <DocumentNameText>
                {!isEdit ? (
                  <p onClick={() => setIsEdit(true)}>{fileName}</p>
                ) : (
                  <DocumentNameInput
                    value={fileName}
                    onChange={(e) => setFileName(e.target.value)}
                    onKeyDown={handleChangeName}
                    className="setFileName"
                  />
                )}
              </DocumentNameText>
            </DocumentInfoContainer>
          </DocumentTitleContainer>
        </LeftSection>
        {/* Delete and save buttons */}
        <ActionsContainer>
          <DeleteButton onClick={() => openDeleteConfirmation(fileName)}>
            <DeleteIconImage src={DeleteIcon} alt="Delete Icon" />
          </DeleteButton>
          <SaveButton onClick={handleSaveDocument}>
            <SaveIconImage src={SaveIcon} alt="Save Icon" />
            <SaveButtonText>Save Document</SaveButtonText>
          </SaveButton>
        </ActionsContainer>
      </TopSidebar>

      <img src= {eye} alt=""  className="showFullPreview" onClick={() => {setFullPreview(prev => !prev); setHidePreview(prev => !prev); setHideEditor(prev => !prev)}}/>

      {/* Markdown editor */}
      <MarkdownEditorSection className={`${isSidebarActive ? 'moveLeft' : ''}`} id={backgroundColorMode}>
        <TogglePreviewIcon src= {eye} alt="" onClick={() => {setHidePreview(prev => !prev); setHideEditor(prev => !prev)} }/>
        {hideEditor === false && <Editor fullPreview = {fullPreview} markdown={markdown} setMarkdown={setMarkdown} backgroundColorMode={backgroundColorMode} />}
        {hidePreview === false && <Preview fullPreview = {fullPreview} setFullPreview = {setFullPreview} markdown={markdown} backgroundColorMode={backgroundColorMode} />}
      </MarkdownEditorSection>

      {/* Toast for delete confirmation */}
      {selectedDocument && (
        <Toast
          backgroundColorMode={backgroundColorMode}
          documentName={selectedDocument.name}
          onCancel={closeDeleteConfirmation}
          onDelete={handleDeleteDocument} // Pass handleDeleteDocument as onDelete
        />
      )}

    </StyledApp>
  );
}

export default App;
