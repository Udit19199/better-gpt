# GEMINI.md

## Project Overview

This project, `better-gpt`, is a command-line interface (CLI) tool built with TypeScript and Bun. It is designed to function as a "prompt optimizer" by interacting with a local Ollama instance. The core purpose is to take a user's initial prompt, potentially ask clarifying questions, and then generate a more precise and contextually rich prompt for better results from a language model.

The main technologies used are:
*   **TypeScript:** For type-safe JavaScript development.
*   **Bun:** As the JavaScript runtime and package manager.
*   **Ollama:** For running local language models.

The project is structured with a main entry point in `cli.ts` and core logic separated into the `core/` directory. Configuration for the Ollama API endpoint and the model to be used is stored in `core/config.ts`. The `core/ollama.ts` file handles the direct communication with the Ollama API.

## Building and Running

### Installation

To install the project dependencies, run:

```bash
bun install
```

### Running the application

You can run the application directly using:

```bash
bun run cli.ts
```

Alternatively, since the `package.json` file defines a `bin` entry for `better-gpt`, you can run the tool after installation with:

```bash
better-gpt
```

### Testing

There are no explicit test commands defined in the project.

```bash
# TODO: Add test command
```

## Development Conventions

*   **Code Style:** The code is written in TypeScript and follows standard formatting conventions.
*   **Modularity:** The core logic is separated into modules within the `core/` directory, promoting a clean separation of concerns.
*   **Configuration:** Application configuration, such as the Ollama API URL and model name, is centralized in `core/config.ts`.
*   **Dependencies:** Project dependencies are managed through `package.json` and the `bun.lock` file.
