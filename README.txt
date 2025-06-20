- This assignment was completed by reusing code from my Assignments 1 and 2. This README document was built upon from the previous assignments as well.
- For this assignment, all assets and requirements are located in the folder “A3_rc621290”
- The JS folder (added to the file path from Assignment 2) is located in the root directory A3_rc621290 and titled “script.js”.



- There are a total of 6 pages:
	about-me.html
	art.html
	blog.html
	contact.html
	games.html
	index.html (home page)
- There is a sidebar navigation structure titled “Explore” on every page to switch between these webpages.
- The page layout changes subtly with each screen size group (mobile, tablet, desktop).

- The fonts used are as follows:
	fonts/Shrikhand/Shrikhand-Regular.ttf
	fonts/DM_Sans/DMSans-VariableFont_opsz\,wght.ttf"
- There are 8 images, all with alt text and specific pixel sizes:
	images/3d-girl.png (on the “Art” page)
	images/favicon.png (visible on the browser tab)
	images/game-preview.png (on the “Games” page)
	images/overalls-girl.jpg (on the “Home” page)
	images/pfp.jpg (on the “About Me” page)
	images/pixel-art.jpg (on the “Art” page)
	images/portrait.jpg (on the Art” page)
	images/wip-1.png (on the “Blog” page)
- There are 11 links in total:
	6 of them are navigational, found under “Explore” on each page. Each link leads to the webpage indicated by their name
	one is an external link on a picture located on the “Games” page, which links to a game on another website
	one is an external link at the bottom of the “Games” page, which links to the game mentioned above
	3 external links are on the “Contact” page, linking to my art email address, Instagram page and YouTube channel
- There are 2 videos with control schemes, both found on the “Art” page. One is included as a file (video/drawing-tutorial.mp4) and the other is an external YouTube video embed (https://www.youtube.com/embed/htm-Yj7XeFA?si=1tFt1_x50z5Q6r6V).
- On the “Home” page, there is an audio file (audio/reflected-light.mp3) [2] with a control scheme
- Visible on the browser tab is the Favicon, linked in the head of the html files as images/favicon.png
- There is a nested list, an unordered list, and an ordered list on the “About Me” page
- The table is found on the “Contact” page



SELECTORS (refer to style.css)
- A Universal selector is used in line 163, creating a green dashed border for any images intended to be framed.
- A Multiple selector is used in line 174, creating a style at applies to the table, table header, table data and caption.
- A Child selector is used in line 137 to style the text colour of the direct child of any unordered lists that are descendants of an ordered list.
- A Sibling selector is used in line 142 to style the text colour of the direct child of any unordered lists that are siblings with a paragraph element.
- An Adjacent Sibling selector is used in line 186, creating a double border around any images that follow a h3 element.
- An Attribute selector is used in line 194 to surround every YouTube video with a thin red border.
- A Pseudo-element selector is used in line 190 to enlarge the first letter of every paragraph and make them stand out more.



JS DETAILS (refer to script.js for more comments)
- There is a notification popup every time the header is clicked
- An event handler is used to style the footer text every time it is hovered over
- There is an if-else conditional to keeping track of how many clicks the user makes on the page as part of a "game"
- There are buttons at the bottom of each page to change the colour scheme of the page, and this resets every time the page is reloaded or a new page is clicked
- There is a form on the contacts page which outlines all the requirements as stated in the assignment description




Important Notes:
- All images, videos, games, and external links are my original content with the exception of the audio file on the “Home” page. The audio file used is cited in the references section below [4]. The Google fonts used are also cited below [2], [3].
- No generative AI was used in creating this website. All work was done with the help of the 1170 lecture/lab slides and W3Schools [5] as a quick reference.
- As commented in the index.html code, I retrieved the special text characters (stars and hearts) from external sources [1], and encoded them with a HTML encoder tool [6].



References & Resources
[1] Emoji Combos. emojicombos.com. Retrieved February 7, 2024 from https://emojicombos.com
[2] Jonny Pinhorn. 2015. Shrikhand. Google Fonts. Retrieved March 6, 2024 from https://fonts.google.com/specimen/Shrikhand
[3] Jonny Pinhorn, Colophon Foundry, and Indian Type Foundry. 2023. DM Sans. Google Fonts. Retrieved March 6, 2024 from https://fonts.google.com/specimen/DM+Sans
[4] SergePavkinMusic. 2023. Reflected Light. Pixabay. Retrieved February 7, 2024 from https://pixabay.com/music/beautiful-plays-reflected-light-147979/ 
[5] W3Schools. 2024. W3Schools Online Web Tutorials. W3schools.com. Retrieved March 8, 2024 from https://www.w3schools.com 
[6] Web 2.0 Generators. 2024. HTML Entities Encoder / Decoder. www.web2generators.com. Retrieved February 7, 2024  from https://www.web2generators.com/html-based-tools/onlinehtml-entities-encoder-and-decode