# Appendix 9: LLM06 Excessive Agency

## 1. What is Excessive Agency

Excessive Agency occurs when an LLM-based system, granted the ability to call functions or interface with other systems, performs damaging actions due to unexpected or manipulated outputs. The root causes are typically excessive functionality, permissions, or autonomy..

This vulnerability is particularly dangerous in autonomous agents where the model can "decide" to call tools without direct human supervision..

**Potential impacts include:**

- Compromise of system integrity and availability
- Unauthorized data access or disclosure
- Financial and reputational damage
- Safety risks in critical applications

## 2. Common Examples of Vulnerability

### 2.1 Excessive Functionality

An LLM agent has access to a "Delete" function when it only needs "Read" access for its intended task.

### 2.2 Excessive Permissions

An LLM extension accesses downstream systems with a high-privileged service account instead of the individual user context.

### 2.3 Excessive Autonomy

An application fails to require human approval for high-impact actions like deleting files or making financial transactions.

## 3. Prevention and Mitigation

According to OWASP guidance, risk can be significantly reduced through the following strategies:

- 3.1 Principle of Least Privilege: Limit the functions and permissions of LLM extensions to the absolute minimum required.
- 3.2 Human-in-the-Loop: Require manual approval for all high-impact or irreversible actions.
- 3.3 Granular Functionality: Prefer specific, narrow functions (e.g., "Write to Log") over open-ended ones (e.g., "Run Shell Command").
- 3.4 Complete Mediation: Implement authorization in downstream systems rather than relying on the LLM to police itself.

## 4. Example Attack Scenarios
<dl>
<dt>Scenario #1: Mailbox Exfiltration</dt>
<dd>A personal assistant app with mailbox access is tricked via indirect prompt injection to scan the inbox and forward secrets to an attacker.</dd>
<dt>Scenario #2: Unauthorized System Deletion</dt>
<dd>An autonomous agent with file-writing capabilities is manipulated into deleting critical system configuration files.</dd>
<dt>Scenario #3: Financial Mis-transaction</dt>
<dd>An AI-driven trading bot executes an unauthorized high-risk trade due to ambiguous instructions from a manipulated source.</dd>

</dl>

## 5. References

- [LLM06: Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/)