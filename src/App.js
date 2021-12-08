import './App.css';
import styled from 'styled-components'
import { Nav } from './Nav.js'
import { Side } from './Side.js'
import { Footer } from './Footer.js'
import { Content } from './Content.js'
import { Enter } from './animationUtils'

const Window = styled.div`
  position: relative;
  overflow: hidden;

  border: 1px solid var(--main);
  width: calc(100vw - var(--gap) * 2);
  height: calc(100vh - var(--gap) * 2);
  color: var(--main);
  font-size: var(--font-size);
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`

function App() {
  return (
    <Enter>
      <Window>
        <Content />
        <Side />
        <Nav />
        <Footer />
      </Window>
    </Enter>
  );
}

export default App;
