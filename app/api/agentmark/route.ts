// AgentMark API Route for Next.js App Router
// This file handles prompt execution requests

import { createNextAppHandler } from '@agentmark/cli/runner-server/adapters/nextjs';
import { VercelAdapterWebhookHandler } from '@agentmark/ai-sdk-v4-adapter/runner';
import { client } from '../../../agentmark.client.js';

// Create webhook handler instance
const handler = new VercelAdapterWebhookHandler(client as any);

// Export Next.js App Router handler
export const POST = createNextAppHandler(handler);

// Optional: Health check endpoint
export async function GET() {
  return Response.json({
    status: 'healthy',
    service: 'AgentMark Webhook',
    timestamp: new Date().toISOString()
  });
}
