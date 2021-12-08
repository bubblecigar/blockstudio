import styled from 'styled-components'

const IntroductionWrapper = styled.div`
  background: white;
  width: 351px;
  display: flex;
  flex-flow: column;

  @media (max-width: 1025px) {
    width: 100%;
  }

  > div {
    border: 1px solid var(--main);
    margin-top: -1px;

    @media (max-width: 1025px) {
      border-left: 0px;
      border-right: 0px;
    }
  }
  > div:last-child {
    border-bottom: 0;
  }

  .ask {
    flex-basis: 0;
    flex-grow: 1;
    max-height: 170px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    position: relative;

    transform-origin: 100% 0;
    transform: scale(1.1);
    background: white;
    z-index: 2;
    @media (max-width: 1025px) {
      transform: scale(1);
    }

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
  }
  .since {
    flex-basis: 0;
    flex-grow: 0.5;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: var(--gap-m);
    position: relative;

    p {
      font-size: 20px;
      font-weight: bold;
    }
    .year {
      font-size: 40px;
      font-weight: bold;
      color: white;
      text-shadow:
      -1px -1px 0 var(--main),  
        1px -1px 0 var(--main),
        -1px 1px 0 var(--main),
        1px 1px 0 var(--main);
    }
  }
  .carrer {
    flex-basis: 0;
    flex-grow: 1.5;
    max-height: 300px;
    display: flex;
    flex-flow: column;

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
        font-size: 45px;
        font-weight: bold;
        word-spacing: 3px;
        padding-left: var(--gap-m);
        padding-top: var(--gap-s);
      }
      h3 {
        font-size: 30px;
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
    <IntroductionWrapper>
      <div className='ask'>
        <div>
          <h2>FORM</h2>
          <h3>專 案 詢 問</h3>
        </div>
        <p>請透過表單詢問案件<br />我們會以Email回覆或是直接與您電話聯絡</p>
        <div className='button'>></div>
      </div>
      <div className='since'>
        <p>Since</p>
        <div className='year'>2015</div>
      </div>
      <div className='carrer'>
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
          <h3>徵 人 頻 道</h3>
        </div>
        <div className='ground'>

        </div>
      </div>
    </IntroductionWrapper >
  )
}