import styled from 'styled-components'
import { FloatingBlock2 } from './animationUtils'

const IntroductionWrapper = styled.div`
  background: white;
  width: 351px;
  display: flex;
  flex-flow: column;

  ::after {
    content: '';
    height: 100%;
    width: 0;
    border-right: 1px solid var(--main);
    position: absolute;
    right: -2px;
    z-index: 60;
  }

  @media (max-width: 1025px) {
    flex-wrap: wrap;
    border-bottom: 1px solid var(--main);
    width: 100%;
    justify-content: space-between;
    height: 500px;
    ::after {
      display: none;
    }
  }
  @media (max-width: 700px) {
    flex-flow: column nowrap;
  }

  > div {
    outline: 1px solid var(--main);
    margin-top: -1px;
    flex-basis: 0;
    flex-grow: 1;

    @media (max-width: 1025px) {
      border-left: 0px;
      border-right: 0px;
      flex-basis: 100%;
    }
  }
  > div:last-child {
    border-bottom: 0;
  }

  .ask {
    order: 2;
    flex-grow: 1;
    max-height: 170px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    position: relative;

    > * {
      padding: var(--gap-m);
    }

    h2 {
      font-size: 36px;
      font-weight: bold;
      padding-bottom: 10px;
    }
    h3 {
      font-size: 24px;
      font-weight: bold;
      word-spacing: 8px;
    }
    p {
      font-size: 14px;
      padding-top: 0px;
      line-height: 28px;
    }
    .button {
      width: 40px;
      height: 40px;
      position: absolute;
      right: 0;
      bottom: 0;
      background: var(--main);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 18px;
    }
    z-index: 15;
  }
  .since {
    order: 3;
    z-index: 10;
    background: white;
    flex-grow: 0.5;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;

    p {
      font-size: 20px;
      font-weight: bold;
      padding: var(--gap-m);
    }
    .year {
      font-size: 40px;
      font-weight: bold;
      padding: var(--gap-m);
      color: white;
      text-shadow:
      -1px -1px 0 var(--main),  
        1px -1px 0 var(--main),
        -1px 1px 0 var(--main),
        1px 1px 0 var(--main);
    }

    @media (max-width: 1025px) {
      order: 1;
      flex-flow: column;
      align-items: flex-start;
      justify-content: flex-end;
    }
    @media (max-width: 700px) {
      display: none;
    }
  }
  .carrer {
    order: 4;
    flex-grow: 1.5;
    max-height: 300px;
    display: flex;
    flex-flow: column;

    @media (max-width: 1025px) {
      transform: scale(1.1);
      transform-origin: 100% 100%;
      z-index: 20;
    }
    @media (max-width: 700px) {
      transform: scale(1);
      .ground {
        height: 300px;
        margin-top: 30px;
      }
    }

    .nav {
      height: 30px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid var(--main);
      justify-content: space-between;
      
      > div {
        flex-basis: 0;
        flex-grow: 1;
        display: flex;
      }
      .dot {
        width: 12px;
        height: 12px;
        border: 1px solid var(--main);
        border-radius: 10px;
        margin-left: 8px;
        position: relative;
      }
      .dot:first-child::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: var(--main);
        width: 6px;
        height: 6px;
        border-radius: 10px;
      }
    }
    .content {
      flex-grow: 0.5;
      h2, h3 {
        font-size: 36px;
        font-weight: bold;
        word-spacing: 3px;
        padding-left: var(--gap-m);
        padding-top: var(--gap-m);
      }
      h3 {
        font-size: 24px;
      }
    }
    .ground {
      flex-grow: 1.2;
      background-color: #40587C;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23324b6e' fill-opacity='0.6'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E");
    }
  }
`

export const Introduction = () => {
  return (
    <IntroductionWrapper className='intro' >
      <FloatingBlock2 className='ask' init={'pop'} factor={2} top={-1}>
        <div>
          <h2>FORM</h2>
          <h3>??? ??? ??? ???</h3>
        </div>
        <p>???????????????????????????<br />????????????Email????????????????????????????????????</p>
        <div className='button'>></div>
      </FloatingBlock2>
      <FloatingBlock2 className='since' factor={3}>
        <p>Since</p>
        <div className='year'>2015</div>
      </FloatingBlock2>
      <FloatingBlock2 className='carrer' init={'pop'} factor={1}>
        <div className='nav'>
          <div>
            <div className='dot' />
            <div className='dot' />
            <div className='dot' />
          </div>
          <div>- Career panel -</div>
          <div></div>
        </div>
        <div className='content'>
          <h2>CAREER</h2>
          <h3>??? ??? ??? ???</h3>
        </div>
        <div className='ground'></div>
      </FloatingBlock2>
    </IntroductionWrapper >
  )
}