import './App.css'
import React from 'react'
import styled from 'styled-components'
import { Nav } from './Nav.js'
import { Side } from './Side.js'
import { Footer } from './Footer.js'
import { Content } from './Content.js'
import { Enter } from './animationUtils'
import { ThemeContext } from './ThemeContext'

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

const Theme = styled.div`
  --gap: 20px;
  --gap-m: 15px;
  --gap-s: 10px;
  --main: ${props => props.theme.mode === 'dark' ? '#40587c' : '#ec9669'};
  --contrast: ${props => props.theme.mode === 'dark' ? '#ec9669' : '#40587c'};
  --font-size: 13px;
`

function App() {
  const [theme, setTheme] = React.useState({ mode: 'dark' })

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <ThemeContext.Consumer>
        {
          ([theme]) => (
            <Theme theme={theme}>
              <Enter>
                <Window>
                  <Content />
                  <Side />
                  <Nav />
                  <Footer />
                </Window>
              </Enter>
            </Theme>
          )
        }
      </ThemeContext.Consumer>
    </ThemeContext.Provider>
  );
}

export default App;
