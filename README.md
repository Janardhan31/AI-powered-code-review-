# 🤖 AI-Powered Code Reviewer

An intelligent web application designed to assist developers by offering AI-driven code reviews. Powered by **Google's Generative AI**, this tool provides real-time code feedback, suggestions, and improvements. Built using the **MERN Stack**, it delivers an intuitive and sleek user experience.

---

## 🚀 Key Features

- ✅ **Real-time AI Code Review**: Receive instant code suggestions and improvements using Google's Generative AI.
- 🌈 **Syntax Highlighting**: Leveraging **PrismJS** to display your code with clear and intuitive color-coding for various programming languages.
- 🧠 **AI-Generated Feedback**: Suggestions and feedback are rendered in clean, easy-to-read **Markdown** format.
- ⚡ **High-Performance Frontend**: Built using **React (Vite)** for fast, responsive user interaction.
- 🔗 **Backend Powered by Express.js**: A scalable and secure backend architecture for processing code reviews.
- 🔐 **Secure API Communication**: POST-based API calls using **Axios** to ensure secure data transmission.
- 🌍 **Seamless Frontend-Backend Integration**: CORS support for smooth integration between frontend and backend.

---

## 🧠 How AI Code Review Works

1. **Write or Paste Code**: Enter your code into the editor provided by the application.
2. **Click on Review**: Once your code is ready, simply click the **Review** button to initiate the review process.
3. **Code Submission**: The code is sent to the backend via a **POST** request for processing.
4. **AI Processing**: The backend communicates with **Google's Generative AI** to analyze your code and generate feedback.
5. **Display of AI Feedback**: The suggestions, improvements, and insights are returned in **Markdown** format, elegantly styled for readability and clarity.

---

## 🛠️ How to Run the Project

### Prerequisites
Make sure you have the following installed on your system:

- **Node.js** (v16 or later)
- **npm** (Node package manager)
- **PostgreSQL** (for any database-related operations, if necessary)
- **Google Cloud API Key** (for AI integration)

### Setup Instructions

#### 1. Clone the Repository
First, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/ai-code-reviewer.git
cd ai-code-reviewer
