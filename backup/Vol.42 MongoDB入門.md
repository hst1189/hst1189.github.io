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
Commands |  凡例　| 備考
---|---|--- 
insertOne | db.users.insertOne({ name: “Kyle” }) |
insertMany | db.users.insertMany([{ age: 26 }, { age: 20 }]) |  insertMany( [ {},{},{} ] )  要以数组形式　

## Read
Commands |  凡例
---|---
db.users.find()                                                        | 获取全部数据
db.users.find({ name: “Kyle” })                                | 获取{ name: “Kyle” }的数据
db.users.find({ “address.street”: “123 Main St” })   | 获取{ “address.street”: “123 Main St” }的数据
db.users.find({ name: “Kyle” }, { name: 1, age: 1 })  |  获取{ name: “Kyle” }的数据，但只返回  name, age 2个项目
db.users.find({}, { age: 0 })                                      | 获取全部数据，但只返回  除 age 以外的项目
db.users.findOne()                                                 | 获取第1条
db.users.find().limit(1)                                            | 获取第1条
db.users.find().skip(4)                                             | 跳过4条后，全部数据
db.users.find().skip(2).limit(3)                                 | 跳过2条后，获取3条
db.users.find().sort({ name: 1, age: -1 })                 | name acs排序 ，age desc排序








