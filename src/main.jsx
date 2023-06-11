import React from 'react'
import ReactDOM from 'react-dom/client'
import "./main.css"
import { Provider } from 'react-redux'
import  store  from "./store/index.js";
import App from "./App";

// import { RouterProvider} from "react-router-dom";
// import  router  from "./routes/router.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
  <App/>
  </React.StrictMode>,
  </Provider>

)
