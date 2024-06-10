document.addEventListener('DOMContentLoaded', (event) => {
    const mainContent = document.getElementById('mainContent');
    const content = document.getElementById('content');

    const speakButton = document.getElementById('speakButton');
    const inputBox = document.getElementById('inputBox');
    const introductionButton = document.getElementById('introductionButton');
    const projectsButton = document.getElementById('projectsButton');
    const contactButton = document.getElementById('contactButton');

    function updateContent(newContent, newClass) {
        content.className = newClass;
        content.innerHTML = newContent;
    }

    speakButton.addEventListener('click', () => {
        console.log('Speak button clicked');
        updateContent('<div class="w-16 h-16 bg-white text-black flex items-center justify-center rounded-full"><img src="images/microphone.png" alt="Speech"></div>', 'flex items-center justify-center h-full w-full bg-white text-black rounded-lg transition-all duration-1000');
    });

    inputBox.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            alert('You typed: ' + inputBox.value);
        }
    });

    introductionButton.addEventListener('click', () => {
        console.log('Introduction button clicked');
        updateContent(`
            <div class="bg-white text-black p-8 rounded-lg overflow-y-auto max-h-full">
                <h1 class="text-4xl font-bold mb-4">Rahul Raghuwanshi</h1>
                <h2 class="text-2xl mb-4">Full Stack Developer</h2>
                <p class="mb-4">Email: rahulraghuwanshi260@gmail.com</p>
                <p class="mb-4">Phone: 7000438075</p>
                <p class="text-lg">Hi, I'm Rahul Raghuwanshi, a Full Stack Developer skilled in Java, Python, JavaScript, HTML, CSS, and MySQL. I excel in creating dynamic web applications, leveraging AWS, Git, Postman, and Maven. My expertise includes AIML, Bootstrap, Hibernate, and Blockchain. Explore my projects and feel free to connect!</p>
            </div>`,
            'flex items-center justify-center h-full w-full bg-white text-black rounded-lg transition-all duration-1000');
    });

    projectsButton.addEventListener('click', () => {
        console.log('Projects button clicked');
        updateContent(`
<div id="projectsContainer" class="space-y-4 p-4 overflow-y-auto max-h-full flex flex-col items-start">
                <div class="bg-white text-black p-6 rounded-lg project-card">
                    <h3 class="font-bold">RARENOTE</h3>
                    <p>Spring Boot | Python | HTML | CSS | JavaScript | Flask | MySQL</p>
                    <p>Self-organizing note-taking chatbot web app with AI integration for tag extraction and response generation. Implemented CRUD operations for notes and designed a responsive frontend.</p>
                    <video class="w-full mt-2" controls>
                        <source src="/videos/rareNote.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="bg-white text-black p-6 rounded-lg project-card">
                    <h3 class="font-bold">RESTAURANT ORDERING SYSTEM</h3>
                    <p>JAVA | JSP | SERVLET | HTML | CSS | JAVASCRIPT | MYSQL</p>
                    <p>Website that displays restaurant menus, allows users to place orders, and proceed to checkout. Implemented user authentication, dynamic menu display, order management, and payment processing.</p>
                    <video class="w-full mt-2" controls>
                        <source src="/videos/rareNote.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="bg-white text-black p-6 rounded-lg project-card">
                    <h3 class="font-bold">REPLICATED FILE CHECKER (RFC)</h3>
                    <p>JAVA | GUI | IO | COLLECTIONS</p>
                    <p>Desktop app that checks for any replicated file in the folder you searched in. You can also perform various operations like delete, move, etc.</p>
                    <video class="w-full mt-2" controls>
                        <source src="/videos/rareNote.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>`,
            'flex items-center justify-center h-full w-full bg-white text-black rounded-lg transition-all duration-1000');
    });

    contactButton.addEventListener('click', () => {
        console.log('Contact button clicked');
        updateContent(`
            <div class="bg-white text-black p-8 rounded-lg overflow-y-auto max-h-full">
                <h1 class="text-4xl font-bold mb-4">Contact Me</h1>
                <p class="mb-4">If you have any questions or would like to connect, please reach out to me through any of the following methods:</p>
                <p class="mb-2"><strong>Email:</strong> rahulraghuwanshi260@gmail.com</p>
                <p class="mb-2"><strong>Phone:</strong> 7000438075</p>
                <p class="mb-2"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/rahul-raghuwanshi" class="text-blue-500" target="_blank">Rahul Raghuwanshi</a></p>
                <p class="mb-2"><strong>GitHub:</strong> <a href="https://github.com/rahulraghuwanshi" class="text-blue-500" target="_blank">github.com/rahulraghuwanshi</a></p>
            </div>`,
            'flex items-center justify-center h-full w-full bg-white text-black rounded-lg transition-all duration-1000');
    });
});
