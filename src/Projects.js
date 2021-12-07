import styled from 'styled-components'
import { ImgA, ImgB, ImgC, ImgD } from './projectImages'

const ProjectsWrapper = styled.div`
  width: 100%;
  padding: var(--gap);
  padding-bottom: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .button {
    align-self: flex-end;
    margin-left: auto;
    margin-right: var(--gap);
    > div {
      width: 185px;
      height: 37px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--main);
      color: white;
      font-size: 15px;
      font-weight: bold;
    }

    order: 2;
    @media (max-width: 1025px) {
      order: 4;
      margin: auto;
      padding-top: 50px;
      padding-bottom: 80px;
    }
  }
  .intro {
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
      <div className='intro'>
        <div className='title'>
          <h2>Projects</h2>
          <h3>近 期 專 案</h3>
        </div>
        <p>
          我們期許能在現實框架中找出未知的新可能。<br />
          每個角色都是一片版塊，既可獨立存在且能擠壓創造成為新的可能。<br />
          由型態、顏色、比例、拼貼、對齊、包覆產生的版塊，點線成面，形與形之間的串聯，讓所有的規律與不規律整合呈現。
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
      <div className='button'><div>更多專案</div></div>
    </ProjectsWrapper>
  )
}