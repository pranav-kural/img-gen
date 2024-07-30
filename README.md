# Image Generation Service

This projects provides an API endpoint to generate images using the [DALL·E 3](https://openai.com/index/dall-e-3) model. The endpoint accepts the prompt text and returns an image generated based on the given prompt.

This project was built using the [QvikChat](https://qvikchat.pkural.ca) framework. QvikChat is an open-source framework that provides you with a solid foundation to build powerful AI-powered chat service endpoints quickly and efficiently

**Pre-requisites:**

- You will need an OpenAI API Key to use the DALL·E 3 model. You can get one by signing up on the [OpenAI website](https://openai.com/api/).
- To run this project locally, you will need Node.js installed on your machine.

You can deploy this project to any Node.js platform if you want to. Although, if you do plan on deploying it, please ensure you have the necessary security controls in place, especially if the server endpoint is going to be exposed to the public. For setting up simple API-key based endpoint authentication, you can check the [Authentication](https://qvikchat.pkural.ca/authentication) page on QvikChat documentation.

## Getting Started

Get started by cloning the repository:

```bash copy
git clone https://github.com/pranav-kural/img-gen.git
```

### Setup Environment Variables

This project uses the [DALL·E 3](https://openai.com/index/dall-e-3) model for image generation. To be able to use it, you will require an OpenAI API Key.

Create a `.env` file in the root of the project and add the following environment variables:

```env copy
OPENAI_API_KEY=
```

Alternatively, you can copy the `.env.tmp` file or rename it to `.env` and fill in the values.

### Install Dependencies

Install the project dependencies using npm or pnpm:

```bash
npm install
```

Or

```bash
pnpm install
```

### Running the Project

You can run the following commands to get started:

```bash
npm run dev # or pnpm dev
```

The `dev` script is set in `package.json` to run `build` and then `start` the server. When using the default configurations, the server will start on `http://localhost:3400`.

Once, you run the project, you can test the endpoint defined in `src/index.ts` from terminal using command below:

```bash copy
curl -X POST "http://127.0.0.1:3400/img" -H "Content-Type: application/json"  -d '{"data": { "query": "a 3D painting like illustration of a cute lama in a hot balloon" } }'
```

Above example points to `http://127.0.0.1:3400`. You can change this port and host depending on where you are running the server and on which port.

You could also use the [Genkit Developer UI](#genkit-developer-ui) to test the endpoints.

### Genkit Developer UI

You can run the Genkit developer UI to test the endpoints. Testing the endpoints using a graphical interface is probably the easiest way to get started. You can know more about the Genkit Developer UI [here](https://firebase.google.com/docs/genkit/devtools#genkit_developer_ui).

Start the Genkit developer UI:

```bash copy
npx genkit start
```

OR, you can install the Genkit CLI globally:

```bash copy
npm i -g genkit
```

Then start the Genkit developer UI:

```bash copy
genkit start
```

You should be able to see the defined `img` endpoint under the **Flows** section in the left sidebar. Simply click on the endpoint and enter the query you want to test with. Clicking the **Run** button will send the query to the endpoint and the response generation process will start.

## How it works?

The project uses the [DALL·E 3](https://openai.com/index/dall-e-3) model to generate images based on the given prompt.

We use [QvikChat](https://qvikchat.pkural.ca) to create the API endpoint that accepts the prompt text and returns the generated image.

The `src/index.ts` file contains the code to that defines this endpoint. The code snippet below shows how the endpoint is defined:

```typescript
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
```

**Key points:**

- `endpoint`: this is the server endpoint where the `HTTP POST` requests will be sent to.
- `modelConfig`: this object contains the configuration for the model to be used. In this case, we are using the `dallE3` model and specifying that the response format should be a URL. This will ensure that model generates the image and returns the URL to the generated image. You can also use `b64_json` instead of `url` to get the base64 encoded image in the response.
- `outputSchema`: this object specifies the format of the response that the endpoint is expected to produce. In this case, we are specifying that the response will be a media file with content type `image/png`.

Thanks to QvikChat, you can easily enable API-key based authentication with usage limits and response caching (with some limitations), by simply configuring your endpoint according to your needs. For more information, check the [QvikChat documentation](https://qvikchat.pkural.ca).

## QvikChat

**QvikChat** is an open-source framework that provides you with a solid foundation to build powerful AI-powered chat service endpoints quickly and efficiently. It includes support for **multiple types of conversations (open-ended, close-ended)**, **chat history**, **response caching**, **authentication**, **information retrieval using Retrieval Augmented Generation (RAG)**, and more.

[Get Started](https://qvikchat.pkural.ca/getting-started) | [Documentation](https://qvikchat.pkural.ca)

## QvikChat Starter Template

This project was scaffolded using the [QvikChat starter template](https://github.com/oconva/qvikchat-starter-template). It comes pre-configured with the following features:

- **QvikChat**: QvikChat installed and configured to start serving chat endpoints.
- **TypeScript**: TypeScript to allow you to write type-safe code efficiently.
- **ESLint**: ESLint to enforce code quality and consistency.
- **Prettier**: Prettier to format your code automatically and ensure consistent code style.
- **GitHub Actions**: GitHub Actions to run your tests and lint your code automatically on every push.
- **SWC**: For faster and more efficient TypeScript compilation.
- **PNPM**: PNPM to manage your dependencies efficiently.

## Issues

If you encounter any issues or bugs while using this project, please report them by following these steps:

1. Check if the issue has already been reported by searching through [current issues](https://github.com/pranav-kural/img-gen/issues).
2. If the issue hasn't been reported, create a new issue and provide a detailed description of the problem.
3. Include steps to reproduce the issue and any relevant error messages or screenshots.
