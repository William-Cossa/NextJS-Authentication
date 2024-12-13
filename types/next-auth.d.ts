import NextAuth from 'next-auth'

declare module 'next-auth' {
	interface Session {
		user: {
			role: string
			email: string
			username: string
		}
	}
}