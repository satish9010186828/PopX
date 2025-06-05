import React from 'react'

const UserContext = React.createContext({
  userDataList: [],
  loggedInUser: null,
  changeList: () => {},
  setLoggedInUser: () => {},
})

export default UserContext
