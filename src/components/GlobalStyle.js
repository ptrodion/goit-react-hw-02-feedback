import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.04em;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul {
  padding-left: 0;
  margin: 0;
  list-style-type: none;
}

.button {
  cursor: pointer;
  background-color: transparent;
  border: none;
}
`;
