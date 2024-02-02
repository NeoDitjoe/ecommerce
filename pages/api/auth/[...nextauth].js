import NextAuth from 'next-auth'
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