import React from 'react';
import { createRoot} from 'react-dom/client';
import App from './App';

let container = document.getElementById("root");
createRoot(container).render(<App />)
