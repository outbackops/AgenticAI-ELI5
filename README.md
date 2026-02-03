# 🤖 Azure Foundry AI Agents - ELI5 Tutorial

A comprehensive, beginner-friendly tutorial website for learning how to create AI agents using Azure Foundry. Explained Like You're 5!

Built with [MkDocs](https://www.mkdocs.org/) and the [Material theme](https://squidfunk.github.io/mkdocs-material/).

## 🌟 Overview

This documentation site provides a complete learning path from absolute beginner to advanced practitioner in Azure AI agent development. The tutorial is structured in three progressive levels with 9 detailed modules covering everything from AI basics to production deployment.

## 📚 What You'll Learn

### 🌱 Beginner Level
- **Module 1:** Introduction to AI and AI Agents
  - Understanding artificial intelligence fundamentals
  - What AI agents are and how they work
  - Real-world examples and applications
  
- **Module 2:** Introduction to Azure Foundry
  - Azure Foundry platform overview
  - Key components and architecture
  - Why use Azure for AI development
  
- **Module 3:** Setting Up Your Environment
  - Prerequisites and account setup
  - Creating your first Azure AI project
  - Navigating Azure AI Studio

### 🔨 Intermediate Level
- **Module 4:** Building Your First AI Agent
  - Understanding agent components
  - Creating a simple chat agent
  - Configuring parameters and deployment
  
- **Module 5:** Understanding Agent Prompts and Responses
  - Prompt engineering techniques
  - System vs user prompts
  - Best practices and common pitfalls
  
- **Module 6:** Working with Tools and Functions
  - What are agent tools
  - Function calling basics
  - Built-in and custom tools

### 🚀 Advanced Level
- **Module 7:** Multi-Agent Systems
  - Why use multiple agents
  - Architecture patterns
  - Agent communication strategies
  
- **Module 8:** Agent Orchestration and Workflows
  - Orchestration concepts
  - Azure tools (Semantic Kernel, Prompt Flow)
  - State management
  
- **Module 9:** Best Practices and Deployment
  - Production readiness checklist
  - Responsible AI principles
  - Deployment strategies and cost optimization

## ✨ Features

- **📖 ELI5 Approach:** Complex concepts explained in simple, easy-to-understand language
- **📊 12+ Mermaid Diagrams:** Visual representations of architectures, workflows, and concepts
- **💻 Code Examples:** Practical, real-world code snippets and configurations
- **🔗 Official References:** Direct links to Microsoft Azure documentation
- **📱 Responsive Design:** Works perfectly on desktop, tablet, and mobile devices
- **🎨 Modern UI:** Clean Material Design theme with Azure branding
- **🔍 Full-Text Search:** Quickly find topics across all modules
- **🌓 Dark/Light Mode:** Choose your preferred theme

## 🚀 Getting Started

### View Online
Visit the live site at: **[https://outbackops.github.io/AgenticAI-ELI5/](https://outbackops.github.io/AgenticAI-ELI5/)**

### Run Locally

**Prerequisites:**
- Python 3.8 or higher
- pip (Python package installer)

**Installation:**

1. Clone the repository:
```bash
git clone https://github.com/outbackops/AgenticAI-ELI5.git
cd AgenticAI-ELI5
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Serve the documentation locally:
```bash
mkdocs serve
```

4. Open your browser to `http://127.0.0.1:8000/`

The local server includes hot-reload, so any changes you make to the markdown files will automatically refresh in your browser!

## 📁 Project Structure

```
AgenticAI-ELI5/
├── docs/                           # Documentation source files
│   ├── index.md                    # Home page
│   ├── beginner/                   # Beginner level modules
│   │   ├── module-1-introduction-to-ai.md
│   │   ├── module-2-azure-foundry.md
│   │   └── module-3-environment-setup.md
│   ├── intermediate/               # Intermediate level modules
│   │   ├── module-4-building-first-agent.md
│   │   ├── module-5-prompts-and-responses.md
│   │   └── module-6-tools-and-functions.md
│   └── advanced/                   # Advanced level modules
│       ├── module-7-multi-agent-systems.md
│       ├── module-8-orchestration-workflows.md
│       └── module-9-best-practices-deployment.md
├── mkdocs.yml                      # MkDocs configuration
├── requirements.txt                # Python dependencies
├── .github/workflows/              # GitHub Actions workflows
│   └── deploy-pages.yml            # Auto-deployment to GitHub Pages
├── index.html                      # Legacy HTML site (kept for reference)
├── styles.css                      # Legacy CSS (kept for reference)
├── script.js                       # Legacy JavaScript (kept for reference)
└── README.md                       # This file
```

## 🛠️ Technologies Used

- **MkDocs:** Static site generator for documentation
- **Material for MkDocs:** Modern, responsive documentation theme
- **Python Markdown Extensions:** Enhanced Markdown features
- **Mermaid.js:** Diagram rendering for visual explanations
- **GitHub Pages:** Free hosting and automatic deployment
- **GitHub Actions:** Continuous integration and deployment

## 📖 Usage

1. **Navigate:** Use the left sidebar to browse modules by difficulty level
2. **Search:** Use the search bar at the top to find specific topics
3. **Learn:** Follow modules in order for the best learning experience (Beginner → Intermediate → Advanced)
4. **Practice:** Try the code examples in your own Azure environment
5. **Reference:** Click the external documentation links for deeper dives into Azure services

## 🎯 Target Audience

- **Complete Beginners:** No prior AI or Azure experience required
- **Developers:** Looking to add AI capabilities to applications
- **Students:** Learning about modern AI development
- **Professionals:** Exploring Azure AI services

## 🔗 Useful Links

- [Azure AI Studio](https://ai.azure.com)
- [Azure AI Documentation](https://learn.microsoft.com/en-us/azure/ai-services/)
- [Azure Free Account](https://azure.microsoft.com/free/)
- [Microsoft Learn - AI](https://learn.microsoft.com/en-us/training/browse/?products=azure-ai-services)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Content Improvements
- Report bugs or issues
- Suggest new modules or topics
- Fix typos or errors
- Improve explanations or examples

### Local Development
1. Fork this repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes to the Markdown files in the `docs/` directory
4. Test locally: `mkdocs serve`
5. Commit your changes: `git commit -am 'Add some feature'`
6. Push to the branch: `git push origin feature/your-feature`
7. Submit a pull request

### Building the Documentation
```bash
# Install dependencies
pip install -r requirements.txt

# Build the site
mkdocs build

# The built site will be in the site/ directory
```

## 💡 Tips for Learning

1. **Start from the beginning** - Even if you have some experience, the beginner modules provide important context
2. **Take your time** - Each module builds on previous concepts
3. **Try the examples** - Hands-on practice is the best way to learn
4. **Use Azure free credits** - Get $200 in free credits to experiment
5. **Join communities** - Connect with other learners and experts

## 📞 Support

For questions about:
- **Azure Services:** Visit [Azure Support](https://azure.microsoft.com/support/)
- **This Tutorial:** Open an issue in this repository
- **AI Development:** Check [Microsoft Q&A](https://learn.microsoft.com/answers/)

---

**Happy Learning! 🚀🤖**
