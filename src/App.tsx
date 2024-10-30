import {RouterProvider} from "react-router-dom";
import route from "./routes/index"
export default function App() {
    return <RouterProvider router={route} fallbackElement={<p>Loading...</p>} />;
}
