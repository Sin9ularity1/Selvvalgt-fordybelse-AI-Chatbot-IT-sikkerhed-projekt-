# Appendix 7: LLM04 Model Poisoning

## 1. What is Data and Model Poisoning

Data and Model Poisoning involves manipulating pre-training, fine-tuning, or embedding data to introduce vulnerabilities, backdoors, or biases, compromising model security and performance.

Because LLMs learn from their training data, if that data is intentionally corrupted, the model's fundamental reasoning and output generation can be compromised.

**Potential impacts include:**

- Compromised model reliability and integrity
- Unintended behavior or harmful output
- Authentication bypass or security control evasion
- System-wide misinformation propagation

## 2. Common Examples of Vulnerability

### 2.1 Malicious Training Data

Malicious actors introduce harmful data during pre-training or fine-tuning to skew the model's responses.

### 2.2 Injection of Biases

Poisoning the training set to inject specific political, social, or commercial biases into the model's output.

### 2.3 Backdoor Implementation

Embedding hidden "triggers" in the training data that cause the model to perform specific, unauthorized actions when a particular phrase is used.

## 3. Prevention and Mitigation

Organizations must verify the legitimacy of their data and implement robust validation processes.

- **3.1 Data Lineage Tracking:** Maintain strict records of data origins and verify the legitimacy of all sources.
- **3.2 Vetting Data Vendors:** Rigorously vet any third-party data or model suppliers to ensure they follow secure practices.
- **3.3 Anomaly Detection:** Implement techniques to detect and remove outliers or malicious patterns in training datasets.
- **3.4 Strict Sandboxing:** Run training and fine-tuning processes in isolated, secure environments to prevent lateral movement if a component is compromised.
- **3.5 Federated Learning:** Use privacy-preserving techniques like federated learning to minimize the centralized collection of sensitive or untrusted data.

## 4. Example Attack Scenarios
<dl>
<dt>Scenario #1: Misinformation Bias</dt>
<dd>An attacker biases model outputs by injecting thousands of fake news articles into the training corpus to spread misinformation on a specific topic.</dd>
<dt>Scenario #2: Backdoor Trigger for Bypass</dt>
<dd>A poisoned model includes a backdoor that allows an attacker to bypass authentication by providing a specific, seemingly innocuous trigger phrase.</dd>
<dt>Scenario #3: Malicious Code Injection via Fine-tuning</dt>
<dd>An attacker compromises a fine-tuning dataset to cause the model to suggest vulnerable code snippets when asked for programming assistance.</dd>
</dl>

## 5. References

- [OWASP LLM04: Data and Model Poisoning](https://genai.owasp.org/llmrisk/llm042025-data-and-model-poisoning/)