import { generatePrompt } from "./core/ollama.ts";

async function main() {
  try {
    const response = await generatePrompt(
      "What is your name? Answer in less than 5 words."
    );
    console.log(response);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
