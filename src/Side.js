import styled from 'styled-components'

const SideWrapper = styled.div`
  position: absolute;
  height: 100%;
  background: white;
  left: 0;

  @media (max-width: 1025px) {
    display: none;
  }

  flex-grow: 1;
  width: 40px;
  border-right: var(--main) 1px solid;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: calc(40px + var(--gap-m));

  span {
    transform: rotate(180deg);
    line-height: 40px;
  }
`

export const Side = () => {
  return (
    <SideWrapper>
      <span>
        Block Studio©2018 Copyright. All Rights Reserved.
      </span>
    </SideWrapper>
  )
}