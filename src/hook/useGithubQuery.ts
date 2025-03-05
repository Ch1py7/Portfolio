import { type DocumentNode, type QueryHookOptions, useQuery } from '@apollo/client'
import { client } from '../graphql/client'

export const useGithubQuery = <T>(
	query: DocumentNode,
	options?: Omit<QueryHookOptions, 'client' | 'fetchPolicy'>
) => {
	return useQuery<T>(query, {
		...options,
		client,
		fetchPolicy: 'cache-first',
	})
}
