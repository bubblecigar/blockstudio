import styled from 'styled-components'

const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  background: white;
  width: calc(100% - 349px);
  min-width: 500px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--main);
  border-right: 1px solid var(--main);


  > div {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 var(--gap-m);
  }

  .fb {
    width: 40px;
    background: var(--main);
    color: white;
    font-size: 16px;
    font-weight: bold;
  }
  .mail {
    flex-grow: 1;
    justify-content: flex-start;
  }
`

export const Footer = () => {
  return (
    <FooterWrapper>
      <div className='fb'>fb</div>
      <div className='tel'>02-2885-8586</div>
      <div className='mail'>info@blockstudio.tw</div>
      <div className='address'>11170 台北市士林區前港街11號3樓</div>
    </FooterWrapper>
  )
}