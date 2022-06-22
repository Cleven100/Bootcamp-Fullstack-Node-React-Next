import React from 'react'
import DashboardWrapper, { DashboardWrapperRight, DashboardWrapperMain} from '../components/dashboard-wrapper/DashboardWrapper'
import { data } from '../constants'
import Box from '../components/box/Box'
import SummaryBox, { SummaryBoxSpecial } from '../components/summary-box/SummaryBox'

const Dashboard = () => {
  return (
    
        <DashboardWrapper>
          <DashboardWrapperMain>
              <div className="row">
                 <div className="col-8 col-md-12">
                    <div className="row">
                       {
                        data.summary.map((item,index) => (
                          <div key={`summary-${index}`} className="col-6 col-md-6 col-sm-12 mb">
                            <SummaryBox  item={item}/>
                          </div>
                        ))
                       }
                    </div>
                 </div>
                 <div className="col-4 hide-md">
                   <SummaryBoxSpecial item={data.revenueSummary} />
                 </div>
              </div>
          </DashboardWrapperMain>
          <DashboardWrapperRight>
            DashRight
          </DashboardWrapperRight>
        </DashboardWrapper>
        
  )
}

export default Dashboard

