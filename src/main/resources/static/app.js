const mainContent = document.getElementById('mainContent');
const content = document.createElement('div');
content.id = 'content';
content.className = 'text-center text-2xl';
mainContent.appendChild(content);

const speakButton = document.getElementById('speakButton');
const typeButton = document.getElementById('typeButton');
const introductionButton = document.getElementById('introductionButton');
const projectsButton = document.getElementById('projectsButton');
const contactButton = document.getElementById('contactButton');

function updateContent(newContent, newClass) {
    content.className = newClass;
    content.innerHTML = newContent;
}

speakButton.addEventListener('click', () => {
    updateContent('<div class="w-16 h-16 bg-white text-black flex items-center justify-center rounded-full"><img src="" alt="Speech"></div>', 'flex items-center justify-center h-4/5 w-4/5 bg-black-800 rounded-lg transition-all duration-1000');
});

typeButton.addEventListener('click', () => {
    updateContent('<input type="text" class="w-full h-full p-4 text-black" placeholder="Type here...">', 'flex items-center justify-center h-4/5 w-4/5 bg-black-800 rounded-lg transition-all duration-1000');
});

introductionButton.addEventListener('click', () => {
    updateContent(`
        <div class="bg-white text-black p-8 rounded-lg">
            <h1 class="text-4xl font-bold mb-4">Rahul Raghuwanshi</h1>
            <h2 class="text-2xl mb-4">Full Stack Developer</h2>
            <p class="mb-4">Email: rahulraghuwanshi260@gmail.com</p>
            <p class="mb-4">Phone: 7000438075</p>
            <p class="text-lg">Hi, I'm Rahul Raghuwanshi, a Full Stack Developer skilled in Java, Python, JavaScript, HTML, CSS, and MySQL. I excel in creating dynamic web applications, leveraging AWS, Git, Postman, and Maven. My expertise includes AIML, Bootstrap, Hibernate, and Blockchain. Explore my projects and feel free to connect!</p>
        </div>`,
        'flex items-center justify-center h-full w-full bg-black-800 rounded-lg transition-all duration-1000');
});

projectsButton.addEventListener('click', () => {
    updateContent(`
        <div class="space-y-4 p-4">
            <div class="bg-white text-black p-6 rounded-lg project-card">
                <h3 class="font-bold">RARENOTE</h3>
                <p>Spring Boot | Python | HTML | CSS | JavaScript | Flask | MySQL</p>
                <p>Self-organizing note-taking chatbot web app with AI integration for tag extraction and response generation. Implemented CRUD operations for notes and designed a responsive frontend.</p>
                <video class="w-full mt-4" controls>
                    <source src="/videos/rareNote.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="bg-white text-black p-6 rounded-lg project-card">
                <h3 class="font-bold">RESTAURANT ORDERING SYSTEM</h3>
                <p>JAVA | JSP | SERVLET | HTML | CSS | JAVASCRIPT | MYSQL</p>
                <p>Website that displays restaurant menus, allows users to place orders, and proceed to checkout. Implemented user authentication, dynamic menu display, order management, and payment processing.</p>
                <video class="w-full mt-4" controls>
                    <source src="/videos/rareNote.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="bg-white text-black p-6 rounded-lg project-card">
                <h3 class="font-bold">REPLICATED FILE CHECKER (RFC)</h3>
                <p>JAVA | GUI | IO | COLLECTIONS</p>
                <p>Desktop app that checks for any replicated file in the folder you searched in. You can also perform various operations like delete, move, etc.</p>
                <video class="w-full mt-4" controls>
                    <source src="/videos/rareNote.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>`,
        'flex items-center justify-center h-full w-full bg-black-800 rounded-lg transition-all duration-1000');
});

contactButton.addEventListener('click', () => {
    updateContent(`
        <form class="bg-white text-black p-8 rounded-lg contact-form">
            <div class="mb-4">
                <input type="text" class="w-full p-4 bg-white text-black rounded-lg border border-black" placeholder="Name" required>
            </div>
            <div class="mb-4">
                <input type="email" class="w-full p-4 bg-white text-black rounded-lg border border-black" placeholder="Email" required>
            </div>
            <div class="mb-4">
                <textarea class="w-full p-4 bg-white text-black rounded-lg border border-black" placeholder="Message" required></textarea>
            </div>
            <button type="submit" class="w-full bg-black text-white py-4 rounded-lg">Submit</button>
        </form>
        <div class="mt-4">
            <a href="https://linkedin.com/in/rahulraghuwanshi" class="text-black hover:text-gray-500">LinkedIn</a>
            <a href="https://github.com/rahulraghuwanshi" class="text-black hover:text-gray-500">GitHub</a>
        </div>`,
        'flex items-center justify-center h-full w-full bg-black-800 rounded-lg transition-all duration-1000');
});
git add .
git commit -m "Updated styles and script for smooth shape transition effect"
git remote add origin https://github.com/MrRare/Rare_Portfolio
git push origin main