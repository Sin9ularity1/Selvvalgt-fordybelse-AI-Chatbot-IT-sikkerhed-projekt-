# Appendix 2: Project Logbook

This logbook documents the ongoing activities, investigations of AI misuse in cyberattacks, examples, analyses, and reflections on defensive strategies throughout the project.

---

## Week 6 – Project Startup & Introduction and Problem Statement

### Summary
This week, I focused on introducing the project and formulating the central problem statement. I have worked on defining the scope of generative AI misuse in IT security and outlined the primary threat vectors that will be investigated.

### Tasks
- Creation of the project website
- Initial research into generative AI and its potential for misuse in IT security.
- Defining the project's focus areas and delimiting the topic.
- Formulating a problem statement for the project.

### Deliverables / Output
- Draft project description.
- List of potential threat vectors.

### Questions
- Am I on the right track regarding project direction, problem definition?
- What should and should not be on the website?
- Is it ok to explore the OWASP top 10 LLM vulnerabilities and document the type of attack, how it works, vulnerabilities and remediations, or would it be better to explore more nuanced attacks?
- After I'm done with researching the different techniques for GenAI misuse, would it be worth demonstrating an attack "attempt" with a model?

---

## Week 7 – Cleanup & Modifications

### Summary
This week, I focused on cleaning up last weeks work. I also started laying out the website in a way that would best show the research into GenAI misuse.

### Tasks
- Modify CSS
- Modify HTML pages for the research pages

### Deliverables / Output
- Draft research pages
- Create a better looking/ easier to navigate website

---

## Week 8 – Research & Documentation

### Summary
This week I primarily focused on reading the OWASP top 10 LLM vulnerabilities to ensure that I understood what each vulnerability was, how it worked and how the risk could be reduced. I created a Google doc to make notes and keep track of my knowledge. Towards the end of the week I was able to complete the first HTML page for the LLM01 - Prompt Injection using the notes that I had created earlier in the week.

### Tasks
- Research the OWASP Top 10 LLM vulnerabilities for 2025 and make notes on each of the vulnerabilities in a Google doc.
- Create Separate GitHub pages for each of the OWASP top 10 LLM vulnerabilities describing the attack, examples and remediations.

### Deliverables / Output
- LLM01 - prompt_injection.html

---

## Week 9 – Documentation Continued

### Summary
This week I was able to document the remaining 9 OWASP LLM vulnerabilities using the notes I had taken the week before.

### Tasks
- Document LLM02 to LLM10 on the GitHub pages site.

### Deliverables / Output
- LLM02 - Sensitive Information Disclosure
- LLM03 - Supply Chain
- LLM04 - Data and Model Poisoning
- LLM05 - Improper Output Handling
- LLM06 - Excessive Agency
- LLM07 - System Prompt Leakage
- LLM08 - Vector and Embedding Weaknesses
- LLM09 - Misinformation
- LLM10 - Unbounded Consumption

---

## Week 10 – Website navigation fixes + Appendixes
### Summary
This week I focused on making the website function in a logical way that the reader/user would be able to find the information they needed. I also moved some aspects of the website to an Appendix, such as the logbook, as it was using up too much of the websites maximum wordcount of 24,000(2400 chars pr page(10pg max)). 
### Tasks
- Fix website navigational issues in the research pages
- Move unused/ unnecessary pages to Appendix
### Deliverables
- More functional navigation in the research section of the website
- Appendices
    - Logbook

---

## Week 11 – A shift from ***What***, to ***Why*** and ***Where***
### Summary
During the previous weeks, the project focused on identifying and describing **what types of threats and misuse scenarios exist in Generative AI systems**, based on research on the OWASP Top 10 for LLM Applications.

In Week 11 the focus shifts from describing the threats themselves to analysing **why these threats are possible and where they occur within a system's architecture**. This involves identifying underlying vulnerabilities in GenAI systems and mapping the different **attack surfaces** that attackers can exploit.
### Tasks
- Create a "Vulnerability & Attack Surface Analysis" section on the project website
- Define the 4 key attack surfaces
    - Prompt interface
    - Model context window
    - External tools / plugin layer
    - Training pipeline
- Cross-reference the previously analysed OWASP Top 10 threats with these attack surfaces
- Present the relationships using a structured table or diagram
### Deliverables
- Completed Vulnerability & Attack Surface Analysis section on the website
- A mapping table or visual diagram linking OWASP threats to the relevant attack surfaces
- Updated project documentation describing the identified vulnerabilities

---

## Week 12 – Creating a vulnerable playground
### Summary
This week, the project transitioned from theoretical research to practical demonstration. I focused on building a "vulnerable playground" to showcase how OWASP LLM vulnerabilities can be exploited in a real-world scenario. This involved setting up a local environment using **Ollama** to run **Llama 3.1 (8B)**, ensuring a safe and ethical "sandbox" for security testing. I developed a Python-based support bot (`chat.py`) for a fictional company, "NexusCorp," which contains intentional vulnerabilities such as **LLM06: Excessive Agency** and **LLM07: System Prompt Leakage**. Additionally, I created a new demonstration page on the website to document these practical "attacks" and their underlying causes.

### Tasks
- Set up a local LLM environment using **Ollama** and the **Llama 3.1** model.
- Configure a Python virtual environment and install necessary libraries (`ollama`, `json`).
- Develop `chat.py`, a vulnerable AI assistant with:
    - A hidden system prompt containing "secrets" (simulating **LLM07**).
    - A functional tool (`search_database`) with excessive permissions (simulating **LLM06**).
- Create `demonstration.html` to provide a walkthrough of the PoC (Proof of Concept) attacks.
- Research and document the legal and ethical frameworks for local AI security testing (MIT and Meta Llama 3 licenses).

### Deliverables
- **`kode/chat.py`**: A functional, vulnerable AI support bot.
- **`docs/demonstration.html`**: A new website section for practical vulnerability demonstrations.
- **Local Lab Environment**: A configured Ollama instance for safe "red teaming" activities.

---

## Week 13 – TBD
### Summary: TBD
### Tasks: TBD
### Deliverables: TBD

---

## Week 14 – TBD
### Summary: TBD
### Tasks: TBD
### Deliverables: TBD

---

## Week 15 – TBD
### Summary: TBD
### Tasks: TBD
### Deliverables: TBD

---

## Week 16 – TBD
### Summary: TBD
### Tasks: TBD
### Deliverables: TBD

---

## Week 17 – Submission
### Summary: TBD
### Tasks: TBD
### Deliverables: TBD
