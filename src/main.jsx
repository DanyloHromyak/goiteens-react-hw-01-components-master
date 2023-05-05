import { createRoot } from 'react-dom/client';
import './styles/index.module.css';
import App from './Components/App';

const rootElem = document.querySelector('#root');
createRoot(rootElem).render(<App />);
