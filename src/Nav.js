import styled from 'styled-components'

const NavWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  position: absolute;
  width: 100%;

  > div {
    background: white;
    padding: var(--gap-s);
    border: 1px solid var(--main);
    margin-top: -1px;
    margin-left: -1px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > div:last-child {
    border-right: 0;
  }

  .logo {
    width: 60px;
    height: 60px;
  }
  .time {
    width: 170px;
    height: 50px;
  }
  .temp {
    width: 90px;
    height: 60px;
  }
  .banner {
    flex-grow: 1;
    height: 50px;
    line-height: 50px;
  }
  .list {
    width: 150px;
    height: 50px;
  }
  .hamberger {
    width: 50px;
    height: 50px;
  }
`

export const Nav = () => {
  return (
    <NavWrapper>
      <div className='logo'>Logo</div>
      <div className='time'>time</div>
      <div className='temp'>temp</div>
      <div className='banner'>Banner Banner Banner Banner </div>
      <div className='list'>list</div>
      <div className='hamberger'>=</div>
    </NavWrapper>
  )
}