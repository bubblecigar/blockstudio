import React from 'react'
import styled, { keyframes } from 'styled-components'
import { SlidingDiv, FloatingBlock, Enter } from './animationUtils'

const runningText = keyframes`
  from {
    transform: translate(100%);
  }
  to {
    transform: translate(-100%);
  }
`
const NavWrapper = styled.div`
  z-index: 3;
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
    font-weight: bold;
    font-size: 20px;
  }
  .time {
    width: 170px;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    word-spacing: 0px;
    @media (max-width: 1025px) {
      display: none;
    }
  }
  .temp {
    width: 90px;
    height: 60px;
    font-size: 30px;
    font-weight: bold;
    span {
     font-weight: 600;
     font-size: 24px;
    }
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
    @media (max-width: 700px) {
      height: 25px;
    }
    span {
      display: block;
      width: 100%;
      animation: ${runningText} 15s linear infinite;
      @media (max-width: 700px) {
        display: none;
      }
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
    border-right: 1px solid white;
  }
  .hamberger {
    width: 50px;
    height: 50px;
    font-size: 30px;
    background: var(--main);
    color: white;
  }
`

const getTimeString = (date) => {
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  let str = ''
  str += `${hours < 10 ? '0' : ''}${hours}`
  str += ' : '
  str += `${minutes < 10 ? '0' : ''}${minutes}`
  str += ' : '
  str += `${seconds < 10 ? '0' : ''}${seconds}`
  return str
}

export const Nav = () => {
  const [time, setTime] = React.useState(getTimeString(new Date()))

  React.useEffect(
    () => {
      const intervalId = setInterval(
        () => {
          setTime(getTimeString(new Date()))
        }, 1000
      )
      return () => {
        clearInterval(intervalId)
      }
    }, []
  )

  return (
    <NavWrapper>
      <FloatingBlock className='logo'>Bck</FloatingBlock>
      <Enter className='time'>{time}</Enter>
      <Enter className='temp'>17°<span>c</span></Enter>
      <Enter className='banner'>
        <span>Every element is a plate, present oneself but also extrude others to create a new possibility.</span>
      </Enter>
      <SlidingDiv
        className='list'
        bgFrom={'white'}
        textFrom={'var(--main)'}
        bgTo={'var(--main)'}
        textTo={'white'}
      >作 品 列 表</SlidingDiv>
      <Enter className='hamberger'>=</Enter>
    </NavWrapper >
  )
}