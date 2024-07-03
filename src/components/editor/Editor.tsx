import React from 'react';
import { StyledEditorContainer, StyledHeader, StyledSection, StyledTextArea } from './editor.styled';

interface EditorProps {
  markdown: string;
  setMarkdown: (markdown: string) => void;
  backgroundColorMode: 'light' | 'dark';
  fullPreview: boolean;
}

const Editor: React.FC<EditorProps> = ({ markdown, setMarkdown, backgroundColorMode, fullPreview }) => {
  return (
    <StyledEditorContainer fullPreview={fullPreview}>
      <StyledHeader backgroundColorMode={backgroundColorMode}>
        Markdown
      </StyledHeader>
      <StyledSection backgroundColorMode={backgroundColorMode}>
        <StyledTextArea
          backgroundColorMode={backgroundColorMode}
          name="markdown"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
      </StyledSection>
    </StyledEditorContainer>
  );
};

export default Editor;
