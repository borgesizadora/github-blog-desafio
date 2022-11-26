import { createGlobalStyle } from 'styled-components'

export const GLobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scrollbar-width: thin;
  scrollbar-color: ${(props) => `${props.theme['base-label']} ${props.theme['base-background']}`} ;
}

*::-webkit-scrollbar {
  width: 15px;
  height: 15px;
}

*::-webkit-scrollbar-track {
  background: ${(props) => props.theme['base-input']};
}

*::-webkit-scrollbar-thumb {
  background-color:${(props) => props.theme['base-label']};
  border: solid  2px ${(props) => props.theme['base-background']};
}


:focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
}

body {
  background-color: ${(props) => props.theme['base-background']};
  color: ${(props) => props.theme['base-text']};
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font: 400 1rem "Nunito", sans-serif
}

a {
  text-decoration: none;
  color: inherit;
}
ul, ol {
  list-style: none;
}
`
