document.addEventListener('DOMContentLoaded', function() {
    let projectList = document.getElementById('project-list');

    let projects = [
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
            description: 'Online Avito parser, focused on gathering info about vacancies. Support asynchrony. Stack used: Python, FastAPI, HTML5, BootStrap, JavaScript.    ',
            link: 'https://github.com/Rash1d1/avito-parser-vacancy'
        }
    ];

    for (let i = 0; i < projects.length; i++) {
        let project = projects[i];

        let projectItem = document.createElement('li');
        projectItem.className = 'project-item';

        let projectHeader = document.createElement('button');
        projectHeader.className = 'project-header';
        projectHeader.type = 'button';
        projectHeader.textContent = project.name;
        if (i === projects.length - 1) { projectHeader.style.marginBottom = "10px"}
        let projectContent = document.createElement('div');
        projectContent.className = 'project-content';

        let projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        let projectLink = document.createElement('a');
        projectLink.href = project.link;
        projectLink.textContent = 'View Project';

        projectContent.appendChild(projectDescription);
        projectContent.appendChild(projectLink);
        projectContent.style.overflow = 'hidden';
        projectList.appendChild(projectHeader);
        // projectItem.appendChild(projectContent);

        projectList.appendChild(projectContent);
        console.log(projectContent.style.maxHeight);

        projectHeader.addEventListener('click', function() {
            this.classList.toggle("active");
            let projectContent = this.nextElementSibling;
            if (projectContent.style.maxHeight) {
                projectContent.style.maxHeight = null;
                projectContent.style.marginBottom = null;
                projectContent.style.padding= null;
            } else {
                projectContent.style.maxHeight = projectContent.scrollHeight + 'px';
                projectContent.style.marginBottom = '15px';
                projectContent.style.padding = "20px 20px"
            }
        });

    }
});
