interface GraphqlTypes {
	data: Data
}

interface Data {
	user: User
}

interface User {
	pinnedItems: PinnedItems
}

interface PinnedItems {
	edges: PinnedItemsNode[]
}

interface PinnedItemsNode {
	node: ProjectsNode
}

interface ProjectsNode {
	id: string
	name: string
	url: string
	description: string
	createdAt: string
	homepageUrl: string
	stargazers: { totalCount: number }
	repositoryTopics: Topics
	languages: Languages
}

interface Topics {
	nodes: {
		topic: { id: string; name: string }
	}[]
}

interface Languages {
	nodes: LanguagesNode[]
}

interface LanguagesNode {
	color: string
	id: string
	name: string
}
