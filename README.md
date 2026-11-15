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
