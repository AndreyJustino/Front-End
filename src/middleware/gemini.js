import { GoogleGenerativeAI } from "@google/generative-ai";

async function promptGemini(text) {
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

    if (!apiKey) {
        throw new Error("VITE_REACT_APP_API_KEY is not defined. Check your .env file.");
    }

    let genAI;
    try {
        genAI = new GoogleGenerativeAI(apiKey);
    } catch (error) {
        console.error("Error initializing GoogleGenerativeAI:", error.message);
        throw new Error("Failed to initialize the AI client.");
    }

    let model;

    try {
        model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    } catch (error) {
        console.error("Error loading model:", error.message);
        throw new Error("Failed to load the generative model.");
    }

    const textPrompt = `Responda como um agente de viagem. Seja breve, direto ao ponto e forneça uma resposta clara e objetiva: ${text}`;

    try {
        const result = await model.generateContent(textPrompt);
        console.log("Model response:", result);

        if (result && result.response && result.response.candidates && result.response.candidates[0].content) {
            return result.response.candidates[0].content.parts[0].text;
        } else {
            throw new Error("Invalid response format from the model.");
        }
    } catch (error) {
        console.error("Error generating content:", error.message);
        throw new Error("Failed to generate content from the model.");
    }
}

export default promptGemini;
