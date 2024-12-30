import {IConfig} from "./config.interface";

export async function getPartnerConfig(partner: string): Promise<IConfig | null> {
	try {
		/*// Define the API endpoint, appending the partner identifier as a parameter
		const response = await fetch(`http://localhost:5001/api/partners/config?partner=${partner}`);
		
		// Check if the response is successful
		if (!response.ok) {
			throw new Error(`Error fetching config for partner: ${partner}`);
		}
		
		// Parse and return the JSON data
		const config = await response.json();
		return config;*/
		
		return {
			allowed: true,
			name: "taxefy",
			country: undefined,
			language: undefined,
			link: "https://app.taxefy.at/redirect?partner=91db814a-9a95-11ef-8b3d-d2cbac6b0cb9"
		};
		
	} catch (error) {
		console.error("Failed to fetch partner config:", error);
		return null; // Or handle error response as needed
	}
}
