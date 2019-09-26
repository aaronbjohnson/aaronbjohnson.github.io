var projects = {
    "projects": [
        {
            "title" : "Brazil Fuel Prices",
            "dates" : "2019",
            "description": "Using data from Brazil's National Agency of Petroleum, Natural Gas, and Bio Fuels, I look at the change in fuel prices across the 5 regions of Brazil.",
            "links": [
                "https://github.com/aaronbjohnson/brazil-fuel-prices_EDA",
                "projects/litre-EDA.html"
            ],
            "images": ["https://images.unsplash.com/reserve/pK02sCLwT3Op7AZBbdz6_msp_0701_6004.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1948&q=80"]
        },
        {
            "title" : "Moneyball",
            "dates" : "2019",
            "description": "In this project I recreate and explore the problem faced by the Oakland athletics baseball team in 2002.",
            "links": [
                "https://github.com/aaronbjohnson/moneyball_project",
                "projects/moneyball/moneyball.html"
            ],
            "images": ["projects\\moneyball\\_icon_money-ball.png"]
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

            $(".btn-group:last").append(HTMLbuttonForm);


            var formattedView = HTMLprojectView.replace("%data%", projects.projects[project].links[1]);
            $(".btn-form:last").append(formattedView);
            var formattedCode = HTMLprojectCode.replace("%data%", projects.projects[project].links[0]);
            $(".btn-form:last").append(formattedCode);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".link-bar:last").append(formattedDates);
        };
    }
};

projects.display();
