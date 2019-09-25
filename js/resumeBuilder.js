var projects = {
    "projects": [
        {
            "title" : "Brazil Gas Prices",
            "dates" : "2019",
            "description": "In this project I was given a web-based application that read RSS feeds. The goal was to use Jasmine to write test suites that would test the functionality of the application.",
            "links": [
                "https://github.com/aj65461/frontend-nanodegree-feedreader",
                "http://aj65461.github.io/frontend-nanodegree-feedreader/"
            ],
            "images": ["https://images.unsplash.com/reserve/pK02sCLwT3Op7AZBbdz6_msp_0701_6004.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1948&q=80"]
        }
    ],

    display : function() {
        for (var project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectShadow);
            if (projects.projects[project].images.length > 0) {
                for (var image in projects.projects[project].images) {
                  var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                  $(".project-entry:last").append(formattedImage);
                }
            }
            $(".project-entry:last").append(HTMLcardBody);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".card-body:last").append(formattedTitle);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".card-body:last").append(formattedDescription);
            $(".card-body:last").append(HTMLprojectLinks);
            $(".link-bar:last").append(HTMLprojectButtons);
            var formattedView = HTMLprojectView.replace("%data%", projects.projects[project].links[1]);
            $(".btn-group:last").append(formattedView);
            var formattedCode = HTMLprojectCode.replace("%data%", projects.projects[project].links[0]);
            $(".btn-group:last").append(formattedCode);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".link-bar:last").append(formattedDates);
        };
    }
};

projects.display();
