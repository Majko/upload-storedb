/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePicture = /* GraphQL */ `
  subscription OnCreatePicture($owner: String!) {
    onCreatePicture(owner: $owner) {
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
export const onUpdatePicture = /* GraphQL */ `
  subscription OnUpdatePicture($owner: String!) {
    onUpdatePicture(owner: $owner) {
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
export const onDeletePicture = /* GraphQL */ `
  subscription OnDeletePicture($owner: String!) {
    onDeletePicture(owner: $owner) {
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
export const onCreateClanok = /* GraphQL */ `
  subscription OnCreateClanok($owner: String!) {
    onCreateClanok(owner: $owner) {
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
export const onUpdateClanok = /* GraphQL */ `
  subscription OnUpdateClanok($owner: String!) {
    onUpdateClanok(owner: $owner) {
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
export const onDeleteClanok = /* GraphQL */ `
  subscription OnDeleteClanok($owner: String!) {
    onDeleteClanok(owner: $owner) {
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
export const onCreateInvoiceIssued = /* GraphQL */ `
  subscription OnCreateInvoiceIssued($owner: String!) {
    onCreateInvoiceIssued(owner: $owner) {
      id
      symVar
      dateTax
      dateAccounting
      dateDue
      text
      Partner {
        id
        company
        division
        name
        city
        street
        zip
        ico
        dic
        email
        tenant
        createdAt
        updatedAt
        owner
      }
      accountNo
      bank
      priceNone
      priceLow
      priceHigh
      status
      tenant
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateInvoiceIssued = /* GraphQL */ `
  subscription OnUpdateInvoiceIssued($owner: String!) {
    onUpdateInvoiceIssued(owner: $owner) {
      id
      symVar
      dateTax
      dateAccounting
      dateDue
      text
      Partner {
        id
        company
        division
        name
        city
        street
        zip
        ico
        dic
        email
        tenant
        createdAt
        updatedAt
        owner
      }
      accountNo
      bank
      priceNone
      priceLow
      priceHigh
      status
      tenant
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteInvoiceIssued = /* GraphQL */ `
  subscription OnDeleteInvoiceIssued($owner: String!) {
    onDeleteInvoiceIssued(owner: $owner) {
      id
      symVar
      dateTax
      dateAccounting
      dateDue
      text
      Partner {
        id
        company
        division
        name
        city
        street
        zip
        ico
        dic
        email
        tenant
        createdAt
        updatedAt
        owner
      }
      accountNo
      bank
      priceNone
      priceLow
      priceHigh
      status
      tenant
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreatePartnerIdentity = /* GraphQL */ `
  subscription OnCreatePartnerIdentity($owner: String!) {
    onCreatePartnerIdentity(owner: $owner) {
      id
      company
      division
      name
      city
      street
      zip
      ico
      dic
      email
      tenant
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePartnerIdentity = /* GraphQL */ `
  subscription OnUpdatePartnerIdentity($owner: String!) {
    onUpdatePartnerIdentity(owner: $owner) {
      id
      company
      division
      name
      city
      street
      zip
      ico
      dic
      email
      tenant
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePartnerIdentity = /* GraphQL */ `
  subscription OnDeletePartnerIdentity($owner: String!) {
    onDeletePartnerIdentity(owner: $owner) {
      id
      company
      division
      name
      city
      street
      zip
      ico
      dic
      email
      tenant
      createdAt
      updatedAt
      owner
    }
  }
`;
