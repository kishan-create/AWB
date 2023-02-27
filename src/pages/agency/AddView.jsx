import { useState } from "react"
import AgentTable from "./AgentTable"
import AddAgentToAgency from "./AddAgentToAgency";
import AgentTableList from "./AgentTableList";
export default function AddView(){
  const[listpage,SetListPage]=useState(true);
  const SetpageOption=(data)=>{
SetListPage(data);
  }
 
  return(
    <div>

{listpage === true ? (<AgentTableList method={SetpageOption} />
) : (<  AddAgentToAgency method={SetpageOption}/> )}

  

    </div>
  )

}