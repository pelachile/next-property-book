/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLinInput = {
  id?: string | null,
  name: string,
  auth: number,
  req: number,
};

export type ModelLinConditionInput = {
  name?: ModelStringInput | null,
  auth?: ModelIntInput | null,
  req?: ModelIntInput | null,
  and?: Array< ModelLinConditionInput | null > | null,
  or?: Array< ModelLinConditionInput | null > | null,
  not?: ModelLinConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Lin = {
  __typename: "Lin",
  id: string,
  name: string,
  nsns?: ModelNsnConnection | null,
  auth: number,
  req: number,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelNsnConnection = {
  __typename: "ModelNsnConnection",
  items:  Array<Nsn | null >,
  nextToken?: string | null,
};

export type Nsn = {
  __typename: "Nsn",
  id: string,
  nomen: string,
  lin?: Lin | null,
  items?: ModelItemConnection | null,
  on_hand: number,
  createdAt: string,
  updatedAt: string,
  linNsnsId?: string | null,
  owner?: string | null,
};

export type ModelItemConnection = {
  __typename: "ModelItemConnection",
  items:  Array<Item | null >,
  nextToken?: string | null,
};

export type Item = {
  __typename: "Item",
  id: string,
  nsn?: Nsn | null,
  serial_number: string,
  img_url: string,
  createdAt: string,
  updatedAt: string,
  nsnItemsId?: string | null,
  owner?: string | null,
};

export type UpdateLinInput = {
  id: string,
  name?: string | null,
  auth?: number | null,
  req?: number | null,
};

export type DeleteLinInput = {
  id: string,
};

export type CreateNsnInput = {
  id?: string | null,
  nomen: string,
  on_hand: number,
  linNsnsId?: string | null,
};

export type ModelNsnConditionInput = {
  nomen?: ModelStringInput | null,
  on_hand?: ModelIntInput | null,
  and?: Array< ModelNsnConditionInput | null > | null,
  or?: Array< ModelNsnConditionInput | null > | null,
  not?: ModelNsnConditionInput | null,
  linNsnsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateNsnInput = {
  id: string,
  nomen?: string | null,
  on_hand?: number | null,
  linNsnsId?: string | null,
};

export type DeleteNsnInput = {
  id: string,
};

export type CreateItemInput = {
  id?: string | null,
  serial_number: string,
  img_url: string,
  nsnItemsId?: string | null,
};

export type ModelItemConditionInput = {
  serial_number?: ModelStringInput | null,
  img_url?: ModelStringInput | null,
  and?: Array< ModelItemConditionInput | null > | null,
  or?: Array< ModelItemConditionInput | null > | null,
  not?: ModelItemConditionInput | null,
  nsnItemsId?: ModelIDInput | null,
};

export type UpdateItemInput = {
  id: string,
  serial_number?: string | null,
  img_url?: string | null,
  nsnItemsId?: string | null,
};

export type DeleteItemInput = {
  id: string,
};

export type ModelLinFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  auth?: ModelIntInput | null,
  req?: ModelIntInput | null,
  and?: Array< ModelLinFilterInput | null > | null,
  or?: Array< ModelLinFilterInput | null > | null,
  not?: ModelLinFilterInput | null,
};

export type ModelLinConnection = {
  __typename: "ModelLinConnection",
  items:  Array<Lin | null >,
  nextToken?: string | null,
};

export type ModelNsnFilterInput = {
  id?: ModelIDInput | null,
  nomen?: ModelStringInput | null,
  on_hand?: ModelIntInput | null,
  and?: Array< ModelNsnFilterInput | null > | null,
  or?: Array< ModelNsnFilterInput | null > | null,
  not?: ModelNsnFilterInput | null,
  linNsnsId?: ModelIDInput | null,
};

export type ModelItemFilterInput = {
  id?: ModelIDInput | null,
  serial_number?: ModelStringInput | null,
  img_url?: ModelStringInput | null,
  and?: Array< ModelItemFilterInput | null > | null,
  or?: Array< ModelItemFilterInput | null > | null,
  not?: ModelItemFilterInput | null,
  nsnItemsId?: ModelIDInput | null,
};

export type ModelSubscriptionLinFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  auth?: ModelSubscriptionIntInput | null,
  req?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionLinFilterInput | null > | null,
  or?: Array< ModelSubscriptionLinFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionNsnFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  nomen?: ModelSubscriptionStringInput | null,
  on_hand?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionNsnFilterInput | null > | null,
  or?: Array< ModelSubscriptionNsnFilterInput | null > | null,
};

export type ModelSubscriptionItemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  serial_number?: ModelSubscriptionStringInput | null,
  img_url?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionItemFilterInput | null > | null,
};

export type CreateLinMutationVariables = {
  input: CreateLinInput,
  condition?: ModelLinConditionInput | null,
};

export type CreateLinMutation = {
  createLin?:  {
    __typename: "Lin",
    id: string,
    name: string,
    nsns?:  {
      __typename: "ModelNsnConnection",
      items:  Array< {
        __typename: "Nsn",
        id: string,
        nomen: string,
        on_hand: number,
        createdAt: string,
        updatedAt: string,
        linNsnsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    auth: number,
    req: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateLinMutationVariables = {
  input: UpdateLinInput,
  condition?: ModelLinConditionInput | null,
};

export type UpdateLinMutation = {
  updateLin?:  {
    __typename: "Lin",
    id: string,
    name: string,
    nsns?:  {
      __typename: "ModelNsnConnection",
      items:  Array< {
        __typename: "Nsn",
        id: string,
        nomen: string,
        on_hand: number,
        createdAt: string,
        updatedAt: string,
        linNsnsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    auth: number,
    req: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteLinMutationVariables = {
  input: DeleteLinInput,
  condition?: ModelLinConditionInput | null,
};

export type DeleteLinMutation = {
  deleteLin?:  {
    __typename: "Lin",
    id: string,
    name: string,
    nsns?:  {
      __typename: "ModelNsnConnection",
      items:  Array< {
        __typename: "Nsn",
        id: string,
        nomen: string,
        on_hand: number,
        createdAt: string,
        updatedAt: string,
        linNsnsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    auth: number,
    req: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateNsnMutationVariables = {
  input: CreateNsnInput,
  condition?: ModelNsnConditionInput | null,
};

export type CreateNsnMutation = {
  createNsn?:  {
    __typename: "Nsn",
    id: string,
    nomen: string,
    lin?:  {
      __typename: "Lin",
      id: string,
      name: string,
      nsns?:  {
        __typename: "ModelNsnConnection",
        nextToken?: string | null,
      } | null,
      auth: number,
      req: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        serial_number: string,
        img_url: string,
        createdAt: string,
        updatedAt: string,
        nsnItemsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    on_hand: number,
    createdAt: string,
    updatedAt: string,
    linNsnsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateNsnMutationVariables = {
  input: UpdateNsnInput,
  condition?: ModelNsnConditionInput | null,
};

export type UpdateNsnMutation = {
  updateNsn?:  {
    __typename: "Nsn",
    id: string,
    nomen: string,
    lin?:  {
      __typename: "Lin",
      id: string,
      name: string,
      nsns?:  {
        __typename: "ModelNsnConnection",
        nextToken?: string | null,
      } | null,
      auth: number,
      req: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        serial_number: string,
        img_url: string,
        createdAt: string,
        updatedAt: string,
        nsnItemsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    on_hand: number,
    createdAt: string,
    updatedAt: string,
    linNsnsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteNsnMutationVariables = {
  input: DeleteNsnInput,
  condition?: ModelNsnConditionInput | null,
};

export type DeleteNsnMutation = {
  deleteNsn?:  {
    __typename: "Nsn",
    id: string,
    nomen: string,
    lin?:  {
      __typename: "Lin",
      id: string,
      name: string,
      nsns?:  {
        __typename: "ModelNsnConnection",
        nextToken?: string | null,
      } | null,
      auth: number,
      req: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        serial_number: string,
        img_url: string,
        createdAt: string,
        updatedAt: string,
        nsnItemsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    on_hand: number,
    createdAt: string,
    updatedAt: string,
    linNsnsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateItemMutationVariables = {
  input: CreateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type CreateItemMutation = {
  createItem?:  {
    __typename: "Item",
    id: string,
    nsn?:  {
      __typename: "Nsn",
      id: string,
      nomen: string,
      lin?:  {
        __typename: "Lin",
        id: string,
        name: string,
        auth: number,
        req: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
      } | null,
      on_hand: number,
      createdAt: string,
      updatedAt: string,
      linNsnsId?: string | null,
      owner?: string | null,
    } | null,
    serial_number: string,
    img_url: string,
    createdAt: string,
    updatedAt: string,
    nsnItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateItemMutationVariables = {
  input: UpdateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type UpdateItemMutation = {
  updateItem?:  {
    __typename: "Item",
    id: string,
    nsn?:  {
      __typename: "Nsn",
      id: string,
      nomen: string,
      lin?:  {
        __typename: "Lin",
        id: string,
        name: string,
        auth: number,
        req: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
      } | null,
      on_hand: number,
      createdAt: string,
      updatedAt: string,
      linNsnsId?: string | null,
      owner?: string | null,
    } | null,
    serial_number: string,
    img_url: string,
    createdAt: string,
    updatedAt: string,
    nsnItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteItemMutationVariables = {
  input: DeleteItemInput,
  condition?: ModelItemConditionInput | null,
};

export type DeleteItemMutation = {
  deleteItem?:  {
    __typename: "Item",
    id: string,
    nsn?:  {
      __typename: "Nsn",
      id: string,
      nomen: string,
      lin?:  {
        __typename: "Lin",
        id: string,
        name: string,
        auth: number,
        req: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
      } | null,
      on_hand: number,
      createdAt: string,
      updatedAt: string,
      linNsnsId?: string | null,
      owner?: string | null,
    } | null,
    serial_number: string,
    img_url: string,
    createdAt: string,
    updatedAt: string,
    nsnItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type GetLinQueryVariables = {
  id: string,
};

export type GetLinQuery = {
  getLin?:  {
    __typename: "Lin",
    id: string,
    name: string,
    nsns?:  {
      __typename: "ModelNsnConnection",
      items:  Array< {
        __typename: "Nsn",
        id: string,
        nomen: string,
        on_hand: number,
        createdAt: string,
        updatedAt: string,
        linNsnsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    auth: number,
    req: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListLinsQueryVariables = {
  filter?: ModelLinFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLinsQuery = {
  listLins?:  {
    __typename: "ModelLinConnection",
    items:  Array< {
      __typename: "Lin",
      id: string,
      name: string,
      nsns?:  {
        __typename: "ModelNsnConnection",
        nextToken?: string | null,
      } | null,
      auth: number,
      req: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNsnQueryVariables = {
  id: string,
};

export type GetNsnQuery = {
  getNsn?:  {
    __typename: "Nsn",
    id: string,
    nomen: string,
    lin?:  {
      __typename: "Lin",
      id: string,
      name: string,
      nsns?:  {
        __typename: "ModelNsnConnection",
        nextToken?: string | null,
      } | null,
      auth: number,
      req: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        serial_number: string,
        img_url: string,
        createdAt: string,
        updatedAt: string,
        nsnItemsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    on_hand: number,
    createdAt: string,
    updatedAt: string,
    linNsnsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListNsnsQueryVariables = {
  filter?: ModelNsnFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNsnsQuery = {
  listNsns?:  {
    __typename: "ModelNsnConnection",
    items:  Array< {
      __typename: "Nsn",
      id: string,
      nomen: string,
      lin?:  {
        __typename: "Lin",
        id: string,
        name: string,
        auth: number,
        req: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
      } | null,
      on_hand: number,
      createdAt: string,
      updatedAt: string,
      linNsnsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetItemQueryVariables = {
  id: string,
};

export type GetItemQuery = {
  getItem?:  {
    __typename: "Item",
    id: string,
    nsn?:  {
      __typename: "Nsn",
      id: string,
      nomen: string,
      lin?:  {
        __typename: "Lin",
        id: string,
        name: string,
        auth: number,
        req: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
      } | null,
      on_hand: number,
      createdAt: string,
      updatedAt: string,
      linNsnsId?: string | null,
      owner?: string | null,
    } | null,
    serial_number: string,
    img_url: string,
    createdAt: string,
    updatedAt: string,
    nsnItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListItemsQueryVariables = {
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItemsQuery = {
  listItems?:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      id: string,
      nsn?:  {
        __typename: "Nsn",
        id: string,
        nomen: string,
        on_hand: number,
        createdAt: string,
        updatedAt: string,
        linNsnsId?: string | null,
        owner?: string | null,
      } | null,
      serial_number: string,
      img_url: string,
      createdAt: string,
      updatedAt: string,
      nsnItemsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateLinSubscriptionVariables = {
  filter?: ModelSubscriptionLinFilterInput | null,
  owner?: string | null,
};

export type OnCreateLinSubscription = {
  onCreateLin?:  {
    __typename: "Lin",
    id: string,
    name: string,
    nsns?:  {
      __typename: "ModelNsnConnection",
      items:  Array< {
        __typename: "Nsn",
        id: string,
        nomen: string,
        on_hand: number,
        createdAt: string,
        updatedAt: string,
        linNsnsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    auth: number,
    req: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateLinSubscriptionVariables = {
  filter?: ModelSubscriptionLinFilterInput | null,
  owner?: string | null,
};

export type OnUpdateLinSubscription = {
  onUpdateLin?:  {
    __typename: "Lin",
    id: string,
    name: string,
    nsns?:  {
      __typename: "ModelNsnConnection",
      items:  Array< {
        __typename: "Nsn",
        id: string,
        nomen: string,
        on_hand: number,
        createdAt: string,
        updatedAt: string,
        linNsnsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    auth: number,
    req: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteLinSubscriptionVariables = {
  filter?: ModelSubscriptionLinFilterInput | null,
  owner?: string | null,
};

export type OnDeleteLinSubscription = {
  onDeleteLin?:  {
    __typename: "Lin",
    id: string,
    name: string,
    nsns?:  {
      __typename: "ModelNsnConnection",
      items:  Array< {
        __typename: "Nsn",
        id: string,
        nomen: string,
        on_hand: number,
        createdAt: string,
        updatedAt: string,
        linNsnsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    auth: number,
    req: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateNsnSubscriptionVariables = {
  filter?: ModelSubscriptionNsnFilterInput | null,
  owner?: string | null,
};

export type OnCreateNsnSubscription = {
  onCreateNsn?:  {
    __typename: "Nsn",
    id: string,
    nomen: string,
    lin?:  {
      __typename: "Lin",
      id: string,
      name: string,
      nsns?:  {
        __typename: "ModelNsnConnection",
        nextToken?: string | null,
      } | null,
      auth: number,
      req: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        serial_number: string,
        img_url: string,
        createdAt: string,
        updatedAt: string,
        nsnItemsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    on_hand: number,
    createdAt: string,
    updatedAt: string,
    linNsnsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateNsnSubscriptionVariables = {
  filter?: ModelSubscriptionNsnFilterInput | null,
  owner?: string | null,
};

export type OnUpdateNsnSubscription = {
  onUpdateNsn?:  {
    __typename: "Nsn",
    id: string,
    nomen: string,
    lin?:  {
      __typename: "Lin",
      id: string,
      name: string,
      nsns?:  {
        __typename: "ModelNsnConnection",
        nextToken?: string | null,
      } | null,
      auth: number,
      req: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        serial_number: string,
        img_url: string,
        createdAt: string,
        updatedAt: string,
        nsnItemsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    on_hand: number,
    createdAt: string,
    updatedAt: string,
    linNsnsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteNsnSubscriptionVariables = {
  filter?: ModelSubscriptionNsnFilterInput | null,
  owner?: string | null,
};

export type OnDeleteNsnSubscription = {
  onDeleteNsn?:  {
    __typename: "Nsn",
    id: string,
    nomen: string,
    lin?:  {
      __typename: "Lin",
      id: string,
      name: string,
      nsns?:  {
        __typename: "ModelNsnConnection",
        nextToken?: string | null,
      } | null,
      auth: number,
      req: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        serial_number: string,
        img_url: string,
        createdAt: string,
        updatedAt: string,
        nsnItemsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    on_hand: number,
    createdAt: string,
    updatedAt: string,
    linNsnsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
  owner?: string | null,
};

export type OnCreateItemSubscription = {
  onCreateItem?:  {
    __typename: "Item",
    id: string,
    nsn?:  {
      __typename: "Nsn",
      id: string,
      nomen: string,
      lin?:  {
        __typename: "Lin",
        id: string,
        name: string,
        auth: number,
        req: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
      } | null,
      on_hand: number,
      createdAt: string,
      updatedAt: string,
      linNsnsId?: string | null,
      owner?: string | null,
    } | null,
    serial_number: string,
    img_url: string,
    createdAt: string,
    updatedAt: string,
    nsnItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
  owner?: string | null,
};

export type OnUpdateItemSubscription = {
  onUpdateItem?:  {
    __typename: "Item",
    id: string,
    nsn?:  {
      __typename: "Nsn",
      id: string,
      nomen: string,
      lin?:  {
        __typename: "Lin",
        id: string,
        name: string,
        auth: number,
        req: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
      } | null,
      on_hand: number,
      createdAt: string,
      updatedAt: string,
      linNsnsId?: string | null,
      owner?: string | null,
    } | null,
    serial_number: string,
    img_url: string,
    createdAt: string,
    updatedAt: string,
    nsnItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
  owner?: string | null,
};

export type OnDeleteItemSubscription = {
  onDeleteItem?:  {
    __typename: "Item",
    id: string,
    nsn?:  {
      __typename: "Nsn",
      id: string,
      nomen: string,
      lin?:  {
        __typename: "Lin",
        id: string,
        name: string,
        auth: number,
        req: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
      } | null,
      on_hand: number,
      createdAt: string,
      updatedAt: string,
      linNsnsId?: string | null,
      owner?: string | null,
    } | null,
    serial_number: string,
    img_url: string,
    createdAt: string,
    updatedAt: string,
    nsnItemsId?: string | null,
    owner?: string | null,
  } | null,
};
