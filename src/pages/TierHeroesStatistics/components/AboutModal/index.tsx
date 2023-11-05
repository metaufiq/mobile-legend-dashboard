import { useMemo } from "react"

import { colors } from "styles/colors"
import Modal from "components/Modal"
import { Props } from "./types"

const AboutModal = ({isOpen, handleClose, updatedAt}: Props)=>{

  const updatedOn = useMemo(()=>{
    const year = updatedAt?.slice(0, 4)
    const date = updatedAt?.slice(3, 5)
    const month = updatedAt?.slice(5, 7)

    return [date, month, year].join('-')
  },[updatedAt])
  
  return(
    <Modal
      handleClose={handleClose}
      isOpen={isOpen}
      contentStyle={{
        backgroundColor: colors.background,
        color: "white",
        height: 'fit-content',
        width: 'fit-content',
        top: 0,
        bottom: 0,
        margin: 'auto'
      }}
    >
      {updatedAt && <p>the data latest updated on: <b>{updatedOn}</b></p>}
      <p>Notes:</p>
      <ol>
        <li>All data in this leaderboard was collected from only Rank mode.</li>
        <li>Only the data of Epic and above has been counted.</li>
      </ol>
    </Modal>
  )
}

export default AboutModal