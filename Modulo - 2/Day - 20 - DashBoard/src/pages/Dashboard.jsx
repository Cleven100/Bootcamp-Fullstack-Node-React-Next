import React from 'react'
import DashboardWrapper, { DashboardWrapperRight, DashboardWrapperMain} from '../components/dashboard-wrapper/DashboardWrapper'

const Dashboard = () => {
  return (
    
        <DashboardWrapper>
          <DashboardWrapperMain>
              DashMain
          </DashboardWrapperMain>
          <DashboardWrapperRight>
            DashRight
          </DashboardWrapperRight>
        </DashboardWrapper>
        
  )
}

export default Dashboard

