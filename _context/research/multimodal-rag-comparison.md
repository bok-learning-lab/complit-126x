# Comparison of Text-Based and Image-Based Retrieval in Multimodal RAG LLM Systems

**arXiv ID:** 2511.16654
**Submitted:** November 2025
**Authors:** Elias Lumer, Alex Cardenas, Matt Melich, Myles Mason, Sara Dieter, Vamse Kumar Subbiah, Pradeep Honaganahalli Basavaraju, Roberto Hernandez
**Source:** https://arxiv.org/abs/2511.16654

## Abstract

The research addresses a limitation in multimodal Retrieval-Augmented Generation (RAG) systems: existing approaches convert images to text summaries before embedding, which causes "loss of contextual information and visual details critical for downstream retrieval and question answering."

The study compares two retrieval strategies:
1. **Text-based chunk retrieval** – images summarized into text before embedding
2. **Direct multimodal embedding retrieval** – images stored natively in vector space

## Key Findings

The evaluation tested six LLM models and two multimodal embedding models using a new financial earnings call benchmark (40 question-answer pairs with paired documents).

**Results demonstrate that direct multimodal retrieval significantly outperforms LLM-summary approaches:**
- 13% absolute improvement in mean average precision (mAP@5)
- 11% absolute improvement in normalized discounted cumulative gain
- 32% relative improvement in mAP@5
- 20% relative improvement in nDCG@5

Additionally, direct multimodal retrieval produced "more accurate and factually consistent answers" per LLM-as-a-judge comparisons, while preserving visual context throughout the process.
