# The RoboCon Docs
Hosted on the subdomain https://docs.robocon.uk

Built with the Starlight docs framework, on Astro. 

If you've done Node stuff before and want to contribute, then jump down to the `More Advanced...` section for the important nitty gritty details, otherwise read away... I've explained the editing process :)

## Issues

If you find something wrong with the docs website, be it a spelling mistake, a broken link, or something that could be better, **open an issue!**

Head over to the issues tab, and hit add new issue. Then write your issue, *include a screenshot where applicable* and post it.

## Contributing & How it works
### Installation & Setup
First, clone down this repo. Then make sure node is installed, if not, I recommend installing `nvm` (Node Version Manager) and then installing the latest version of node (`nvm install node`).

Now node's installed, `cd` into the cloned repo folder and run `npm install`. This installs all the dependencies required. Now you're ready to edit!

### Editing basics
Best code editor? VS Code!

Now you've installed the dependencies, run a local server by using `npm run build`. This hosts your copy of the site in your browser with live changes as you edit the files.

Pages are stored in `/src/content/docs/` with the subfolder group matching the categories on the website. All the pages (except for `index.mdx` which is similar to HTML) are written in Markdown. Simply edit, save and see your changes!

If you need to add images or assets, they're stored in `/public/images/` or `/public/assets/` for anything that's not images. Refer to them as you usually would. They'll appear publicly without the `/public`. E.g. the image `/public/images/brainbox.jpg` is accessable at `https://docs.robocon.uk/images/brainbox.jpg`.

General site settings (e.g. headers and footers) are editable in `astro.config.mjs` and fonts in `tailwind.config.mjs`.

### More Advanced...
If you want to do more, then you can refer to the docs linked below!

This site was built with Starlight, which is an extension of Astro. See [Starlight docs](https://starlight.astro.build/guides/authoring-content/). Starlight varies in functionality a fair bit from some parts of Astro, so always **read the Starlight docs first** before checking the Astro ones.

Yes, we have Tailwind installed.

Fonts are installed via Fontsource (`npm install @fontsource/roboto` to add the Roboto font. Fontsource understands Google Fonts). Fonts must be defined in the `astro.config.mjs` file and used in the `tailwind.config.mjs` file. You must edit both when adding or removing a font.

### I've finished editing - contribute time!
Simply create an aptly named branch, commit your changes there, and open a Pull Request!
