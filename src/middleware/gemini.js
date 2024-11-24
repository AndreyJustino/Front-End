import dotenv from "dotenv"
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config()

async function promptGemini(text) {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const textPrompt = `Responda como um agente de viajem, e respoda a seguinte duvida da forma mais rapida, curta e direta: ${text}`

    const result = await model.generateContent(textPrompt);
    return result.response.candidates[0].content.parts[0].text
}

export default promptGemini
