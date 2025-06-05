// styledComponent.js
import styled from 'styled-components';



export const InnerContainer = styled.div`
  width: 100%;
  max-height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
 
  padding: 20px;
  box-sizing: border-box;
  overflow : hidden;
`;


export const MobileWrapper = styled.div`
  width: 375px;
  margin: 0 auto;
  min-height: 93vh;
  display: flex;
  overflow:hid;
  flex-direction: column;
  justify-content: end;
  padding : 24px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  background-color:hsl(189, 50.00%, 94.50%);
  font-family: 'Arial', sans-serif;

  @media (max-width: 375px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
  text-align: left;
  color: #222;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 30px;
  line-height: 1.5;
  white-space: pre-line;
  text-align: left;
`;

export const Button = styled.button`
  background-color: #007BFF;
  border: none;
  border-radius: 8px;
  padding: 14px 0;
  margin-bottom: 12px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
