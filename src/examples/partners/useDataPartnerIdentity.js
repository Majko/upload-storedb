import { useEffect, useState } from "react";

import { API } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";

// PRE MODEL: v schema.graphQL

// type PartnerIdentity @model @auth(rules:[
//   {allow:owner},
//   {allow: groups, groupsField: "tenant", operations: [read]}
//   ])
//     @key(name:"byInvoiceIssued", fields:["id"]) {
//     id:ID!
//     company: String!
//     division: String
//     name: String
//     city: String!
//     street: String!
//     zip: String!
//     ico: String!
//     dic: String!
//     tenant: String
//   }

/**
 *
 * @param {Integer} initialPageItems number of page items that will be loaded at the begining
 * @returns {Object}  { dataArray, nextPage, addItem, modifyItem, deleteItem }
 */
const useDataPartnerIdentity = (initialPageItems, searchfild, user) => {
  const [dataArray, setDataArray] = useState([]);
  //TODO, tu bude komplet list , po nacitavani jednotlivych pages
  const [fullDataArray, setFullDataArray] = useState([]);
  const [nextToken, setNextToken] = useState(null);

  useEffect(() => {
    setDataArray([]);
    setNextToken(null);
    nextPage();
  }, [initialPageItems]);

  const searchItems = async (searchTerm) => {
    const options = {
      filter: {
        company: {
          contains: searchTerm,
        },
      },
    };

    const list = await API.graphql({
      query: queries.listPartnerIdentitys,
      variables: options,
    });
    if (list.data.listPartnerIdentitys !== null) {
      const items = list.data.listPartnerIdentitys.items;
      setNextToken("END");
      setDataArray(items);
    }
  };

  const nextPage = async () => {
    const options = {
      limit: initialPageItems,
      nextToken: nextToken,
    };
    //   in case of previous nextToken was null => no new item to paginate, we end
    if (nextToken === "END") return;
    const list = await API.graphql({
      query: queries.listPartnerIdentitys,
      variables: options,
    });
    if (list.data.listPartnerIdentitys !== null) {
      const items = list.data.listPartnerIdentitys.items;
      const newNextToken = list.data.listPartnerIdentitys.nextToken;
      // if no new items available, set the nexToken to 'END'
      newNextToken === null ? setNextToken("END") : setNextToken(newNextToken);
      setFullDataArray((prevList) => [...prevList, ...items]);
      setDataArray((prevList) => [...items]);
    }
  };

  const addItem = async (item) => {
    let itemWithTenant = item;
    itemWithTenant.tenant = user.tenant;
    const newItem = await API.graphql({
      query: mutations.createPartnerIdentity,
      variables: {
        input: itemWithTenant,
      },
    });
    setFullDataArray((previous) => [
      ...previous,
      newItem.data.createPartnerIdentity,
    ]);
    setDataArray((previous) => [
      ...previous,
      newItem.data.createPartnerIdentity,
    ]);
  };

  const modifyItem = async (id, item) => {
    const modifiedItem = await API.graphql({
      query: mutations.updatePartnerIdentity,
      variables: {
        input: item,
      },
    });
    const newArray = dataArray.map((elem) => {
      return elem.id === id ? item : elem;
    });
    setFullDataArray(newArray);
    setDataArray(newArray);
  };

  const deleteItem = async (id) => {
    await API.graphql({
      query: mutations.deletePartnerIdentity,
      variables: {
        input: {
          id: id,
        },
      },
    });

    let newArray = [];
    dataArray.forEach((elem) => {
      if (elem.id !== id) newArray.push(elem);
    });
    setFullDataArray(newArray);
    setDataArray(newArray);
  };

  return { dataArray, nextPage, addItem, modifyItem, deleteItem, searchItems };
};

export default useDataPartnerIdentity;
