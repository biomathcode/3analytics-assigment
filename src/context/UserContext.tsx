import React from 'react'

const UserContext = React.createContext({
    user: {},
    isLoggedIn: false,
    setUser: (username:string, isLoggedIn: boolean) => {}, 
    toggleLogin: (state: boolean) => {},
})

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

export default UserContext