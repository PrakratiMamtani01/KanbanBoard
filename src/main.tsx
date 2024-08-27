import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// exclamation indiicates that the eleemnt by root will never be empty.
ReactDOM.createRoot(document.getElementById("root")!).render(

  // It allows you to specify a fallback UI (such as a loading spinner or message) to display while the component is loading.
	<Suspense fallback={<div>Loading...</div>}>
    {/* provides routing capabilities to the application. It enables navigation and URL handling within the application. */}
		<BrowserRouter>
      {/* typically all props are forwarded but here forwarding all props except shake */}
			<StyleSheetManager shouldForwardProp={(prop) => prop !== "shake"}>
				<App />
			</StyleSheetManager>
		</BrowserRouter>
	</Suspense>
);
