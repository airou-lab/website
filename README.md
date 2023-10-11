# AirLab Website

The codebase for the static AirLab website.

Hosted URL: https://www.ou.edu/airou

## About

This project uses *Eleventy* (11ty), a static site generator (SSG), along with *Nunjucks* templating engine. Eleventy is a NodeJS based SSG, so with that comes `npm`.

Site is currently maintained by Matthew Carroll and Golnaz Habibi.

## Setup

> [!IMPORTANT]
> The setup and deployment scripts were tested in a Linux environment, so OS X/Windows may not be compatible.

1. To start, clone the repository.

2. Run `sudo apt install nodejs npm` to install all dependencies to your machine.

3. Run `npm run dev:server` to build the site and run a server locally.

4. View the local site at http://localhost:8080/

## Deployment

> [!WARNING]
> Please take care when deploying. It is recommended to contact the site maintainer before deploying (see [About](https://github.com/airou-lab/AirlabWebsite/README.md#about)).

Before deployment, ensure that you are connected to the OU network so that you can access the host server. You may need to connect via VPN: refer to the OU IT resources.

After setup, just run `npm run deploy` to automatically make a clean build of the website and deploy it to the host. You will need to enter the password for the user associated with the site, which you can get from Golnaz.

The deployment script will clean out the build directory (`_site`) and build the site. Then it will send the files to the host via SFTP. See the `package.json` and `deploy.sh` for more details on the node and bash scripts for the project.

## Editing the Site

The site data is stored in the `_data` directory, where each `.json` file's data will be populated into each page.

### Editing News, Publications, or Team
These pages can be edited by simply adding/removing/editing the associated data files. So long as the changes respect the existing structure, the appropriate page will be populated. For instance, each news article is an object within the parent array, which contains a `date`, `title`, `content`, and array of `images`. Run `npm run dev:server` to check to see if your changes are reflected in the site properly before deploying.

### Editing Research
Each research topic (within `research.json`) corresponds a set of header information (`title`, `previewImage`) to an associated `page`. In the site, this header information is used to populate the preview buttons on the https://www.ou.edu/airou/research/ page. Upon clicking these preview cards, the associated `page` will be displayed, along with the `title` declared in the `.json` file.

Each research page exists as a Markdown file within `_includes/partials/research-pages/`. This allows you to easily edit the content of each research page without having to mess with formatting, styling, or HTML. 

You can add extra images, headings, tables, strikethrough, underline, etc. using the Basic Syntax denoted in this [markdown guide](https://www.markdownguide.org/cheat-sheet/). The Extended Syntax allows for lots more (embedded code, Latex, etc) but these needed to be added as plugins, so contact the site maintainer for this. The exceptions are tables and strikethrough, which are already installed.

### Adding images
1. Add the image file to `/assets/images/` or `/assets/images-stock/`, depending on if it's an image we own or not (just so we can more easily comply with copyright).
2. Reference the image path where needed (e.g. your `_includes/partials/research-pages/` Markdown file). Be sure to include the leading `/`, to denote 

## Resources

### Eleventy
Familiarize yourself with the Eleventy project structure and more using the tutorials below:
- https://learneleventyfromscratch.com/
- https://www.11ty.dev/docs/getting-started/

### Header Background 
https://unsplash.com/photos/R0b35bL_44A
