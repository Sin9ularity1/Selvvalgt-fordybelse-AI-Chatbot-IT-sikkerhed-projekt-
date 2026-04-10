# Appendix 5: LLM02 Sensitive Info Disclosure

## 1. What is Sensitive Information Disclosure

Sensitive information disclosure occurs when a Large Language Model (LLM) exposes personal, financial, health, business, or proprietary data.
This can include training data, confidential algorithms, security credentials, or legal documents.

Such disclosures can result in privacy violations, unauthorized access, or intellectual property breaches.
Users must be aware of the risks of submitting sensitive data to LLMs.

**Potential impacts include:**

- Exposure of personal identifiable information (PII)
- Leakage of proprietary algorithms or model configurations
- Confidential business information disclosure
- Security credentials or secrets leakage

## 2. Common Examples of Vulnerability

### 2.1 PII Leakage

Personal identifiable information may be disclosed during interactions with the LLM.

### 2.2 Proprietary Algorithm Exposure

Poorly configured outputs can reveal proprietary algorithms or data. For example, training data may be exposed to inversion attacks that reconstruct sensitive inputs.

### 2.3 Sensitive Business Data Disclosure

Generated responses might inadvertently include confidential business information.

## 3. Prevention and Mitigation

Organizations should implement multiple layers of safeguards to minimize the risk of sensitive information disclosure.

- **3.1 Data Sanitization:**

- Scrub or mask sensitive content before training or processing. Prevent user data from entering the model.
- **3.2 Robust Input Validation:**

- Detect and filter out sensitive or harmful inputs to prevent exposure through outputs.
- **3.3 Access Controls:**

- Enforce least privilege access to sensitive data and restrict data sources.
- **3.4 Federated Learning & Privacy Techniques:**

- Use decentralized training and differential privacy to reduce risk of data exposure.
- **3.5 User Education & Transparency:**

- Guide users on safe LLM usage and maintain clear policies on data usage, retention, and opt-outs.
- **3.6 Secure System Configuration:**

- Limit user access to system prompts and follow security misconfiguration best practices.
- **3.7 Advanced Techniques:**

- Implement homomorphic encryption, tokenization, and redaction to keep data confidential during processing.

## 4. Example Attack Scenarios
<dl>
<dt>Scenario #1: Unintentional Data Exposure</dt>
<dd>A user receives another user's PII due to insufficient data sanitization.</dd>
<dt>Scenario #2: Targeted Prompt Injection</dt>
<dd>An attacker bypasses input filters to extract sensitive information.</dd>
<dt>Scenario #3: Data Leak via Training Data</dt>
<dd>Negligent inclusion of sensitive data in training leads to exposure in model outputs.</dd>
</dl>

## 5. References

- [OWASP LLM02 Sensitive Information Disclosure](https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/)