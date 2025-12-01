🚀 CI/CD Pipeline: GitHub → Azure DevOps → ACR → AKS

This repository demonstrates a complete CI/CD workflow where application code stored in GitHub is automatically:

Built into a Docker image

Pushed to Azure Container Registry (ACR)

Deployed to Azure Kubernetes Service (AKS)
— using Azure DevOps Pipelines.

This project uses a self-hosted agent, Docker, Kubernetes, and Azure cloud services to simulate a real production deployment environment.

📌 Pipeline Overview

The Azure DevOps pipeline includes two stages:

🔹 1. Build Stage

Installs required dependencies (Docker, Azure CLI, Kubectl)

Builds Docker image from your project

Pushes image to ACR

Publishes Kubernetes manifests as artifacts

🔹 2. Deploy Stage

Connects to AKS cluster

Creates an imagePullSecret for pulling images from ACR

Deploys Kubernetes resources using:

deployment.yml

service.yml

Updates your application running in AKS

📁 Repository Structure
.
├── manifests/
│   ├── deployment.yml
│   └── service.yml
├── Dockerfile
└── azure-pipelines.yml

⚙️ Azure DevOps Pipeline (azure-pipelines.yml)

This pipeline uses:

Self-hosted Linux agent

ACR service connection

Docker@2 task for image build & push

KubernetesManifest@0 task for AKS deployment

Your variables:

dockerRegistryServiceConnection: '9b22992a-0815-4056-8f68-ebe31adc70b1'
imageRepository: 'temadeintegratinggithubwithazurepipelines'
containerRegistry: 'testacrregistry123.azurecr.io'
dockerfilePath: '**/Dockerfile'
tag: '$(Build.BuildId)'
imagePullSecret: 'testacrregistry1239eea-auth'

🔄 Complete CI/CD Flow
 GitHub Repo
      │
      ├── Push / Commit
      ▼
Azure DevOps Pipeline
 ├── Build Stage
 │    ├── Install tools
 │    ├── Build Docker image
 │    └── Push to ACR
 └── Deploy Stage
      ├── Create imagePullSecret
      └── Apply manifests to AKS
      ▼
 AKS Deployment Updated

🛠️ Prerequisites

Before running this pipeline, ensure you have:

Azure Subscription

Azure Resource Group

ACR (Azure Container Registry)

AKS Cluster

Self-hosted DevOps Agent

Service connection to ACR

🔐 Attach AKS to ACR (Required)

Run:

az aks update -n <aks-name> -g <resource-group> --attach-acr <acr-name>

🚀 Deploying the Application

Once everything is set:

Push code to GitHub

Azure DevOps pipeline triggers automatically

Image is built and pushed to ACR

Manifests are deployed to AKS

Application becomes available inside the cluster
