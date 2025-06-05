import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import GlobalStyle from './components/GlobalStyle'
import HomeComponent from './components/HomeComponent'
import SigninComponent from './components/SigninComponent'
import SignupComponent from './components/SignupComponent'
import AccountComponent from './components/AccountComponent'
import UserContext from './components/UserContext'
import ProtectedRoute from './components/ProtectedRoute' // ✅ New file

function App() {
  const [userDataList, setList] = useState([])
  const [loggedInUser, setLoggedInUser] = useState(null)

  const changeList = (newList) => {
    setList(newList)
  }

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{ userDataList, changeList, loggedInUser, setLoggedInUser }}
      > <GlobalStyle/>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/login" element={<SigninComponent />} />
          <Route path="/signup" element={<SignupComponent />} />
          <Route
            path="account"
            element={
              <ProtectedRoute>
                <AccountComponent />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
