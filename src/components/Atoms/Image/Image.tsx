import { StyledImage } from './Image.styles.ts';

const Image = ({url}: {url: string}) => {
  return(
    <StyledImage src={url} alt="" />
  )
}

export default Image