/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLin = /* GraphQL */ `
  subscription OnCreateLin(
    $filter: ModelSubscriptionLinFilterInput
    $owner: String
  ) {
    onCreateLin(filter: $filter, owner: $owner) {
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
export const onUpdateLin = /* GraphQL */ `
  subscription OnUpdateLin(
    $filter: ModelSubscriptionLinFilterInput
    $owner: String
  ) {
    onUpdateLin(filter: $filter, owner: $owner) {
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
export const onDeleteLin = /* GraphQL */ `
  subscription OnDeleteLin(
    $filter: ModelSubscriptionLinFilterInput
    $owner: String
  ) {
    onDeleteLin(filter: $filter, owner: $owner) {
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
export const onCreateNsn = /* GraphQL */ `
  subscription OnCreateNsn(
    $filter: ModelSubscriptionNsnFilterInput
    $owner: String
  ) {
    onCreateNsn(filter: $filter, owner: $owner) {
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
export const onUpdateNsn = /* GraphQL */ `
  subscription OnUpdateNsn(
    $filter: ModelSubscriptionNsnFilterInput
    $owner: String
  ) {
    onUpdateNsn(filter: $filter, owner: $owner) {
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
export const onDeleteNsn = /* GraphQL */ `
  subscription OnDeleteNsn(
    $filter: ModelSubscriptionNsnFilterInput
    $owner: String
  ) {
    onDeleteNsn(filter: $filter, owner: $owner) {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem(
    $filter: ModelSubscriptionItemFilterInput
    $owner: String
  ) {
    onCreateItem(filter: $filter, owner: $owner) {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem(
    $filter: ModelSubscriptionItemFilterInput
    $owner: String
  ) {
    onUpdateItem(filter: $filter, owner: $owner) {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem(
    $filter: ModelSubscriptionItemFilterInput
    $owner: String
  ) {
    onDeleteItem(filter: $filter, owner: $owner) {
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
