import { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt, GraphQLList } from "graphql";
import UserType from "../Schemas/userType.js";

// Define root queries and mutations
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        // Implement a function to fetch a user by ID from your database
        // Replace this with actual database query
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        // Implement a function to fetch all users from your database
        // Replace this with actual database query
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        email: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        role: { type: GraphQLString },
      },
      resolve(parent, args) {
        // Implement a function to add a user to your database
        // Replace this with actual database query
      },
    },
    updateUser: {
      type: UserType,
      args: {
        id: { type: GraphQLInt },
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        email: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        role: { type: GraphQLString },
      },
      resolve(parent, args) {
        // Implement a function to update a user in your database
        // Replace this with actual database query
      },
    },
    deleteUser: {
      type: UserType,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        // Implement a function to delete a user from your database
        // Replace this with actual database query
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
