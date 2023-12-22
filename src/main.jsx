import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from './router/Router.jsx';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './provider/AuthProvider.jsx';

import {
  
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <div >
          <RouterProvider router={router} />
      </div>
        <ToastContainer></ToastContainer>
        </QueryClientProvider>
        </AuthProvider>
  </React.StrictMode>,
)
