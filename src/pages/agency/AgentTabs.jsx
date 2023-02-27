import Editagents from "./EditAgents";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AddView from "./AddView";
export default () => (
    <Tabs>
    <TabList>
      <Tab>Edit Agency</Tab>
      <Tab>Add Agent</Tab>
    </TabList>

    <TabPanel>
      <h2>Edit Content</h2>

<Editagents/>

      
    </TabPanel>
    
    <TabPanel>
      
      <AddView/>

    </TabPanel>
  </Tabs>
  );