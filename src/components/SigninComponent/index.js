// Import necessary hooks and modules
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Import the user context to access global user state
import UserContext from '../UserContext'

// Import styled components for UI layout and design
import {
  InnerContainer,
  MobileContainer,
  Title,
  StyledForm,
  StyledButton,
  SstyledInput,
  SstyledLabel,
  StyledField
} from './styledComponent'

const SigninComponent = () => {
  // Destructure user data and login function from context
  const { userDataList, setLoggedInUser } = useContext(UserContext)

  // Local state to store email and password input values
  const [details, setDetails] = useState({ email: '', password: '' })

  // Hook for navigation
  const navigate = useNavigate()

  // Handles input changes and updates the state
  const handleChange = (e) => {
    const { name, value } = e.target
    setDetails((prev) => ({ ...prev, [name]: value }))
  }

  // Form submission logic
  const submitDetails = (e) => {
    e.preventDefault()

    // Check if a user with matching email and password exists
    const match = userDataList.find(
      (user) => user.email === details.email && user.password === details.password
    )

    // If match found, log in the user and navigate to account page
    if (match) {
      setLoggedInUser(match)
      console.log(match)
      navigate('/account')
    } else {
      // If no users exist yet, redirect to signup
      if (userDataList.length === 0) {
        alert("Create an account")
        navigate('/signup')
      } else {
        // Else show mismatch error
        alert("Email and password not matched")
      }
    }
  }

  return (
    // Full-screen layout with background and center alignment
    <InnerContainer>
      {/* Mobile card wrapper */}
      <MobileContainer>
        {/* Page title */}
        <Title>Signin to your PopX account</Title>

        {/* Form starts here */}
        <StyledForm >
          {/* Email input with floating label */}
          <StyledField>
            <SstyledLabel htmlFor="email">Email</SstyledLabel>
            <SstyledInput
              id="email"
              name="email"
              placeholder="Enter your email"
              type="email"
              onChange={handleChange}
              required
            />
          </StyledField>

          {/* Password input with floating label */}
          <StyledField>
            <SstyledLabel htmlFor="password">Password</SstyledLabel>
            <SstyledInput
              id="password"
              name="password"
              placeholder="Enter your password"
              type="password"
              onChange={handleChange}
              required
            />
          </StyledField>

          {/* Submit button */}
          <StyledButton onClick={submitDetails} type="submit">Login</StyledButton>
        </StyledForm>
      </MobileContainer>
    </InnerContainer>
  )
}

export default SigninComponent
