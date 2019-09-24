var bio = {
    "name": "Aaron Johnson",
    "role": "DATA ANALYST",
    "contacts": {
        "email": "aj65461@gmail.com",
        "github": "aaronbjohnson",
        "linkedin": "abrittjohnson",
        "location": "West Jefferson, NC",
    },
    "welcomeMessage": "Here is a collection of data projects that I've worked on. Here I'm writing more things to fill this up and see if there is something like a betternment of the top contacts section thingy, okay?",
    "bioPic": "images/me.jpg",

    display : function () {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        //var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        //$("#topContacts").append(formattedMobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);
        //var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        //$("#topContacts").append(formattedTwitter);
        var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
        $("#topContacts").append(formattedLinkedin);
        //var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        //$("#topContacts").append(formattedLocation);
        var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#summary").append(formattedWelcomeMessage);
        //Adding the footer contacts
        //$("#footerContacts").append(formattedMobile);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedGithub);
        $("#footerContacts").append(formattedLinkedin);
        //$("#footerContacts").append(formattedTwitter);
        /*
        if (bio.skills.length > 0) {
            $("#skillStart").append(HTMLskillsStart);
            for (var skill in bio.skills) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill].label);
                $("#skills").append(formattedSkill);
            }
        }
        */
        //var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
        //$("#header").prepend(formattedBioPic);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
    }
};



var projects = {
    "projects": [
        {
            "title" : "Feed Reader",
            "dates" : "2015",
            "description": "In this project I was given a web-based application that read RSS feeds. The goal was to use Jasmine to write test suites that would test the functionality of the application.",
            "links": [
                "https://github.com/aj65461/frontend-nanodegree-feedreader",
                "http://aj65461.github.io/frontend-nanodegree-feedreader/"
            ],
            "images": []
        },
        {
            "title" : "Neighborhood Map",
            "dates" : "2015",
            "description": "The goal of this project was to develop a single page application centered around one of my favorite neighborhoods. The map shows markers for my favorite locations in that neighborhood as well as a list view of those locations that can control the display of information about each place. Third-party APIs were used to asynchronously deliver current information about each location. A search and filter function was implemented to display or hide the markers and list items based on matching letters entered into a search bar above the map. I used the Knockout.js framework to keep the UI updated whenever the data model is changed and to connect the Google map markers to their respective list items. I used the Bootstrap framework to make the overall layout responsive on both larger screens and on mobile screens.",
            "links": [
                "https://github.com/aj65461/frontend-nanodegree-neighborhood-map",
                "http://aj65461.github.io/frontend-nanodegree-neighborhood-map/"
            ],
            "images": []
        },
        {
            "title" : "Mobile Portfolio",
            "dates" : "2015",
            "description": "The goal of this project was to analyze the Critical Rendering Path of a provided portfolio page and to make optimizations that would achieve a PageSpeed score of 90 on index.html, ensure a consistent frame rate at 60fps when when scrolling on a page that has a parallax animation in the background, impact content efficiency, and improve time to resize interactive objects on the page to less than 5ms.",
            "links": [
                "https://github.com/aj65461/frontend-nanodegree-mobile-portfolio",
                "http://aj65461.github.io/frontend-nanodegree-mobile-portfolio/"
            ],
            "images": []
        },
        {
            "title" : "Classic Arcade Game",
            "dates" : "2015",
            "description": "This was my third project in the Udacity Front-End Web Development Nanodegree. Using the provided game loop engine and my own visual assets, I added a number of entities to the game including the player character, lasers, and health pack to recreate a classic Frogger-style game.",
            "links": [
                "https://github.com/aj65461/frontend-nanodegree-arcade-game",
                "http://aj65461.github.io/frontend-nanodegree-arcade-game/"
            ],
            "images": [
            //"images/arcade.jpg"
            ]
        },
        {
            "title" : "Interactive Resume",
            "dates" : "2014",
            "description": "This was my second project in the Udacity Front-End Web Development Nanodegree. Here I developed an interactive resume application that would read resume content from a JSON file and would dynamically display that content within a provided template. I made use of objects, functions, conditionals, and control structures to compose the content that would display on the resume.",
            "links": [
                "https://github.com/aj65461/resume",
                "http://aj65461.github.io/resume"
            ],
            "images": []
        },
        {
            "title" : "HTML and CSS Portfolio",
            "dates" : "2014",
            "description": "This was my first project in the Udacity Front-End Web Development Nanodegree. The requirement was to develop a responsive website based on a mockup that would display images, descriptions and links to projects I would be completing during the course of the degree.",
            "links": [
                "https://github.com/aj65461/portfolio",
                "http://aj65461.github.io/portfolio"
            ],
            "images": []
        }
    ],

    display : function() {
        for (var project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace('#', projects.projects[project].links[1]);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);

            // Adding the buttons...
            var formattedCode = HTMLprojectCode.replace("%data%", projects.projects[project].links[0]);
            $(".project-entry:last").append(formattedCode);
            var formattedDemo = HTMLprojectDemo.replace("%data%", projects.projects[project].links[1]);
            $(".project-entry:last").append(formattedDemo);

            if (projects.projects[project].images.length > 0) {
                for (var image in projects.projects[project].images) {
                  var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                  $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};



bio.display();

projects.display();
