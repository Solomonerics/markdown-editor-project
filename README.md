# In-browser Markdown Editor
Welcome to the In-browser Markdown Editor, a web application designed to streamline your markdown editing experience directly within your browser.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

This application provides a user-friendly interface for creating, editing, and managing markdown documents effortlessly. Whether you're writing notes, drafting articles, or preparing documentation, the In-browser Markdown Editor offers essential features to enhance productivity:


- Markdown Editing: Write and format markdown text with ease using a convenient editor interface.

- Live Preview: Instantly preview formatted content alongside your markdown input for a real-time view of how your document will appear.

- Document Management: Save, update, and delete documents with intuitive controls. Each document maintains its name, creation date, and content.

- Responsive Design: Enjoy a responsive layout that adapts seamlessly to various screen sizes, ensuring a consistent user experience across devices.

- Theme Options: Choose between light and dark themes to suit your visual preferences and optimize readability.


Whether you're a developer, writer, or simply enjoy working with markdown, this application provides the tools you need to focus on content creation without distractions.

### The challenge

The challenge was to create an in-browser markdown editor with the following features:

- Markdown Editing: Users should be able to create, edit, update, and delete markdown documents.
- Live Preview: Provide a side-by-side preview of the markdown content as users type.
- Document Management: Implement functionality to name and save documents for future access.
- Responsive Design: Ensure the application is fully responsive, optimizing layout and functionality across different screen sizes and devices.
- Theme Options: Include options for light and dark themes to accommodate user preferences.
- User Experience: Enhance the editor with intuitive controls, clear interface elements, and responsive feedback for a seamless user experience.
- Persistence: Optionally, use localStorage to save document state locally, ensuring that user progress is retained between browser sessions.


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process


### Planning and Design


The project began with thorough planning and design to ensure clarity in functionality and user interface:

- Feature Definition: Defined core features such as markdown editing, live preview, document management, and theme options
 - Wireframing: Created wireframes to visualize the layout and flow of the application, ensuring a user-centric design approach.
- Technology Stack: Selected React.js for front-end development due to its component-based architecture and Typescript to ensure safety.

### Development

During the development phase, attention was given to implementing each feature effectively:

- Component Development: Built reusable components for markdown editor, preview pane, document management sidebar, and theme toggling.
- State Management: Utilized React's useState and useEffect hooks for managing application state, including markdown content, document list, and theme preferences.
- Responsive Design: Implemented responsive CSS using Flexbox to ensure optimal layout across various devices.
- LocalStorage Integration: Incorporated localStorage to persist document state locally, allowing users to resume editing sessions across browser refreshes.

### Testing and Iteration

- User Feedback: Gathered feedback from peers and stakeholders to iterate on UI/UX improvements and address any usability issues.

### Deployment

- Deployment Platform: Deployed the application on Vercel for its seamless integration with React.js, providing fast and reliable hosting.

### Reflection

- Future Enhancements: Identified areas for future enhancement, such as additional markdown syntax support, collaborative editing features, and accessibility improvements.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Typescript](https://www.typescriptlang.org/) - Typescript
- [Styled Components](https://styled-components.com/) - For styles



### What I learned

Throughout the development of this project, I gained valuable insights and experiences across various aspects of web development:


To see how you can add code snippets, see below:

- React State Management with useState: I utilized useState hook extensively to manage the application's state dynamically. Here's an example of using useState to manage sidebar visibility and background color mode:


```
const [isSidebarActive, setIsSidebarActive] = useState(false);
const [backgroundColorMode, setBackgroundColorMode] = useState<'light' | 'dark'>('light');

```

- Effective Use of useEffect Hook: Leveraging the useEffect hook allowed me to perform side effects in functional components. For instance, I utilized it to handle initial document loading from localStorage and manage responsive behavior based on window width:

```
useEffect(() => {
  const savedDocuments = JSON.parse(localStorage.getItem('documents') || '[]');
  setDocuments(savedDocuments);

  const handleResize = () => {
    handleDeviceWidth();
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

```

- Integration of TypeScript: TypeScript was instrumental in defining clear interfaces for document management and enhancing code robustness with type checking:


```
interface Document {
  name: string;
  content: string;
  createdAt: string;
}

```

- Styled Components for Styled UI: Styled Components provided a powerful way to encapsulate styles and manage component-specific styling logic. Here’s an example of using Styled Components for the application's main layout:

```
import { StyledApp } from "./styles/app.styled";

const App = () => {
  return (
    <StyledApp className={backgroundColorMode}>
      {/* Application components */}
    </StyledApp>
  );
};

```



### Continued development

While the current version of the application meets initial requirements and goals, there are several areas for continued development and enhancement:

- Enhanced User Interface: Improve the user interface by refining styles, adding animations, or implementing a more intuitive design.

- Real-time Collaboration: Introduce real-time collaboration features to allow multiple users to edit documents simultaneously.

- Advanced Markdown Features: Expand Markdown editor capabilities with additional formatting options and live preview enhancements.

- Authentication and Authorization: Implement user authentication and authorization to secure documents and enable personalized user experiences.

- Performance Optimization: Optimize the application for speed and efficiency, particularly with large documents or in low-bandwidth environments.


### Useful resources

- [React Documentation](https://legacy.reactjs.org/docs/getting-started.html) - Official documentation for React.js. It's comprehensive and provides in-depth explanations of React concepts and APIs.
- [Typescript Documentation](https://www.typescriptlang.org/docs/) - Official documentation for TypeScript, offering guidance on how to use TypeScript for type-safe JavaScript development.
- [Markdown documentation](https://www.markdownguide.org/) - Markdown API documentation assist me in implementing the markdown API in my project.


## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

