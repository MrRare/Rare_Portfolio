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
    updateContent('<div class="w-16 h-16 bg-white text-black flex items-center justify-center rounded-full"><img src="https://image.shutterstock.com/image-vector/speech-icon-260nw-380591546.jpg" alt="Speech"></div>', 'flex items-center justify-center h-4/5 w-4/5 bg-black-800 rounded-lg transition-all duration-1000');
});

typeButton.addEventListener('click', () => {
    updateContent('<textarea class="w-full h-full p-4 text-black"></textarea>', 'flex items-center justify-center h-4/5 w-4/5 bg-black-800 rounded-lg transition-all duration-1000');
});

introductionButton.addEventListener('click', () => {
    updateContent('<div class="bg-white text-black p-8 rounded-lg">Introduction Content: I am a passionate web developer with a love for creating interactive and dynamic user experiences. My skills include HTML, CSS, JavaScript, and various frameworks and libraries.</div>', 'flex items-center justify-center h-full w-full bg-black-800 rounded-lg transition-all duration-1000');
});

projectsButton.addEventListener('click', () => {
    updateContent(`
        <div class="grid grid-cols-2 gap-4 p-4">
            <div class="bg-white text-black p-4 rounded-lg project-card">
                Project 1: A responsive e-commerce website built with React and Tailwind CSS.
                <video class="w-full mt-4" controls>
                    <source src="project1-demo.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="bg-white text-black p-4 rounded-lg project-card">
                Project 2: A mobile app for tracking fitness activities, developed using React Native.
                <video class="w-full mt-4" controls>
                    <source src="project2-demo.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="bg-white text-black p-4 rounded-lg project-card">
                Project 3: A data visualization dashboard created with D3.js and Chart.js.
                <video class="w-full mt-4" controls>
                    <source src="project3-demo.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="bg-white text-black p-4 rounded-lg project-card">
                Project 4: A RESTful API service built with Node.js and Express.
                <video class="w-full mt-4" controls>
                    <source src="project4-demo.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>`,
        'flex items-center justify-center h-full w-full bg-black-800 rounded-lg transition-all duration-1000'
    );
});

contactButton.addEventListener('click', () => {
    updateContent(`
        <form class="bg-white text-black p-8 rounded-lg contact-form">
            <div class="mb-4">
                <input type="text" class="w-full p-4 bg-black-900 text-white rounded-lg" placeholder="Name" required>
            </div>
            <div class="mb-4">
                <input type="email" class="w-full p-4 bg-black-900 text-white rounded-lg" placeholder="Email" required>
            </div>
            <div class="mb-4">
                <textarea class="w-full p-4 bg-black-900 text-white rounded-lg" placeholder="Message" required></textarea>
            </div>
            <button type="submit" class="w-full bg-black-800 text-white py-4 rounded-lg hover:bg-black-700 transition duration-300">Send Message</button>
            <div class="mt-4 flex justify-center">
                <a href="https://github.com" target="_blank">GitHub</a>
                <a href="https://linkedin.com" target="_blank">LinkedIn</a>
                <a href="https://twitter.com" target="_blank">Twitter</a>
            </div>
        </form>`,
        'flex items-center justify-center h-1/2 w-1/2 bg-black-800 rounded-lg transition-all duration-1000'
    );
});
