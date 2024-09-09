import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
        credentials: {
            email : { label: "Email", type: "email", placeholder: "Your Email", require: true },
            password : { label: "Password", type: "password", placeholder: "Your Password", require: true }
        },

        async authorize(credentials) {
            if(!credentials){
                return null
            }
            return true
        }
    })
  ]

})

export { handler as GET, handler as POST }