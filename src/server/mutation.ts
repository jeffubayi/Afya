import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  mutation SignInMutation($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password }) {
      user {
        id
        name
        email
      }
    }
  }
`;

export const ADD_ASSESSMENT = gql`
  mutation AddAssessmentMutation($name: String!, $location: String!) {
    addAssessment(input: { name: $name, location: $location }) {
      user {
        id
        name
        location
      }
    }
  }
`;