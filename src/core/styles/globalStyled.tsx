import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
  font-family: Roboto;
}
a { 
  text-decoration: none;
}
`;

export default Global;
