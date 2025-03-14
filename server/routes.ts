import type { Express } from "express";
import { createServer, type Server } from "http";
import { db } from "./db"; // Import your Drizzle DB instance
import { messages, insertMessageSchema } from "@shared/schema";
import { eq } from "drizzle-orm"; // For querying
import { z } from "zod"; // Assuming you're using Zod for validation

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertMessageSchema.parse(req.body);

      // Add timestamp
      const messageData = {
        ...validatedData,
        createdAt: new Date().toISOString(),
      };

      // Store in NeonDB and return the inserted message
      const [insertedMessage] = await db
        .insert(messages)
        .values(messageData)
        .returning(); // Fetch the inserted record

      res.status(200).json({
        success: true,
        message: "Message received successfully",
        data: insertedMessage, // Send back the stored message
      });
    } catch (error) {
      console.error("Error handling contact form submission:", error);

      // Handle validation errors
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Invalid input",
          errors: error.errors, // Send validation error details
        });
      }

      // Handle other errors
      res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : "Internal server error",
      });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}