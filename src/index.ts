import { configureAndRunServer } from "@oconva/qvikchat";
import { type DefineChatEndpointConfig } from "@oconva/qvikchat/endpoints";

// Configurations for the image generation endpoint (using DALL·E 3 model)
const endpointConfig: DefineChatEndpointConfig = {
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
