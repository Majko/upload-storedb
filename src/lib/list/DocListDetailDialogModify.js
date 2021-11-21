import React, { useContext } from "react";
import {ModifyActiveContext} from "./DocListDetailDialog";

/**
 * @description Component wshowing only view contrnt
 * @param {Object} children - all children
 * @returns Component
 */
const DocListDetailDialogModify = ({ children, item }) => {
  const value = useContext(ModifyActiveContext);

  return (
    <div>
      {/* Children with injected item */}
      {value ? (
        React.Children.map(children, (child) =>
          React.cloneElement(child, {
            item: item,
          })
        )
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default DocListDetailDialogModify;
