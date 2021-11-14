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
export const createClanok = /* GraphQL */ `
  mutation CreateClanok(
    $input: CreateClanokInput!
    $condition: ModelClanokConditionInput
  ) {
    createClanok(input: $input, condition: $condition) {
      id
      name
      content
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateClanok = /* GraphQL */ `
  mutation UpdateClanok(
    $input: UpdateClanokInput!
    $condition: ModelClanokConditionInput
  ) {
    updateClanok(input: $input, condition: $condition) {
      id
      name
      content
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteClanok = /* GraphQL */ `
  mutation DeleteClanok(
    $input: DeleteClanokInput!
    $condition: ModelClanokConditionInput
  ) {
    deleteClanok(input: $input, condition: $condition) {
      id
      name
      content
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createUserInvoiceIssued = /* GraphQL */ `
  mutation CreateUserInvoiceIssued(
    $input: CreateUserInvoiceIssuedInput!
    $condition: ModelUserInvoiceIssuedConditionInput
  ) {
    createUserInvoiceIssued(input: $input, condition: $condition) {
      id
      symVar
      dateTax
      dateAccounting
      dateDue
      text
      PartnerIdentitys {
        items {
          id
          company
          division
          name
          city
          street
          zip
          ico
          dic
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      accountNo
      bank
      priceNone
      priceLow
      priceHigh
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUserInvoiceIssued = /* GraphQL */ `
  mutation UpdateUserInvoiceIssued(
    $input: UpdateUserInvoiceIssuedInput!
    $condition: ModelUserInvoiceIssuedConditionInput
  ) {
    updateUserInvoiceIssued(input: $input, condition: $condition) {
      id
      symVar
      dateTax
      dateAccounting
      dateDue
      text
      PartnerIdentitys {
        items {
          id
          company
          division
          name
          city
          street
          zip
          ico
          dic
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      accountNo
      bank
      priceNone
      priceLow
      priceHigh
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUserInvoiceIssued = /* GraphQL */ `
  mutation DeleteUserInvoiceIssued(
    $input: DeleteUserInvoiceIssuedInput!
    $condition: ModelUserInvoiceIssuedConditionInput
  ) {
    deleteUserInvoiceIssued(input: $input, condition: $condition) {
      id
      symVar
      dateTax
      dateAccounting
      dateDue
      text
      PartnerIdentitys {
        items {
          id
          company
          division
          name
          city
          street
          zip
          ico
          dic
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      accountNo
      bank
      priceNone
      priceLow
      priceHigh
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createInvoiceIssued = /* GraphQL */ `
  mutation CreateInvoiceIssued(
    $input: CreateInvoiceIssuedInput!
    $condition: ModelInvoiceIssuedConditionInput
  ) {
    createInvoiceIssued(input: $input, condition: $condition) {
      id
      symVar
      dateTax
      dateAccounting
      dateDue
      accounting
      classificationVAT
      text
      PartnerIdentitys {
        items {
          id
          company
          division
          name
          city
          street
          zip
          ico
          dic
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      accountNo
      bank
      priceNone
      priceLow
      priceHigh
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateInvoiceIssued = /* GraphQL */ `
  mutation UpdateInvoiceIssued(
    $input: UpdateInvoiceIssuedInput!
    $condition: ModelInvoiceIssuedConditionInput
  ) {
    updateInvoiceIssued(input: $input, condition: $condition) {
      id
      symVar
      dateTax
      dateAccounting
      dateDue
      accounting
      classificationVAT
      text
      PartnerIdentitys {
        items {
          id
          company
          division
          name
          city
          street
          zip
          ico
          dic
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      accountNo
      bank
      priceNone
      priceLow
      priceHigh
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteInvoiceIssued = /* GraphQL */ `
  mutation DeleteInvoiceIssued(
    $input: DeleteInvoiceIssuedInput!
    $condition: ModelInvoiceIssuedConditionInput
  ) {
    deleteInvoiceIssued(input: $input, condition: $condition) {
      id
      symVar
      dateTax
      dateAccounting
      dateDue
      accounting
      classificationVAT
      text
      PartnerIdentitys {
        items {
          id
          company
          division
          name
          city
          street
          zip
          ico
          dic
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      accountNo
      bank
      priceNone
      priceLow
      priceHigh
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPartnerIdentity = /* GraphQL */ `
  mutation CreatePartnerIdentity(
    $input: CreatePartnerIdentityInput!
    $condition: ModelPartnerIdentityConditionInput
  ) {
    createPartnerIdentity(input: $input, condition: $condition) {
      id
      company
      division
      name
      city
      street
      zip
      ico
      dic
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePartnerIdentity = /* GraphQL */ `
  mutation UpdatePartnerIdentity(
    $input: UpdatePartnerIdentityInput!
    $condition: ModelPartnerIdentityConditionInput
  ) {
    updatePartnerIdentity(input: $input, condition: $condition) {
      id
      company
      division
      name
      city
      street
      zip
      ico
      dic
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePartnerIdentity = /* GraphQL */ `
  mutation DeletePartnerIdentity(
    $input: DeletePartnerIdentityInput!
    $condition: ModelPartnerIdentityConditionInput
  ) {
    deletePartnerIdentity(input: $input, condition: $condition) {
      id
      company
      division
      name
      city
      street
      zip
      ico
      dic
      createdAt
      updatedAt
      owner
    }
  }
`;
