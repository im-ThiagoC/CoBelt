import prisma from "@/lib/db";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world", retries: 5, },
  { event: "test/hello.world" },
  async ({ event, step }) => {

		// Fetching the video
    await step.sleep("wait-a-moment", "5s");

		// Transcribe the video
		await step.sleep("transcribe-video", "6s");

		// Sending transcription result to AI
		await step.sleep("notify-done", "5s");

		await step.run("create-workflow", async () => {
			return prisma.workflow.create({
				data: {
					name: 'Workflow from Inngest',
				}
			})
		})

    return { message: `Hello ${event.data.email}!` };
  },
);