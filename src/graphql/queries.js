/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPicture = /* GraphQL */ `
  query GetPicture($id: ID!) {
    getPicture(id: $id) {
      id
      name
      owner
      tenant
      description
      file {
        bucket
        region
        identityID
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPictures = /* GraphQL */ `
  query ListPictures(
    $filter: ModelPictureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        owner
        tenant
        description
        file {
          bucket
          region
          identityID
          key
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserIdentity = /* GraphQL */ `
  query GetUserIdentity($id: ID!) {
    getUserIdentity(id: $id) {
      id
      owner
      tenant
      identityID
      createdAt
      updatedAt
    }
  }
`;
export const listUserIdentitys = /* GraphQL */ `
  query ListUserIdentitys(
    $filter: ModelUserIdentityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserIdentitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        tenant
        identityID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
