import { setupGenkit, runServer } from "@oconva/qvikchat/genkit";
import { defineChatEndpoint } from "@oconva/qvikchat/endpoints";

// Setup Genkit
setupGenkit({
  port: 3001,
});

// Open-ended chat
defineChatEndpoint({
  endpoint: "chat",
});

// Run server
runServer({
  port: 3440
});
