import styled from 'styled-components'
import { ImgA, ImgB, ImgC, ImgD } from './projectImages'
import { SlidingDiv } from './animationUtils'

const ProjectsWrapper = styled.div`
  width: 100%;
  padding: var(--gap);
  padding-bottom: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  z-index: 50;

  .buttonWrap {
    align-self: flex-end;
    margin-left: auto;
    margin-right: var(--gap);

    order: 2;
    @media (max-width: 1025px) {
      order: 4;
      margin: auto;
      padding-top: 50px;
      padding-bottom: 80px;
    }
  }
  .button {
    width: 185px;
    height: 37px;
    display: flex;
    border: 1px solid var(--main);
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: bold;
  }
  .project-intro {
    display: flex;
    align-items: center;
    align-self: flex-end;
    order: 1;

    .title {
      padding: var(--gap);

      h2, h3 {
        font-size: 45px;
        font-weight: bold;
      }
      h3 {
        padding-top: var(--gap-s);
        font-size: 25px;
        word-spacing: 6px;
      }
    }
    p {
      line-height: 24px;
      max-width: 450px;
    }
  }
  .list {
    order: 3;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: var(--gap);
    padding-bottom: 0;
    justify-content: space-between;
    align-self: flex-start;

    .card {
      position: relative;
      width: calc((100% - 60px) / 4);
      padding-bottom: calc((100% - 60px) / 4 + 40px);
      overflow: hidden;

      @media (max-width: 1025px) {
        width: calc((100% - 20px) / 2);
        padding-bottom: calc((100% - 20px) / 2 + 40px);
        margin-bottom: 20px;
      }
      @media (max-width: 700px) {
        width: 100%;
        padding-bottom: 100%;
        margin-bottom: 20px;
      }
    }
    .project-image {
      position: absolute;
      width: 100%;
      height: calc(100% - 60px);
      transition: transform 1s;

      &:hover {
        transform: scale(1.5);
      }
    }
    .project-description {
      position: absolute;
      width: 100%;
      height: 60px;
      border: 1px solid var(--main);
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: bold;
      background: white;
    }
  }
`

export const Projects = () => {
  return (
    <ProjectsWrapper>
      <div className='project-intro'>
        <div className='title'>
          <h2>Projects</h2>
          <h3>??? ??? ??? ???</h3>
        </div>
        <p>
          ????????????????????????????????????????????????????????????<br />
          ??????????????????????????????????????????????????????????????????????????????????????????<br />
          ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        </p>
      </div>
      <div className='list'>
        <div className='card'>
          <ImgA className='project-image' />
          <div className='project-description'>Wave</div>
        </div>
        <div className='card'>
          <ImgC className='project-image' />
          <div className='project-description'>Blocks</div>
        </div>
        <div className='card'>
          <ImgB className='project-image' />
          <div className='project-description'>Triangle</div>
        </div>
        <div className='card'>
          <ImgD className='project-image' />
          <div className='project-description'>Cicles</div>
        </div>
      </div>
      <div className='buttonWrap'>
        <SlidingDiv
          className='button'
          bgFrom={'var(--main)'}
          bgTo={'white'}
          textFrom={'white'}
          textTo={'var(--main)'}
          skew={'-15deg'}
        >????????????</SlidingDiv>
      </div>
    </ProjectsWrapper>
  )
}