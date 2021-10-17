const { gql } = require('apollo-server');

typeDefs = gql`
	type Query {
		"Get tracks array for homepage grid"
		tracksForHome: [Track!]!

		track(id: ID!): Track
	}
	"A track is a group of Modules that teaches about a specific topic"
	type Track {
		id: ID!
		"The track's title"
		title: String!
		"The track's main author"
		author: Author!
		"The track's main illustration to display in track card or track page detail"
		thumbnail: String
		"The track's approximate length to complete, in minutes"
		length: Int @deprecated(reason: "use durationInSeconds")
		"The number of modules this track contains"
		modulesCount: Int
		"The track's complete description, can be in Markdown format"
		description: String
		"The number of times a track has been viewed"
		numberOfViews: Int
		"The track's complete array of modules"
		modules: [Module!]!
		"The track's full duration, in seconds"
		durationInSeconds: Int
	}

	"A Module is a single unit of teaching. Multiple Modules compose a Track"
	type Module {
		id: ID!
		"The Module's title"
		title: String!
		"The Module's length in minutes"
		length: Int @deprecated(reason: "use durationInSeconds")
		"The module's video duration, in seconds"
		durationInSeconds: Int
	}

	"Author of a complete Track"
	type Author {
		id: ID!
		"Author's first and last name"
		name: String!
		"Author's profile picture url"
		photo: String
	}

	type Query {
		spaceCats: [SpaceCat]
	}

	type SpaceCat {
		id: ID!
		name: String!
		age: Int!
		missions: [Mission]
	}

	type Mission {
		id: ID!
		name: String!
		description: String!
	}

	type Mutation {
		incrementTrackViews(id: ID!): IncrementTrackViewsResponse
	}

	type IncrementTrackViewsResponse {
		"Similar to HTTP status code, represents the status of the mutation"
		code: Int!
		"Indicates whether the mutation was successful"
		success: Boolean!
		"Human-readable message for the UI"
		message: String!
		"Newly updated track after a successful mutation"
		track: Track
	}
`;

module.exports = typeDefs;
