import "dotenv/config";
import { generateText, generateObject } from "ai";
import { client } from "./agentmark.client";

const telemetry = {
  isEnabled: true,
  metadata: {
    traceId: "trace-123",
    traceName: "customer-support",
    userId: "user-123",
    sessionId: "session-123",
    sessionName: "my-first-session",
  },
};

const runCustomerSupport = async (customer_message: string) => {
  const prompt = await client.loadTextPrompt("customer-support-agent.prompt.mdx");
  const prompt2 = await client.loadObjectPrompt("party-planner.prompt.mdx");

  const promptWithInputs = await prompt2.format({
    props: {
      party_text: "We are planning a birthday with John and Kim"
    },
    telemetry,
  });
  
  const result = await generateObject(promptWithInputs);
  const names = result.object.names;

  const vercelInput = await prompt.format({
    props: {
      customer_question: customer_message,
    },
    telemetry,
  });

  const resp = await generateText(vercelInput);

  return resp.text;
};

const main = async () => {
  try {
    const user_message = "How long does shipping take?";
    const assistant = await runCustomerSupport(user_message);
    console.log("Customer support response:", assistant);
  } catch (error) {
    console.error(error);
  }
};

main();
