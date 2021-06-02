const config = require('./config.json')
const faker = require('../index');

const getGender = () => {
  const genders = Object.keys(config.identity);

  return genders[faker.getRandomNumber(genders.length - 1)];
}

const getTitle = (gender) => {
  const titles = config.identity[gender].titles;

  return titles[faker.getRandomNumber(titles.length - 1)];
}

const getName = (gender) => {
  const names = config.identity[gender].names;

  return names[faker.getRandomNumber(names.length - 1)];
}

const getLastName = (gender) => {
  const lastNames = config.identity[gender].lastNames;

  return lastNames[faker.getRandomNumber(lastNames.length - 1)];
}

module.exports = {
  getPerson: () => {
    const gender = getGender();

    return {
      gender,
      title: getTitle(gender),
      name: getName(gender),
      lastName: getLastName(gender)
    }
  }
}