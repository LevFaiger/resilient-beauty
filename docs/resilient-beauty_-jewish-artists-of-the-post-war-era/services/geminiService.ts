
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function getResilienceReflection(artistName: string, bio: string, language: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Artist: ${artistName}\nBiography: ${bio}\n\nProvide a deep, poetic reflection (approx 100 words) on how this artist chose to find and paint beauty despite their immense suffering during WWII and the Holocaust. Language: ${language}.`,
      config: {
        systemInstruction: "You are an empathetic art historian specializing in Holocaust survivors. Your tone is somber yet uplifting, focusing on human resilience.",
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
}
