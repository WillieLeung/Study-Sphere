const mongoose = require('mongoose');
const User = require('../models/user');
const College = require('../models/college');
const Faculty = require('../models/faculty');

const seedUsers = async () => {
    try {
        // Fetch all colleges and majors from database
        const colleges = await College.find();
        const faculties = await Faculty.find();

        if (colleges.length === 0 || faculties.length === 0) {
            console.log('⚠️  Please seed colleges and faculties first!');
            return;
        }

        // Helper function to get random item from array
        const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

        // Helper function to find college by name
        const findCollege = (name) => {
            const college = colleges.find(c => c.name === name);
            if (!college) {
                throw new Error(`College '${name}' not found in database`);
            }
            return college;
        };

        // Helper function to find faculty by name
        const findFaculty = (name) => {
            const faculty = faculties.find(f => f.name === name);
            if (!faculty) {
                throw new Error(`Faculty '${name}' not found in database`);
            }
            return faculty;
        };

        // Create users with proper references
        const users = [
            {
                name: 'Ryan Chen',
                email: 'ryan.chen@email.com',
                age: 21,
                year: 3,
                sex: 'Male',
                college: findCollege('York University')._id,
                faculty: findFaculty('Data, Math, and Physical Sciences')._id,
                major: 'Computer Science'
            },
            {
                name: 'Emily Parker',
                email: 'emily.parker@email.com',
                age: 22,
                year: 4,
                sex: 'Female',
                college: findCollege('University of Toronto')._id,
                faculty: findFaculty('Engineering and Applied Sciences')._id,
                major: 'Software Engineering'
            },
            {
                name: 'Marcus Johnson',
                email: 'marcus.j@email.com',
                age: 20,
                year: 2,
                sex: 'Male',
                college: findCollege('University of Waterloo')._id,
                faculty: findFaculty('Data, Math, and Physical Sciences')._id,
                major: 'Computer Science'
            },
            {
                name: 'Priya Patel',
                email: 'priya.patel@email.com',
                age: 23,
                year: 4,
                sex: 'Female',
                college: findCollege('McGill University')._id,
                faculty: findFaculty('Business, Management, and Commerce')._id,
                major: 'Business Administration'
            },
            {
                name: 'David Kim',
                email: 'david.kim@email.com',
                age: 19,
                year: 1,
                sex: 'Male',
                college: findCollege('University of British Columbia')._id,
                faculty: findFaculty('Data, Math, and Physical Sciences')._id,
                major: 'Data Science'
            },
            {
                name: 'Sophie Martinez',
                email: 'sophie.m@email.com',
                age: 21,
                year: 3,
                sex: 'Female',
                college: findCollege('York University')._id,
                faculty: findFaculty('Social Sciences and Education')._id,
                major: 'Psychology'
            },
            {
                name: 'Ahmed Hassan',
                email: 'ahmed.hassan@email.com',
                age: 22,
                year: 3,
                sex: 'Male',
                college: findCollege('University of Toronto')._id,
                faculty: findFaculty('Engineering and Applied Sciences')._id,
                major: 'Mechanical Engineering'
            },
            {
                name: 'Jessica Lee',
                email: 'jessica.lee@email.com',
                age: 20,
                year: 2,
                sex: 'Female',
                college: findCollege('University of Waterloo')._id,
                faculty: findFaculty('Data, Math, and Physical Sciences')._id,
                major: 'Mathematics'
            },
            {
                name: 'Michael Brown',
                email: 'michael.brown@email.com',
                age: 24,
                year: 5,
                sex: 'Male',
                college: findCollege('McGill University')._id,
                faculty: findFaculty('Engineering and Applied Sciences')._id,
                major: 'Electrical Engineering'
            },
            {
                name: 'Sarah Thompson',
                email: 'sarah.t@email.com',
                age: 21,
                year: 3,
                sex: 'Female',
                college: findCollege('University of British Columbia')._id,
                faculty: findFaculty('Health and Life Sciences')._id,
                major: 'Biology'
            },
            {
                name: 'Daniel Wu',
                email: 'daniel.wu@email.com',
                age: 22,
                year: 4,
                sex: 'Male',
                college: findCollege('Carleton University')._id,
                faculty: findFaculty('Humanities, Arts, and Law')._id,
                major: 'Architecture'
            },
            {
                name: 'Olivia Rodriguez',
                email: 'olivia.r@email.com',
                age: 19,
                year: 1,
                sex: 'Female',
                college: findCollege('Queen\'s University')._id,
                faculty: findFaculty('Social Sciences and Education')._id,
                major: 'Economics'
            },
            {
                name: 'Ethan Davis',
                email: 'ethan.davis@email.com',
                age: 23,
                year: 4,
                sex: 'Male',
                college: findCollege('McMaster University')._id,
                faculty: findFaculty('Engineering and Applied Sciences')._id,
                major: 'Civil Engineering'
            },
            {
                name: 'Isabella Garcia',
                email: 'isabella.g@email.com',
                age: 20,
                year: 2,
                sex: 'Female',
                college: findCollege('Western University')._id,
                faculty: findFaculty('Social Sciences and Education')._id,
                major: 'Political Science'
            },
            {
                name: 'James Wilson',
                email: 'james.wilson@email.com',
                age: 21,
                year: 3,
                sex: 'Male',
                college: findCollege('University of Calgary')._id,
                faculty: findFaculty('Business, Management, and Commerce')._id,
                major: 'Finance'
            },
            {
                name: 'Mia Anderson',
                email: 'mia.anderson@email.com',
                age: 22,
                year: 4,
                sex: 'Female',
                college: findCollege('Simon Fraser University')._id,
                faculty: findFaculty('Data, Math, and Physical Sciences')._id,
                major: 'Statistics'
            },
            {
                name: 'Lucas Taylor',
                email: 'lucas.t@email.com',
                age: 20,
                year: 2,
                sex: 'Male',
                college: findCollege('Dalhousie University')._id,
                faculty: findFaculty('Engineering and Applied Sciences')._id,
                major: 'Chemical Engineering'
            },
            {
                name: 'Charlotte Moore',
                email: 'charlotte.m@email.com',
                age: 19,
                year: 1,
                sex: 'Female',
                college: findCollege('University of Alberta')._id,
                faculty: findFaculty('Data, Math, and Physical Sciences')._id,
                major: 'Physics'
            },
            {
                name: 'Benjamin White',
                email: 'benjamin.white@email.com',
                age: 23,
                year: 5,
                sex: 'Male',
                college: findCollege('University of Ottawa')._id,
                faculty: findFaculty('Health and Life Sciences')._id,
                major: 'Health Sciences'
            },
            {
                name: 'Amelia Clark',
                email: 'amelia.clark@email.com',
                age: 21,
                year: 3,
                sex: 'Female',
                college: findCollege('Concordia University')._id,
                faculty: findFaculty('Humanities, Arts, and Law')._id,
                major: 'Fine Arts'
            }
        ];

        // Remove existing users
        await User.deleteMany({});
        console.log('Existing users removed');

        // Insert new users
        const createdUsers = await User.insertMany(users);
        console.log(`Seeded ${createdUsers.length} users successfully!`);
        console.log(`Total users: ${createdUsers.length}`);

    } catch (error) {
        console.error('Error seeding users:', error);
    }
};

module.exports = seedUsers;