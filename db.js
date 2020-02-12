const Sequelize = require(`sequelize`);

const databaseURL = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres'
const db = new Sequelize(databaseURL);

// db.sync({force: true }) // to overwrite!!
db.sync()
  .then(console.log(`db synced`))
  .catch(err => {
    console.error(`Table schema fail`, err);         // in case hardcoded data to add and test!   of course a hardcode fn is also needed then!
    process.exit(1);
  })
  .catch(console.error);


module.exports = db