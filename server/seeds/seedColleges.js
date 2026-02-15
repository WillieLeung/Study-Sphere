const mongoose = require('mongoose');
const College = require('../models/college');

const colleges = [
    { name: "Carleton University", city: "Ottawa", country: "Canada" },
    { name: "Concordia University", city: "Montreal", country: "Canada" },
    { name: "Dalhousie University", city: "Halifax", country: "Canada" },
    { name: "McGill University", city: "Montreal", country: "Canada" },
    { name: "McMaster University", city: "Hamilton", country: "Canada" },
    { name: "Memorial University", city: "St. John's", country: "Canada" },
    { name: "Queen's University", city: "Kingston", country: "Canada" },
    { name: "Simon Fraser University", city: "Burnaby", country: "Canada" },
    { name: "University of Alberta", city: "Edmonton", country: "Canada" },
    { name: "University of British Columbia", city: "Vancouver", country: "Canada" },
    { name: "University of Calgary", city: "Calgary", country: "Canada" },
    { name: "University of Guelph", city: "Guelph", country: "Canada" },
    { name: "University of Manitoba", city: "Winnipeg", country: "Canada" },
    { name: "University of Montreal", city: "Montreal", country: "Canada" },
    { name: "University of Ottawa", city: "Ottawa", country: "Canada" },
    { name: "University of Saskatchewan", city: "Saskatoon", country: "Canada" },
    { name: "University of Toronto", city: "Toronto", country: "Canada" },
    { name: "University of Victoria", city: "Victoria", country: "Canada" },
    { name: "University of Waterloo", city: "Waterloo", country: "Canada" },
    { name: "Western University", city: "London", country: "Canada" },
    { name: "York University", city: "Toronto", country: "Canada" }
];

const seedColleges = async () => {
    try {
        await College.deleteMany({}); // Clear existing data
        await College.insertMany(colleges);
        console.log('Colleges seeded successfully!');
        console.log(`Total colleges: ${colleges.length}`);
    } catch (error) {
        console.error('Error seeding colleges:', error);
    }
};

module.exports = seedColleges;