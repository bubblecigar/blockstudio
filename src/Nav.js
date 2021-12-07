import styled, { keyframes } from 'styled-components'

const runningText = keyframes`
  from {
    transform: translate(100%);
  }
  to {
    transform: translate(-100%);
  }
`

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
    @media (max-width: 1025px) {
      display: none;
    }
  }
  .temp {
    width: 90px;
    height: 60px;
    @media (max-width: 1025px) {
      display: none;
    }
  }
  .banner {
    flex-grow: 1;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    white-space: nowrap;
    overflow: hidden;
    span {
      animation: ${runningText} 15s linear infinite;
    }
    span::before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      top: 50%;
      transform: translate(-150%, -50%);
      background: var(--main);
    } 
  }
  .list {
    white-space: nowrap;
    width: 150px;
    height: 50px;
    font-size: 18px;
    font-weight: bold;
  }
  .hamberger {
    width: 50px;
    height: 50px;
    font-size: 30px;
    background: var(--main);
    color: white;
  }
`

export const Nav = () => {
  return (
    <NavWrapper>
      <div className='logo'>Logo</div>
      <div className='time'>time</div>
      <div className='temp'>temp</div>
      <div className='banner'>
        <span>Every element is a plate, present oneself but also extrude others to create a new possibility.</span>
      </div>
      <div className='list'>作 品 列 表</div>
      <div className='hamberger'>=</div>
    </NavWrapper>
  )
}