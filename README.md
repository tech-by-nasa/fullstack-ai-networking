# fullstack-ai-networking
The full GitHub repository code is now structured, including: Next.js Frontend, FastAPI Backend, AI Chatbot (OpenAI API Integration), Blockchain Smart Contract &amp; Web3.py, Networking &amp; Security Scripts (Wireshark, Nmap), DevOps (AWS Terraform, Kubernetes Deployment)
# Full-Stack AI & Networking Repository

## 1. Next.js Full-Stack Frontend

# Create a new Next.js project
npx create-next-app@latest frontend
cd frontend
npm install axios tailwindcss @shadcn/ui

# Start the Next.js server
npm run dev

## 2. FastAPI Backend

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Welcome to the FastAPI Backend!"}

# Run FastAPI using uvicorn
# uvicorn main:app --reload

## 3. AI Chatbot (OpenAI API Integration)

from openai import OpenAI

def chatbot_response(prompt):
    response = OpenAI().ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}]
    )
    return response["choices"][0]["message"]["content"]

## 4. Blockchain - Smart Contract (Hardhat & Web3.py)

# Solidity Contract (contracts/MyContract.sol)

pragma solidity ^0.8.0;

contract MyContract {
    string public message = "Hello, Blockchain!";

    function updateMessage(string memory newMessage) public {
        message = newMessage;
    }
}

# Web3.py interaction (Python)
from web3 import Web3

web3 = Web3(Web3.HTTPProvider("https://mainnet.infura.io/v3/YOUR_INFURA_KEY"))
print(web3.isConnected())

## 5. Networking & Security Scripts

# Wireshark automated capture script
import subprocess
subprocess.run(["tshark", "-i", "eth0", "-a", "duration:60", "-w", "capture.pcap"])

# Nmap scanning script
import os
os.system("nmap -p 22,80,443 scanme.nmap.org")

## 6. DevOps - AWS Terraform & Kubernetes

# Terraform AWS instance setup (main.tf)
provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "web" {
  ami           = "ami-12345678"
  instance_type = "t2.micro"
  tags = {
    Name = "TerraformInstance"
  }
}

# Kubernetes deployment (deployment.yaml)
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 2
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app
        image: my-app:latest
        ports:
        - containerPort: 80
