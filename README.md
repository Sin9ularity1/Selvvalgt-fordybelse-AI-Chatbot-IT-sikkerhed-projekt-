# Mini LLM Chatbot Projektplan (Fra bunden)

Denne projektplan beskriver, hvordan man bygger en **lille transformer-baseret chatbot**
helt fra bunden over ca. ~3 måneder med ~10 timer om ugen.

---

## 1. Projektoversigt

**Mål:**  
At bygge en **lille transformer-baseret sprogmodel** (1M–10M parametre), som kan lave basal tekstgenerering og chat-lignende svar.

## Problemformulering

Hvordan kan man bygge en lokal AI-chatbot fra bunden, og hvilke tekniske udfordringer opstår undervejs?

**Teknologier:**
- **Python**
- **NumPy** (grundlæggende matematik)
- **PyTorch** (valgfrit, men anbefalet til træning)
- **Ingen eksterne LLM’er**

**Leverancer:**
- Tokenizer
- Datasæt-forberedelse
- Lille Transformer-model
- Træningsscript
- Simpel REPL-chatbot

---

## 2. Milepæle og Tidsplan

### **Uge 1–2 — Tokenizer**

- Implementer en **Byte-Pair Encoding (BPE)** tokenizer fra bunden.
- Trin:
  - Indlæs datasæt.
  - Tæl byte-par frekvenser.
  - Sammenslå top-K par indtil ønsket ordforrådsstørrelse.
  - Opret encode/decode funktioner.

**Output:** `tokenizer.py`, `vocab.json`

---

### **Uge 3–4 — Datasæt og Forbehandling**

- Indsamling af tekstdata (~5–50 MB).
- Rensning og normalisering af tekst.
- Konverter tekst → tokens.
- Opret træningssekvenser.

**Output:** `dataset.py`, `train_data.npy`

---

### **Uge 5–7 — Byg Lille Transformer**

Implementer:

- Token embeddings  
- Positionelle encodings  
- Multi-head self-attention  
- Feed-forward lag  
- LayerNorm  

- Stack **2–6 lag**
- Mål: **1M–10M parametre**

**Output:** `model.py`

---

### **Uge 8–10 — Træningsloop**

- Forward pass  
- Cross entropy loss  
- Backpropagation (PyTorch eller manuelt)  
- Gem checkpoints  
- Simpel evaluering  

**Output:** `train.py`, `model.pt`

---

### **Uge 11 — Inferens Pipeline**

Implementer tekstgenerering:

- Sampling  
- Top-k  
- Temperature  

**Output:** `generate.py`

---

### **Uge 12 — Chat Interface**

- Byg en simpel terminal-chatbot.
- Integrér tokenizer + model + inferens.

**Output:** `chat.py`

---

## 3. Ekstra Mål (Valgfrit)

- Tilføj LoRA fine-tuning  
- Tilføj GUI  
- Tilføj hukommelsesbuffer  
- Destillér modellen  
- Tilføj emotionelle/stil-indstillinger  

---

## 4. Forventet Læringsudbytte

- Forstå tokenisering på et dybt niveau  
- Lære transformer-arkitektur  
- Bygge et neuralt netværk fra bunden  
- Forstå træningsdynamikker  
- Implementere en minimal men reel sprogmodel  

---
