import React from 'react'
import CommonTabs from '../../components/common/CommonTabs'
import UserHeader from './includes/UserHeader'
export default function AddUserstogroup() {
  return (
    <div>
        <UserHeader/>
        <div className="app-wrapper mt-4">
        <div className="app-content pt-2 p-md-2">
          <div className="container-fluid">
            <div className="app-card alert alert-dismissible shadow-sm mb-4"
              role="alert"  >
                <div class="inner p-15">
        <CommonTabs/>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    
  )
}
