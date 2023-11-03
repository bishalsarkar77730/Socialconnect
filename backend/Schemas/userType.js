import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql";

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLInt },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    email: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: GraphQLString },
  },
});

module.exports = UserType;
