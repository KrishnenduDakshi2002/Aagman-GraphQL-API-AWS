export const typeDefs = `#graphql

interface BaseResponse{
  message: String!
  statusCode: Int!
},

type User{
  email: String
  userName: String
},
  # ************************************** DISCUSSION TYPE **************************************
type Comment{
  answer:String
  author: User
},
type Answer{
  answer: String!
  author: User
  likes: Int
  comments: [Comment]
},
type Discussion{
  question: String!
  description: String!
  author: User
  likes: Int
  tags: [String]
  answers: [Answer]
},
  # ************************************** EVENT TYPE **************************************
type Event{
  eventName: String!
  description: String!
  startTime: String!
  endTime: String
  startDate: String!
  endDate: String
  mode: String!
  type: String!
  organizers: [String]!
  eventLink: String
  imageUri: String
  participant: Int
  },


  ##### AUTH ######
type UserNotFoundError implements BaseResponse{
    message: String!
    statusCode: Int!
    credential: String!
  },
type InvalidInputError implements BaseResponse{
    message: String!
    statusCode: Int!
    error: [String!]!
  },
type InvalidCredentialError implements BaseResponse{
    message: String!
    statusCode: Int!
  },


  # ************************************** LOGIN TYPE **************************************
input LoginInput{
    email: String!
    password:String!
  },
type Login{
    message: String!
    statusCode: Int!
    authToken: String!
    refreshToken: String!
  },
union LoginResult = Login | UserNotFoundError | InvalidInputError | InvalidCredentialError,

  # ************************************** SIGNUP TYPE **************************************
input signupInput{
    email: String!
    password: String!
    userName: String!
  },
# type SignUp implements BaseResponse{
#     message: String!
#     statusCode: Int!
#     _id: ID!
#     email: String!
#     userName: String! 
#   },
# type SignupResult = SignUp | UserNotFoundError | InvalidInputError,

type SignUp{
    _id: ID!
    email: String!
    userName: String! 
}
  # ************************************** QUERY TYPE **************************************
  type Query {
  getAllEvents: [Event]
  getEvent: Event
  getAllDiscussions: [Discussion]
  },
  # ************************************** MUTATION TYPE **************************************
  type Mutation{
  login(params:LoginInput!): LoginResult,
  signup(params:signupInput!): SignUp
  }
`;
