import { createAnthropic } from "@ai-sdk/anthropic";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";
import { inngest } from "./client";

const google = createGoogleGenerativeAI();
const openAI = createOpenAI();
const anthropic = createAnthropic();

export const executeAi = inngest.createFunction(
  { id: "execute-ai" },
  { event: "execute/ai" },
  async ({ event, step }) => {
    await step.sleep("pretend", "5s");

    const { steps: geminiSteps } = await step.ai.wrap(
      "gemini-generate-text",
      generateText,
      {
        model: google("gemini-2.5-flash"),
        prompt: "Generate a short motivational quote.",
        system:
          "You are a helpful assistant that generates text based on user prompts.",
      },
    );

    const { steps: openAISteps } = await step.ai.wrap(
      "openai-generate-text",
      generateText,
      {
        model: openAI("gpt-5-mini"),
        prompt: "Generate a short motivational quote.",
        system:
          "You are a helpful assistant that generates text based on user prompts.",
      },
    );

    const { steps: anthropicSteps } = await step.ai.wrap(
      "anthropic-generate-text",
      generateText,
      {
        model: anthropic("claude-sonnet-4-5"),
        prompt: "Generate a short motivational quote.",
        system:
          "You are a helpful assistant that generates text based on user prompts.",
      },
    );

    return {
      geminiSteps,
      openAISteps,
      anthropicSteps,
    };
  },
);
