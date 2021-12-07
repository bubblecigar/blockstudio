import styled from 'styled-components'
import { HeroImage } from './HeroImage'
import { Introduction } from './Introduction'
import { Projects } from './Projects'

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  transform: translateY(15px);

  padding-top: 34px;
  padding-left: 40px;
  display: flex;
  flex-wrap: no-wrap;
  margin-bottom: -10px;

  > div {
    flex-shrink: 0;
    height: 100%;

  }
`


export const Content = () => {
  return (
    <ContentWrapper>
      <HeroImage />
      <Introduction />
      <Projects />
    </ContentWrapper>
  )
}