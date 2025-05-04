const aiservice = require("../services/ai.service");

module.exports.getresponse = async (req, res) => {
  const prompt = req.query.prompt;
  if (!prompt) {
    return res.status(400).send("Prompt is required");
  }
  const response = await aiservice(prompt);

  res.send(response); 
};
