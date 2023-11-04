import ReactModal from "react-modal"

import { Props } from "./types"
import { colors } from "../../../../styles/colors"

const AboutModal = ({isOpen, overlayClassName}: Props)=>{
  return(
    <ReactModal
      isOpen={isOpen}
      overlayClassName={overlayClassName}
      style={{
        content:{
          backgroundColor: colors.background,
          color: "white",
          height: 'fit-content',
          width: 'fit-content',
          top: 0,
          bottom: 0,
          margin: 'auto'
        }
      }}
    >
      <p>the data latest updated on: </p>
      <p>Notes:</p>
      <ol>
        <li>All data in this leaderboard was collected from only Rank mode.</li>
        <li>Only the data of Epic and above has been counted.</li>
      </ol>
    </ReactModal>
  )
}

export default AboutModal