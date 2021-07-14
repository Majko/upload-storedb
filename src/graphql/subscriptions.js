/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePicture = /* GraphQL */ `
  subscription OnCreatePicture($owner: String!) {
    onCreatePicture(owner: $owner) {
      id
      name
      owner
      tenant
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
export const onUpdatePicture = /* GraphQL */ `
  subscription OnUpdatePicture($owner: String!) {
    onUpdatePicture(owner: $owner) {
      id
      name
      owner
      tenant
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
export const onDeletePicture = /* GraphQL */ `
  subscription OnDeletePicture($owner: String!) {
    onDeletePicture(owner: $owner) {
      id
      name
      owner
      tenant
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
export const onCreateUserIdentity = /* GraphQL */ `
  subscription OnCreateUserIdentity($owner: String!) {
    onCreateUserIdentity(owner: $owner) {
      id
      owner
      tenant
      identityID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserIdentity = /* GraphQL */ `
  subscription OnUpdateUserIdentity($owner: String!) {
    onUpdateUserIdentity(owner: $owner) {
      id
      owner
      tenant
      identityID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserIdentity = /* GraphQL */ `
  subscription OnDeleteUserIdentity($owner: String!) {
    onDeleteUserIdentity(owner: $owner) {
      id
      owner
      tenant
      identityID
      createdAt
      updatedAt
    }
  }
`;
