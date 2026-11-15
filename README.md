# React Native Project Bootstrap

Here is a general guide for how to get things setup. This is not definitive and does not have to be the only way to do things. I am just documenting a pathway that worked.

## Windows Workstation Setup

We need to install some dependencies.

We can do this by opening a powershell prompt and running the following commands.

```powershell
winget install -e --id OpenJS.NodeJS.LTS --source winget
winget install -e --id Microsoft.OpenJDK.17 --source winget
winget install -e --id Google.AndroidStudio --source winget
```

## Integrated Development Environment

Next, we need a code editor. We can install vscode at this step.

## Git

Next, we can setup Git for Windows with the following powershell command

```powershell
winget install -e --id Git.Git --source winget
```

## Cloning the Repo

Now that git is installed, we can open vscode and navigate to source control.

There we can clone the repository to a folder on the current machine.

## Setting up Git Credentials

To differentiate commits from different users, we will need to be sure to set our git user name and email at a terminal prompt.

This con be accomplished from within vscode by running the following commands.

- NOTE: The username and email used here are an example.

```powershell
git config --global user.name "spartanhackers"
git config --global user.email "contact.spartanhackers@gmail.com"
```

## Android

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

## Dependency Test

You can run these commands to make sure that everything we need is installed and working at a terminal in vscode. All of these commands need to succeed in order for the environment to be deemed fully setup.

```powershell
node -v
java -version
adb --version
```