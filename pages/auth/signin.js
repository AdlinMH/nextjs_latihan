import React, { useRef } from "react"
import Head from 'next/head'
import { useRouter } from "next/router"

import Layout from '../../components/layout_2'

const SignInPage = () => {
  const router = useRouter()
  const usernameInput = useRef()
  const passwordInput = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const username = usernameInput.current.value
    const password = passwordInput.current.value

    const response = await fetch("/api/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })

    if (response.ok) {
      return router.push("/private")
    }
  }

  return (
    <Layout>
    <Head>
      <title>Signin</title>
    </Head>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username: <input type="text" ref={usernameInput} />
          </label>
        </div>

        <div>
          <label>
            Password: <input type="password" ref={passwordInput} />
          </label>
        </div>

        <div>
          <button type="submit">Sign In</button>
        </div>
      </form>
    </Layout>
  )
}

export default SignInPage