import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { UserDocumentDefault } from "common-lib/types";

const getUser = gql`
  query User {
    user {
      _id
      name
      email
    }
  }
`;

export const useGetUser = () =>
  useQuery<{ user: UserDocumentDefault }>(getUser);

export const useLazyGetUser = () =>
  useLazyQuery<{ user: UserDocumentDefault }>(getUser);
