import { StyledPreviewContainer, StyledHeader, StyledHeaderTitle, StyledHeaderIcon, StyledContentSection, StyledOutput } from './Preview.styled';
import DOMPurify from 'dompurify';
import MarkdownIt from 'markdown-it';
import highlightjs from 'markdown-it-highlightjs';
import 'highlight.js/styles/default.css'; // Ensure you import highlight.js styles
import eye from '../../assets/icon-show-preview.svg'

// Initialize markdown-it with highlightjs plugin
const md = new MarkdownIt().use(highlightjs);

interface PreviewProps {
  markdown: string;
  backgroundColorMode: 'light' | 'dark';
  fullPreview: boolean;
  setFullPreview: React.Dispatch<React.SetStateAction<boolean>>;
}

function Preview({ markdown, backgroundColorMode, fullPreview, setFullPreview }: PreviewProps) {
    // Render markdown to HTML
    const html = md.render(markdown);

    // Sanitize the HTML output
    const PurifiedElement = DOMPurify.sanitize(html);

    return (
        <StyledPreviewContainer fullPreview={fullPreview}>
            <StyledHeader backgroundColorMode={backgroundColorMode}>
                <StyledHeaderTitle>Preview</StyledHeaderTitle>
                <StyledHeaderIcon src={eye} alt="" onClick={() => setFullPreview(prev => !prev)} />
            </StyledHeader>
            <StyledContentSection backgroundColorMode = {backgroundColorMode}>
                <StyledOutput dangerouslySetInnerHTML={{ __html: PurifiedElement }} backgroundColorMode={backgroundColorMode}/>
            </StyledContentSection>
        </StyledPreviewContainer>
    );
}

export default Preview;
