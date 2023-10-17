import styled from 'styled-components';

export const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const ContactLabel = styled.label`
  color: #555;
  font-size: 16px;
`;
export const ContactInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;

  &:focus + ${ContactLabel}, &:valid + ${ContactLabel} {
    top: -10px;
    color: #555;
    font-size: 12px;
  }
`;
export const AddContactButton = styled.button`
  margin: 0 auto;
  padding: 8px;
  width: 200px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1.2px;
  color: #555;
  border: 1px solid #ccc;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #fcfcfc;
    background-color: #3994c879;
    border-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;
