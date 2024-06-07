# AirLab Website

The codebase for the static AirLab website.

Hosted URL: https://www.ou.edu/airou

## About

This project uses *Eleventy* (11ty), a static site generator (SSG), along with *Nunjucks* templating engine. Eleventy is a NodeJS based SSG, so with that comes `npm`.

Site is currently maintained by Matthew Carroll, Aksel Can Sozudogru and Golnaz Habibi. Please contact them before deploying changes.

## Setup

> [!IMPORTANT]
> The setup and deployment scripts were tested in an Ubuntu environment (incl. Windows Subsystem for Linux). Results may vary for OSX (Mac).

Before starting, ensure that you have [set up your SSH key with your account in GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) so you can authenticate and access the private repository.

The following script will perform the needed setup. Just copy and run it in your Ubuntu terminal!

```bash
git clone git@github.com:airou-lab/website.git &&
cd website &&
sudo apt update &&
sudo apt install nodejs npm &&
npm install &&
npm run dev
```

This will also start up a development server which watches the `src` files and will live reload the localhost site whenever changes are made.

For advanced users, just clone the repository, ensure you have Node and NPM installed and use NPM to install the dependencies.

Ensure you have the sufficient version of NodeJS for Eleventy's dependencies (Node version 14).

## Editing the Site

Before editing, it is a good idea to start up a development server to check if your changes are working and see how they display.

```bash
npm run dev
```

The site's source code and data is all stored in the top level `src` directory.

The site data is stored in the `src/_data` directory, where each `.json` file's data will be populated into each page.

### Editing News, Publications, or Team
These pages can be edited by simply adding/removing/editing the associated data files. So long as the changes respect the existing structure, the appropriate page will be populated. For instance, each news article is an object within the parent array, which contains a `date`, `title`, `content`, and array of `images`.

### Editing Research
Each research topic (within `research.json`) corresponds a set of header information (`title`, `previewImage`) to an associated `page`. In the site, this header information is used to populate the preview buttons on the https://www.ou.edu/airou/research/ page. Upon clicking these preview cards, the associated `page` will be displayed, along with the `title` declared in the `.json` file.

Each research page exists as a Markdown file within `src/_includes/partials/research-pages/`. This allows you to easily edit the content of each research page without having to mess with formatting, styling, or HTML. 

You can add extra images, headings, tables, strikethrough, underline, etc. using the Basic Syntax denoted in this [markdown guide](https://www.markdownguide.org/cheat-sheet/). The Extended Syntax allows for lots more (embedded code, Latex, etc) but these needed to be added as plugins, so contact the site maintainer for this. The exceptions are tables and strikethrough, which are already installed.

### Adding images
1. Add the image file to `src/assets/images/` or `src/assets/images-stock/`, depending on if it's an image we own or not (just so we can more easily comply with copyright).
2. Reference the image path where needed with a leading `/` (e.g. `/assets/images/cars.png`).

## Deployment

> [!WARNING]
> Contact the site maintainer before deploying (see [About](#about)).

Before deployment, ensure that you are connected to the OU network so that you can access the host server. You may need to connect via VPN: refer to the OU IT resources.

After setup, just run the following command to automatically make a clean build of the website and deploy it to the host. You will need to enter the password for the user associated with the site, which you can get from Golnaz.

```bash
npm run deploy
```

The deployment script will clean out the build directory (`_site`) and build the site. Then it will send the files to the host via SFTP. See the `package.json` and `deploy.sh` for more details on the node and bash scripts for the project.

## Resources

### Site Usage
The webhost can display our site storage usage by logging in using the deployment credentials at [this website](https://ouwww.ou.edu/usage_web.php).

### Eleventy
Familiarize yourself with the Eleventy project structure and more using the tutorials below:
- https://learneleventyfromscratch.com/
- https://www.11ty.dev/docs/getting-started/
