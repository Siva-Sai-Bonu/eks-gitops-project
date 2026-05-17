# EKS GitOps Project

Production-grade CI/CD pipeline using GitHub Actions + ArgoCD on Amazon EKS.

## Stack
- **CI:** GitHub Actions (build, test, push to ECR)
- **CD:** ArgoCD (GitOps, pull-based, auto-sync)
- **Registry:** Amazon ECR
- **Kubernetes:** Amazon EKS
- **Packaging:** Helm
- **Auth:** OIDC (no static AWS keys)
- **Ingress:** AWS ALB

## Architecture
Code Push → GitHub Actions → ECR → ArgoCD → EKS → ALB → Public URL
