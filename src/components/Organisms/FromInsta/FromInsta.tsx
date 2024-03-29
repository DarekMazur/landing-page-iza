import Image from '../../Atoms/Image/Image.tsx';
import Icon from '../../Atoms/Icon/Icon.tsx';
import Heading from '../../Atoms/Heading/Heading.tsx';
import { StyledFromInsta } from './FromInsta.styles.ts';
import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Carousel from 'nuka-carousel';
import Wrapper from '../Wrapper/Wrapper.tsx';

interface IDataType {
  media_url: string;
  id: string
}

const FromInsta = () => {
  const [data, setData] = useState<string[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [imageID, setImageID] = useState<string | null>();
  const instaRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (instaRef.current ) {
      gsap.fromTo([instaRef.current.children], {opacity: 0, y: '-20px', scale: 0.95}, {opacity: 1, y: '0px', scale: 1, stagger: 0.15, delay: 0.5});
    }
  }, [data])

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
          if (result.data[0].media_type === 'CAROUSEL_ALBUM') {
            setImageID(result.data[0].id)
          } else {
            setData([result.data[0].media_url]);
          }
        })
        .catch((error) => {
          console.log(error);
          setError(true)
        });
    }
    fetchData();
  }, []);

  useEffect(() => {
      async function fetchImageCarousel() {
        await fetch(
          `https://graph.instagram.com/${imageID}/children?fields=media_url&access_token=${import.meta.env.VITE_IG_KEY}`
        )
        .then((res) => {
          return res.json();
        })
          .then((result) => {
            setData([]);
            (result.data as IDataType[]).map(image => setData(prevState => [...prevState, image.media_url]))
            // setData(result.data);
          });
      }
    if (imageID) {
      fetchImageCarousel()
    }
  }, [imageID]);

  return(
    <>
    {data.length > 0 ? (
      <StyledFromInsta ref={instaRef}>
        {error ? (
          <>
            <p>Nie udało się pobrać danych z Instagrama ☹️</p>
            <p>Wróć za chwilę, już naprawiamy!!! 👨‍💻</p>
          </>
        ) : (
          <>
            <Heading tag={'h3'}>Ostatnio na Instagramie</Heading>
            {data.length === 1 ? (
              <Image url={data[0]} />
            ) : (
              <Wrapper>
                <Carousel autoplay={true} autoplayInterval={5000} wrapAround={true} withoutControls={true} >
                  {data.map(item => <Image key={item} url={item} />)}
                </Carousel>
              </Wrapper>
            )}
            <a href={`https://instagram.com/${import.meta.env.VITE_IG_URL}`} target={'_blank'}>Zobacz więcej <Icon type={'fas'} icon={'fa-arrow-up-right-from-square'} size={1.3} padding={'0.5rem 0'} /></a>
          </>
        )}
      </StyledFromInsta>
    ) : null}
    </>
  )
}

export default FromInsta