import styled from 'styled-components';

const blue = {
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};

const grey = {
  100: '#eaeef2',
  300: '#afb8c1',
  900: '#24292f',
};

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
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: #90caf9;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  box-shadow: 0px 4px 30px #24292f;

  &:hover {
    background-color: ${blue[600]};
  }
`;
