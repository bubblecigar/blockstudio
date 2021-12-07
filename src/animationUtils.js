import styled, { keyframes } from 'styled-components'
export const SlidingDiv = styled.div`
  overflow: hidden;
  color: ${props => props.textFrom};
  position: relative;
  transition: all .4s cubic-bezier(.7,0,.3,1);
  ::before {
    background: ${props => props.bgTo};
    content: '';
    height: 100%;
    width: 120%;
    top: 0;
    transition: transform .4s cubic-bezier(.7,0,.3,1);
    transform: translate(-100%) ${props => props.skew ? `skewX(${props.skew})` : ''};
    position: absolute;
    z-index: -1;
  }
  ::after {
    background: ${props => props.bgFrom};
    content: '';
    height: 100%;
    width: 120%;
    transition: transform .4s cubic-bezier(.7,0,.3,1);
    transform: translate(0%)  ${props => props.skew ? `skewX(${props.skew})` : ''};
    position: absolute;
    top: 0;
    z-index: -1;
  }
  &:hover {
    color: ${props => props.textTo};
    background: transparent;
    ::before {
      transform: translate(0%)  ${props => props.skew ? `skewX(${props.skew})` : ''};
    }
    ::after {
      transform: translate(100%)  ${props => props.skew ? `skewX(${props.skew})` : ''};
    }
  }
`


export const FloatingBlock = styled.div`
  position: relative;
  background: ${props => props.blockColor || 'white'};
  transition: transform .4s cubic-bezier(.7,0,.3,1);
  &:hover {
    z-index: 1;
    transform: translate(16px, 10px);
    ::before {
      height: 10px;
    }
    ::after {
      width: 16px;
    }
  }
  ::before {
    z-index: -1;

    content: '';
    background: ${props => props.blockColor || 'white'};
    border: 1px solid var(--main);
    position: absolute;
    width: 100%;
    height: 0%;
    bottom: 100%;
    transform-origin: 0 100%;
    transform: skew(60deg);
    transition: height .4s cubic-bezier(.7,0,.3,1);
  }
  ::after {
    content: '';
    background: ${props => props.blockColor || 'white'};
    border: 1px solid var(--main);
    position: absolute;
    width: 0%;
    height: 100%;
    right: 100%;
    transform-origin: 100% 0;
    transform: skewY(30deg);
    transition: width .4s cubic-bezier(.7,0,.3,1);
  }
`