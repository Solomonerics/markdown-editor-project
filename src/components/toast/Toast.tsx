import { StyledToastContainer, StyledCard, StyledCardHeader, StyledCardText, StyledButtonContainer, StyledButton } from "./toast.styled";

interface ToastProps {
  backgroundColorMode: 'light' | 'dark';
  documentName: string;
  onCancel: () => void;
  onDelete: () => void;
}

const Toast: React.FC<ToastProps> = ({ backgroundColorMode, documentName, onCancel, onDelete }) => {
  const handleConfirmDelete = () => {
    onDelete(); // Call onDelete function passed from App component
    onCancel(); // Close the Toast after deletion
  };

  return (
    <StyledToastContainer onClick={onCancel}>
      <StyledCard backgroundColorMode={backgroundColorMode} onClick={(e) => e.stopPropagation()}>
        <StyledCardHeader backgroundColorMode={backgroundColorMode}>Delete this document?</StyledCardHeader>
        <StyledCardText backgroundColorMode={backgroundColorMode}>
          Are you sure you want to delete '{documentName}' and its content? <br />This action cannot be reversed.
        </StyledCardText>
        <StyledButtonContainer>
          <StyledButton onClick={handleConfirmDelete}>Confirm & Delete</StyledButton>
        </StyledButtonContainer>
      </StyledCard>
    </StyledToastContainer>
  );
}

export default Toast;
