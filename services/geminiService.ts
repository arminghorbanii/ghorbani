import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (history: Message[], newMessage: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Construct the prompt with history context
    // We format history manually for simplicity in this stateless call or create a chat session
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: `You are "Armin" (آرمین), a friendly, patient, and expert Python tutor for Persian speakers. 
        Your goal is to help beginners learn Python from scratch.
        - Always answer in Persian (Farsi).
        - Keep explanations simple and encouraging.
        - Use code examples where helpful.
        - If the user sends code, explain it or fix errors politely.
        - Maintain a supportive tone.`,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || 'متاسفانه مشکلی در دریافت پاسخ پیش آمد.';
  } catch (error) {
    console.error("Gemini API Error:", error);
    return 'خطایی رخ داد. لطفا اتصال اینترنت خود را بررسی کنید یا کلید API را چک کنید.';
  }
};
