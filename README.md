# Community Science Museum
This is the updated version of the CSM website I created from the first year. Inside the portfolio I sometimes mentions changes I have made from the XD prototypes, which are referenced to the prototype links to both [desktop-](https://xd.adobe.com/view/ac3d295e-d8b4-41bb-9c9f-d735fa941822-f96e/?fullscreen&hints=off) and [mobile version](https://xd.adobe.com/view/39849f08-141b-4634-b13a-dfd8d449d1b4-6cd7/?fullscreen&hints=off).   
## Website's folders and code structures 
I have tried to the best of my ability to keep using the dry-principle where it was possible for me, but in this case I may have missed that some places in the code during the redesign of the website. Although I have tried to make changes to improve the user experience first, I need to perform user tests and get feedback on what I have done so far to identify what works and what should be changed to improve the user experience even more in the nearest future before official launch in my future portfolio.
### css
In this case I have arranged the CSS files somewhat differently than what I have done before. Now all html pages have their own css files under the same name and their own media queries for them, with the exception of items that are repeated across the site that are ``@imported`` from the subfolder ``imports`` (variables.css, nav.css, headers.css and footer.css) to split the code into smaller, more manageable code pieces to make it simpler to track when needed.
### images 
The way the image folders and files are located does not differ too much from the previous structure, only that both the mockup picture (from Freepik) of the logo from ``about.html`` and the logo file are located under the same subfolder called ``featured``. 
### js
This time I have not used very many lines with JavaScript code or used many files for them, but both codes for form validation inside the subfolder ``components`` and the hamburger menu are located there in the main js-file ``script.js``. Since there has been little use for js on this site in this version of the website, I also chose not to use the module (import/export of files there) or saw the need to do so. For information, I also have the hotjar code for user testing part of this project, since I'm planning to launch this site after this Portfolio 1 delivery is fully assessed and the usertesting's complete for future employers/costumers.  
### pages
This folder contains all subpages of the website in html files that have their own css files (found in the css folder), which belongs to the main navigation field of the main page. The subpages that accompanies the main page consists of the following:
#### visit.html
Information about what you can find when we visit the museum and other practical information to think about before visiting Community Science Museum. 
#### exhibitions.html
Overview of all permanent exhibitions the museum has and arranges, where themes are placed in alphabetical order. If we click on one of the "exhibition themes" from the homepage, we'll be sent to this subpage. 
#### about.html
An about-page for Community Science Museum that presents offers and services they have to offer to us users. What they can provide to us users is informed (mainly for children, teachers- and researchers). 
#### workplace.html
A subpage that informs about the "career opportunities" that exist at the Community Science Museum, in addition to the idea of being able to make a donation to the museum. 
#### contact.html
This page leads directly to the contact form, where form validation are added. CSS Grid are used in this case to build the way form looks, that also could be done with flexbox. 
