import { useRef, useState } from 'react';
import style from './authForm.module.css'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import StateContext from '@/lib/context';
import LoadingBackdrop from '../backdrop/loading';
import { Alert } from '@mui/material';

export default function AuthForm() {

  const [login, setLogin] = useState(false)
  const [errorRes, setErrorRes] = useState(null)
  const { setOpen } = StateContext()

  const router = useRouter()

  const activeBackdrop = router.pathname === '/auth'

  const usernameRef = useRef()
  const passwordRef = useRef()
  const emailRef = useRef()

  async function signUpHandler(e) {
    e.preventDefault()
    const username = usernameRef.current.value
    const email = emailRef.current.value
    const password = passwordRef.current.value
    setErrorRes('')

    try {
      setOpen(true)
      await createUser(username, email, password)
      setOpen(false)
    } catch (error) {
      setErrorRes(error.message)
      setOpen(false)
    }
  }

  async function SignInHandler(e) {
    e.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value
    setErrorRes('')

    try {
      setOpen(true)
      const response = await signIn('credentials', {
        redirect: false,
        email: email,
        password: password,
      });

      if (response.ok) {
        router.push('/')
        setOpen(false)
        emailRef.current.value = ''
        passwordRef.current.value = ''
      }

      if (!response.ok) {
        setOpen(false)
      }
    } catch (error) {
      setOpen(false)
      setErrorRes(error)
    }
  }

  return (
    <div className={style.section}>
      <div className={style.formDiv}>
        <form className={style.form} onSubmit={login ? SignInHandler : signUpHandler}>
          <h2>{login ? 'Sign In' : 'Sign Up'}</h2>
          {login ? '' : <div>
            <label htmlFor="username">Username: </label>
            <input type='text' ref={usernameRef} placeholder='username' required />
          </div>}

          <div>
            <label htmlFor="email">Email:</label>
            <input type='email' ref={emailRef} placeholder='email' required />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input type='password' id='email' ref={passwordRef} placeholder='password' required />
          </div>

          {errorRes && <Alert severity="error">{errorRes}</Alert>}

          <section className={style.submitAndText}>
            <div>
              <button type='submit'>
                submit
              </button>
            </div>

            <div
              onClick={() => setLogin(!login)}
              className={style.account}
            >{login ? 'Create an account' : 'Have an account ?'}</div>
          </section>

          <hr />

        </form>
      </div>

      {activeBackdrop ? <div className={style.background}>

      </div> : ''}

      <LoadingBackdrop />
    </div>
  );
}

async function createUser(username, email, password) {
  const response = await fetch('/api/auth/createUser', {
    method: 'POST',
    body: JSON.stringify({ username: username, email: email, password: password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
}