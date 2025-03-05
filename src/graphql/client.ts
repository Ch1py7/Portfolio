import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
	link: new HttpLink({
		uri: 'https://api.github.com/graphql',
		headers: {
			authorization: `Bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`,
		},
	}),
	cache: new InMemoryCache(),
})
