import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { worker } from './mocking/browser'
import { RecoilRoot } from 'recoil';
async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocking/browser');

  return worker.start();
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

enableMocking().then(()=>{
  root.render(
    <React.StrictMode>
       <RecoilRoot>
      <App />
      </RecoilRoot>
    </React.StrictMode>
  );
})



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
