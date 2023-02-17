import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UserslisttoGroup from '../../pages/users/UserslisttoGroup'; 
//import AdduserstoGroup from '../../pages/usergroups/ViewGroupDetails';
import EditUsersGroup from '../../pages/usergroups/EditUsergroup';
import ViewGroupDetails from '../../pages/usergroups/ViewGroupDetails';
import Test from '../../pages/usergroups/ListTabsFunctions';
import ListTabsFunctions from '../../pages/usergroups/ListTabsFunctions';
export default () => (
  <Tabs>
    <TabList>
      <Tab>Edit User Group</Tab>
      <Tab>Users</Tab>
    </TabList>

    <TabPanel>
    <EditUsersGroup/>

    </TabPanel>
    <TabPanel>
     
      <ListTabsFunctions/>

    </TabPanel>
  </Tabs>
);