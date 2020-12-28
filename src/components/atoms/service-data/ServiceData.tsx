import React, { useState } from "react"
import "./ServiceData.scss";
import ButtonDelete from "../button/variants/ButtonDelete"
import ButtonCancel from "../button/variants/ButtonCancel"
import ButtonEdit from "../button/variants/ButtonEdit"
import ButtonSave from "../button/variants/ButtonSave"


interface ServiceDataProps{
  username?: string
  password?: string
  notes?: string
  lastModified?: string
  created?: string
  EditMode: boolean
}

const ServiceData = (props : ServiceDataProps) => {
  const [isEditMode, setIsEditMode] = useState(props.EditMode);

  const onEditClick = () =>{
    setIsEditMode(true);
  }
  const onCancelClick = () =>{
    setIsEditMode(false);
  }

  if(isEditMode) {
    return (
      <div className='ServiceData rectangle'>
        <div className='ServiceData button-container'>
          <ButtonCancel onClick={onCancelClick} label={"Cancel"}></ButtonCancel>
          <ButtonDelete onClick={()=>{}} label={"Delete"}></ButtonDelete>
          <ButtonSave onClick={()=>{}} label={"Save"}></ButtonSave>
        </div>
        <p>test</p>
        <p>test</p>
        <p>test</p>
      </div>
    )
  }

  return (
    <div className='ServiceData panel-block'>
      <div className='ServiceData button-container'>
        <ButtonEdit onClick={onEditClick} label={"Edit"}></ButtonEdit>
      </div>
      <p>test</p>
      <p>test</p>
      <p>test</p>
    </div>
    )

}

export default ServiceData;