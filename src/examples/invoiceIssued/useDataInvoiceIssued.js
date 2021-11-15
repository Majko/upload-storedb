import { useEffect, useState } from "react";

import { API } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";

// PRE MODEL: v schema.graphQL
// type InvoiceIssued @model @auth(rules:[
//   {allow:owner},
//   {allow: groups, groupsField: "tenant", operations: [read, update, create]}
//   ]){
//     id:ID!
//     symVar: String!
//     dateTax: String
//     dateAccounting: String
//     dateDue: String!
//     text: String!
//     PartnerIdentitys: [PartnerIdentity] @connection(keyName:"byInvoiceIssued", fields:["id"])
//     accountNo: String
//     bank: String!
//     priceNone: Int
//     priceLow: Int
//     priceHigh: Int
//     status: String!
  //    }

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
//   }
  
  
  // enum ClassificationVAT {
  //   inland
  //   nonSubsume
  // }
  
  // enum Accounting {
  //   a3FV
  //   a4FV
  //   Bez
  //   Nevim
  // }

/**
 *
 * @param {Integer} initialPageItems number of page items that will be loaded at the begining
 * @returns {Object}  { dataArray, nextPage, addItem, modifyItem, deleteItem }
 */
const useDataTest = (initialPageItems) => {
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
        text: {
          contains: searchTerm,
        },
      },
    };

    const list = await API.graphql({
      query: queries.listInvoiceIssueds,
      variables: options,
    });
    if (list.data.listInvoiceIssueds !== null) {
      const items = list.data.listInvoiceIssueds.items;
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
      query: queries.listInvoiceIssueds,
      variables: options,
    });
    if (list.data.listInvoiceIssueds !== null) {
      const items = list.data.listInvoiceIssueds.items;
      const newNextToken = list.data.listInvoiceIssueds.nextToken;
      // if no new items available, set the nexToken to 'END'
      newNextToken === null ? setNextToken("END") : setNextToken(newNextToken);
      setFullDataArray((prevList) => [...prevList, ...items]);
      setDataArray((prevList) => [...items]);
    }
  };

  const addItem = async (item) => {
    const newItem = await API.graphql({
      query: mutations.createInvoiceIssued,
      variables: {
        input: {
          name: item.name,
          content: item.content,
          status: item.status,
        },
      },
    });
    setFullDataArray((previous) => [...previous, newItem.data.createClanok]);
    setDataArray((previous) => [...previous, newItem.data.createClanok]);
  };

  const modifyItem = async (id, item) => {
    const modifiedItem = await API.graphql({
      query: mutations.createInvoiceIssued,
      variables: {
        input: {
          id: id,
          name: item.name,
          content: item.content,
          status: item.status,
        },
      },
    });
    console.log(modifiedItem);
    const newArray = dataArray.map((elem) => {
      return elem.id === id ? item : elem;
    });
    setFullDataArray(newArray);
    setDataArray(newArray);
  };

  const deleteItem = async (id) => {
    await API.graphql({
      query: mutations.deleteInvoiceIssued,
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

export default useDataTest;
