import User from "../../models/user.model";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { GraphQLError } from "graphql";
import { z } from "zod";

const LoginInputSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(5, { message: "Must be 5 or more characters long" }),
});

interface args {
  params: {
    email: String;
    password: String;
  };
}

const LoginController = async (args: args) => {
  try {
    const TOKEN_SECRET = "dfasdjrqwu3409234dfadadfowerq3432frwij23490oi";
    const user = await User.findOne({ email: args.params.email });
    const input_validation_result = LoginInputSchema.safeParse({
      email: args.params.email,
      password: args.params.password,
    });
    if (!input_validation_result.success) {
      return {
        __typename: "InvalidInputError",
        message: "invalid input",
        error : input_validation_result.error.issues.map(issue=> `[${issue.path}] ${issue.message}`),
        statusCode : 400
      };
    }
    if (!user) {
      return {
        __typename: "UserNotFoundError",
        message: "USER NOT FOUND",
        credential: input_validation_result.data.email,
        statusCode: 400,
      };
    }

    const validPass = await compare(
      input_validation_result.data.password,
      user.password
    );

    if (!validPass) {
      return {
        __typename: "InvalidCredentialError",
        message: "Invalid credential",
        statusCode: 400,
      };
    }

    const payload = {
      _id: user._id.valueOf(),
    };

    const authToken = sign(payload, TOKEN_SECRET, {
      expiresIn: "1d",
    });
    const refreshToken = sign(payload, TOKEN_SECRET, {
      expiresIn: "1y",
    });
    return {
      __typename: "Login",
      message: "Logged in successful",
      statusCode: 200,
      authToken,
      refreshToken,
    };
  } catch (error) {
    throw new GraphQLError("server error, we will fix this soon", {
      extensions: {
        code: "SERVER_ERROR",
      },
    });
  }
};

export { LoginController };
