const mongoose = require('mongoose');
const Faculty = require('../models/faculty');

const faculties = [
    {
        name: "Business, Management, and Commerce",
        majors: ["Accounting", "Business Administration", "Commerce", "Finance", "Management", "Marketing"]
    },
    {
        name: "Engineering and Applied Sciences",
        majors: ["Chemical Engineering", "Civil Engineering", "Computer Engineering",
            "Electrical Engineering", "Mechanical Engineering", "Software Engineering"]
    },
    {
        name: "Health and Life Sciences",
        majors: ["Biochemistry", "Biology", "Health Sciences", "Kinesiology", "Nursing"]
    },
    {
        name: "Data, Math, and Physical Sciences",
        majors: ["Chemistry", "Computer Science", "Data Science", "Mathematics", "Physics", "Statistics"]
    },
    {
        name: "Social Sciences and Education",
        majors: ["Economics", "Education", "Political Science", "Psychology", "Sociology"]
    },
    {
        name: "Humanities, Arts, and Law",
        majors: ["Architecture", "English Literature", "Fine Arts", "History", "Law", "Philosophy"]
    }
];

const seedFaculties = async () => {
    try {
        await Faculty.deleteMany({}); // Clear existing data
        await Faculty.insertMany(faculties);
        console.log('Faculties seeded successfully!');
        console.log(`Total faculties: ${faculties.length}`);
    } catch (error) {
        console.error('Error seeding faculties:', error);
    }
};

module.exports = seedFaculties;