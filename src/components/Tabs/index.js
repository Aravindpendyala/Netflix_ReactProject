import React, { useState } from 'react'
import { tabLabels } from './constant'
import Tabs from './Tabs';




const Tabcomponent = () => {

    const[activeTab,setActiveTab]=  useState(tabLabels.CANCEL_AT_ANY_TIME);

     const onClickTab=(tab)=>{
            setActiveTab(tab)
     }
  return (
       <div>
  
  <Tabs activeTabName={activeTab} onClickTab={onClickTab}/>
        

       </div>
  )
}

export default Tabcomponent