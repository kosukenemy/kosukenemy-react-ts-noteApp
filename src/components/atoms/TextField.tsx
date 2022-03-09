import styled from 'styled-components';
import { RefObject } from '../../types';

type TextFieldType = {
  type: "text" | "textarea";
  name: string;
  title: RefObject<HTMLInputElement> | RefObject<HTMLTextAreaElement>;
  displayName: string;
  value?: string | undefined
}

const TextField = (
  { type, 
    name, 
    title, 
    displayName,
    value
  }: TextFieldType) => {
  return (
    <StyleField>
      <StyleLabel htmlFor={name}>{displayName}</StyleLabel>
      { type === "text" && <StyledInputText id={name} type={type} ref={title} defaultValue={value} required/> }
      { type === "textarea" && <StyledTextArea name={name} id={name} ref={title} defaultValue={value} required></StyledTextArea> }
    </StyleField>
  )
}

export default TextField

const StyleField = styled.fieldset`
  width: 460px;
  border: none;
  padding: 0;
`;

const StyledInputText = styled.input`
  width: 100%; 
  padding: 10px 15px; 
  font-size: 16px;
  border-radius: 3px; 
  border: 1px solid #ddd; 
  box-sizing: border-box;
`;

const StyledTextArea = styled.textarea`
  width: 100%; 
  min-height: 400px;
  padding: 10px 15px; 
  font-size: 16px;
  border-radius: 3px; 
  border: 1px solid #ddd; 
  box-sizing: border-box;
`;

const StyleLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #707070;
  display: block;
  margin: 10px auto 5px;
`;