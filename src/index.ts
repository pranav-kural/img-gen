import { configureAndRunServer, ChatEndpointConfig } from "@oconva/qvikchat";

// Configurations for the image generation endpoint (using DALL·E 3 model)
const endpointConfig: ChatEndpointConfig = {
  endpoint: "img",
  modelConfig: {
    name: "dallE3",
    response_format: "url",
  },
  outputSchema: {
    format: "media",
    contentType: "image/png",
  },
};

// Configure and run the server
configureAndRunServer({
  endpointConfigs: [endpointConfig],
});
