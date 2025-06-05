import styled from 'styled-components';



export const InnerContainer = styled.div`
  width: 100vw;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:hsl(189, 50.00%, 94.50%);
  padding:36px;
  box-sizing: border-box;
  overflow : none;
`;


export const MobileContainer = styled.div`
  width: 375px;
  margin: 0 auto;
  min-height: 98vh;
  display: flex;
  overflow:none;
  flex-direction: column;
  justify-content: start;
 
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  
  font-family: 'Arial', sans-serif;

  @media (max-width: 375px) {
    width: 100%;
  }
`;
export const Title = styled.h1`
  margin-bottom: 12px;
  text-align: center;
`;

export const Email = styled.p`
  margin-bottom: 24px;
  text-align: center;
  font-size: 16px;
`;


export const InfoText = styled.p`
  text-align: center;
  font-size: 14px;
  color: #666;
`;


export const Bar = styled.div`
background-color: white;
height: 15vh:
width : 100%;
`

export const DetailsContainer = styled.div`


`




export const ProfileContainer = styled.div`
  display: flex;
  padding: 24px;
  position: relative;
`;

export const ProfileImageWrapper = styled.div`
  width: 80px;
  position: relative;
`;



export const UserDetails = styled.div`
  margin-left: 20px;
`;

export const UserName = styled.p`
  font-weight: 500;
`;

export const UserEmail = styled.p`
  font-size: 0.875rem; /* text-sm */
`;



export const ProfileWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
`

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #ccc;
`

export const CameraButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #6c25ff;
  color: white;
  border: none;
  padding: 4px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
  }
`



export const DottedLine = styled.hr`
  border: none;
  border-top: 1px dotted #ccc; /* You can customize color */
  margin: 16px 0;              /* Optional spacing */
`
