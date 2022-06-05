export const personalSkillsKeyWords = [
    "Practical",
    "Creative",
    "Analytical",
    "Innovative",
    "Efficient",
    "Flexible",
    "Adaptable",
    "Self-motivated",
    "Hardworking",
    "Team player",
    "Open-minded",
    "Communicative",
    "Confident",
    "Reliable",
    "Resilient",
    "Diligent",
    "Pragmatic",
    "Straightforward",
    "Strategic",
    "Self-driven",
    "Independent",
    "Passionate",
    "Insightful",
    "Informative",
    "Inclusive",
    "Patient",
    "Persistent",
    "Focused",
    "Committed",
    "Empathetic",
    "Responsible",
    "Loyal",
    "Dedicated",
    "Leadership",
    "Outgoing",
    "Resourceful",
    "Willing to Learn",
    "Willing to Share",
    "Willing to Help",
    "Willing to Serve",
    "Able to work under pressure",
    "Value-driven",
]

export const technicalSkillsKeyWords = [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "HTML",
    "CSS",
    "SASS",
    "Git",
    "GitHub",
    "GitLab",
    "Jira",
    "Agile",
    "Scrum",
    "TDD",
    "Test-driven development",
    "Design Patterns",
    "Software Architecture",
    "Software Development",
    "Software Engineering",
    "Software Testing",
    "Software Quality",
    "Quality Assurance",
    "Customer Service",
    "Customer Support",
    "Sales",
    "Marketing",
    "Business Development",
    "Team Management",
    "Project Management",
    "Team Leadership",
    "Project Leadership",
    "Strategic Planning",
    "Supply Chain",
    "Supply Chain Management",
    "Supply Chain Operations",
    "Supply Chain Planning",
    "Supply Chain Strategy",
    "Supply Chain Transformation",
    "Supply Chain Transformation Planning",
    "Supply Chain Transformation Strategy",
    "Supply Chain Transformation Strategy Development",
    "Support",
    "Support Operations",
    "Support Operations Management",
    "Support Operations Planning",
    "Backend",
    "Frontend",
    "Frontend Development",
    "Php",
    "Python",
    "Ruby",
    "C#",
    "C++",
    "C",
    "Java",
    "Swift",
    "Kotlin",
    "Objective-C",
    "Android",
    "iOS",
    "Flutter",
    "Figma",
    "Adobe XD",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe After Effects",
    "Adobe Premiere Pro",
    "Adobe After Effects",
    "Optimization",
    "Optimization Algorithms",
    "Data Structures",
    "Data Structures and Algorithms",
    'Data Science',
    'Data Analysis',
    'Data Visualization',
    "UX",
    "UI",
    "UX Design",
    "UI Design",
    "User Experience",
    "User Interface",
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
]

export const phrasesForDesc = [
    'Worked to ensure a positive and hassle-free customer experience.',
    'Identified and maximized sales opportunities, and increased customer retention rates.',
    'Developed a strong relationship with customers and partners.',
    'Settled any customer disputes in a professional and pleasant manner.',
    'Applied and remained current with existing and emerging technologies.',
    'Brought forth a passion and dedication to software development.',
    'Developed a strong sense of responsibility for the company and its products.',
    'Worked on internal and external projects with great care.',
    'Helped to provide industry-leading solutions.',
    'Worked with a team of talented individuals to deliver a high-quality product.',
    'Utilized the latest software development tools, techniques, and approaches.',
    'Analyzed and designed new systems and applications.',
    'Brought forth an energetic attitude and positive work-ethic.'
]
export const allKeywords = [
    personalSkillsKeyWords,
    phrasesForDesc,
    technicalSkillsKeyWords,
]
export const allKeywordsWithTitles = {
    personalSkillsKeyWords,
    phrasesForDesc,
    technicalSkillsKeyWords,
}
export const getRandomValue = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};
export const getGivenNumberKeywordsFromArray = (arr, numberOfkKeywords) => {
    let temp = [];
    for (let i = 0; i < numberOfkKeywords; i++) {
        let randomValue = getRandomValue(arr);
        if (temp.includes(randomValue)) {
            i--;
            continue;
        }
        temp.push(randomValue);
    }
    return temp;
}
export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}

export const isEmptyObject = (obj) => {
    return obj && !(obj
        && Object.keys(obj).length === 0
        && Object.getPrototypeOf(obj) === Object.prototype)
}

export const getDifferenceBetweenArrays = (arr1, arr2) => {
    return arr1.filter(item => !arr2.includes(item))
}

export const getDifferenceBetweenDatesAsYear = (date1, date2) => {
    const diff = Math.abs(date1.getTime() - date2.getTime());
    return Math.ceil(diff / (1000 * 3600 * 24 * 365));
}

export const isDateToday = (date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();
}

export const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export const copyText = (text) => {
    navigator.clipboard.writeText(text)
}

export const exportTextAsDocxFile = (text) => {
    const blob = new Blob([text], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'coverletter.docx';
    link.click();
}
export const exportTextAsTxtFile = (text) => {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'coverletter.txt';
    link.click();
}


export const sampleJobDesc = `
Description
We at StaticKit believe that everyone can turn their passion into a career! With our cloud-based SaaS platform solution statickit.com, we offer people the opportunity to create and sell digital products and online courses quickly and easily. More than 35,000 statickit already trust in our expertise!
Our story started in 2015. For the first 5 years of our existence, we grew organically and became a profitable company with around 60 employees. Then, in September 2021, we raised $38 million in series A funding, led by Target Global and with participation from Partech Ventures and Avid Ventures. Since then we have doubled in size to 120 people and we want to double in size again this year, whilst expanding internationally.
We are looking for a qualified Front-end developer to join our IT team. You will be responsible for building the ‘client-side’ of our web applications. You should be able to translate our company and customer needs into functional and appealing interactive applications. If you’re interested in creating a user-friendly environment by writing code and moving forward in your career, then this job is for you. We expect you to be a tech-savvy professional, who is curious about new digital technologies and aspires to combine usability with visual design. Ultimately, you should be able to create a functional and attractive digital environment for our company, ensuring great user experience.
Responsibilities
Use markup languages like HTML to create user-friendly web pages
Maintain and improve website
Optimize applications for maximum speed
Design mobile-based features
Collaborate with back-end developers and web designers to improve usability
Get feedback from, and build solutions for, users and customers
Write functional requirement documents and guides
Create quality mockups and prototypes
Help back-end developers with coding and troubleshooting
Ensure high quality graphic standards and brand consistency
Stay up-to-date on emerging technologies
Requirements
Min 5 years work experience as a Front-end developer
4 years of experience with React
Hands on experience with markup languages
Experience with JavaScript, CSS and jQuery
Familiarity with browser testing and debugging
In-depth understanding of the entire web development process (design, development and deployment)
Understanding of layout aesthetics
Knowledge of SEO principles
Familiarity with software like Adobe Suite, Photoshop and content management systems
An ability to perform well in a fast-paced environment
Excellent analytical and multitasking skills
BSc degree in Computer Science or relevant field
`

export const sampleCoverLetters = [
    `To Whom it May Concern,

    I am writing to apply for the Front-end Developer position that was recently advertised on statickit.com. I am confident that my skills and experience make me the perfect candidate for the job and I am eager to utilize my skills in order to help StaticKit reach its goals.

    My experience as a Front-end Developer enables me to understand and translate customer and company needs into interactive applications that are both functional and appealing. I am experienced in React and I have a deep understanding of the entire web development process. I am also skilled in HTML, CSS, JavaScript, and jQuery. I am confident that I have the skill set and drive to excel in this position and contribute to StaticKit’s success.

    If you would like to discuss my qualifications further, or schedule an interview, please do not hesitate to contact me at ___________. I look forward to hearing from you soon.

    Sincerely,

    Your Name`,
    `Dear StaticKit,

    I am writing in regards to the Front End Developer position that is currently available. I believe that I have the skills, abilities, and drive to be the perfect candidate for the job.

    With more than five years of experience as a Front End Developer, I have the skills and knowledge necessary to build user-friendly and visually appealing websites. I am experienced with React, HTML, and CSS, and I am confident that I could be a valuable asset to your team. I am excited to learn more about StaticKit and the projects you are working on, and I believe that I could be a major contributor to your company.

    If you are looking for a Front End Developer who is passionate about web development and is eager to learn and grow, then I believe that I would be the perfect candidate for the job. I am available for an interview at any time, and I thank you for your time and consideration.

    Sincerely,

    [Your name]`,
    `Dear [Hiring Manager],

    I am interested in the position of Front-End Developer that StaticKit is currently looking to fill. After reviewing the job description, it is clear that this position would be a perfect fit for me. I have over 5 years of experience working as a Front-End Developer, and 4 years of experience specifically with React. I am confident that I have the skills and abilities necessary to excel in this role.

    I am a highly motivated individual who is always looking for new ways to improve my skills. I am passionate about web development and I am excited to use my skills and knowledge to help StaticKit create a user-friendly environment. I am confident that I have what it takes to be a successful Front-End Developer at StaticKit. I look forward to discussing this opportunity further with you.

    Thank you for your time and consideration.

    Sincerely,
    [Your Name]`,
    `To Whom it May Concern,

    I am writing to apply for the Front-end Developer position that was recently announced on StaticKit's website. I am confident that I have the skills and experience that would make me the perfect candidate for the job.

    I have been working as a Front-end Developer for the past five years and have experience with React, HTML, CSS, and jQuery. I am fully familiar with the web development process and have a strong understanding of layout aesthetics. I am also experienced in SEO principles and am familiar with software such as Adobe Suite and Photoshop.

    I am a proactive and results-oriented individual who thrives in a fast-paced environment. I am confident that I would be a valuable asset to your team and would be grateful for the opportunity to be interviewed.

    Thank you for your time and consideration.

    Sincerely,

    [Your name]`,
    ` To Whom it May Concern,

I am writing to apply for the Front-end developer position that StaticKit is currently looking to fill. I have five years of experience working as a Front-end developer and I have a great deal of experience with React, HTML, and CSS. I am confident that I would be a great fit for this role and I am eager to join StaticKit and help to grow the company.

I am a proactive individual with a strong passion for technology. I am always curious to learn about new digital technologies and I aspire to combine usability with visual design. I am detail-oriented and I have a great eye for aesthetics. I am also a team player and I am confident that I can work well with other members of the team.

If you are looking for a Front-end developer who is passionate about technology and has the skills and experience to be a great asset to your company, then I would be the perfect candidate. I look forward to hearing from you.

Thank you for your time,

[Your name]`,
    `Dear [Hiring Manager],

I am interested in the Front-end developer position at StaticKit. I have the skills and experience you are looking for and am confident that I can be a valuable asset to your team.

I have worked as a Front-end developer for the past 5 years and have extensive experience with React. I am confident in my ability to build user-friendly web pages and maintain and improve website. I am also up-to-date on the latest technologies and am willing to learn new ones quickly.

I am excited to be given the opportunity to join StaticKit and utilize my skills and experience in order to help the company grow and succeed. I believe that I can make a valuable contribution and would appreciate the chance to discuss this further with you in an interview.

Thank you for your consideration.

Sincerely,

[Your name]`,
    `Dear Hiring Manager,

I am writing in response to your job posting for a Front-end developer. I am confident that my skills and experience make me the perfect candidate for the job.

I have more than five years of experience as a Front-end developer and I am expert in React. I am also familiar with markup languages, JavaScript, CSS and jQuery. I am confident that I can provide high quality graphic standards and brand consistency for your company. I am also an excellent multitasker and I thrive in fast-paced environments.

Please don’t hesitate to contact me to discuss this position further. I look forward to hearing from you.

Sincerely,

Your name`
]

export const sampleUpworkJobsDesc = `
We need a UX / UI designer who can create the design and wireframes for a home page and one inner page of the website. We will provide you with creative directions but we need someone who can bring that vision to life. We will be building the website in wordpress so you need to prepare the design files so our dev team can convert them into wordpress.

To be considered, you must submit your proposal with recent examples of design work.

The style of the design we are going for are similar to the following sites
statickit.com


there are a few others but those won't be shared until a designer is hired.`
export const sampleProposalLetters = [
    `Hello [Employer],

    I am interested in the UX / UI designer position you have available. I have over 5 years of experience in web design and have created designs for many responsive websites. I am confident that I have the skills and experience necessary to excel in this role.

    Please find attached a few examples of my past work. I am sure you will agree that my designs are creative and user-friendly. I am excited to put my skills to work for your company and can promise to produce high-quality designs that will meet your expectations.
     I look forward to hearing from you.

    Thank you,

    [Your name]`,
    `Hello,

    I am interested in the UX / UI designer position that you have available. I have experience in all of the required skills, and can provide examples of my work upon request. I am confident that I would be a great fit for this position, and would be excited to help you create the design for your website.

    Thank you for your time, and I look forward to hearing from you soon.`,
    `Hello,

    I am interested in the freelance job for UX / UI designer. I have the experience and requiered skills to complete the project. I have attached recent examples of my work to this email. I am confident that I can bring the vision for the website to life. I am available to start immediately.

    Thank you for your time,

    [Your name]`,
    `Hello,

    I am interested in your freelance job requiered to create UX/UI design for home page and one inner page of the website. I am confident that I have the skills and experience necessary to produce high-quality designs that meet your requirements.
    
    Below I have attached some recent examples of my design work. I am happy to provide additional information or answer any questions you may have.
    
    Thank you for your time, 
    
    Sincerely,`,
    `Hello, 

    Thank you for considering me for the UX / UI designer position. I am confident that I have the skills and experience required for this position. My portfolio includes recent examples of design work that demonstrate my ability to create designs that are both creative and user-friendly. I am confident that I can bring your vision for the website to life. 
    
    In addition to my skills in web design and graphic design, I am also skilled in responsive design and user interface design. I am familiar with how to create design files that can be easily converted into a wordpress website. I am confident that I have the skills and experience required for this position and I am eager to start working on your project.
    
    If you would like to discuss this position further or see additional examples of my work, please do not hesitate to contact me. I look forward to hearing from you. 
    
    Thank you, 
    
    [Your name]`,
    `Hello!

    I am a UX/UI designer with over 5 years of experience designing web and mobile interfaces. I have a strong understanding of responsive design, and can create designs that are both user-friendly and visually appealing.
    
    I would be interested in helping you design the home page and inner page of your website. I am confident that I have the skills and experience necessary to create designs that meet your needs and exceed your expectations.
    
    I would be happy to provide you with a proposal, which will include a detailed outline of my proposed services, as well as a portfolio of recent work.
    
    Thank you for your time, and I look forward to hearing from you soon.`,
    `Hello,

    I am a UX / UI designer with experience in designing websites and creating wireframes and mockups. I am interested in this project and would like to submit my proposal.
    
    I have attached some recent examples of my work to this email for you to review. I believe my skills and experience match what you are looking for in this project.
    
    I am available to start work on this project immediately and would be happy to answer any questions you have.
    
    Thank you,
    
    [Your name]`
]

export const sampleProfessionalSummaries = [
    `I have the ability to listen, networking ability, resiliency, enthusiasm, multitasking skills, and communications skills. I am able to work well with others and am a team player. I am also able to work independently and am self-motivated. I am looking for a position where I can use my skills and abilities to help the company reach its goals.`,
    `I have the ability to listen, networking ability, resiliency, enthusiasm, multitasking skills, and communications skills. I am able to work with different types of people and am very flexible. I work well under pressure and can always maintain a positive attitude.`,
    `I am a Salesman with a technical skillset. I have the ability to listen and network with others, as well as the resilience to stay positive and enthusiastic in the face of rejection. I am also able to multitask and communicate effectively with others.`,
    `I am a salesman who is independent and has a technical skillset. I am able to listen and network with others, as well as be resilient and enthusiastic. I also have multitasking skills and communications skills. I am able to work well independently and am a hard worker.`,
    `I am a Salesman who is Independent and has a technical skillset that includes the ability to listen, networking ability, resiliency, enthusiasm, multitasking skills, and communications skills. My goal is to help my clients achieve their desired outcomes by providing them with superior customer service. I am a hard worker who is always looking for new opportunities to grow my business. I am also a team player who is always willing to lend a helping hand.`,
    `I am a Salesman who is Independent and has a technical skillset that includes the ability to listen, networking ability, resiliency, enthusiasm, multitasking skills, and communications skills. I have a proven track record of success in sales and thrive in a fast-paced environment. I am known for my ability to build relationships and am highly adaptable.`,
    `I am a salesman who is independent and has a technical skillset of being able to listen, networking ability, resilience, and enthusiasm. I also have multitasking skills and communications skills. I am looking for a new opportunity where I can use my skills and abilities to help a company grow.`,
    `I am a salesman who is independent and has a technical skillset. I have the ability to listen and networking ability. I am also resilient and enthusiastic. I have multitasking skills and communications skills.`
]

export const sampleJobTitle = 'Salesman'

export const isOddNumber = (num) => {
    return num % 2 === 0 ? false : true
}
