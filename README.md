# obsidian-Auto-tag

Quick starting guide for new plugin devs:

Check if someone already developed a plugin for what you want! There might be an existing plugin similar enough that you can partner up with.
Make a copy of this repo as a template with the "Use this template" button (login to GitHub if you don't see it).
Clone your repo to a local development folder. For convenience, you can place this folder in your .obsidian/plugins/your-plugin-name folder.
Install NodeJS, then run npm i in the command line under your repo folder.
Run npm run dev to compile your plugin from main.ts to main.js.
Make changes to main.ts (or create new .ts files). Those changes should be automatically compiled into main.js.
Reload Obsidian to load the new version of your plugin.
Enable plugin in settings window.
For updates to the Obsidian API run npm update in the command line under your repo folder.
