import styled from 'styled-components';

export const ContactSpan = styled.span`
  font-weight: 500;
`;
export const ContactLink = styled.a`
  margin-left: 24px;
  height: 20px;
  color: #464748;
  text-decoration: none;
  border-bottom: solid 1px transparent;
  transition: all 0.3s;
  &:hover {
    color: #3994c8;
    border-color: #464748;
  }
`;
export const ContactDeleteBtn = styled.button`
  display: inline-block;
  margin-left: 40px;
  padding: 6px;
  font-weight: 600;
  letter-spacing: 1.2px;
  color: #555;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: #fcfcfc;
    background-color: #e3414179;
    border-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;
