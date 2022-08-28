import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./HomePage";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<HomePage />
			</BrowserRouter>
		</QueryClientProvider>
	</React.StrictMode>
);