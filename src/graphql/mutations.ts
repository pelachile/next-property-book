/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLin = /* GraphQL */ `
  mutation CreateLin(
    $input: CreateLinInput!
    $condition: ModelLinConditionInput
  ) {
    createLin(input: $input, condition: $condition) {
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
export const updateLin = /* GraphQL */ `
  mutation UpdateLin(
    $input: UpdateLinInput!
    $condition: ModelLinConditionInput
  ) {
    updateLin(input: $input, condition: $condition) {
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
export const deleteLin = /* GraphQL */ `
  mutation DeleteLin(
    $input: DeleteLinInput!
    $condition: ModelLinConditionInput
  ) {
    deleteLin(input: $input, condition: $condition) {
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
export const createNsn = /* GraphQL */ `
  mutation CreateNsn(
    $input: CreateNsnInput!
    $condition: ModelNsnConditionInput
  ) {
    createNsn(input: $input, condition: $condition) {
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
export const updateNsn = /* GraphQL */ `
  mutation UpdateNsn(
    $input: UpdateNsnInput!
    $condition: ModelNsnConditionInput
  ) {
    updateNsn(input: $input, condition: $condition) {
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
export const deleteNsn = /* GraphQL */ `
  mutation DeleteNsn(
    $input: DeleteNsnInput!
    $condition: ModelNsnConditionInput
  ) {
    deleteNsn(input: $input, condition: $condition) {
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
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
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
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
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
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
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
