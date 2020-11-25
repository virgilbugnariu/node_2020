const { buildSchema } = require('graphql');

const schema = buildSchema(`
type User {
  id: Int
  email: String
  password: String
  createdAt: String
  updatedAt: String
}

type UserProfile {
  id: Int
  userId: Int
  avatar: String
  displayName: String
  createdAt: String
  updatedAt: String
}

type Post {
  id: Int
  userId: Int
  title: String
  body: String
  createdAt: String
  updatedAt: String
}

type Product {
  name: String
  price: String
}

type Query {
 user(userId: Int!): User
 userProfile(userId: Int!): UserProfile
 post(postId: Int!): Post
}

type Mutation {
  createPost(userId: Int, title: String, body: String): Post
}
`);

module.exports = schema;