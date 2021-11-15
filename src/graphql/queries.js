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
export const getClanok = /* GraphQL */ `
  query GetClanok($id: ID!) {
    getClanok(id: $id) {
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
export const listClanoks = /* GraphQL */ `
  query ListClanoks(
    $filter: ModelClanokFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClanoks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        content
        status
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getInvoiceIssued = /* GraphQL */ `
  query GetInvoiceIssued($id: ID!) {
    getInvoiceIssued(id: $id) {
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
export const listInvoiceIssueds = /* GraphQL */ `
  query ListInvoiceIssueds(
    $filter: ModelInvoiceIssuedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvoiceIssueds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPartnerIdentity = /* GraphQL */ `
  query GetPartnerIdentity($id: ID!) {
    getPartnerIdentity(id: $id) {
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
export const listPartnerIdentitys = /* GraphQL */ `
  query ListPartnerIdentitys(
    $filter: ModelPartnerIdentityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPartnerIdentitys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        email
        tenant
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
