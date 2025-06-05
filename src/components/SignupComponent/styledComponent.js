import styled from 'styled-components';



export const InnerContainer = styled.div`
  width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: left;
  align-items: left;

  padding: 10px;
  box-sizing: border-box;
  overflow-y: none;
  text-align: left;
`;


export const MobileContainer = styled.div`
  width: 375px;
  margin: 0 auto;
  min-height: 93vh;
  text-align: left;
  display: flex;
  overflow-y:hidden;
  flex-direction: column;
  padding:10px;
  justify-content: start;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  background-color :hsl(180, 28.20%, 92.40%);
  font-family: 'Arial', sans-serif;

  @media (max-width: 375px) {
    width: 100%;
  }
`;
export const Title = styled.h1`
  font-size: 1.8rem;
  text-align : left;
  margin-bottom: 20px;
  
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

export const StyledLabel = styled.label`
  font-size: 1rem;
  margin-top: 8px;
  margin-bottom: 4px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const StyledSelect = styled.select`
  padding: 10px 16px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  background-color: white;
  cursor: pointer;
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
  margin-top: 16px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;



//


export const StyledField = styled.div`
  position: relative;
  margin-bottom: 24px;
`;

export const SstyledLabel = styled.label`
  position: absolute;
  top: -5px;
  background-color :hsl(180, 28.20%, 92.40%);
  left: 14px;
  
  padding: 0 6px;
  font-size: 10px;
  font-weight: 500;
  color: #7c3aed; /* violet-600 */
  z-index: 1;
`;

export const SstyledInput = styled.input`
  width: 80%;
 background-color :hsl(180, 28.20%, 92.40%);
  padding: 10px 14px;
  border: 1px solid #d1d5db; /* gray-300 */
  border-radius: 8px;
  font-size: 10px;
 
  outline: none;

  &:focus {
    border-color: #7c3aed;
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.3);
  }
`;



//

export const StyledRadioGroup = styled.div`
  margin-bottom: 10px;
`;

export const StyledGroupLabel = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: #1f2937; /* gray-800 */
`;

export const RadioOptions = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 8px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #374151; /* gray-700 */
`;

export const StyledRadio = styled.input`
  accent-color: #7c3aed; /* purple-600 */
  width: 16px;
  height: 13px;
`;
