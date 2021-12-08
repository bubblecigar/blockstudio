import styled, { keyframes } from 'styled-components'
import { Enter } from './animationUtils'

const endlessRoad = keyframes`
  from {
    transform: translate(300px);
  }
  to {
    transform: translate(0px);
  }
`
const emittingCrown = keyframes`
  from {
    transform: scale(0);
    opacity: 1;
  }
  to {
    transform: scale(2);
    opacity: 0;
  }
`

const HeroImageStyle = styled.div`
  width: calc(100% - 350px);
  overflow: hidden;
  background-color: white;

  @media (max-width: 1025px) {
    width: 100%;
  }

  .sky, .ground {
    width: 100%;
    height: 50%;
  }
  .sky {
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    align-items: center;
  }
  h1 {
    color: var(--contrast);
    font-size: 30px;
    font-weight: bold;
  }
  p {
    color: var(--contrast);
    text-align: center;
    line-height: 20px;
    padding-top: 10px;
  }
  .ground {
    display: flex;
    justify-content: space-between;
    perspective: 200px;
  }
  .left, .right {
    width: 350px;
    z-index: 2;
    background: var(--main);
    transform: rotate3d(0, 1, 0, 90deg);
    transform-origin: 0 100%;

    > div {
      position: absolute;
      height: 100%;
      width: 0px;
      border: 2px solid white;
      animation: ${endlessRoad} 5s linear infinite;
    }
    > div:nth-child(1) {
      animation-delay: 1s;
    }
    > div:nth-child(2) {
      animation-delay: 2s;
    }
    > div:nth-child(3) {
      animation-delay: 3s;
    }
    > div:nth-child(4) {
      animation-delay: 4s;
    }
    > div:nth-child(5) {
      animation-delay: 5s;
    }
  }
  .right {
    transform: rotate3d(0, 1, 0, -90deg);
    transform-origin: 100% 0;
    > div {
      position: absolute;
      height: 100%;
      width: 0px;
      animation: ${endlessRoad} 5s linear infinite reverse;
    }
  }
  .horizontal-line {
    position: relative;
    width: 50%;
    height: 150px;
    border: 2px solid var(--main);
    background: white;
    z-index: 1;
    position: absolute;
    top: 68%;
    left: 50%;
    transform-origin: 50% 0;
    transform: translate(-50%) rotateX(90deg);
  }
  .sun {
    width: 20px;
    height: 20px;
    margin: 60px;

    ::after {
      content: '';
      width: 80px;
      height: 80px;
      background-color: var(--contrast);
      opacity: 0.3;
      border-radius: 50%;
      position: absolute;
    }

    border-radius: 100px;
    background: var(--contrast);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 36px;

    .crown {
      width: 80px;
      height: 80px;
      position: absolute;

      border-radius: 100px;
      background: var(--contrast);
      animation: ${emittingCrown} 2s cubic-bezier(.7,0,.3,1) infinite;
    }
  }
`

const lines = new Array(5).fill(0)

export const HeroImage = () => {
  return (
    <HeroImageStyle>
      <Enter className='sky'>
        <div className='sun'>
          <div className='crown'></div>
        </div>
        <h1 className='orange'>Block Studio</h1>
        <p className='orange'>
          3F, No. 1L Qiangang StaticRange., Shilin Dist.,<br className='orange' />
          Taipei City 111, Taiwan
        </p>
      </Enter>
      <Enter className='ground'>
        <div className='horizontal-line'>
        </div>
        <div className='left'>
          {
            lines.map((line, i) => <div key={i} />)
          }
        </div>
        <div className='right'>
          {
            lines.map((line, i) => <div key={i} />)
          }
        </div>
      </Enter>
    </HeroImageStyle>
  )
}