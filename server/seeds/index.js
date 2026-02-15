const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const connectDB = require('../config/db');
const seedColleges = require('./seedColleges');
const seedFaculties = require('./seedFaculties');
const seedUsers = require('./seedUsers');

const mongoDB_Dev = process.env.MONGODB_URI_DEV;

const seedAll = async () => {
    try {
        await connectDB(mongoDB_Dev);
        console.log('Starting database seeding...\n');

        // Order matters: colleges and faculties must be seeded before users
        await seedColleges();
        await seedFaculties();
        await seedUsers();

        console.log('\nAll data seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error during seeding:', error);
        process.exit(1);
    }
};

seedAll();