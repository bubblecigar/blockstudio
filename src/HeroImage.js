import styled, { keyframes } from 'styled-components'

const endlessRoad = keyframes`
  from {
    transform: translate(300px);
  }
  to {
    transform: translate(0px);
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
    width: 200px;
    height: 200px;

    @media (max-width: 700px) {
      width: 150px;
      height: 150px;
      transform: translate(-50%, -20%);
    }

    border-radius: 100px;
    background: var(--main);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 36px;
    bottom:0;
    left: 50%;
    transform: translate(-50%, 20%);
    transition: transform cubic-bezier(.7,0,.3,1) .4s;

    &:hover {
      transform: translate(-50%, -50%);
    }
  }
`

const lines = new Array(5).fill(0)

export const HeroImage = () => {
  return (
    <HeroImageStyle>
      <div className='sky'></div>
      <div className='ground'>
        <div className='horizontal-line'>
        </div>
        <div className='sun'>
          Hi, 你好
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
      </div>
    </HeroImageStyle>
  )
}