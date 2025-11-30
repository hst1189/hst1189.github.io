cheatsheet
https://learn.mongodb.com/learn/course/mongodb-shell-cheatsheet/main/mongodb-shell-cheatsheet

# MongoDB CRUD 操作

Commands |  凡例
---|---
mongosh | mongosh "mongodb+srv://cluster0.t34zxhe.mongodb.net/" --apiVersion 1 --username dnUser
show dbs  |  list of all databases on the server.
use \<dbname\>  | Switch current database to <db>. 
db | Show current database name
show collections |  list of all collections for the current database.
show users | list of users for the current database.
show roles |  list of all roles, both user-defined and built-in, for the current database.
show profile | Print the five most recent operations that took 1 millisecond or more on databases with profiling enabled.


## Create
Commands |  凡例
---|---
insertOne | db.users.insertOne({ name: “Kyle” })
insertMany | db.users.insertMany([{ age: 26 }, { age: 20 }])




