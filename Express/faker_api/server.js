const express = require("express");
const { faker } = require("@faker-js/faker");
const app = express();
const port = 8000;

const createUser = () => {
  const newUser = {
      _id: faker.database.mongodbObjectId(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      phoneNumber: faker.phone.number(),
  };
  return newUser;
};

const createCompany = () => {
  const newCompany = {
      _id: faker.database.mongodbObjectId(),
      name: faker.company.name(),
      address: {
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        country: faker.location.country()
      }
  };
  return newCompany;
};

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/users/new", (req, res) => {
  const newFakeUser = createUser();
  res.json(newFakeUser);
});

app.get("/api/companies/new", (req, res) => {
  const newFakeCompany = createCompany();
  res.json(newFakeCompany);
});

app.get("/api/user/company", (req, res) => {
  const newFakeUser = createUser();
  const newFakeCompany = createCompany();
  res.json({user : newFakeUser, company : newFakeCompany});
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );