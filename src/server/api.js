const { ApolloServer, gql } = require("apollo-server");

const staff = [
  {
    id: 1,
    name: "Mercy Mukoya",
    efficientDelta: 0,
    delta: 0,
    efficiency: 7,
    reports: 50,
  },
  {
    id: 2,
    name: "Stefanie Tomsett",
    efficientDelta: 3,
    delta: 7,
    efficiency: 30,
    reports: 50,
  },
  {
    id: 3,
    name: "Kennedy Ayako",
    efficientDelta: 0,
    delta: 0,
    efficiency: 7,
    reports: 20,
  },
  {
    id: 4,
    name: "Faith kityo",
    efficientDelta: 8,
    delta: 1,
    efficiency: 15,
    reports: 70,
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

//list of key issues
const issues = [
  {
    id: 1,
    description: "Wrong prescription",
    city:"kisumu"
  },
  {
    id: 2,
    description: "wrong doses",
    city:"Nairobi"
  },
  {
    id: 3,
    description: "Canada",
    city:"Mkuru kwa Njenga"
  },
  {
    id: 4,
    description: "Staff increase",
    city:"New York"
  },
  {
    id: 1,
    description: "Better pediatrician",
    city:"kisumu"
  },
  {
    id: 2,
    description: "More staff",
    city:"Sydney"
  },
];

//list fo card metrics
const metrics = [
  {
    id: 1,
    title: "Foot fall",
    amount: 60,
    percentage: 0.2,
    caption: "patients",
  },
  {
    id: 2,
    title: "Patient Satisfaction",
    amount: 30,
    percentage: 1.3,
    caption: "NPS",
  },
  {
    id: 3,
    title: "Revenue",
    amount: 42,
    percentage: 0.2,
    caption: "kenyan shillings",
  },
];

// The GraphQL schema
const typeDefs = gql`
  type Staff {
    id: ID!
    name: String!
    efficientDelta: Int!,
    delta:Int!,
    efficiency:Int!,
    reports:Int!,
  }
  type Location {
    id: ID!
    name: String!
  }
  type Issues {
    id:ID!
    description: String!
    city: String!
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
    getAllIssues: [Issues]
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
    getAllIssues: () => {
      return issues;
    },
  },
  Staff: {
    id: (parent) => parent.id,
    name: (parent) => parent.name,
  },
  Delta: {
    id: (parent) => parent.id,
    title: (parent) => parent.title,
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
