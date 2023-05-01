/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLin = /* GraphQL */ `
  query GetLin($id: ID!) {
    getLin(id: $id) {
      id
      name
      nsns {
        items {
          id
          nomen
          on_hand
          createdAt
          updatedAt
          linNsnsId
          owner
        }
        nextToken
      }
      auth
      req
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listLins = /* GraphQL */ `
  query ListLins(
    $filter: ModelLinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        nsns {
          nextToken
        }
        auth
        req
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getNsn = /* GraphQL */ `
  query GetNsn($id: ID!) {
    getNsn(id: $id) {
      id
      nomen
      lin {
        id
        name
        nsns {
          nextToken
        }
        auth
        req
        createdAt
        updatedAt
        owner
      }
      items {
        items {
          id
          serial_number
          img_url
          createdAt
          updatedAt
          nsnItemsId
          owner
        }
        nextToken
      }
      on_hand
      createdAt
      updatedAt
      linNsnsId
      owner
    }
  }
`;
export const listNsns = /* GraphQL */ `
  query ListNsns(
    $filter: ModelNsnFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNsns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nomen
        lin {
          id
          name
          auth
          req
          createdAt
          updatedAt
          owner
        }
        items {
          nextToken
        }
        on_hand
        createdAt
        updatedAt
        linNsnsId
        owner
      }
      nextToken
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      nsn {
        id
        nomen
        lin {
          id
          name
          auth
          req
          createdAt
          updatedAt
          owner
        }
        items {
          nextToken
        }
        on_hand
        createdAt
        updatedAt
        linNsnsId
        owner
      }
      serial_number
      img_url
      createdAt
      updatedAt
      nsnItemsId
      owner
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nsn {
          id
          nomen
          on_hand
          createdAt
          updatedAt
          linNsnsId
          owner
        }
        serial_number
        img_url
        createdAt
        updatedAt
        nsnItemsId
        owner
      }
      nextToken
    }
  }
`;
