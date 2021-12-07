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
