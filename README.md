# Next-app-WEXAAI Assingment

This is my Next.js app — containerized, published to GHCR by GitHub Actions, and deployable locally with Minikube (or run via Docker / npm locally). Below are the commands I use to start it in different environments.

## What this covers
- Run locally (development and production)
- Pull & run the Docker image from GHCR
- Deploy to Kubernetes on Minikube

## Prerequisites
- Node.js and npm (I typically use Node 18+)
- Docker (for pulling/running the image)
- kubectl
- minikube (if you're using the Kubernetes flow)

---

## Run locally (development)
If I want to work on the app and see live reloads:

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in the browser.

## Run locally (production mode)
To run the app in the production mode that matches what the Docker image serves:

```bash
npm install
npm run build
npm start
```

That will build the Next.js app and start the production server on port 3000.

---

## Run with Docker (pull image from GHCR)
I publish the image to GitHub Container Registry. The image referenced in the Kubernetes manifest is:

```
ghcr.io/sarthaksriv1411/next-app-wexaai:master
```

To pull and run it with Docker locally:

```bash
docker pull ghcr.io/sarthaksriv1411/next-app-wexaai:master
docker run -p 3000:3000 ghcr.io/sarthaksriv1411/next-app-wexaai:master
```

Then open http://localhost:3000.

Note: if the image is published under a different tag (for example `main`) replace `:master` with the correct tag.

---

## Deploy to Kubernetes (Minikube)
These are the steps I use to deploy the same container to a local Minikube cluster.

1. Start Minikube

```bash
minikube start
```

2. Load the image into Minikube

The Kubernetes manifest (`k8s/deployment.yml`) currently references the image tag `:master`. If your published image tag is `main` or something else, use that tag here.

```bash
minikube image load ghcr.io/sarthaksriv1411/next-app-wexaai:master
```

3. Deploy the manifests

```bash
kubectl apply -f k8s/
```

4. Check status

```bash
kubectl get pods
kubectl get svc
```

5. Access the app

I usually use the helper command that opens the service URL for me:

```bash
minikube service nextjs-service --url
```

Alternatively, the `Service` is a NodePort on `30080` (see `k8s/service.yml`) which forwards to container port `3000`, so you can also open `http://<minikube-ip>:30080`.

---


— Sarthak
