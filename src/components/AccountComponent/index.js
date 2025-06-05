import React, { useContext } from 'react'
// Importing the context to access global user data
import UserContext from '../UserContext'

// Importing an icon from Heroicons (used as a camera icon overlay)
import { CameraIcon } from '@heroicons/react/24/solid'

// Importing styled-components for consistent design
import {
  InnerContainer,          // Outer wrapper to center content and give a full-page background
  MobileContainer,         // Mobile layout box (375px width center-aligned container)
  Title,                   // Page heading style
  ProfileWrapper,          // Wrapper around profile image and camera icon
  ProfileImage,            // Styled circular profile image
  DottedLine,              // Styled horizontal dotted line
  InfoText,                // Informational text
  Bar,                     // Top bar styling
 
  UserDetails,             // Wrapper for user name and email
  UserName,                // Styled user full name
  UserEmail,               // Styled user email
  CameraButton,            // Button to overlay camera icon
  ProfileContainer,        // Flex container to hold profile and user details side-by-side
} from './styledComponent'

const AccountComponent = () => {
  // Destructuring the logged-in user from the context
  const { loggedInUser } = useContext(UserContext)

  // If no user is logged in, show a message instead of the account page
  if (!loggedInUser) {
    return (
      <MobileContainer>
        <Title>You are not logged in.</Title>
      </MobileContainer>
    )
  }

  // If user is logged in, render the account details page
  return (
    <InnerContainer>
      <MobileContainer>
        {/* Top Bar */}
        <Bar>
          <Title>Account Settings</Title>
        </Bar>

        {/* Profile Image + Camera Button + User Details */}
        <ProfileContainer>
          <ProfileWrapper>
            <ProfileImage
              src="https://randomuser.me/api/portraits/men/75.jpg" // Static profile image for now
              alt="Profile"
            />
            <CameraButton>
              <CameraIcon /> {/* Camera icon from Heroicons */}
            </CameraButton>
          </ProfileWrapper>

          {/* Displaying the user name and email from context */}
          <UserDetails>
            <UserName>{loggedInUser.FullName}</UserName>
            <UserEmail>{loggedInUser.email}</UserEmail>
          </UserDetails>
        </ProfileContainer>

        {/* Some additional informational text */}
        <InfoText>
          oihoihih pihpihpihi pihpihijhpih jpihpihpih
        </InfoText>

        {/* Decorative dotted line */}
        <DottedLine />
      </MobileContainer>
    </InnerContainer>
  )
}

export default AccountComponent
