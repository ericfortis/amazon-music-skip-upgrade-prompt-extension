# Browser extension for blocking the upgrade prompt on Amazon Music

On every third load, the music.amazon.com webapp shows
a modal for upgrading with one click to the "Unlimited Plan". 
![Amazon Music Upgrade Plan Modal](./amazon-music-upgrade-modal.png)


## How it blocks it?
Currently, the `https://na.mesk.skill.music.a2z.com/api/showDynamicMessage`
tells the frontend when that overlay needs to
be rendered, so this extension blocks that request.