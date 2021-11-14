This page is interned to give instructions on how to updating shepherd and sheep.

# Required installs

The bellow can be installed using `apt` or `chocolately` if you are on windows. It should be noted that currently (April 2020) `sheep` can only be built on `x86`, not all of the node modules have released Arm binaries.
 * A C compiler the bellow have been tested:
      * `gcc 7.5.0` has been tested to work (earlier versions probably do as well)
      * Visual Studio 2017 (earlier versions will not work), `gcc` is not sufficient on Windows.
 * `python 3.6.7`
 * `python-dev 3.6.9` required by `ujson` a pip-package used by the `python-language-server`
 * `pip`:
     * Pip 19 is the only tested version
 * `node` (your install should also come with `npm`):
     * Sheep is developed against node version `8.1.0`
     * Other versions may work; `12.16.3` has been tested and fails
     * You may find managing multiple node installs easiest with a tool like [nvm](https://github.com/nvm-sh/nvm). Once installed set the node version to 8.1.0 by running `nvm use 8.1.0`
 * All of the dependencies at the correct versions are in the Pipfile. It is strongly recommended to use a python virtual environment for ease of install. I (Edwin Shepherd) personally like `pipenv`, getting using `pip install pipenv`. Remember to [add you python binaries to your path](https://stackoverflow.com/a/47111756/5006710). This **MUST** be installed using `pip` running under `python3` as we have `python3` modules. To install follow steps [here](https://pipenv-fork.readthedocs.io/en/latest/install.html). When working on raspbain I have needed to use the following command instead:
 *  `python3 -m pip install --user pipenv`, and then add it to the path

Optionally: 
 * Some people prefer `yarn` to `npm`. You already know if that's you.

# Getting the latest shepherd code

* Get the latest copy of the website and shepherd:
    * `git clone https://github.com/systemetric/robocon-website`
    * `git clone https://github.com/systemetric/shepherd` (note must have an account which is a member of systemetric organsiation and has access to the shepherd). 

# Update the docs for the BrainBox

The contents of large files from the shepherd repo(like images and PDFs) are stored by Netlify's Large Media (LM) servers. <br>

Install [git lfs](https://git-lfs.github.com/). 

Install the netlify CLI tool and set it up for the robocon-website repo:
* `npm i -g netlify-cli`
* `cd robocon-website`
* `netlify lm:install`
* `netlify link`
    * Select the option to enter the site ID
    * Enter the URL: `hr-robocon.org`
    * This requires you to be part of the Systemetric team on Netlify

This configures the website repository to use Netlify LM as the LFS server. From now on you should be able to use git and git lfs tools as normal for handling large assets. This step is important - if it's not followed for the one-time setup, the following steps for generating docs for the brains will not include large assets. 

From systemetric/robocon-website:master *(recommended)*: 
* `cd shepherd/sheepsrc/`
* `shepherd/sheepsrc> npm install`
* `shepherd/sheepsrc> npm run vuepress:update`
* `shepherd/sheepsrc> npm run vuepress:build`

From a local clone of the robocon-website *(only for testing local changes)*:
* Start from a dir containing both robocon-website and shepherd
* `cd shepherd/sheepsrc/`
* `shepherd/sheepsrc> npm install`
* `shepher/sheepsrc> npm run vuepress:updatebuild-local`

This should create a built version of the docs in `shepherd/shepherd/blueprints/staticroutes/docs`.

# Update sheep with new code changes

If you edit any of the files in `shepherd/sheepsrc` you will need to recompile it to its minified form which can be run in the browser, the compiled output is put in `shepherd/blueprints/staticroutes/editor/`.

Note you will likely need to increase your swap space to more than 1GB if doing this on a Pi.

 * `sheepsrc> npm run build`

Please run this command *before* committing to master so anyone who clones Shepherd can run it out of the box with your code changes.

Hot reload is supported for development using.

 * `sheepsrc> npm run start`

If you are developing just sheep things you may wish to use to use [mock-shepherd](https://github.com/systemetric/mock-shepherd) which lets you control the commands which shepherd is sending.


# Running shepherd

It is recommended to use `pipenv` to manage the python dependencies and `npm` to manage our JS (and its derivatives) dependencies if working on a PC however on a brain it is okay to just globally install everything using `pip`.

* `/> pipenv install`
     * I found that with 1GB of swap space I just had enough on a RPi3B, you may need to increase yours if you are doing anything else in the background.
* `/> pipenv shell` to enter the shepherd virtual environment
* `/> python app.py`
