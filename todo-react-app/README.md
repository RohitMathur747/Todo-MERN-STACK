# Todo React App

Scaffolded Vite + React project.

Quick start (PowerShell):

```powershell
cd "h:\Todo MERN STACK\todo-react-app"
npm install
npm run dev
```

Build:

```powershell
npm run build
npm run preview
```

## Jenkins CI

Follow these steps to link this repository with Jenkins using the included `Jenkinsfile`:

- **Requirements on Jenkins**: Docker (for agent), or the NodeJS plugin if you prefer running on the agent directly. Ensure Jenkins can run Docker or has Node.js/npm available.
- **Create a job**: Create a Multibranch Pipeline (recommended) or Pipeline job and point it to this repository. The job will automatically use the `Jenkinsfile` at the repo root.
- **Credentials / Webhook**: Add your GitHub credentials in Jenkins (if the repo is private) and configure a GitHub webhook to trigger builds on push or PRs. For a multibranch pipeline, enable the GitHub branch source and scan the repository for branches.
- **What the pipeline does**:
  - Checks out the source.
  - Uses the `node:18` Docker image.
  - Runs `npm ci`, then `npm run build` (Vite outputs to `dist/`).
  - Runs `npm test` if tests exist (non-fatal if there are none).
  - Archives the `dist/` folder as build artifacts.

If your Jenkins environment cannot run Docker, replace the `agent` section in `Jenkinsfile` with an appropriate `agent any` and install Node.js/npm on the Jenkins agent, or install the NodeJS plugin and configure a `tools` block.

Example minimal Multibranch setup:

1. Create > Multibranch Pipeline
2. Add a GitHub source and point to `https://github.com/<owner>/<repo>`
3. Add credentials (if private)
4. Save and let Jenkins scan branches; it will discover `rohit/todo-list` and use `Jenkinsfile`.

Need help configuring credentials or a webhook? Tell me whether you use a hosted Jenkins (Cloud) or a self-managed instance and I can provide step-by-step instructions.

## Guest / Visitor Panel

Visitors can access a simple Guest Panel from the header (or via `/guest`). This panel provides links to `About` and `Contact` pages without requiring a login. Use it to display info for non-authenticated users or to allow quick contact/support requests.
