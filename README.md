# PeerTube bittube logo favicon plugin

# Introduction

This plugin allows you to configure an alternative logo and favicon for your peertube instance.

For now, you have to host the files by your own or use the BitTube default's already included in the package.

# How to

Once you have installed the plugin, go to the plugin's setup page.
There are several fields.

- Icon url (optional): if you want to change the logo icon (on the top left of your instance). Put here the url of your file, you have to host this file by your own. If you want to use BitTube default logo, put here 'bittube'.
- Icon width: if your icon file is not the same width that the original peertube logo, you can specify here the width. For example: "35px".
- Additional Icon css: here you can add you own css properties separated by semi-colon.
- Favicon url: if you want to change the favicon, put here the url of your file, you have to host it by your own. Make sure it is a suitable file for a favicon. If you want to use BitTube default favicon, put here 'bittube'.

**Important Note:** There is no sanitarization for your inputs (neither url or width). We assume that administrators are not evil, and don't do XSS and co.

# Upcoming enhancements

The actual method is not quite good. We have to wait the response of a peertubeHelpers.getSettings() before we can override logo or favicon.
I plan to find a better way.

Later, I planned to let you upload a file, automaticaly resize it and store it.

# Special Thanks to

John Livingstone and Framasoft team for develop and share the first version. https://framagit.org/Livingston/peertube-plugin-simplelogo
