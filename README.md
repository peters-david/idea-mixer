# idea-mixer
Keep track of ideas and come up with new ones by reusing existing ideas.  
This repository contains the source code for the Idea Mixer app. It is part of a project carried out at IU International University.  

<img src="assets/icons/icon.png" width="100" height="100" alt="icon"></img>  
Created by [@David Peters](https://github.com/peters-david)

## About
This app helps collecting ideas. Each idea gets an entry and is related to different concepts.
When starting the app a random combination of two concepts is shown. You can add a new idea connecting the two concepts.  

### Take a look
<p align="center">
    <video src="docs/new.mp4" autoplay loop muted playsinline width="250" height="500">
        Your browser does not support the video tag.
    </video>
    <img src="docs/overview.png" width="250" height="500" alt="icon"/>
    <img src="docs/view.png" width="250" height="500" alt="icon"/>
    <img src="docs/edit.png" width="250" height="500" alt="icon"/>
    <img src="docs/seed.png" width="250" height="500" alt="icon"/>
</p>
    
Download the android release at [the release page](https://github.com/peters-david/idea-mixer/releases).

## Develop
Prerequisites:
- [Node](https://nodejs.org/)  
- [Yarn](https://yarnpkg.com/) (or npm, which is included in node)

How to build: Run `yarn build-android`  
How to lint: Run `yarn lint`  
How to test: Run `yarn test`  
How to start a development server: `yarn start` / `yarn lan` / `yarn tunnel` / `yarn android` / `yarn ios`