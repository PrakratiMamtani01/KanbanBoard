// useRoutes hook is used to render the appropriate UI based on the current URL.
import { useRoutes } from "react-router";
// this is a folder creates by us that contains the configuration of the root
import routes from "./routes";

function App() {
  // we check the configurationa and return element
	const element = useRoutes(routes);
	return <>{element}</>;
}

export default App;