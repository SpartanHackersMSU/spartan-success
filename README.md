# React Native Project Bootstrap

## Local Setup and Initialization

Here is a general guide for how to get things setup. This is not definitive and does not have to be the only way to do things. I am just documenting a pathway that worked.

### Windows Workstation Setup

We need to install some dependencies.

We can do this by opening a powershell prompt and running the following commands.

```powershell
winget install -e --id OpenJS.NodeJS.LTS --source winget
winget install -e --id Microsoft.OpenJDK.17 --source winget
winget install -e --id Google.AndroidStudio --source winget
```

### Integrated Development Environment

Next, we need a code editor. We can install vscode at this step.

### Git

Next, we can setup Git for Windows with the following powershell command

```powershell
winget install -e --id Git.Git --source winget
```

### Cloning the Repo

Now that git is installed, we can open vscode and navigate to source control.

There we can clone the repository to a folder on the current machine.

### Setting up Git Credentials

To differentiate commits from different users, we will need to be sure to set our git user name and email at a terminal prompt.

This con be accomplished from within vscode by running the following commands.

- NOTE: The username and email used here are an example.

```powershell
git config --global user.name "spartanhackers"
git config --global user.email "contact.spartanhackers@gmail.com"
```

### Android

We need to setup some preliminary tooling to be able to deploy the application to android devices.

We installed Android Studio via winget, but we need to install the platform tools to get adb and an sdk so that we can build the app.

Open Android Studio and Navigate through the first startup wizard.

- Next
- Standard
- Next
- Accept -> Next
- Wait for the download to finish -> Finish

That should install latest sdk and platform tools.

Next you'll need to add some environment variables so that some of the tools you just installed can be accessed by any application on the system.

Search `env` on the taskbar to open the *System Properties* dialog.

Click *Environment Variables...* at the bottom.

The top section is for User environment variables.

Click *New...*

Set the *Variable name:* to `ANDROID_HOME` and the *Variable value:* to `%LOCALAPPDATA%\Android\Sdk` then click *OK*.

Then click *Path* and *Edit...*.

Click *New* and set the value to `%LOCALAPPDATA%\Android\Sdk\platform-tools` then click *New* one more time and set the value to `%LOCALAPPDATA%\Android\Sdk\emulator` then click *OK*.

You can then click *OK* again to exit the environment variables dialog and *OK* one more time to exit *System Properties*

You will then need to restart vscode.

### Dependency Test

You can run these commands to make sure that everything we need is installed and working at a terminal in vscode. All of these commands need to succeed in order for the environment to be deemed fully setup.

```powershell
node -v
java -version
adb --version
```

### Android Emulator

For local development, we will need an android emulator to test the app. But first we need to enable the windows hypervisor platform to enable virtualization. We can do this easily by using the shortcut in Android Studio.

Click:
- *More Options*
- *Virtual Device Manager*
- Next to *Windows Hypervisor Platform is not enabled* in red, click *Enable*
- Either click *Enable and restart now* or *Enable*. If you click *Enable*, you will need to manually reboot.

At the time of writing, November 15, 2026, Android Studio automatically sets up an emulator, so after the reboot, everything should be setup.

### Executing Scripts

Next, we need to make sure that we can execute scripts on the system. You will need to change a setting in the Windows Settings menu.

- click or search for *Settings*
- click *Advanced*
- click *PowerShell*
- check the toggole to *On* next to *Change the execution policy to allow local PowerShell scripts to run without signing. Require signing for remote scripts.*

### Project Bootstrap

Now we can actually start building the project.

You will first need to move any files that are in the current directory (like a README.md) out of the repository directory before initializing the application.

First we need to setup the initial boilerplate and setup files with the following command.

```powershell
npx create-expo-app@latest . --template default@latest
```

Type `y` then press `Enter`.

Once that completes we can commit the changes.

- NOTE: The following steps can be done in the gui. I am just walking through how to do it from the terminal for reference.

1. Stage the changes.

```powershell
git add .
```

2. Commit the changes.

```powershell
git commit -m "Initializing react native application"
```

3. Push the changes to Github.

```powershell
git push
```

### Getting Started

Next, we will create a branch to get working on the main dashboard.

```powershell
git checkout -b feat/main-dashboard
```

Running this command will startup the emulator and allow for live development by installing expo go to the emulated device directly.

```powershell
npx expo start
```

You will need to type `y` and press `Enter` to install expo.

To start the android emulator, type `a`.

## Github Codespaces

### Git Cleanup

To stop expo, you can press and hold `Ctrl` then press `C`.

To prepare for codespaces, let's merge everything back into main.

```powershell
git add .
git commit -m "Stopping expo"
git push
git switch main
git pull
git merge feat/main-dashboard
git push
git branch -d feat/main-dashboard
git push origin --delete feat/main-dashboard
```

### Devcontainer Definition

We need to create a devcontainer definition so that github codespaces knows how to setup the devcontainer for our project.

First you need to create a `.devcontainer` directory.

```powershell
mkdir .devcontainer
```

Then you need to create a `devcontainer.json` file in that new directory and make this contents:

```json
{
  "name": "Spartan Success React Native",
  "image": "mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm",
  "features": {
    "ghcr.io/devcontainers/features/java:1": {
      "version": "17",
      "installGradle": true
    }
  },
  "forwardPorts": [8081],
  "portsAttributes": {
    "8081": {
      "label": "Expo Metro Bundler",
      "onAutoForward": "notify"
    }
  },
  "postCreateCommand": "npm install && npm install -g @expo/ngrok@^4.1.0",
  "customizations": {
    "vscode": {
      "extensions": [
        "expo.vscode-expo-tools",
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode"
      ]
    }
  }
}
```

___


# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **src/app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **example** directory and create a blank **src/app** directory where you can start developing.

### Other setup steps

- To set up ESLint for linting, run `npx expo lint`, or follow our guide on ["Using ESLint and Prettier"](https://docs.expo.dev/guides/using-eslint/)
- If you'd like to set up unit testing, follow our guide on ["Unit Testing with Jest"](https://docs.expo.dev/develop/unit-testing/)
- Learn more about the TypeScript setup in this template in our guide on ["Using TypeScript"](https://docs.expo.dev/guides/typescript/)

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.