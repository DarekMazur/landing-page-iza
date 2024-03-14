import Image from '../../Atoms/Image/Image.tsx';
import Icon from '../../Atoms/Icon/Icon.tsx';
import Heading from '../../Atoms/Heading/Heading.tsx';
import { StyledFromInsta } from './FromInsta.styles.ts';
import { useEffect, useState } from 'react';

const FromInsta = () => {
  const [data, setData] = useState<string | never>();

  useEffect(() => {
    async function fetchData() {
      await fetch(
        `https://graph.instagram.com/${import.meta.env.VITE_IG_USER}/media?fields=${import.meta.env.VITE_IG_FIELDS}&access_token=${import.meta.env.VITE_IG_KEY}`
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error('Something went wrong');
        })
        .then((result) => {
          setData(result.data[0].media_url);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, []);
  return(
    <StyledFromInsta>
      <Heading tag={'h3'}>Ostatnio na Instagramie</Heading>
      {data ? <Image url={data} /> : null}
      <a href={`https://instagram.com/${import.meta.env.VITE_IG_URL}`} target={'_blank'}>Zobacz więcej <Icon type={'fas'} icon={'fa-arrow-up-right-from-square'} size={1.3} padding={'0.5rem 0'} /></a>
    </StyledFromInsta>
  )
}

export default FromInsta