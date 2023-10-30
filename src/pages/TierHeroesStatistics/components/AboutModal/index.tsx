import ReactModal from "react-modal"

import { Props } from "./types"

const AboutModal = ({isOpen, overlayClassName}: Props)=>{
  return(
    <ReactModal
      isOpen={isOpen}
      overlayClassName={overlayClassName}
    >
      <p>the data latest updated on: </p>
      <p>Notes</p>
      <ol>
        <li>All data in this leaderboard was collected from only Rank mode.</li>
        <li>Only the data of Epic and above has been counted.</li>
      </ol>
    </ReactModal>
  )
}

export default AboutModal