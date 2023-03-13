// import Editagents from "./EditAgents";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TemplateFullTable from './TemplateFullTable';
import EditDocument from "./EditDocument";
export default  () => (
    <Tabs>
    <TabList>
      <Tab> Edit Details</Tab>
      <Tab>Attched Document</Tab>
      {/* <Tab>Documents</Tab>
      <Tab>Add Agent</Tab> */}

    </TabList>

   
    
    <TabPanel>
      <EditDocument/>

    </TabPanel>
    <TabPanel>
      <TemplateFullTable/>
    </TabPanel>

    {/* <TabPanel>
    <AddView/>
    
    </TabPanel> */}


  </Tabs>
  );