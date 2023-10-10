# AirLab Website

The codebase for the static AirLab website.

Hosted URL: https://www.ou.edu/airou

## About

This project uses *Eleventy* (11ty), a static site generator (SSG), along with *Nunjucks* templating engine. Eleventy is a NodeJS based SSG, so with that comes `npm`.

## Setup

> [!WARNING]
> The setup and deployment scripts were tested in a Linux environment, so OS X/Windows may not be compatible.

1. To start, clone the repository.

2. Run `sudo apt install nodejs npm` to install all dependencies to your machine.

3. Run `npm run dev:server` to build the site and run a server locally.

4. View the local site at http://localhost:8080/

## Deployment

Before deployment, ensure that you are connected to the OU network so that you can access the host server. You may need to connect via VPN: refer to the OU IT resources.

After setup, just run `npm run deploy` to automatically make a clean build of the website and deploy it to the host. You will need to enter the password for the user associated with the site, which you can get from Golnaz.

The deployment script will clean out the build directory (`_site`) and build the site. Then it will send the files to the host via SFTP. See the `package.json` and `deploy.sh` for more details on the node and bash scripts for the project.

## Resources

### Eleventy
Familiarize yourself with the Eleventy project structure and more using the tutorials below:
- https://learneleventyfromscratch.com/
- https://www.11ty.dev/docs/getting-started/

### Header Background 
https://unsplash.com/photos/R0b35bL_44A
