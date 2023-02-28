import React from "react";
import { useState } from "react";
import ViewGroupDetails from "./ViewGroupDetails";
import AddUsers from "./AddUsers";
export default function ListTabsFunctions() {
  const [listpage, SetListPage] = useState(true);
  const SetpageOption = (data) => {
    SetListPage(data);
  };
 
  return (
    <div>
      {listpage === true ? (
        <ViewGroupDetails method={SetpageOption} />
      ) : (
        <AddUsers method={SetpageOption} />
      )}
    </div>
  );
}
