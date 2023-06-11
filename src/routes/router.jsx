import { createBrowserRouter  } from "react-router-dom";
import App from '../App.jsx'
import ErrorRoutePages from "../components/ErrorRoutePages/ErrorRoutePages.jsx";
import ServiceContent from "../components/Content/linMain/serviceContent/serviceContent.jsx";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorRoutePages />
    },
    {
        path: "/service",
        element: <ServiceContent/>,
      },
  ]);

  export default router