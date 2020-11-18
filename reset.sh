#!/bin/bash
rm -rf storage/db.sqlite
touch storage/db.sqlite
sequelize-cli db:migrate
sequelize-cli db:seed:all
