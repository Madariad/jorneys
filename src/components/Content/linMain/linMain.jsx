import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./style.css";
import SearchContent from "../../Content/linMain/searchContent/searchContent";
import ServiceContent from "../../Content/linMain/serviceContent/serviceContent";
import InfoSearchContent from "../../Content/linMain/infoSearchContent/infoSearchContent";
import ErrorRoutePages from "../../ErrorRoutePages/ErrorRoutePages";


const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchContent />,
    errorElement: <ErrorRoutePages />
  },
  {
    path: "/objectInfo",
    element: <InfoSearchContent />,
  },
  {
    path: "/service",
    element: <ServiceContent />,
  },
]);

function LinMain() {
  return (
    <div className="linMain">
      <h1>ПРЕДОСТАВЛЕНИЕ СВЕДЕНИЙ, СОДЕРЖАЩИХСЯ В <br /> 
        ОТЧЕТАХ О НЕДВИЖОМАСТИ</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default LinMain;
