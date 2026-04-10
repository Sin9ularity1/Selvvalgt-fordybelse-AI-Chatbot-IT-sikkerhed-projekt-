# Appendix 10: LLM07 System Prompt Leakage

## 1. What is System Prompt Leakage

System Prompt Leakage is the risk that internal instructions used to steer an LLM behavior may contain sensitive information not intended for users. While the prompt itself is a set of instructions, its disclosure can facilitate other attacks if it contains credentials or internal rules..

Disclosure reveals the model internal guardrails, which can then be systematically bypassed by attackers..

**Potential impacts include:**

- Compromise of system integrity and availability
- Unauthorized data access or disclosure
- Financial and reputational damage
- Safety risks in critical applications

## 2. Common Examples of Vulnerability

### 2.1 Exposure of Sensitive Credentials

System prompts that inadvertently include API keys, database connection strings, or internal IDs.

### 2.2 Revealing Internal Logic

Prompts disclosing internal decision-making processes, such as loan approval limits or transaction thresholds.

### 2.3 Exposure of Filtering Criteria

Revealing the exact keywords or rules the model uses to reject harmful content, allowing attackers to craft bypasses.

## 3. Prevention and Mitigation

According to OWASP guidance, risk can be significantly reduced through the following strategies:

- 3.1 Credential Externalization: Never embed API keys or secrets directly in system prompts. Use environment variables or secret managers.
- 3.2 Output Guardrails: Implement external filters to inspect model output for sensitive system information before it reaches the user.
- 3.3 Least Privilege Agents: Use multiple specialized agents with restricted system prompts rather than one large prompt with all permissions.
- 3.4 Avoid Over-Reliance: Do not rely solely on system prompts for security; enforce critical controls independently of the LLM.

## 4. Example Attack Scenarios
<dl>
<dt>Scenario #1: Credential Extraction</dt>
<dd>An attacker uses a jailbreak prompt to force the model to reveal its system instructions, which include an embedded legacy API key.</dd>
<dt>Scenario #2: Guardrail Bypass</dt>
<dd>By extracting the system prompt, an attacker learns the specific phrases that trigger the "refusal" response and crafts an injection that avoids them.</dd>
<dt>Scenario #3: Rule Manipulation</dt>
<dd>An attacker discovers internal banking rules from a chatbot prompt and uses that knowledge to manipulate a transaction request.</dd>

</dl>

## 5. References

- [LLM07: System Prompt Leakage](https://genai.owasp.org/llmrisk/llm072025-system-prompt-leakage/)