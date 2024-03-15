import { StyledTitle } from './Title.styles.ts';
import { TextPlugin } from "gsap/TextPlugin";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { FC, useRef } from 'react';

gsap.registerPlugin(TextPlugin);

interface ITitleTypes {
  firstName: string;
  surnameFirst: string;
  surnameLast: string;
  newContent: string;
  newContentSufix: string
}

const Title: FC<ITitleTypes> = ({firstName, surnameFirst, surnameLast, newContent, newContentSufix}) => {
  const titleRef = useRef(null);
  const nameRef = useRef(null);
  const surnameRef = useRef(null);
  const surnameLastRef = useRef(null);
  const sufixRef = useRef(null);

  useGSAP(() => {
    gsap.to(titleRef.current, {
      delay: 1,
      duration: 2,
      text: {
        value: newContent,
      },
    });
    gsap.to(sufixRef.current, {
      display: 'inline-block',
      delay: 1.7,
      duration: 0.1,
    });
    gsap.to(sufixRef.current, {
      opacity: 1,
      delay: 3.5,
      duration: 0.5,
    });
  })

  useGSAP(() => {
    gsap.set([sufixRef.current], {
      display: 'none',
      opacity: 0,
    })
    gsap.to(nameRef.current, {
      delay: 1.5,
      duration: 1,
      text: {
        value: firstName.split('')[0],
      }
    })
    gsap.to(surnameRef.current, {
      delay: 1.5,
      duration: 1,
      text: {
        value: surnameFirst.split('')[0],
      }
    })
    gsap.to(surnameLastRef.current, {
      delay: 1.5,
      duration: 1,
      text: {
        value: surnameLast.split('')[0],
      }
    })
    gsap.to(surnameRef.current, {
      delay: 2.3,
      duration: 0.3,
      text: {
        value: surnameFirst.split('')[0].toLowerCase(),
      }
    })
    gsap.to(surnameLastRef.current, {
      delay: 2.4,
      duration: 0.5,
      text: {
        value: surnameLast.split('')[0].toLowerCase(),
      }
    })
  })

  return (
    <StyledTitle>
      <span ref={nameRef}>{firstName}</span> <span ref={surnameRef}>{surnameFirst}-</span><span
      ref={surnameLastRef}>{surnameLast}</span> <span ref={sufixRef}>{newContentSufix}</span>
    </StyledTitle>
  );
}

export default Title;