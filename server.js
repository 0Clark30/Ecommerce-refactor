const express = require("express");
const routes = require("./routes");

const sequelize = require("./config/connection");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


sequelize.sync({ force: false })
  .then(() => {
    console.log("Sequelize models synced to the database");
   
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  })
  .catch((error) => {
    console.error("Error syncing Sequelize models:", error);
  });
