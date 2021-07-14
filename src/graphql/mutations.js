/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPicture = /* GraphQL */ `
  mutation CreatePicture(
    $input: CreatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    createPicture(input: $input, condition: $condition) {
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
export const updatePicture = /* GraphQL */ `
  mutation UpdatePicture(
    $input: UpdatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    updatePicture(input: $input, condition: $condition) {
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
export const deletePicture = /* GraphQL */ `
  mutation DeletePicture(
    $input: DeletePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    deletePicture(input: $input, condition: $condition) {
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
export const createUserIdentity = /* GraphQL */ `
  mutation CreateUserIdentity(
    $input: CreateUserIdentityInput!
    $condition: ModelUserIdentityConditionInput
  ) {
    createUserIdentity(input: $input, condition: $condition) {
      id
      owner
      tenant
      identityID
      createdAt
      updatedAt
    }
  }
`;
export const updateUserIdentity = /* GraphQL */ `
  mutation UpdateUserIdentity(
    $input: UpdateUserIdentityInput!
    $condition: ModelUserIdentityConditionInput
  ) {
    updateUserIdentity(input: $input, condition: $condition) {
      id
      owner
      tenant
      identityID
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserIdentity = /* GraphQL */ `
  mutation DeleteUserIdentity(
    $input: DeleteUserIdentityInput!
    $condition: ModelUserIdentityConditionInput
  ) {
    deleteUserIdentity(input: $input, condition: $condition) {
      id
      owner
      tenant
      identityID
      createdAt
      updatedAt
    }
  }
`;
