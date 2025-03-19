// lib/logger.js
import fs from "fs";
import path from "path";

const logFilePath = path.join(process.cwd(), "logs", "app.log");

// Ensure the logs directory exists
if (!fs.existsSync(path.dirname(logFilePath))) {
  fs.mkdirSync(path.dirname(logFilePath), { recursive: true });
}

export const logToFile = (message: string) => {
  const timestamp = new Date().toISOString();
  const logMessage = `${timestamp} - ${message}\n`;

  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error("Failed to write log:", err);
    }
  });
};
