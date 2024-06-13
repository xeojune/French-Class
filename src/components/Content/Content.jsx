import React from 'react'
import ContentHeader from './Header/ContentHeader'
import ContentTable from './Table/ContentTable'
import '../Content/Content.css'

function Content() {
  return (
    <div className='content'>
      <ContentHeader />
      <ContentTable />
    </div>
  )
}

export default Content