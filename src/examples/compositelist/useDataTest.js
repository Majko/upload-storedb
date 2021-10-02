import { useContext, useEffect, useState } from "react";

import { API } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
import { SearchContext } from "../../lib/list/DocList";

// PRE MODEL: v schema.graphQL
// type Clanok @model @auth(rules:[
//   {allow:owner},
//   ]) {
//     id:ID!
//     name: String!
//     content: String
//     status: String
//   }

/**
 *
 * @param {Integer} initialPageItems number of page items that will be loaded at the begining
 * @returns {Object}  { dataArray, nextPage, addItem, modifyItem, deleteItem }
 */
const useDataTest = (initialPageItems, searchField) => {
  const [dataArray, setDataArray] = useState([]);
  // const [searchField, setSearchField] = useState('');
  const [nextToken, setNextToken] = useState(null);


  useEffect(() => {
    nextPage(initialPageItems);
  }, []);

  let myfilter = {
    name: {
      contains: searchField,
    },
  };

  const nextPage = async (pageItems) => {
    //   in case of previous nextToken was null => no new item to paginate, we end
    if (nextToken === "END") return;
    const list = await API.graphql({
      query: queries.listClanoks,
      variables: {
        filter: myfilter,
        limit: pageItems,
        nextToken: nextToken,
      },
    });
    if (list.data.listClanoks !== null) {
      const items = list.data.listClanoks.items;
      const newNextToken = list.data.listClanoks.nextToken;
      // if no new items available, set the nexToken to 'END'
      newNextToken === null ? setNextToken("END") : setNextToken(newNextToken);
      setDataArray((prevList) => [...prevList, ...items]);
    }
  };

  const addItem = async (item) => {
    const newItem = await API.graphql({
      query: mutations.createClanok,
      variables: {
        input: {
          name: item.name,
          content: item.content,
          status: item.status,
        },
      },
    });
    setDataArray((previous) => [...previous, newItem.data.createClanok]);
  };

  const modifyItem = async (id, item) => {
    const modifiedItem = await API.graphql({
      query: mutations.createClanok,
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
    setDataArray(newArray);
  };

  const deleteItem = async (id) => {
    await API.graphql({
      query: mutations.deleteClanok,
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
    setDataArray(newArray);
  };

  return { dataArray, nextPage, addItem, modifyItem, deleteItem };
};

export default useDataTest;
