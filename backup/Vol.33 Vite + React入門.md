
# 搭建  普通node项目
```
npm inti  　　　　　　※生成　package.json
npm install lodash 　　※lodash導入


```

# 搭建 Vite 项目
```
npm create vite@latest

输入 project name
选择 react / vue
选择 javascript / typescript
```
```
cd my-project （project name）

npm install
npm run dev
```

# [React Icons](https://react-icons.github.io/react-icons)
```
npm install react-icons --save

import { FaBeer } from "react-icons/fa";

function Question() {
  return (
    <h3>
      Lets go for a <FaBeer />?
    </h3>
  );
}
```