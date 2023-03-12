import Editagents from "./EditAgents";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AddView from "./AddView";
import EditAddressTable from "./EditAddressTable"
import DocumentFullTable from "./../agency/DocumentFullTable"
export default () => (
    <Tabs>
    <TabList>
      <Tab> Agency Details</Tab>
      <Tab>Address</Tab>
      <Tab>Documents</Tab>
      <Tab>Add Agent</Tab>

    </TabList>

    <TabPanel>


<Editagents/>

      
    </TabPanel>
    
    <TabPanel>
      <EditAddressTable/>

    </TabPanel>
    <TabPanel>
      <DocumentFullTable/>
    </TabPanel>

    <TabPanel>
    <AddView/>
    
    </TabPanel>


  </Tabs>
  );