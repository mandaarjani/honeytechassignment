import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ReactEnvironmentChart from 'react-environment-chart';
import {Humidity} from 'react-environment-chart';
import {Temperature} from 'react-environment-chart';


const room = () => {
    return (
      <>   
        <CRow>
            <CCol xs="12" sm="6">
                <CCard>
                    <CCardHeader>
                        <h1>Temperature</h1>
                    </CCardHeader>
                    <CCardBody>
                        <CRow>
                            <CCol md sm="12" className="mb-sm-2 mb-0">
                                <Temperature value={23}/>
                            </CCol>                                 
                        </CRow>            
                     </CCardBody>
                     <CCardFooter>
                        <CRow className="text-left">
                            <CCol md sm="12" className="mb-sm-2 mb-0">
                                <div className="text-muted"><strong>Scheduled Events</strong></div>
                                set temperature to 25 c at 05:30
                                <CProgress
                                className="progress-xs mt-2"
                                precision={1}
                                color="success"
                                value={40}
                                />
                            </CCol>                                                      
                        </CRow>
                    </CCardFooter>
                </CCard>
            </CCol>
            <CCol xs="12" sm="6">
                <CCard>
                        <CCardHeader>
                            <h1>Humidity</h1>
                        </CCardHeader>
                        <CCardBody>
                            <CRow>
                                <CCol md sm="12" className="mb-sm-2 mb-0">
                                    <Humidity value={23}/>
                                </CCol>                                 
                            </CRow>            
                        </CCardBody>
                        <CCardFooter>
                            <CRow className="text-left">                          
                                <CCol md sm="12" className="mb-sm-2 mb-0">
                                    <div className="text-muted"><strong>Scheduled Events</strong></div>
                                    set humidity to 50% at 10.00
                                    <CProgress
                                    className="progress-xs mt-2"
                                    precision={1}
                                    color="success"
                                    value={40}
                                    />
                                </CCol>                              
                            </CRow>
                    </CCardFooter>
                </CCard>
            </CCol>
        </CRow>            
      </>
    )
  }
  
  export default room