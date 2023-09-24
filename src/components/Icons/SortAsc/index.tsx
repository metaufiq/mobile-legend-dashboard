import { Props } from "../types";

const SortAsc = (props: Props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={props.size} 
    height={props.size}
    viewBox="0 0 24 24"
    fill={props.color}>
      <path 
        d="M12 0l-8 10h16l-8-10zm3.839 16l-3.839 4.798-3.839-4.798h7.678zm4.161-2h-16l8 10 8-10z"
      />
  </svg>
)

export default SortAsc