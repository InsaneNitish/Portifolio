import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const validatedData = insertMessageSchema.parse(req.body);
      
      // Add timestamp
      const messageData = {
        ...validatedData,
        createdAt: new Date().toISOString()
      };
      
      // Store the message
      const result = await storage.createMessage(messageData);
      
      // Send a success response
      res.status(200).json({ 
        success: true, 
        message: "Message received successfully",
        data: result
      });
    } catch (error) {
      console.error('Error handling contact form submission:', error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to process your message"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
