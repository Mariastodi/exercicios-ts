import { createContext, useEffect, useState } from "react"
import { getAllLocalStorage } from "../services/storage"

interface IAppContext {
    user: string,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void,
    logout: () => void
}
  
export const AppContext = createContext({} as IAppContext)
  
export const AppContextProvider = ({ children }: any) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)

    const logout = () => {
        localStorage.clear() 
        setIsLoggedIn(false)
    }

    useEffect(() => {
      const storage = getAllLocalStorage()
      if(storage){
        try {
          const { login } = JSON.parse(storage)
          setIsLoggedIn(login)
        } catch (e) {
          console.error("Erro ao ler storage", e)
        }
      }
    }, [])

    const user = 'maria'
  
    return (
      <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn, logout }}>
        { children }
      </AppContext.Provider>
    )
}