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

