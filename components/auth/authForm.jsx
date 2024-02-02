// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useRef } from 'react';

export default function AuthForm() {

  const usernameRef = useRef()
  const passwordRef = useRef()
  const emailRef = useRef()

  function signUpHandler(e){
    e.preventDefault()
    console.log(usernameRef.current.value)
    console.log(passwordRef.current.value)
    console.log(emailRef.current.value)
  }

  return (
    <Box
      sx={{
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': { width: '25ch' },
      }}
    >

      <form>
        <input type='text' ref={usernameRef}/>
        <input type='email' ref={emailRef} />
        <input type='password' ref={passwordRef} />

        <button type='submit' onClick={signUpHandler}>
          submit
        </button>
      </form>
    </Box>
  );
}