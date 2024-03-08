import { StyledButton } from './Button.styles.ts';

const Button = ({title}: {title: string}) => {
  return(
    <StyledButton>{title}</StyledButton>
  )
}

export default Button