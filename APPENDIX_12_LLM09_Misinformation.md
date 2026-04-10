# Appendix 12: LLM09 Misinformation

## 1. What is Misinformation

Misinformation occurs when LLMs produce false or misleading information that appears credible (OWASP Foundation, 2025). This can lead to security breaches, reputational damage, and legal liability. A major cause is hallucination, where the model fabricated content.

Over-reliance on LLM-generated content without verification is a significant factor in the impact of this vulnerability.

**Potential impacts include:**

- Compromise of system integrity and availability
- Unauthorized data access or disclosure
- Financial and reputational damage
- Safety risks in critical applications

## 2. Common Examples of Vulnerability

### 2.1 Factual Inaccuracies

The model produces incorrect statements that users accept as truth, leading to poor decision-making.

### 2.2 Fabricated Legal/Medical Cases

Generating non-existent citations or medical advice that can have severe legal or health consequences.

### 2.3 Unsafe Code Suggestions

The model suggests non-existent or insecure software packages, potentially leading developers to install malware.

## 3. Prevention and Mitigation

According to OWASP guidance, risk can be significantly reduced through the following strategies:

- 3.1 RAG Integration: Use Retrieval-Augmented Generation to ground model responses in verified, factual external databases.
- 3.2 Human Oversight: Implement mandatory human fact-checking for high-stakes information (medical, legal, financial).
- 3.3 Hallucination Detection: Use automated tools and cross-verification techniques to identify and flag potential fabricated content.
- 3.4 Risk Communication: Clearly label AI-generated content and inform users about the model limitations and potential for inaccuracies.

## 4. Example Attack Scenarios
<dl>
<dt>Scenario #1: Malicious Package Squatting</dt>
<dd>An attacker identifies a commonly hallucinated package name from an AI coding assistant and publishes a malicious version to a public repository.</dd>
<dt>Scenario #2: Medical Misdiagnosis</dt>
<dd>A patient follows fabricated medical advice from a chatbot, leading to a delay in seeking proper professional treatment.</dd>
<dt>Scenario #3: Corporate Reputational Damage</dt>
<dd>An AI chatbot for a company provides incorrect refund policy information, leading to customer backlash and legal disputes.</dd>

</dl>
