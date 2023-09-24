import { Props } from "../types"

const SortUnactivated = (props: Props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={props.size} 
    height={props.size} 
    viewBox="0 0 24 24"
    fill={props.color}>
      <path 
        d="M12 0l8 10h-16l8-10zm8 14h-16l8 10 8-10z"/>
  </svg>
)

export default SortUnactivated