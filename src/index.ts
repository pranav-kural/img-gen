import { setupGenkit, runServer } from "@oconva/qvikchat/genkit";
import { defineChatEndpoint } from "@oconva/qvikchat/endpoints";

// Setup Genkit
setupGenkit();

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
  verbose: true,
});

// Run server
runServer();
