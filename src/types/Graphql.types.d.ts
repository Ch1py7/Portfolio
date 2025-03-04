export interface GraphqlTypes {
	data: Data
}

export interface Data {
	user: User
	viewer: Viewer
}

export interface User {
	pinnedItems: PinnedItems
}

export interface PinnedItems {
	edges: PinnedItemsEdge[]
	totalCount: number
}

export interface PinnedItemsEdge {
	node: PurpleNode
}

export interface PurpleNode {
	description: string
	homepageUrl: string
	id: string
	languages: Languages
	name: string
	url: string
}

export interface Languages {
	edges: LanguagesEdge[]
}

export interface LanguagesEdge {
	node: FluffyNode
}

export interface FluffyNode {
	color: string
	id: string
	name: string
}

export interface Viewer {
	login: string
}
