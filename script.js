document.addEventListener('DOMContentLoaded', function() {
    var projectList = document.getElementById('project-list');

    var projects = [
        {
            name: 'Online calculator application',
            description: 'Pet project to dive into HTML, CSS and JavaScript',
            link: 'https://github.com/Rash1d1/calc'
        },
        {
            name: 'Burger restaurant landing',
            description: 'Layout of website for burger restaurant using Figma, HTML5, CSS3, JavaScript',
            link: 'https://github.com/Rash1d1/Burger-Landing'
        },
        {
            name: 'Avito parser',
            description: 'Online Avito parser, focused on gathering info about vacancies. Support asynchrony. Stack used: Python, FastAPI, HTML5, BootStrap, JavaScript, ',
            link: 'https://github.com/Rash1d1/avito-parser-vacancy'
        }
    ];

    for (var i = 0; i < projects.length; i++) {
        var project = projects[i];

        var projectItem = document.createElement('li');
        projectItem.className = 'project-item';

        var projectHeader = document.createElement('button');
        projectHeader.className = 'project-header';
        projectHeader.type = 'button';
        projectHeader.textContent = project.name;

        var projectContent = document.createElement('div');
        projectContent.className = 'project-content';

        var projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        var projectLink = document.createElement('a');
        projectLink.href = project.link;
        projectLink.textContent = 'View Project';

        projectContent.appendChild(projectDescription);
        projectContent.appendChild(projectLink);

        projectItem.appendChild(projectHeader);
        projectItem.appendChild(projectContent);

        projectList.appendChild(projectItem);

        projectHeader.addEventListener('click', function() {
            var projectContent = this.nextElementSibling;
            projectContent.style.display = projectContent.style.display === 'block' ? 'none' : 'block';
        });
    }
});
