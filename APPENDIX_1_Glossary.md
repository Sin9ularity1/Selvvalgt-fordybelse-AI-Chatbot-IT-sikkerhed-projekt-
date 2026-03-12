# Appendix 1: Technical Glossary

This glossary provides clear, simple descriptions for the technical terms used in this project to ensure clarity for all readers.

| Term | Description |
| :--- | :--- |
| **Agency** | How much freedom the AI has to perform tasks on its own, like sending an email or deleting a file without a human double-checking first. |
| **API** | A "digital bridge" that allows two different computer programs (like an AI and a database) to talk to each other and share information. |
| **Attack Surface** | A collective term for all the potential "doors" or "windows" an attacker could try to use to break into a computer system. |
| **Backdoor** | A hidden "secret entrance" into a system that allows an attacker to bypass normal security and get inside easily. |
| **Context Window** | The limited amount of text an AI can "remember" and process at one time while generating an answer. |
| **Control Plane vs. Data Plane** | The idea that "Instructions" (Control) should be kept in a separate secure room from "User Content" (Data). AI often fails because it mixes these together. |
| **Data/Model Poisoning** | When an attacker sneakily "teaches" the AI bad information while it's still learning, so it grows up with hidden flaws or biases. |
| **Deterministic Logic** | Traditional software produces the same output every time for the same input. AI systems are probabilistic, meaning they generate results based on likelihood rather than fixed rules. |
| **GenAI (Generative AI)** | AI that creates brand new things (like writing a letter or making a photo) instead of just sorting through old data. |
| **Hallucination** | generates information that sounds convincing but is incorrect or unsupported by evidence. |
| **Jailbreak** | A technique used to bypass an AI’s safety rules by manipulating prompts or instructions. |
| **LLM (Large Language Model)** | A very large AI model trained on massive collections of text to learn patterns in human language. |
| **Mitigation** | A professional word for "making a problem less dangerous" or "reducing the risk" of an attack. |
| **PII (Personally Identifiable Information)** | Any private information that can identify you specifically, like your home address, private phone number, or bank details. |
| **Prompt Injection** | Tricking an AI into breaking its own rules by using clever or sneaky wording in your request. |
| **RAG (Retrieval-Augmented Generation)** | A system that gives the AI an "open book" to look at so it can provide more accurate, up-to-date answers rather than just guessing. |
| **System Prompt** | The "hidden" background rules that tell the AI how to behave, what personality to have, and what it’s not allowed to say. |
| **Token / Tokenization** | The way an AI "slices" text into tiny chunks. The AI doesn't see words; it sees codes for these chunks (like lego bricks of language). |
| **Top-K Retrieval** | A method where the AI selects the K most relevant results (for example the top 5 documents) from a database to help answer a question. |
| **Vector Database** | A special type of database designed to store and search numerical representations of text (embeddings) so AI can quickly find similar information. |
| **Vector Embedding** | A mathematical "map" where words are turned into numbers so the computer can calculate how similar they are. "Happy" and "Glad" would be very close on this map. |
| **XSS (Cross-Site Scripting) / SSRF (Server-Side Request Forgery) / CSRF (Cross-Site Request Forgery)** | Common types of traditional web attacks where hackers trick a website into running malicious code or stealing data. |
