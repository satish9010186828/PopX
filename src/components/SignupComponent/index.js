// Import necessary React hooks and modules
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Import user context to access and update user data globally
import UserContext from '../UserContext'

// Import styled components used for layout and form design
import {
  InnerContainer,
  MobileContainer,
  Title,
  StyledForm,
  StyledButton,
  StyledField,
  SstyledInput,
  SstyledLabel,
  StyledRadioGroup,
  StyledGroupLabel,
  RadioOptions,
  RadioLabel,
  StyledRadio
} from './styledComponent'

const SignupComponent = () => {
  // React Router hook to navigate programmatically
  const navigate = useNavigate()

  // Destructure user data and update function from context
  const { userDataList, changeList } = useContext(UserContext)

  // Local state to store form input values
  const [details, setDetails] = useState({
    FullName: '',
    PhoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    agency: 'No', // default selection
  })

  // Update state when form inputs change
  const handleChange = (e) => {
    const { name, value } = e.target
    setDetails((prev) => ({ ...prev, [name]: value }))
  }

  // Form submission logic
  const handleSubmit = (e) => {
    e.preventDefault()

    // Add the new user details to the existing user data list
    const newList = [...userDataList, details]
    changeList(newList) // Update global state
    navigate('/login') // Navigate to login page
  }

  return (
    <InnerContainer>
      {/* Wrapper for centered mobile layout */}
      <MobileContainer>
        {/* Page title */}
        <Title>Create your <br /> PopX account</Title>

        {/* Form begins */}
        <StyledForm >
          {/* Full Name Input */}
          <StyledField>
            <SstyledLabel htmlFor="FullName">Full Name</SstyledLabel>
            <SstyledInput
              id="FullName"
              name="FullName"
              placeholder="Enter Full Name"
              type="text"
              onChange={handleChange}
              required
            />
          </StyledField>

          {/* Phone Number Input */}
          <StyledField>
            <SstyledLabel htmlFor="PhoneNumber">Phone Number</SstyledLabel>
            <SstyledInput
              id="PhoneNumber"
              name="PhoneNumber"
              placeholder="Enter your Phone Number"
              type="number"
              onChange={handleChange}
              required
            />
          </StyledField>

          {/* Email Input */}
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

          {/* Password Input */}
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

          {/* Company Name Input */}
          <StyledField>
            <SstyledLabel htmlFor="companyName">Company Name</SstyledLabel>
            <SstyledInput
              id="companyName"
              name="companyName"
              placeholder="Enter your companyName"
              type="text"
              onChange={handleChange}
              required
            />
          </StyledField>

          {/* Radio Buttons for Agency selection */}
          <StyledRadioGroup>
            <StyledGroupLabel>Are you an Agency?*</StyledGroupLabel>
            <RadioOptions>
              <RadioLabel>
                <StyledRadio
                  type="radio"
                  name="agency"
                  value="Yes"
                  checked={details.agency === 'Yes'}
                  onChange={handleChange}
                />
                Yes
              </RadioLabel>
              <RadioLabel>
                <StyledRadio
                  type="radio"
                  name="agency"
                  value="No"
                  checked={details.agency === 'No'}
                  onChange={handleChange}
                />
                No
              </RadioLabel>
            </RadioOptions>
          </StyledRadioGroup>

          {/* Submit Button */}
          <StyledButton onClick={handleSubmit} type="submit">Create Account</StyledButton>
        </StyledForm>
      </MobileContainer>
    </InnerContainer>
  )
}

export default SignupComponent
