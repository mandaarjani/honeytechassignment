import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://www.honeywell.com/en-us/global/en-in/hail" target="_blank" rel="noopener noreferrer">Honeywell UI</a>
        <span className="ml-1">&copy; 2020 honeywell labs.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://www.honeywell.com/en-us/global/en-in/hail" target="_blank" rel="noopener noreferrer">Honeywell Automation India Limited</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
