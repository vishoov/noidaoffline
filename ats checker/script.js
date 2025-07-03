const container = document.querySelector(".container");
const chatsContainer = document.querySelector(".chats-container");
const promptForm = document.querySelector(".prompt-form");
const promptInput = promptForm.querySelector(".prompt-input");
const themeToggleBtn = document.querySelector("#theme-toggle-btn");

// Set initial theme from local storage
const isLightTheme = localStorage.getItem("themeColor") === "light_mode";
document.body.classList.toggle("light-theme", isLightTheme);
themeToggleBtn.textContent = isLightTheme ? "dark_mode" : "light_mode";

// Function to create message elements
const createMessageElement = (content, ...classes) => {
  const div = document.createElement("div");
  div.classList.add("message", ...classes);
  div.innerHTML = content;
  return div;
};

// Scroll to the bottom of the container
const scrollToBottom = () => container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });

// Simulate typing effect for bot responses
const typingEffect = (text, textElement, botMsgDiv) => {
  textElement.textContent = "";
  const words = text.split(" ");
  let wordIndex = 0;
  typingInterval = setInterval(() => {
    if (wordIndex < words.length) {
      textElement.textContent += (wordIndex === 0 ? "" : " ") + words[wordIndex++];
      scrollToBottom();
    } else {
      clearInterval(typingInterval);
      botMsgDiv.classList.remove("loading");
      document.body.classList.remove("bot-responding");
    }
  }, 40);
};

// Calculate ATS score
function getAtsScore(resumeText, jobDescText) {
  const resumeWords = new Set(resumeText.toLowerCase().split(/\W+/));
  const jobWords = new Set(jobDescText.toLowerCase().split(/\W+/));
  let matchCount = 0;
  jobWords.forEach(word => {
    if (resumeWords.has(word) && word.length > 2) matchCount++;
  });
  const score = jobWords.size ? Math.round((matchCount / jobWords.size) * 100) : 0;
  return score;
}

// Generate the bot's response (ATS checker)
const generateResponse = async (botMsgDiv, userMessage) => {
  const textElement = botMsgDiv.querySelector(".message-text");
  // Expecting the user message to contain both resume and job description
  // Format: "RESUME: ... JOB: ..."
  const [resumeMatch, jobMatch] = userMessage.match(/RESUME:(.*)JOB:(.*)/is) || [];
  if (!resumeMatch || !jobMatch) {
    typingEffect("Please paste your resume and job description in the following format:\n\nRESUME: [your resume text]\nJOB: [job description]", textElement, botMsgDiv);
    return;
  }
  const resumeText = userMessage.match(/RESUME:(.*)JOB:/is)?.[1]?.trim() || "";
  const jobDescText = userMessage.match(/JOB:(.*)/is)?.[1]?.trim() || "";

  if (!resumeText || !jobDescText) {
    typingEffect("Please provide both your resume text and the job description.", textElement, botMsgDiv);
    return;
  }

  const score = getAtsScore(resumeText, jobDescText);
  const responseText = `ATS Score: ${score}%\nYour resume matches ${score}% of the keywords in the job description.\n\nTip: For a higher score, ensure your resume includes relevant keywords from the job description.`;
  typingEffect(responseText, textElement, botMsgDiv);
};

// Handle the form submission
const handleFormSubmit = (e) => {
  e.preventDefault();
  const userMessage = promptInput.value.trim();
  if (!userMessage || document.body.classList.contains("bot-responding")) return;

  promptInput.value = "";
  document.body.classList.add("chats-active", "bot-responding");

  // Generate user message HTML
  const userMsgHTML = `<p class="message-text"></p>`;
  const userMsgDiv = createMessageElement(userMsgHTML, "user-message");
  userMsgDiv.querySelector(".message-text").textContent = userMessage;
  chatsContainer.appendChild(userMsgDiv);
  scrollToBottom();

  setTimeout(() => {
    // Generate bot message HTML and add in the chat container
    const botMsgHTML = `<img class="avatar" src="gemini.svg" /> <p class="message-text">Just a sec...</p>`;
    const botMsgDiv = createMessageElement(botMsgHTML, "bot-message", "loading");
    chatsContainer.appendChild(botMsgDiv);
    scrollToBottom();
    generateResponse(botMsgDiv, userMessage);
  }, 600);
};

// Toggle dark/light theme
themeToggleBtn.addEventListener("click", () => {
  const isLightTheme = document.body.classList.toggle("light-theme");
  localStorage.setItem("themeColor", isLightTheme ? "light_mode" : "dark_mode");
  themeToggleBtn.textContent = isLightTheme ? "dark_mode" : "light_mode";
});

// Delete all chats
document.querySelector("#delete-chats-btn").addEventListener("click", () => {
  chatsContainer.innerHTML = "";
  document.body.classList.remove("chats-active", "bot-responding");
});

// Handle suggestions click
document.querySelectorAll(".suggestions-item").forEach((suggestion) => {
  suggestion.addEventListener("click", () => {
    promptInput.value = suggestion.querySelector(".text").textContent;
    promptForm.dispatchEvent(new Event("submit"));
  });
});

// Show/hide controls for mobile on prompt input focus
document.addEventListener("click", ({ target }) => {
  const wrapper = document.querySelector(".prompt-wrapper");
  const shouldHide = target.classList.contains("prompt-input") || (wrapper.classList.contains("hide-controls") && (target.id === "add-file-btn" || target.id === "stop-response-btn"));
  wrapper.classList.toggle("hide-controls", shouldHide);
});

// Add event listeners for form submission
promptForm.addEventListener("submit", handleFormSubmit);
