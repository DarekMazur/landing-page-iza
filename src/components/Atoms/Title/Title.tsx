import { StyledTitle } from './Title.styles.ts';

const Title = ({content}: {content: string}) => {
  return (
    <StyledTitle>
      {content}
    </StyledTitle>
  );
}

export default Title;