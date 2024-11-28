// Toggle between day and night modes
function toggleTheme() {
    const currentTheme = document.body.classList.contains('night-mode') ? 'night' : 'day';
    const newTheme = currentTheme === 'night' ? 'day' : 'night';

    setThemeElements(newTheme);

    // Save the theme in localStorage
    localStorage.setItem('theme', newTheme);
}

// Toggle hamburger menu
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');

    // Check if the nav is currently open (active)
    if (navLinks.classList.contains('active')) {
        // It's open, so we add the closing animation
        navLinks.classList.remove('active');
        navLinks.classList.add('inactive');
    } else {
        // It's closed, so we add the opening animation
        navLinks.classList.remove('inactive');
        navLinks.classList.add('active');
    }
}

// Check saved theme on page load
window.onload = function () {
    const savedTheme = localStorage.getItem('theme') || 'day'; // Default to day if no theme is saved
    setThemeElements(savedTheme);
    
    // Make the page visible after theme is applied
    document.body.removeAttribute('hidden');
};

// Helper function to set elements based on the theme
function setThemeElements(theme) {
    const elements = {
        body: document.body,
        button: document.getElementById('dark-mode'),
        icon: document.getElementById('hamburger-image'),
        image1: document.getElementById('main-image'),
        image2: document.getElementById('about-image'),
        image3: document.getElementById('contacts-form'),
        imageCurtain: document.getElementById('curtain-image'),
        facebook: document.getElementById('facebook-icon'),
        twitter: document.getElementById('twitter-icon'),
        github: document.getElementById('github-icon'),
        linkedin: document.getElementById('linkedin-icon'),
        facebook2: document.getElementById('foot-facebook'),
        twitter2: document.getElementById('foot-twitter'),
        github2: document.getElementById('foot-github'),
        linkedin2: document.getElementById('foot-linkedin'),
        html: document.getElementById('html-icon'),
        css: document.getElementById('css-icon'),
        js: document.getElementById('js-icon'),
        python: document.getElementById('python-icon'),
        cs: document.getElementById('cs-icon'),
        java: document.getElementById('java-icon'),
        sql: document.getElementById('sql-icon'),
        php: document.getElementById('php-icon'),
        creat: document.getElementById('creat-icon'),
        ana: document.getElementById('ana-icon'),
        com: document.getElementById('com-icon'),
        org: document.getElementById('org-icon'),
        mobile: document.getElementById('service-mobile'),
        desktop: document.getElementById('service-desktop'),
        web: document.getElementById('service-web'),
        game: document.getElementById('service-game'),
        system: document.getElementById('service-system'),
        database: document.getElementById('service-database'),
        ui: document.getElementById('service-ui'),
        ai: document.getElementById('service-ai')
    };

    // Day mode settings
    const dayMode = {
        buttonText: '🌛', 
        buttonTitle: 'Night Mode',
        iconSrc: 'images/icons/menu_day.png',//Recalling images here to prevent hot flash of images.
        image1Src: 'images/Shirt.png',
        image2Src: 'images/Glass_day.png',
        image3Background: 'url(images/flamingo.jpg)',
        image2Filter: 'brightness(1)',
        imageCurtainSrc: 'images/miami.jpg',
        facebookSrc: 'images/icons/facebook_day.png',
        twitterSrc: 'images/icons/twitter_day.png',
        githubSrc: 'images/icons/github_day.png',
        linkedinSrc: 'images/icons/linkedin_day.png',
        facebook2Src: 'images/icons/facebook-light.png',
        twitter2Src: 'images/icons/twitter-light.png',
        github2Src: 'images/icons/github-light.png',
        linkedin2Src: 'images/icons/linkedin-light.png',
        htmlSrc: 'images/icons/html-day.png',
        cssSrc: 'images/icons/css-day.png',
        jsSrc: 'images/icons/js-day.png',
        csSrc:'images/icons/cs-day.png',
        javaSrc: 'images/icons/java.png',
        pythonSrc: 'images/icons/python.png',
        sqlSrc: 'images/icons/sql-day.png',
        phpSrc: 'images/icons/php-day.png',
        creatSrc: 'images/icons/creat-day.png',
        anaSrc: 'images/icons/ana-day.png',
        comSrc: 'images/icons/com-day.png',
        orgSrc: 'images/icons/org-day.png',
        mobileSrc: 'images/icons/mobile-day.png',
        desktopSrc: 'images/icons/desktop-day.png',
        webSrc: 'images/icons/web-day.png',
        gameSrc: 'images/icons/game-day.png',
        systemSrc: 'images/icons/system-day.png',
        databaseSrc: 'images/icons/database-day.png',
        uiSrc: 'images/icons/ui-day.png',
        aiSrc: 'images/icons/ai-day.png',
        image1Transform: 'rotateY(-1deg)',
        image2Transform: 'rotateY(-1deg)'
    };

    // Night mode settings
    const nightMode = {
        buttonText: '🌞',
        buttonTitle: 'Day Mode',
        iconSrc: 'images/icons/menu_night.png',
        image1Src: 'images/Suit.png',
        image2Src: 'images/Glass_night.png',
        image3Background: 'url(images/flamingo2.png)',
        image2Filter: 'brightness(0.8)',
        imageCurtainSrc: 'images/miami_sunset.jpg',
        facebookSrc: 'images/icons/facebook_night.png',
        twitterSrc: 'images/icons/twitter_night.png',
        githubSrc: 'images/icons/github_night.png',
        linkedinSrc: 'images/icons/linkedin_night.png',
        facebook2Src: 'images/icons/facebook-dark.png',
        twitter2Src: 'images/icons/twitter-dark.png',
        github2Src: 'images/icons/github-dark.png',
        linkedin2Src: 'images/icons/linkedin-dark.png',
        htmlSrc: 'images/icons/html-night.png',
        cssSrc: 'images/icons/css-night.png',
        jsSrc: 'images/icons/js-night.png',
        csSrc:'images/icons/cs-night.png',
        javaSrc: 'images/icons/java-night.png',
        pythonSrc: 'images/icons/python-night.png',
        sqlSrc: 'images/icons/sql-night.png',
        phpSrc: 'images/icons/php-night.png',
        creatSrc: 'images/icons/creat-night.png',
        anaSrc: 'images/icons/ana-night.png',
        comSrc: 'images/icons/com-night.png',
        orgSrc: 'images/icons/org-night.png',
        mobileSrc: 'images/icons/mobile-night.png',
        desktopSrc: 'images/icons/desktop-night.png',
        webSrc: 'images/icons/web-night.png',
        gameSrc: 'images/icons/game-night.png',
        systemSrc: 'images/icons/system-night.png',
        databaseSrc: 'images/icons/database-night.png',
        uiSrc: 'images/icons/ui-night.png',
        aiSrc: 'images/icons/ai-night.png',
        image1Transform: 'rotateY(180deg)',
        image2Transform: 'rotateY(360deg)'
    };

    // Conditional operator to assign nightMode to themeData if the theme is 'night', 
    // otherwise assigns dayMode if the theme is not 'night'.
    const themeData = theme === 'night' ? nightMode : dayMode;

    // Shifts the values based on the theme
    elements.body.classList.toggle('night-mode', theme === 'night');
    elements.body.classList.toggle('day-mode', theme === 'day');
    elements.button.innerHTML = themeData.buttonText;
    elements.button.title = themeData.buttonTitle;
    elements.icon.src = themeData.iconSrc;
    elements.image1.src = themeData.image1Src;
    elements.image2.src = themeData.image2Src;
    elements.image3.style.backgroundImage = themeData.image3Background;
    elements.image2.style.filter = themeData.image2Filter;
    elements.imageCurtain.src = themeData.imageCurtainSrc;
    elements.facebook.src = themeData.facebookSrc;
    elements.twitter.src = themeData.twitterSrc;
    elements.github.src = themeData.githubSrc;
    elements.linkedin.src = themeData.linkedinSrc;
    elements.facebook2.src = themeData.facebook2Src;
    elements.twitter2.src = themeData.twitter2Src;
    elements.github2.src = themeData.github2Src;
    elements.linkedin2.src = themeData.linkedin2Src;
    elements.html.src = themeData.htmlSrc;
    elements.css.src = themeData.cssSrc;
    elements.js.src = themeData.jsSrc;
    elements.cs.src = themeData.csSrc;
    elements.java.src = themeData.javaSrc;
    elements.python.src = themeData.pythonSrc;
    elements.sql.src = themeData.sqlSrc;
    elements.php.src = themeData.phpSrc;
    elements.creat.src = themeData.creatSrc;
    elements.ana.src = themeData.anaSrc;
    elements.com.src = themeData.comSrc;
    elements.org.src = themeData.orgSrc;
    elements.mobile.src = themeData.mobileSrc;
    elements.desktop.src = themeData.desktopSrc;
    elements.web.src = themeData.webSrc;
    elements.game.src = themeData.gameSrc;
    elements.system.src = themeData.systemSrc;
    elements.database.src = themeData.databaseSrc;
    elements.ui.src = themeData.uiSrc;
    elements.ai.src = themeData.aiSrc;
    elements.image1.style.transform = themeData.image1Transform;
    elements.image2.style.transform = themeData.image2Transform;
}