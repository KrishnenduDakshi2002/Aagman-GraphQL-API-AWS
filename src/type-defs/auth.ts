export const AuthTypeDefs = `#graphql

interface BaseResponse{
    message: String!
    statusCode: Int!
},
type UserNotFoundError implements BaseResponse{
    message: String!
    statusCode: Int!
  },
type InvalidInputError implements BaseResponse{
    message: String!
    statusCode: Int!
  },


  # ************************************** LOGIN TYPE **************************************
input LoginInput{
    email: String!
    password:String!
  },

type Login implements BaseResponse{
    """
    returning authToken and refreshtoken when successful
    """
    message: String!
    statusCode: Int!
    authToken: String!
    refreshToken: String!
  },
type LoginResult = Login | UserNotFoundError | InvalidInputError,

  # ************************************** SIGNUP TYPE **************************************
input signupInput{
    email: String!
    password: String!
    userName: String!
  },
type SignUp implements BaseResponse{
    message: String!
    statusCode: Int!
    _id: ID!
    email: String!
    userName: String! 
  },
type SignupResult = SignUp | UserNotFoundError | InvalidInputError,

`;
