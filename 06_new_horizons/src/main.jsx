import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';
import { baseTheme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={baseTheme}>
    <GlobalStyles />
    <Router />
  </ThemeProvider>
);
