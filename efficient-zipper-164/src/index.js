import React from 'react';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import AppContextProvider from './Components/AppContextProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 
    <ChakraProvider>
    <BrowserRouter>
    
    <Provider store={store}>
    <AppContextProvider>
    <App />
    </AppContextProvider>
    </Provider>
   
    </BrowserRouter>
    </ChakraProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
