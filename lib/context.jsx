import { createContext, useContext, useState } from "react"


const context = createContext(null)

export default function StateContext(){
  return useContext(context)
}

export function ContextProvider(props){
  const { children } = props
  const [open, setOpen] = useState(false);
  const [theme, setTheme ] = useState(false)

  return(
    <context.Provider value={{ theme, setTheme, open, setOpen }}>
      {children}
    </context.Provider>
  )
}