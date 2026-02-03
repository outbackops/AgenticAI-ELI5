# ⚙️ Module 3: Setting Up Your Environment

## 📋 Prerequisites

- 💻 A computer (Windows, Mac, or Linux)
- 🌐 Internet connection
- 💳 Azure account (free tier available!)
- 🐍 Python 3.8+ installed
- 📝 A code editor (VS Code recommended)

## 🚀 Step-by-Step Setup

### 1. Create an Azure Account

Visit [azure.microsoft.com/free](https://azure.microsoft.com/free) and sign up for a free account. You'll get $200 credit to start!

### 2. Install Azure CLI

```bash
# Windows (PowerShell)
winget install Microsoft.AzureCLI

# macOS
brew install azure-cli

# Linux
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
```

### 3. Login to Azure

```bash
az login
```

### 4. Install Python SDK

```bash
pip install azure-ai-inference
pip install openai
pip install python-dotenv
```

### 5. Create Your First Project

```bash
# Create project directory
mkdir my-first-ai-agent
cd my-first-ai-agent

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Create main file
touch app.py
```

## 🎉 Your First Hello World Agent

```python
from openai import AzureOpenAI

# Initialize client
client = AzureOpenAI(
    api_key="your-api-key",
    api_version="2024-02-15-preview",
    azure_endpoint="your-endpoint"
)

# Create a simple agent
response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "You are a helpful AI agent."},
        {"role": "user", "content": "Hello! Who are you?"}
    ]
)

print(response.choices[0].message.content)
```

!!! tip "💡 Pro Tip"
    Always store your API keys in environment variables, never in your code! Use a `.env` file and add it to `.gitignore`.

!!! info "📖 Documentation"
    [Azure OpenAI Quickstart →](https://learn.microsoft.com/en-us/azure/ai-services/openai/quickstart)

---

**Previous:** [Module 2: Introduction to Azure Foundry](module-2-azure-foundry.md)  
**Next:** [Module 4: Building Your First AI Agent](../intermediate/module-4-building-first-agent.md) →
