import { StyledButton } from './Button.styles.ts';

const Button = ({title, target}: {title: string, target: string}) => {
  return(
    <StyledButton><a href={target} target={'_blank'}>{title}</a></StyledButton>
  )
}

export default Button