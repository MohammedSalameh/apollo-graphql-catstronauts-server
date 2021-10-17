import { ApolloServer } from 'apollo-server';
import typeDefs from './schema.js';
import resolvers from './resolvers.js';
import TrackAPI from './datasources/track-api.js';

async function startApolloServer(typeDefs, resolvers) {
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		dataSources: () => {
			return {
				trackAPI: new TrackAPI(),
			};
		},
	});

	const { url, port } = await server.listen(process.env.PORT || 4000);
	console.log(`
      🚀  Server is running
      🔉  Listening on port ${port}
      📭  Query at ${url}
    `);
}

startApolloServer(typeDefs, resolvers);
