/* eslint-disable no-unused-vars */
import React, { memo,} from 'react'
import WorkHeader from './WorkHeader'
import WorkBottom from './WorkBottom'
const WorkPAge = () => {

  return (
    <div id="work" className='   flex flex-col gap-10 mb-52 overflow-x-hidden'>
        <WorkHeader/>
        <div>
<div className=' w-full   px-12 flex items-center justify-center '>
<WorkBottom/>
</div>
        </div>

    </div>
  )
}

export default memo(WorkPAge)