import { colors } from '../../../styles/colors'
import { Props } from '../types'

const IconLoading = ({ size = 64, color=colors.primary }: Props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 64 64" 
    width={size}
    height={size}
    id="loading">
      <path 
        fill={color} 
        d="M50.287 32A18.287 18.287 0 1 1 32 13.713a1.5 1.5 0 1 1 0 3A15.287 15.287 0 1 0 47.287 32a1.5 1.5 0 0 1 3 0Z" 
        data-name="Loading">
      </path>
    </svg>
)

export default IconLoading
