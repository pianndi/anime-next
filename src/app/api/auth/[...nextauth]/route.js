import NextAuth from "next-auth"
import githubAuth from "next-auth/providers/github"
import prisma from "@/libs/prisma"

export const authOption = {
  providers: [
    githubAuth({
      clientId: process.env.AUTH_CLIENT_ID,
      clientSecret: process.env.AUTH_CLIENT_SECRET
    })
  ], 
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({user:{email}}){
      const exist = await prisma.user.findUnique({where:{email}})
      if (!exist) await prisma.user.create({data:{email}})
      return true
    }
  }
}
const handler = NextAuth(authOption)

export {handler as GET, handler as POST} 