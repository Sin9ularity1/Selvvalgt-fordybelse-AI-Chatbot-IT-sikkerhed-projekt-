# Appendix 13: LLM10 Unbounded Consumption

## 1. What is Unbounded Consumption

Unbounded Consumption occurs when an LLM application allows users to conduct excessive inferences, leading to Denial of Service (DoS), economic losses (Denial of Wallet), or model theft (OWASP Foundation, 2025).

The high computational cost of LLM inference makes them a prime target for resource exhaustion attacks.

**Potential impacts include:**

- Compromise of system integrity and availability
- Unauthorized data access or disclosure
- Financial and reputational damage
- Safety risks in critical applications

## 2. Common Examples of Vulnerability

### 2.1 Variable-Length Input Flood

Attackers overload the system with numerous large inputs to deplete CPU and memory resources.

### 2.2 Denial of Wallet (DoW)

Exploiting pay-per-use models by generating massive volumes of requests to cause unsustainable financial costs.

### 2.3 Model Extraction

Querying the API systematically to replicate the model behavior or weights, essentially stealing intellectual property.

## 3. Prevention and Mitigation

According to OWASP guidance, risk can be significantly reduced through the following strategies:

- 3.1 Rate Limiting & Quotas: Implement strict limits on the number of requests and tokens a single user can consume.
- 3.2 Input Size Constraints: Enforce maximum lengths for prompts and context windows to prevent memory exhaustion.
- 3.3 Resource Monitoring: Continuously monitor computational usage and detect anomaly patterns in consumption.
- 3.4 Cost Management: Set hard budget caps for cloud-based AI services to prevent Denial of Wallet scenarios.

## 4. Example Attack Scenarios
<dl>
<dt>Scenario #1: Resource Exhaustion DoS</dt>
<dd>An attacker sends a flood of complex, max-length prompts that crash the inference server for all users.</dd>
<dt>Scenario #2: Budget Depletion</dt>
<dd>A botnet generates millions of small queries, exhausting the monthly API budget for a startup in a matter of hours.</dd>
<dt>Scenario #3: Shadow Model Replication</dt>
<dd>An attacker uses a functional replication attack to build a private clone of a proprietary model using its own API responses.</dd>

</dl>
