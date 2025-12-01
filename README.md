# 🚀GitHub Source Code Integrated With Azure DevOps CI/CD

This project demonstrates how I host my application **source code on GitHub**, integrate it with **Azure DevOps**, and then use **Azure Pipelines** to automatically build, containerize, and deploy the application into **Azure Kubernetes Service (AKS)**.

My goal is to maintain GitHub as my development platform while leveraging Azure DevOps for enterprise-grade CI/CD automation.

---

# 🧩 Project Overview

This setup connects:

**GitHub (source code) → Azure DevOps Pipelines → Azure Container Registry → AKS (deployment)**

The workflow enables:

1. **Continuous Integration (CI)**  
   - GitHub repository triggers an Azure Pipeline  
   - Pipeline builds the project  
   - Builds Docker image  
   - Pushes image to Azure Container Registry (ACR)

2. **Continuous Deployment (CD)**  
   - Azure Pipelines retrieves Kubernetes manifests  
   - Creates an imagePullSecret  
   - Deploys updated containers into AKS automatically

---

# 🛠️ Technologies Used

| Category | Technology |
|---------|------------|
| Framework | **Next.js** |
| Language | **JavaScript / React** |
| Runtime | **Node.js** |
| Package Manager | **Yarn** |
| Containerization | **Docker** |
| Container Registry | **Azure Container Registry (ACR)** |
| Orchestration | **Azure Kubernetes Service (AKS)** |
| Pipeline Engine | **Azure DevOps Pipelines** |
| Source Control | **GitHub** |

---

# 🔗 GitHub → Azure DevOps Integration

This project uses:

- GitHub as the source repository  
- Azure DevOps Service Connection to pull code directly from GitHub  
- Azure Pipelines YAML stored inside the repository  
- Automated pipeline runs when new commits are pushed to `main`  

This allows me to keep GitHub as my main development platform while benefiting from Azure DevOps automation and enterprise CI/CD capabilities.

---

# 📦 Pipeline Features

✔ Builds Docker images automatically from GitHub commits  
✔ Pushes images to Azure Container Registry  
✔ Deploys to AKS using Kubernetes manifests  
✔ Runs on a **self-hosted Azure DevOps Linux agent**  
✔ Installs Docker, Azure CLI, and Kubectl automatically  
✔ Full end-to-end CI/CD delivered through Azure Pipelines  

---

# ⚙️ Kubernetes Manifests

The AKS deployment uses YAML manifests stored under:

```
/manifests/deployment.yml  
/manifests/service.yml 
```

These are automatically published during the **Build** stage and consumed in the **Deploy** stage.

---

# 🧑‍💻 Local Development (Next.js)

To run the project locally:

```sh
yarn install
yarn dev
```

To build the Docker image locally:

```sh
docker build -t helios-proof .
```

---

# 🚀 Deployment Workflow Summary

```
1. Push code to GitHub  
2. Azure DevOps Pipeline triggers automatically  
3. Docker image builds + stored in ACR  
4. Kubernetes manifests published  
5. Azure DevOps deploys the updated image into AKS  
6. Application becomes available in the cluster  
```

---

# 📬 Final Notes

This is a personal project built to:

- Learn & implement CI/CD  
- Integrate GitHub with Azure DevOps Pipelines  
- Deploy modern JavaScript applications on Kubernetes  
- Use cloud-native tools like Docker, AKS, and ACR  

