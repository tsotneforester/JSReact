import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { GlobalStyles } from './theme.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyles />
    <App />
  </>
);
