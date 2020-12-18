import React, { useState } from "react"
import "./ServiceAppsData.scss";

interface ServiceAppsDataProps{
  username?: string
  password?: string
  notes?: string
  lastModified?: string
  created?: string
  editMode: boolean
}

const ServiceAppsData = (props : ServiceAppsDataProps) => {
  const [mode, setMode] = useState(props.editMode);

  const editClick = () =>{
    setMode(true);
  }
  const cancelClick = () =>{
    setMode(false);
  }

  if(mode) {
    return (
      <div className='ServiceAppsData'>
        <button className='btn-base save-btn'>Save</button>
        <button className='btn-base delete-btn'>Delete</button>
        <button className='btn-base cancel-btn' onClick={cancelClick}>Cancel</button>
        <p>test</p>
      </div>
    )
  }else{
    return (
      <div className='ServiceAppsData'>
        <button className='btn-base edit-btn' onClick={editClick}>Edit</button>
        <p>test</p>
      </div>
    )
  }
}

export default ServiceAppsData;