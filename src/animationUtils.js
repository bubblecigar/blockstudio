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
    left: -10px;
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
    left: -10px;
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

export const FloatingBlock2 = styled.div`
  @media (max-width: 1025px) {
    transform: none;
    ::after, ::before {
      display: none;
    }
  }

  position: relative;
  background: ${props => props.blockColor || 'white'};
  transition: transform .4s cubic-bezier(.7,0,.3,1);
  ${props => props.init === 'pop' ? `transform: translate(-${17 * props.factor}px, ${11 * props.factor}px);` : ''}
  z-index: 1;
  &:hover {
    ${props => props.init === 'pop' ? 'transform: translate(0, 0);' : `transform: translate(-${17 * props.factor}px, ${11 * props.factor}px);`}
    @media (max-width: 1025px) {
      transform: none;
    }
  }
  ::before {
    z-index: -1;
    content: '';
    left: ${props => props.left || -1}px;
    background: ${props => props.blockColor || 'white'};
    border-left: 1px solid var(--main);
    border-right: 1px solid var(--main);

    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 100%;
    transform-origin: 0 100%;
    transform: skew(-60deg);
    transition: height .4s cubic-bezier(.7,0,.3,1);
  }
  ::after {
    top: ${props => props.top || -1}px;
    z-index: -1;
    content: '';
    background: ${props => props.blockColor || 'white'};
    border-left: 1px solid var(--main);
    border-top: 1px solid var(--main);
    border-bottom: 1px solid var(--main);
    position: absolute;
    width: 100%;
    height: 100%;
    left: 100%;
    transform-origin: 0 50%;
    transform: skewY(-30deg);
    transition: width .4s cubic-bezier(.7,0,.3,1);
  }
`