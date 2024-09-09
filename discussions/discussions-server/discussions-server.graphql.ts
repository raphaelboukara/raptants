import { gql } from 'graphql-tag';
import { DocumentNode } from 'graphql';
import { GraphQLResolverMap } from '@apollo/subgraph/dist/schema-helper';
import { DiscussionsServer } from './discussions-server.js';

export type ServerSchema = {
  typeDefs: DocumentNode,
  resolvers: GraphQLResolverMap
}

export function discussionsServerSchema(discussionsServer: DiscussionsServer): ServerSchema {
  const typeDefs: any = gql`#graphql
  
  type Discussion {
    title: String
    username: String
  }
  
  type Query {
    listDiscussions: [Discussion]
  }
`;

  const resolvers = {
    Query: {
      listDiscussions: async () => {
        const discussions = await discussionsServer.listDiscussions();
        return discussions.map((discussion) => {
          return discussion.toObject();
        })
      },
    },
  };

  return {
    typeDefs,
    resolvers
  };
} 
