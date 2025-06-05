import styled from 'styled-components';


export const InnerContainer = styled.div`
  width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 20px;
  box-sizing: border-box;
  overflow : none;
`;


export const MobileContainer = styled.div`
  width: 375px;
  margin: 0 auto;
  min-height: 93vh;
  display: flex;
  overflow:none;
  flex-direction: column;
  justify-content: start;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
 background-color :hsl(180, 28.20%, 92.40%);
  font-family: 'Arial', sans-serif;

  @media (max-width: 375px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 24px;
  text-align: left;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledInput = styled.input`
  padding: 12px 16px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #007bff;
  }
`;

export const StyledButton = styled.button`
  padding: 12px 16px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;



export const StyledField = styled.div`
  position: relative;
  margin-bottom: 24px;
`;

export const SstyledLabel = styled.label`
  position: absolute;
  top: -5px;
  left: 14px;
  background-color: #fff; /* same as your input/container background */
  padding: 0 6px;
  font-size: 10px;
  font-weight: 500;
  color: #7c3aed; /* violet-600 */
  background-color :hsl(180, 28.20%, 92.40%);
  z-index: 1;
`;

export const SstyledInput = styled.input`
  width: 80%;
  padding: 10px 14px;
  border: 1px solid #d1d5db; /* gray-300 */
  border-radius: 8px;
  font-size: 14px;
  background-color: #fff;
  outline: none;
  background-color :hsl(180, 28.20%, 92.40%);

  &:focus {
    border-color: #7c3aed;
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.3);
  }
`;

