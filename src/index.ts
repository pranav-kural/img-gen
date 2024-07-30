import { setupGenkit, runServer } from "@oconva/qvikchat/genkit";
import { defineChatEndpoint } from "@oconva/qvikchat/endpoints";

// Setup Genkit
setupGenkit();

// Define server endpoint to generate image using the DALL-E model
defineChatEndpoint({
  endpoint: "img",
  modelConfig: {
    name: "dallE3",
    response_format: "url",
  },
  outputSchema: {
    format: "media",
    contentType: "image/png",
  },
});

// Run server
runServer();
