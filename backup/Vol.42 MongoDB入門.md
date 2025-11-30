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
db.users.find({ “address.street”: “123 Main St” })   | 获取{ “address.street”: “123 Main St” }的数据
db.users.find({ name: “Kyle” })                                | 获取{ name: “Kyle” }的数据
db.users.find({ name: /Kyle/ })                                | 获取包含“Kyle” 的数据
db.users.find({ name: /^Kyle/ })                                | 获取“Kyle”开头 的数据
db.users.find({ name: { $eq: “Kyle” } })                        | =，获取{ name: “Kyle” }的数据
db.users.find({ name: { $ne: “Kyle” } })                        | <>，获取{ name: “Kyle” }以外的数据
db.users.find({ name: { $not: { $eq: “Kyle” } } })          | not =，获取{ name: “Kyle” }以外的数据
db.users.find({ age: { $gt: 12 } })                                 | >
db.users.find({ age: { $gte: 15 } })                               | >=
db.users.find({ age: { $lt: 12 } })                                  | <
db.users.find({ age: { $lte: 15 } })                                | <=
db.users.find({ name: { $in: [“Kyle”, “Mike”] } })          | in
db.users.find({ name: { $nin: [“Kyle”, “Mike”] } })        | not in
db.users.find({ $and: [{ age: 12 }, { name: “Kyle” }] })  | and
db.users.find({ $or: [{ age: 12 }, { name: “Kyle” }] })     | or
db.users.find({ name: { $exists: true } })                      | exist
db.users.find({ $expr: { $gt: [“$balance”, “$debt”] } })  | expr
db.users.find({ name: “Kyle” }, { name: 1, age: 1 })  |  获取{ name: “Kyle” }的数据，但只返回  name, age 2个项目
db.users.find({}, { age: 0 })                                      | 获取全部数据，但只返回  除 age 以外的项目
db.users.find().limit(1)                                            | 获取第1条
db.users.find().skip(4)                                             | 跳过4条后，获取剩下全部数据
db.users.find().skip(2).limit(3)                                 | 跳过2条后，获取3条
db.users.find().sort({ name: 1, age: -1 })                 | 排序，order by name acs , age desc


### ⚜️Update
Commands |  備考
---|---
db.users.update({age:16},{$set:{age:20}})  |  第一条、年龄20的数据，更新为 21，注意要写 set，不写set的话，整条数据将被替换 
db.users.update({ age: 12 }, { $set: { name: "Hi" }})              | 第一条、年龄12的数据，name更新为 Hi 
db.users.update({ age: 12 }, { $unset: { age: "" }})                | 第一条、年龄12的数据， 清空年龄 
db.scores.update( { _id: 1 }, {$min: { lowScore: 150 }})        | 第一条、compares, if less than 200, will update lowScore to 150
db.scores.update( { _id: 1 }, {$max: { highScore: 1000 }})    | 第一条、compares,if more than 800,will update highScore to 1000
db.users.updateMany({}, { $set: { school: "new collage" }}) | ★所有数据，添加新项目{ school: "new collage" }
db.users.updateMany({}, { $unset: { school: "" }})　            | ★所有数据，删除项目{ school: "new collage" }
db.users.updateMany({}, { $push: { friends: "John" }})         | ★所有数据，添加一个数组{ friends: “John” }
db.users.updateMany({}, { $pull: { friends: "Mike" }})          | ★所有数据，从数组中删除一个项目{ friends: “Mike” }
db.users.updateMany({},{$rename:{'school':'home'}})        | ★所有数据、項目名変更 'school' → 'home'
db.users.updateMany({ age: 12 }, { $inc: { age: 2 }})           | 所有数据、年龄12的数据， 年龄+ 2


### ⚜️Delete
Commands |  備考
---|---
db.users.deleteOne({ age: 20 })                   |
db.users.deleteMany({ age: 12 })                 |


### ⚜️Index
Commands |  備考
---|---
db.users.getIndexes()                                     | 获得所有index
db.users.createIndex({name:1})                      | 添加index         
db.users.createIndex({name:1,home:-1})        | 添加 联合index         1:升序  -1:降序
db.users.dropIndex("index_name")                | 删除index
db.users.dropIndexes()                                   | 删除所有index
db.users.totalIndexSize()                                | total size of all indexes of collection


### ⚜️Aggregate
Commands |  備考
---|---
das | sdasd




# 🚀设计模式
https://www.mongodb.com/zh-cn/docs/manual/data-modeling/


# 🚀mongoose
https://mongoose.node.org.cn/docs/schematypes.html





