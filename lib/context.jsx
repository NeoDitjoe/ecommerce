import { createContext, useContext, useState } from "react"


const context = createContext(null)

export default function StateContext(){
  return useContext(context)
}

export function ContextProvider(props){
  const { children } = props
  const [open, setOpen] = useState(false);

  return(
    <context.Provider value={{ open, setOpen }}>
      {children}
    </context.Provider>
  )
}