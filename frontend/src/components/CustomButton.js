// src/components/CustomButton.js
import styled from 'styled-components';

const CustomButton = styled.button`
  background-color: #6200ea;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3700b3;
  }
`;

export default CustomButton;
