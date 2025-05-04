const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.google_gemini_key);

const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });


async function generatecontent(prompt) {    
  const result = await model.generateContent(prompt);
  return result.response.text();
}

module.exports = generatecontent