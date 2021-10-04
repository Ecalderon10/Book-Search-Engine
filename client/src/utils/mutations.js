import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addBook($bookInfo: Book!) {
    addBook(bookInfo: $bookInfo) {
        _id: ID
        username: String
        email: String
        savedBooks: {
            _id
            authors
            description
            bookId
            image
            link
            title
        }
    }
}
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
        _id: ID
        username: String
        email: String
        savedBooks: {
            _id
            authors
            description
            bookId
            image
            link
            title
        }
    }
}
`;
