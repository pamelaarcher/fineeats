import {Form, Button} from 'react-bootstrap';
import {
  StyledForm,
  StyledLabel,
  StyledButton
} from "./SignUp.styles"

export function SignUp() {
  return (
    <StyledForm>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <StyledLabel>POSTS DIRECTLY TO YOUR INBOX</StyledLabel>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <StyledButton variant="primary" type="submit">
        Subscribe
      </StyledButton>
    </StyledForm>
  );
}


