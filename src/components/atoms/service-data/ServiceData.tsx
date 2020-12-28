import React, { useState, useMemo } from "react"
import "./ServiceData.scss"
import ButtonRed from "../button/variants/ButtonRed"
import ButtonShadedGray from "../button/variants/ButtonShadedGray"
import ButtonPrimary from "../button/variants/ButtonPrimary"
import LabelVisualizer from "../../molecules/label-visualizer/LabelVisualizer"
import Password from "../../templates/password/password"
import Service from "../../../models/Service"
import PasswordVisualization from "../../molecules/password-visualization/passwordVisualization"
import ProgressBar from "../../molecules/progress-bar/progressBar"
import PasswordHistory from "../../molecules/password-visualization/passwordHistory"

interface ServiceDataProps {
  service: Service
}

const ServiceData = (props: ServiceDataProps) => {
  const [isEditMode, setEditMode] = useState(false)

  const onEditClick = () => {
    setEditMode(true)
  }
  const onCancelClick = () => {
    setEditMode(false)
  }

  const buttons = useMemo(
    () =>
      isEditMode ? (
        <>
          <ButtonShadedGray onClick={onCancelClick} label={"Cancel"}></ButtonShadedGray>
          <ButtonRed onClick={() => {}} label={"Delete"}></ButtonRed>
          <ButtonPrimary onClick={() => {}} label={"Save"}></ButtonPrimary>
        </>
      ) : (
        <>
          <ButtonShadedGray onClick={onEditClick} label={"Edit"}></ButtonShadedGray>
        </>
      ),
    [isEditMode]
  )

  return (
    <div className="ServiceData">
      <div className="buttons-container">{buttons}</div>
      <div className="content">
        <div>
          <LabelVisualizer
            data={{
              label: "username",
              value: <h1></h1>,
            }}
            editMode={isEditMode}
          />
          <LabelVisualizer
            data={{
              label: "labelmooooooltolunga",
              value: <h1></h1>,
            }}
            editMode={isEditMode}
          />
          <LabelVisualizer
            data={{
              label: "labelmooooooltolunga",
              value: (
                <>
                  <PasswordVisualization password="12345678" />
                  <ProgressBar pwd="12345678" />
                </>
              ),
            }}
            editMode={isEditMode}
          />
          <LabelVisualizer
            data={{
              label: "labelmooooooltolunga",
              value: <PasswordHistory history={["00", "00", "0000"]} />,
            }}
            editMode={isEditMode}
          />
        </div>
      </div>
    </div>
  )
}

export default ServiceData
