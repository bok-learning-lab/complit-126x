# RAG (Retrieval-Augmented Generation)

**RAG** is a technique that automatically finds and includes relevant information in your prompts — it's like giving an LLM the ability to "look things up" before answering.

## The Problem RAG Solves

### Without RAG

You have 100 documents about your research project. When you ask the LLM a question:

```
You: "What patterns did I find in Genesis 1?"

LLM: "I don't have information about your previous analysis..."
```

The LLM doesn't know about your work. You'd have to:
1. Manually find the relevant documents
2. Copy relevant sections
3. Paste into your prompt
4. Hope it fits in the context window

**This doesn't scale.**

### With RAG

```
You: "What patterns did I find in Genesis 1?"

System automatically:
1. Searches your 100 documents
2. Finds: "genesis1_analysis.md" (most relevant)
3. Retrieves: "Found chiastic structure, parallelism, repetition..."
4. Adds to prompt behind the scenes

LLM: "Based on your previous analysis, you identified three main
      patterns in Genesis 1: chiastic structure (vv.1-3/4-6),
      sevenfold repetition ('and God said'), and parallel
      construction in creation sequences."
```

**The LLM now has access to your work, automatically.**

## How RAG Works

```
┌─────────────────────────────────────────┐
│  1. STORAGE PHASE (Do Once)             │
├─────────────────────────────────────────┤
│  Your documents                         │
│  ↓                                       │
│  Convert to "embeddings" (vectors)      │
│  ↓                                       │
│  Store in vector database               │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  2. RETRIEVAL PHASE (Every Query)       │
├─────────────────────────────────────────┤
│  Your question                          │
│  ↓                                       │
│  Convert to embedding (vector)          │
│  ↓                                       │
│  Find similar vectors in database       │
│  ↓                                       │
│  Retrieve matching documents            │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  3. GENERATION PHASE                    │
├─────────────────────────────────────────┤
│  Retrieved documents + Your question    │
│  ↓                                       │
│  Combine into prompt                    │
│  ↓                                       │
│  Send to LLM                            │
│  ↓                                       │
│  Get informed response                  │
└─────────────────────────────────────────┘
```

## Embeddings: The Key Technology

### What Are Embeddings?

Embeddings convert text into numbers that capture meaning:

```
"Genesis creation narrative"
→ [0.23, -0.45, 0.67, 0.12, -0.89, ...]
  (1536 numbers representing the semantic meaning)

"Biblical account of creation"
→ [0.25, -0.43, 0.65, 0.15, -0.87, ...]
  (Very similar numbers! Similar meaning!)

"Recipe for chocolate cake"
→ [-0.82, 0.34, -0.12, 0.91, 0.23, ...]
  (Very different numbers! Different meaning!)
```

**Similar meanings → Similar numbers.**

This lets computers "understand" that two texts are about the same topic, even if they use different words.

### How Embeddings Enable Search

```
Your question: "What did I find about creation structure?"
→ Embedding: [0.24, -0.44, 0.66, ...]

Your documents:
- "genesis1_analysis.md" → [0.25, -0.43, 0.65, ...] ← Very similar!
- "exodus_themes.md" → [0.12, 0.67, -0.34, ...] ← Less similar
- "shopping_list.md" → [-0.89, 0.23, 0.45, ...] ← Not similar

Retrieved: genesis1_analysis.md
```

The system finds documents with similar *meaning*, not just matching keywords.

## Basic RAG Implementation

### 1. Set Up Vector Store

```python
from langchain.vectorstores import Chroma
from langchain.embeddings import OpenAIEmbeddings

# Create embeddings
embeddings = OpenAIEmbeddings()

# Create vector store
vectorstore = Chroma(
    embedding_function=embeddings,
    persist_directory="./my_project_db"
)
```

### 2. Add Your Documents

```python
# Add documents to the store
documents = [
    "Genesis 1 analysis: Found chiastic structure and parallelism",
    "Genesis 2 analysis: Different structure, more narrative",
    "Exodus 1 analysis: Echoes Genesis creation themes",
    # ... all your project documents
]

vectorstore.add_texts(documents)
```

### 3. Query With RAG

```python
# User asks a question
question = "What structural patterns did I find in Genesis?"

# Retrieve relevant documents
relevant_docs = vectorstore.similarity_search(question, k=3)

# Combine retrieved docs + question
context = "\n\n".join([doc.page_content for doc in relevant_docs])
prompt = f"""
Context from your previous work:
{context}

Question: {question}
"""

# Send to LLM
response = llm.generate(prompt)
```

The LLM now has relevant context automatically!

## RAG for This Workshop

### Use Case: Research Journal

Store all your analysis in a RAG system:

```python
# Store your work
rag.add("Genesis 1: Identified 7-fold repetition pattern")
rag.add("Genesis 1: Chiastic structure in vv. 1-6")
rag.add("Exodus 1: Different tone, but echoes creation themes")

# Later, query it
question = "How does Exodus 1 relate to Genesis?"
response = rag.query(question)

# Automatically retrieves relevant context:
# - Your Genesis analysis
# - Your Exodus analysis
# - Generates informed answer
```

### Use Case: Literature Review

Store papers you've read:

```python
# Store summaries
rag.add("Smith (2020): Argues for redaction in Genesis 1-11")
rag.add("Jones (2021): Finds Mesopotamian parallels to Genesis 1")
rag.add("Lee (2022): Analyzes literary structure of Genesis 1-2")

# Query later
rag.query("What have scholars said about Genesis 1 structure?")
# Automatically finds and cites relevant papers!
```

### Use Case: Course Notes

```python
# Store workshop learning
rag.add("Learned about loops: Process multiple texts automatically")
rag.add("Learned about APIs: Connect to external services")
rag.add("Learned about verification: Always test AI-generated code")

# When stuck
rag.query("How do I process multiple files?")
# Retrieves your notes about loops!
```

## RAG vs. Other Approaches

| Approach | Pros | Cons |
|----------|------|------|
| **Manual copy/paste** | Simple, direct | Doesn't scale, tedious |
| **Fine-tuning** | Model "knows" your data | Expensive, requires expertise |
| **Long context window** | Include everything | Expensive, slow, limited |
| **RAG** | Scalable, automatic, affordable | Requires setup |

RAG is usually the best balance.

## RAG Tools and Libraries

### Python Libraries

**LangChain** (Popular, full-featured)
```python
from langchain.vectorstores import Chroma
from langchain.embeddings import OpenAIEmbeddings
from langchain.chains import RetrievalQA
```

**LlamaIndex** (Formerly GPT Index)
```python
from llama_index import VectorStoreIndex, SimpleDirectoryReader
documents = SimpleDirectoryReader('data').load_data()
index = VectorStoreIndex.from_documents(documents)
```

**Haystack** (Production-focused)
```python
from haystack.document_stores import ElasticsearchDocumentStore
from haystack.nodes import EmbeddingRetriever
```

### Vector Databases

**Local (Development):**
- **Chroma** — Simple, file-based
- **FAISS** — Facebook's library, fast

**Cloud (Production):**
- **Pinecone** — Managed service
- **Weaviate** — Open source, scalable
- **Qdrant** — Fast, modern

## Advanced RAG Patterns

### 1. Hybrid Search

Combine semantic search (embeddings) with keyword search:

```python
# Finds documents that:
# - Are semantically similar (meaning)
# - AND contain specific keywords
results = rag.search(
    query="creation structure",
    filters={"book": "Genesis", "chapter": 1}
)
```

### 2. Hierarchical RAG

First find relevant chapters, then search within them:

```python
# Level 1: Find relevant chapters
relevant_chapters = rag.search("creation themes", k=3)

# Level 2: Search within those chapters
detailed_results = rag.search_within(
    query="structural patterns",
    scope=relevant_chapters
)
```

### 3. Re-ranking

Retrieve many candidates, then re-rank by relevance:

```python
# Get 20 candidates
candidates = rag.search(query, k=20)

# Re-rank to find top 3
top_results = reranker.rank(query, candidates, top_k=3)
```

### 4. Query Expansion

Expand the user's query before searching:

```python
original = "creation"

expanded = [
    "creation narrative",
    "cosmogony",
    "genesis of the world",
    "origins account"
]

# Search for all variations
results = [rag.search(q) for q in expanded]
```

## RAG Best Practices

### 1. Chunk Your Documents

Don't store entire books as one item:

```python
# Bad: Store entire Genesis as one document
rag.add(entire_genesis)

# Good: Store by meaningful chunks
rag.add("Genesis 1:1-5", metadata={"book": "Genesis", "chapter": 1})
rag.add("Genesis 1:6-8", metadata={"book": "Genesis", "chapter": 1})
```

### 2. Include Metadata

```python
rag.add(
    text="Genesis 1 shows chiastic structure",
    metadata={
        "document_type": "analysis",
        "book": "Genesis",
        "chapter": 1,
        "author": "me",
        "date": "2026-02-02"
    }
)

# Later, filter by metadata
results = rag.search(
    "structure",
    filter={"book": "Genesis", "document_type": "analysis"}
)
```

### 3. Update Regularly

```python
# Add new analysis as you go
rag.add("New finding: Genesis 1 uses wordplay on 'tohu'")

# RAG immediately incorporates it
# Next query will find this new information
```

### 4. Test Retrieval Quality

```python
# Check what it retrieves
query = "creation structure"
results = rag.search(query, k=5)

for i, doc in enumerate(results):
    print(f"{i+1}. {doc.metadata['source']}")
    print(f"   {doc.page_content[:100]}...")

# If irrelevant results, adjust:
# - Chunk size
# - Embedding model
# - Number of results (k)
```

## When to Use RAG

**Good for:**
- ✓ Large collections of documents (>10 pages)
- ✓ Frequently querying your own work
- ✓ Building on previous research
- ✓ Long-term projects

**Overkill for:**
- ✗ Single short documents
- ✗ One-time analysis
- ✗ Information that fits in context window
- ✗ When manual search is faster

## RAG + Context Engineering

RAG is automated [context engineering](./context-engineering.md):

**Manual context engineering:**
```
1. Think: "What context do I need?"
2. Find relevant documents
3. Copy into prompt
```

**RAG:**
```
1. System automatically finds context
2. System automatically includes it
3. You just ask questions
```

Same goal, automated execution.

## Example: Complete RAG System

```python
from langchain.vectorstores import Chroma
from langchain.embeddings import OpenAIEmbeddings
from langchain.llms import OpenAI
from langchain.chains import RetrievalQA

# 1. Set up
embeddings = OpenAIEmbeddings()
vectorstore = Chroma(embedding_function=embeddings)

# 2. Add your research documents
documents = [
    "Genesis 1: Seven-day structure, chiastic pattern",
    "Genesis 2: Garden narrative, different style",
    "Comparative analysis: Enuma Elish similarities",
    # ... all your documents
]
vectorstore.add_texts(documents)

# 3. Create QA chain
qa = RetrievalQA.from_chain_type(
    llm=OpenAI(),
    chain_type="stuff",
    retriever=vectorstore.as_retriever(search_kwargs={"k": 3})
)

# 4. Query naturally
response = qa.run("What patterns did I find in Genesis 1?")
print(response)
# Automatically finds and uses your Genesis 1 analysis!
```

## The Future: Always-On Context

RAG enables a future where:
- All your work is searchable
- AI always has relevant context
- You never manually copy/paste
- Context is always up-to-date

**Your research becomes a living, queryable knowledge base.**

## Related Terms
- [Context Engineering](./context-engineering.md) — The manual version
- [Context Window](./context-window.md) — What RAG helps you fill efficiently
- [Embeddings](./embeddings.md) — The technology powering RAG
- [Vector Database](./vector-database.md) — Where embeddings are stored
