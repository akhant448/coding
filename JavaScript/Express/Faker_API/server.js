const { faker } = require('@faker-js/faker');

const express = require("express");
const app = express();
const port = 8000;

const createUser = () => ({
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password()
});

const createCompany = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.name(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zip_code: faker.address.zipCode(),
        country: faker.address.country()
    }
})

app.get("/api/users/new",(req,res) => {
    const newUser = createUser();
    res.json(newUser);
})

app.get("/api/companies/new",(req,res) => {
    const newCompany = createCompany();
    res.json(newCompany);
})

app.get("/api/user/company",(req,res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    const results = {
        user: newUser,
        company: newCompany
    }
    res.json(results);
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );