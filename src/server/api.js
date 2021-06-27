const { ApolloServer, gql } = require("apollo-server");

const staff = [
  {
    id: 1,
    name: "Mercy Mukoya",
  },
  {
    id: 2,
    name: "Stefanie Tomsett",
  },
  {
    id: 3,
    name: "Kennedy Ayako",
  },
  {
    id: 4,
    name: "Faith kityo",
  },
];

//list of visited stations
const visits = [
  {
    id: 1,
    name: "Mkuru kwa Njenga",
  },
  {
    id: 2,
    name: "Kiambu",
  },
  {
    id: 3,
    name: "Kibera",
  },
  {
    id: 4,
    name: "mkuru kwa apollo",
  },
];

//list fo card metrics
const metrics = [
  {
    id: 1,
    title: "Foot fall",
    amount:60 ,
    percentage: 0.2,
    caption: "patients",
  },
  {
    id: 2,
    title: "Patient Satisfaction",
    amount: 30 ,
    percentage:1.3,
    caption: "NPS",
  },
  {
    id: 3,
    title: "Revenue",
    amount: 42,
    percentage:0.2,
    caption: "kenyan shillings",
  },
];

// The GraphQL schema
const typeDefs = gql`
  type Staff {
    id: ID!
    name: String!
  }
  type Location {
    id: ID!
    name: String!
  }
  type Delta {
    id: ID!
    title:String!,
    amount: Int! ,
    percentage: String! ,
    caption: String!,
  }
  type Query {
    getAllStaff: [Staff]
    getAllVisits : [Location]
    getAllMetrics :[Delta]
  }

  type Mutation {
  addAssessment(id: ID!, assessment: String!): [Staff]
}
`;

// A map of functions which return data for the schema.

const resolvers = {
  Query: {
    getAllStaff: () => {
      return staff;
    },
    getAllVisits: () => {
      return visits;
    },
    getAllMetrics: () => {
      return metrics;
    },
  },
  Staff: {
    id: (parent) => parent.id,
    name: (parent) => parent.name,
  },
  Delta: {
    id: (parent) => parent.id,
    title:(parent) => parent.title,
    amount: (parent) => parent.amount,
    percentage: (parent) => parent.percentage,
    caption: (parent) => parent.caption,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Afya server 🚀 ready at ${url}`);
});
