import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { worker } from './mocking/browser'
import { RecoilRoot } from 'recoil';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

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
      <QueryClientProvider client={queryClient}>
       <RecoilRoot>
      <App />
      </RecoilRoot>
      </QueryClientProvider>
    </React.StrictMode>
  );
})

reportWebVitals();
