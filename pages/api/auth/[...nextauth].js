import { verifyPasword } from '@/lib/database/auth/encrypr';
import { client } from '@/lib/database/client';
import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({

  session: {
    jwt: true

  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_KEY,
    }),

    CredentialsProvider({

      async authorize(credentials, req) {
        const userscollection = client.db('auth').collection('users')
        const user = await userscollection.findOne({ email: credentials.email })

        if (!user) {
          throw new Error('User not found!')
        }

        const isValid = await verifyPasword(credentials.password, user.password)

        if (!isValid) {
          throw new Error('Incorrect Password')
        }
        return { email: [user.email, user.username] }
      }
    })
  ],

  callbacks: {
    async signIn({ account, profile }) {
      return true // Do different verification for other providers that don't have `email_verified`
    },
  },

  secret: process.env.SECRET,
})

// const handler = NextAuth(authOptions)
// export { handler as Get, handler as POST}