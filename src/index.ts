import { setupGenkit, runServer } from "qvikchat/genkit";
import { defineChatEndpoint } from "qvikchat/endpoints";

// Setup Genkit
setupGenkit({
  port: 3001,
});

// Open-ended chat
defineChatEndpoint({
  endpoint: "chat",
});

// Run server
runServer();
