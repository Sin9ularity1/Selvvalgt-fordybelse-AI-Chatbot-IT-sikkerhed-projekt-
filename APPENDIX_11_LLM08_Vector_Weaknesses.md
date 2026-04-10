# Appendix 11: LLM08 Vector Weaknesses

## 1. What is Vector and Embedding Weaknesses

Vector and Embedding Weaknesses involve security risks in systems using Retrieval Augmented Generation (RAG). Exploitable weaknesses in how vectors are generated, stored, or retrieved can lead to the injection of harmful content or access to sensitive data..

RAG systems rely on the similarity of vectors; if an attacker can manipulate these vectors, they can control what information the LLM "remembers" and uses..

**Potential impacts include:**

- Compromise of system integrity and availability
- Unauthorized data access or disclosure
- Financial and reputational damage
- Safety risks in critical applications

## 2. Common Examples of Vulnerability

### 2.1 Unauthorized Access

Inadequate access controls in the vector database leading to unauthorized retrieval of sensitive embeddings.

### 2.2 Embedding Inversion Attacks

Attackers reconstructing the original source text from its vector representation, compromising data confidentiality.

### 2.3 Data Poisoning in RAG

Injecting malicious or misleading information into the vector store to manipulate the LLM responses.

## 3. Prevention and Mitigation

According to OWASP guidance, risk can be significantly reduced through the following strategies:

- 3.1 Permission-Aware Retrieval: Implement fine-grained access controls within the vector database to ensure users only retrieve data they are authorized to see.
- 3.2 Input Validation for RAG: Rigorously validate all documents before they are embedded and added to the knowledge base.
- 3.3 Logical Partitioning: Ensure strict isolation between different users or tenants in multi-tenant vector stores.
- 3.4 Audit Logging: Maintain immutable logs of all retrieval activities to detect and investigate suspicious patterns.

## 4. Example Attack Scenarios
<dl>
<dt>Scenario #1: Resume Injection</dt>
<dd>An attacker hides malicious text (white on white) in a resume; when embedded, it tricks a RAG-based hiring system into recommending them.</dd>
<dt>Scenario #2: Cross-Tenant Leak</dt>
<dd>In a shared vector store, a query from User A retrieves sensitive internal documents belonging to User B due to weak partitioning.</dd>
<dt>Scenario #3: Poisoned Knowledge Base</dt>
<dd>An attacker poisons a public documentation site that a RAG system scrapes, causing the LLM to provide dangerous technical advice.</dd>

</dl>

## 5. References

- [LLM08: Vector and Embedding Weaknesses](https://genai.owasp.org/llmrisk/llm082025-vector-and-embedding-weaknesses/)