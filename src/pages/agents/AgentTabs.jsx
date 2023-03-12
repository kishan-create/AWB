import EditAgent from './EditAgent'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import EditAgentAddressTable from './EditAgentAddressTable'
import DocumentFullTableAgent from './DocumentFullTableAgent'
export default () => (
    <Tabs>
    <TabList>
      <Tab> Agent Details</Tab>
      <Tab>Address</Tab>
      <Tab>Documents</Tab>

    </TabList>

    <TabPanel>


<EditAgent/>

      
    </TabPanel>
    <TabPanel>
    <EditAgentAddressTable />

    </TabPanel>

    <TabPanel>
      <DocumentFullTableAgent/>
    
    </TabPanel>


  </Tabs>
  );