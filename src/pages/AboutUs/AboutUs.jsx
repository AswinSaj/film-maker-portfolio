/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import hoverEffect from 'hover-effect'
import styles from './AboutUs.module.css'
import ImageOne from '../../assets/Images/Potrait/SarathMenon2.jpg'
import ImageTwo from '../../assets/Images/Potrait/SarathMenon1.jpg'

const AboutUs = () => {
  const [readMore, setReadMore] = useState(false)
  const distortRef = useRef(null)
  const [, setHoverDistort] = useState('')
  useEffect(() => {
    if (distortRef.current) {
      setHoverDistort(
        new hoverEffect({
          parent: distortRef.current,
          intensity1: 0.1,
          intensity2: 0.1,
          angle2: Math.PI / 2,
          image1: ImageOne,
          image2: ImageTwo,
          displacementImage:
            'https://cdn.jsdelivr.net/gh/robin-dela/hover-effect@b6c6fd26/images/stripe1mul.png',
        })
      )
    }
  }, [])
  return (
    <div className='container'>
      <div className={styles.flex}>
        <div className={styles.content}>
          <p>
            <span className={styles.name}>Sarath Menon</span>, a multifaceted
            artist with a Chemical Engineering degree from BITS Pilani and a
            filmmaking education from The London Film School, is internationally
            celebrated for his profound visual storytelling. His creations, born
            from a fusion of technical precision and artistic vision, go beyond
            fleeting moments, leaving a lasting impact.
          </p>
          <p>
            An adept filmmaker, screenwriter, cinematographer, and photographer,
            Sarath's work is marked by poetic afterthought and a unique play of
            light. His compositions are not just visually striking but carry a
            depth that elicits genuine emotions from the audience—whether it be
            a tear or a smile, his narratives linger.
          </p>
          <p>
            Sarath's storytelling transcends conventional boundaries,
            transforming every frame into a canvas that speaks volumes. With a
            talent for capturing the essence of emotions, he crafts narratives
            that resonate, creating a profound connection between his art and
            the observer. In every sign-off, Sarath Menon leaves behind a visual
            and emotional imprint that transcends the ordinary.
          </p>
          <div className={styles.contact}>
            <p className={styles.heading}>Email me at</p>
            <Link
              to='mailto:sarathmenonexample@example.com'
              className={styles.email}
            >
              sarathmenonexample@example.com
            </Link>
            <p className={styles.heading}>Connect via</p>
            <div className={styles.socials}>
              <Link
                to='https://www.instagram.com/sarathmenonfilms/'
                target='_blank'
              >
                <i
                  className={`fa-brands fa-instagram ${styles.socialIcon}`}
                  style={{ color: '#d8c8af' }}
                ></i>
              </Link>
              <Link
                to='https://www.facebook.com/sarathmenonsample/'
                target='_blank'
              >
                <i
                  className={`fa-brands fa-facebook-f ${styles.socialIcon}`}
                  style={{ color: '#d8c8af' }}
                ></i>
              </Link>
              <Link to='https://twitter.com/sarathmenonsample/' target='_blank'>
                <i
                  className={`fa-brands fa-x-twitter ${styles.socialIcon}`}
                  style={{ color: '#d8c8af' }}
                ></i>
              </Link>
            </div>
          </div>
        </div>
        <div className={`${styles.smallContent}`}>
          <p>
            <span className={styles.name}>Sarath Menon</span>, a multifaceted
            artist with a Chemical Engineering degree from BITS Pilani and a
            filmmaking education from The London Film School, is internationally
            celebrated for his profound visual storytelling. His creations, born
            from a fusion of technical precision and artistic vision, go beyond
            fleeting moments, leaving a lasting impact.{' '}
            {!readMore && (
              <span
                className={styles.readMore}
                onClick={() => setReadMore(!readMore)}
              >
                Read more...
              </span>
            )}
          </p>

          {readMore && (
            <div>
              <p>
                An adept filmmaker, screenwriter, cinematographer, and
                photographer, Sarath's work is marked by poetic afterthought and
                a unique play of light. His compositions are not just visually
                striking but carry a depth that elicits genuine emotions from
                the audience—whether it be a tear or a smile, his narratives
                linger.
              </p>
              <p>
                Sarath's storytelling transcends conventional boundaries,
                transforming every frame into a canvas that speaks volumes. With
                a talent for capturing the essence of emotions, he crafts
                narratives that resonate, creating a profound connection between
                his art and the observer. In every sign-off, Sarath Menon leaves
                behind a visual and emotional imprint that transcends the
                ordinary.{' '}
                {readMore && (
                  <span
                    className={styles.readMore}
                    onClick={() => setReadMore(!readMore)}
                  >
                    Collapse
                  </span>
                )}
              </p>
            </div>
          )}
        </div>
        <div className={styles.info}>
          <div className={styles.image} ref={distortRef}></div>
        </div>
      </div>
      <hr className={`${styles.hr} ${styles.small}`} />
      <div className={`${styles.contact} ${styles.small}`}>
        <p className={styles.heading}>Email me at</p>
        <Link
          to='mailto:sarathmenonexample@example.com'
          className={styles.email}
        >
          sarathmenonexample@example.com
        </Link>
        <p className={styles.heading}>Connect via</p>
        <div className={styles.socials}>
          <Link
            to='https://www.instagram.com/sarathmenonfilms/'
            target='_blank'
          >
            <i
              className={`fa-brands fa-instagram ${styles.socialIcon}`}
              style={{ color: '#d8c8af' }}
            ></i>
          </Link>
          <Link
            to='https://www.facebook.com/sarathmenonsample/'
            target='_blank'
          >
            <i
              className={`fa-brands fa-facebook-f ${styles.socialIcon}`}
              style={{ color: '#d8c8af' }}
            ></i>
          </Link>
          <Link to='https://twitter.com/sarathmenonsample/' target='_blank'>
            <i
              className={`fa-brands fa-x-twitter ${styles.socialIcon}`}
              style={{ color: '#d8c8af' }}
            ></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
