import React,{createContext,useState} from "react"

export const AuthContext=React.createContext()


export const AuthProvider=({children})=>{
const [user,setUser]=useState(JSON.parse(localStorage.getItem('user')) || null)

const login=(username,password)=>{
    const storedUser={username,password}
    setUser(storedUser)
    localStorage.setItem('user', JSON.stringify(storedUser.password))
}

const logout=()=>{
    setUser(null)
localStorage.removeItem('user')
}
return (
    <>
    <AuthContext.Provider value={{user,login,logout}}>
        {children}
    </AuthContext.Provider>
    </>
)
}
export default AuthContext