import { Props } from "../types";

const SortDesc = (props: Props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={props.size} 
    height={props.size}
    viewBox="0 0 24 24"
    fill={props.color}>
      <path 
        d="M12 3.202l3.839 4.798h-7.678l3.839-4.798zm0-3.202l-8 10h16l-8-10zm8 14h-16l8 10 8-10z"
      />
  </svg>
)

export default SortDesc

