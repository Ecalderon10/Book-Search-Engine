import { gql } from "@apollo/client";

export const QUERY_ME = gql`
query {
  me {
    _id
    username
    email
    password
    bookCount
    savedBooks {
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


