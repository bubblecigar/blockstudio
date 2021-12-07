import styled from 'styled-components'

const HeroImageStyle = styled.div`
  width: calc(100% - 350px);
  background-color: white;

  @media (max-width: 1025px) {
    width: 100%;
  }
`

export const HeroImage = () => {
  return <HeroImageStyle />
}