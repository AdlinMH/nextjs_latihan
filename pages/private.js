import React from "react"
import { withIronSession } from "next-iron-session"

import Layout from '../components/layout_2'

const PrivatePage = ({ user }) => (
  <Layout>
    <h1>Hello {user.username}</h1>
    <p>Secret things live here...</p>
  </Layout>
)

export const getServerSideProps = withIronSession(
  async ({ req, res }) => {
    const user = req.session.get("user");

    if(!user) {
      res.statusCode = 404
      res.end()
      return { props: {} }
    }

    return {
      props: { user }
    }
  },
  {
    cookieName: "MYSITECOOKIE",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false
    },
    password: process.env.APPLICATION_SECRET
  }
)

export default PrivatePage;
