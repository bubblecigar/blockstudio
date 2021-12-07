import styled from 'styled-components'

const IntroductionWrapper = styled.div`
  background: white;
  width: 350px;
  display: flex;
  flex-flow: column;

  > div {
    border: 1px solid var(--main);
    margin-top: -1px;
    margin-right: -1px;
  }
  > div:last-child {
    border-bottom: 0;
  }

  .ask {
    flex-basis: 0;
    flex-grow: 1;
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
      <div className='carrer'>Career</div>
    </IntroductionWrapper >
  )
}