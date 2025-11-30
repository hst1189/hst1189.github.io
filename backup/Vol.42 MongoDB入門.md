cheatsheet
https://learn.mongodb.com/learn/course/mongodb-shell-cheatsheet/main/mongodb-shell-cheatsheet

# 🚀MongoDB CRUD 操作

Commands |  凡例
---|---
mongosh | mongosh "mongodb+srv://cluster0.t34zxhe.mongodb.net/" --apiVersion 1 --username dnUser
show dbs  |  显示全部DB
use \<dbname\>  | 切换DB 
db | 显示现在所在DB
show collections |  显示当前DB里全部collections 
show users | 显示当前DB里全部users
show roles |  显示当前DB里全部角色
show profile | 显示profile


### ⚜️Create
Commands | 備考
---|---
db.users.insert({ name: “Kyle” }) | 插入单条
db.users.insertMany([{ age: 26 }, { age: 20 }]) |  insertMany( [ {},{},{} ] )  插入多条，要以数组形式　

### ⚜️Read
Commands |  備考
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


### ⚜️Complex Filter Object
Commands |  備考
---|---
db.users.find({ name: { $eq: “Kyle” } })                        | 等于
db.users.find({ name: { $ne: “Kyle” } })                        | 不等于
db.users.find({ name: { $not: { $eq: “Kyle” } } })          | not 等于
db.users.find({ age: { $gt: 12 } })                                 | 大于
db.users.find({ age: { $gte: 15 } })                               | 大于等于
db.users.find({ age: { $lt: 12 } })                                  | 小于
db.users.find({ age: { $lte: 15 } })                                | 小于等于
db.users.find({ name: { $in: [“Kyle”, “Mike”] } })          | in
db.users.find({ name: { $nin: [“Kyle”, “Mike”] } })        | not in
db.users.find({ $and: [{ age: 12 }, { name: “Kyle” }] })  | and
db.users.find({ $or: [{ age: 12 }, { name: “Kyle” }] })     | or
db.users.find({ name: { $exists: true } })                      | exist
db.users.find({ $expr: { $gt: [“$balance”, “$debt”] } })  | expr


### ⚜️Update
Commands |  備考
---|---
db.users.updateOne({ age: 20 }, { $set: { age: 21 } })
db.users.updateMany({ age: 12 }, { $inc: { age: 3 } })
db.users.replaceOne({ age: 12 }, { age: 13 })


### ⚜️Delete
Commands |  備考
---|---
db.users.deleteOne({ age: 20 })
db.users.deleteMany({ age: 12 })


### ⚜️Complex Update Object
Commands |  備考
---|---
db.users.updateOne({ age: 12 }, { $set: { name: “Hi” } })
db.users.updateOne({ age: 12 }, { $unset: { age: “” } })

db.users.updateOne({ age: 12 }, { $inc: { age: 2 } })

db.scores.insertOne( { _id: 1,highScore: 800, lowScore: 200 } )
db.scores.updateOne( { _id: 1 }, {$min: { lowScore: 150 } } )
db.scores.updateOne( { _id: 1 }, {$max: { highScore: 1000 } } )

db.users.updateMany({}, { $rename: { age: “years” } })

db.users.updateMany({}, { $push: { friends: “John” } })
db.users.updateMany({}, { $pull: { friends: “Mike” } })









# 🚀设计模式
https://www.mongodb.com/zh-cn/docs/manual/data-modeling/


# 🚀mongoose
https://mongoose.node.org.cn/docs/schematypes.html





