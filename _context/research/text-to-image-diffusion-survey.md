# Text-to-Image Diffusion Models in Generative AI: A Survey

**Authors:** Chenshuang Zhang, Chaoning Zhang, Mengchun Zhang, In So Kweon, Junmo Kim
**Affiliation:** KAIST, Kyung Hee University
**Source:** https://arxiv.org/html/2303.07909v3

## Abstract

This comprehensive review examines diffusion-based approaches for generating images from textual descriptions, covering foundational concepts, text-conditioned generation techniques, applications beyond static imagery, and text-guided image modification.

## Background on Diffusion Models

### How DDPM Works

**Forward Pass:** A Markov chain progressively corrupts clean images by introducing Gaussian noise across timesteps, ultimately transforming images into pure noise.

**Reverse Pass:** The model learns to denoise by predicting added noise at each timestep, enabling generation by starting from random noise and iteratively denoising.

### Guidance Approaches
- **Conditional Diffusion Models:** Incorporate additional information as explicit model inputs
- **Guided Diffusion Models:** Leverage auxiliary classifiers whose gradients steer sampling
- **Classifier-Free Guidance:** Single model for both conditional and unconditional generation

## Pioneering Models

### Pixel Space
- **GLIDE:** First text-to-image diffusion model, 1.2B parameter transformer text encoder
- **Imagen:** Used frozen pretrained T5 language model (800GB text corpus)

### Latent Space
- **Stable Diffusion:** Operates in compressed latent space using VQ-GAN, "significantly outperforms pixel space in complexity reduction"
- **DALL-E 2:** Uses CLIP embeddings as intermediate representation, learns "text-image latent prior"

## Model Advancements

### Architecture Optimization
- **DiT:** Replaces U-Net with transformer blocks
- **Pixart-α:** High-resolution 1024×1024 synthesis with reduced training costs
- **Free-U:** Reweights U-Net skip connections without additional training

### Flexible Control
- **Textual Inversion/DreamBooth:** Personalized generation from reference images
- **ControlNet:** Integrates edges, depth, segmentation as conditioning signals
- **Retrieval-Augmented Generation:** k-nearest neighbor retrieval from external databases

## Ethical Issues and Risks

- **Dataset Bias:** Models trained on unfiltered data produce "inappropriate degeneration"
- **Fairness:** ENTIGEN benchmark evaluates outputs across gender, skin tone, cultural dimensions
- **Security:** Backdoor attacks, membership inference attacks present privacy threats

## Applications Beyond Image Generation

### Text-to-Video
- **Make-A-Video, Video Imagen:** Early approaches
- **Sora:** State-of-the-art minute-long high-fidelity videos via spacetime patches

### Text-to-3D
- **DeepFusion:** Distills 2D diffusion into NeRF structures
- **Magic3D:** Coarse-to-fine optimization for higher resolution

### Text-Guided Image Editing
- **SDEdit:** Zero-shot editing via noise addition then denoising with updated prompts
- **InstructPix2Pix:** Accepts natural language editing instructions

## Challenges and Future Directions

- Addressing bias through diverse datasets
- Advancing detection methods for generated content
- Unified multi-modality frameworks
- Cross-domain collaboration with vision transformers
