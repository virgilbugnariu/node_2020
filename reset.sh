#!/bin/bash
<<<<<<< HEAD
rm -f storage/db.sqlite
touch storage/db.sqlite
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
=======
rm -rf storage/db.sqlite
touch storage/db.sqlite
sequelize-cli db:migrate
sequelize-cli db:seed:all
>>>>>>> adv_db
