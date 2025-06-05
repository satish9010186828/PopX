// Importing navigation hook from React Router
import { useNavigate } from 'react-router-dom'

// Importing styled components for layout and design
import { InnerContainer, MobileWrapper, Title, Paragraph, Button } from './styledComponent'

const HomeComponent = () => {
  // Hook to programmatically navigate between routes
  const navigate = useNavigate()

  return (
    // Outer full-screen wrapper for background and centering
    <InnerContainer>
      {/* Centered mobile-sized card/container */}
      <MobileWrapper>
        {/* Title text at the top */}
        <Title>Welcome to PopX</Title>

        {/* Introductory text / message */}
        <Paragraph>
          weqwe, qweqe, qweqwe, <br /> wefe, vfgr, adeqf
        </Paragraph>

        {/* Primary call-to-action button to go to Signup page */}
        <Button onClick={() => navigate('/signup')}>Create Account</Button>

        {/* Secondary button for existing users to login */}
        <Button onClick={() => navigate('/login')}>Already Registered? Login</Button>
      </MobileWrapper>
    </InnerContainer>
  )
}

export default HomeComponent
