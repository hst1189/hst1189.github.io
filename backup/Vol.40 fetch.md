### fetch
```javascript
app.get('/list', (req, res) => {
    fetch('https://dummyjson.com/recipes')
        .then(response => response.json())
        .then(data => {
            console.log(data.recipes);
            res.json(data.recipes);
        })
        .catch(error => console.log(error))
});
```

```javascript
app.get('/list/:id', (req, res) => {
    fetch('https://dummyjson.com/recipes')
        .then(response => response.json())
        .then(data => {
            const item = data.recipes.find(item => item.id == req.params.id);
            console.log(item);
            res.json(item);
        })
        .catch(error => console.log(error))
});
```