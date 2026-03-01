# Push this project to GitHub (without GitHub Desktop)

Repo: **https://github.com/legend12309/dynamic**

---

## Option A: Install Git, then push from command line (keeps history)

### 1. Install Git for Windows
- Go to **https://git-scm.com/download/win**
- Download and run the installer (use default options).
- **Close and reopen** any terminal/Cursor after installing.

### 2. Open a terminal in this folder
- In Cursor: **Terminal → New Terminal** (or `` Ctrl+` ``).
- Or: press **Win + R**, type `cmd`, Enter, then run:
  ```bat
  cd /d "e:\remix-of-ai-video-studio-landing-page-main\remix-of-ai-video-studio-landing-page-main"
  ```

### 3. Push to GitHub
Run these one at a time:

```bash
git add -A
git commit -m "Update project" 
git push -u origin main --force
```

- If it asks to sign in, use your **GitHub username** and a **Personal Access Token** (not your password).  
  Create a token: GitHub.com → **Settings → Developer settings → Personal access tokens → Generate new token**.

---

## Option B: Upload via GitHub website (no Git needed)

Use this if you don’t want to install Git. Code will be on GitHub but **commit history from this folder will not**.

### 1. Create a ZIP of the project
- Open **File Explorer** and go to:  
  `e:\remix-of-ai-video-studio-landing-page-main\remix-of-ai-video-studio-landing-page-main`
- **Do not** include the `.git` folder (it’s hidden). Select all **other** files and folders (e.g. `src`, `public`, `index.html`, `package.json`, etc.).
- Right‑click → **Send to → Compressed (zipped) folder**. Name it e.g. `dynamic.zip`.

### 2. Upload to GitHub
- Go to **https://github.com/legend12309/dynamic**
- If the repo has files already: open a folder (e.g. `src`), click **Add file → Upload files**, then drag your **unzipped** folders/files (or upload the zip and GitHub will unpack it if supported).
- Or use **Add file → Upload files** and drag the contents of your project (not the `.git` folder).

### 3. Or: clone on GitHub, then replace
- On the repo page, click **Code → HTTPS** and copy the URL.
- After you install Git (Option A), run:
  ```bash
  cd /d e:\
  git clone https://github.com/legend12309/dynamic.git dynamic-temp
  xcopy /E /I /Y "remix-of-ai-video-studio-landing-page-main\remix-of-ai-video-studio-landing-page-main\*" "dynamic-temp\"
  cd dynamic-temp
  git add -A
  git commit -m "Update project"
  git push -u origin main
  ```

---

**Easiest if you want proper Git history:** install Git (Option A), then run the three commands in step 3.
