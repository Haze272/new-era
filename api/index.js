const express = require('express');
const path = require('path');
const app = express(),
    bodyParser = require("body-parser");
port = 3070;

let cors = require('cors')

app.use(cors()) // Use this after the variable declaration

const users = [
    {
        "date": new Date(),
        "name": "CAPSA Клатч женский",
        "quantity": 14,
        "distance": 2
    },
    {
        "date": new Date(),
        "name": "Фосфор / Футболка женская с принтом хлопок модная",
        "quantity": 24,
        "distance": 21
    },
    {
        "date": new Date(),
        "name": "Сумка женская клатч маленькая",
        "quantity": 52,
        "distance": 4
    },
    {
        "date": new Date(),
        "name": "Блузка боди женская с длинным рукавом",
        "quantity": 24,
        "distance": 10
    },
    {
        "date": new Date(),
        "name": "Рубашка в клетку женская теплая оверсайз",
        "quantity": 31,
        "distance": 1
    },
    {
        "date": new Date(),
        "name": "Рубашка оверсайз / Рубашка базовая",
        "quantity": 65,
        "distance": 7
    },
    {
        "date": new Date(),
        "name": "Блузка женская офисный, Блуза белая",
        "quantity": 26,
        "distance": 34
    },
    {
        "date": new Date(),
        "name": "FABRIMO / Костюм женский с брюками палаццо / клеш",
        "quantity": 3,
        "distance": 2
    },
    {
        "date": new Date(),
        "name": "LAV U / Костюм спортивный женский теплый начес",
        "quantity": 39,
        "distance": 15
    },
    {
        "date": new Date(),
        "name": "EST / Куртки Базовая модель на каждый день",
        "quantity": 68,
        "distance": 27
    },
    {
        "date": new Date(),
        "name": "MONY / Косуха женская куртка кожаная oversize",
        "quantity": 115,
        "distance": 12
    },
    {
        "date": new Date(),
        "name": "BOSOMI / полупальто",
        "quantity": 53,
        "distance": 34
    },
    {
        "date": new Date(),
        "name": "Рубашка Рич - rubashka.rich / Рубашки оверсайз",
        "quantity": 41,
        "distance": 4
    },
    {
        "date": new Date(),
        "name": "OberronРубашки повседневная прямая",
        "quantity": 257,
        "distance": 33
    },
    {
        "date": new Date(),
        "name": "Nataly RikРубашки свободная",
        "quantity": 76,
        "distance": 20
    },
    {
        "date": new Date(),
        "name": "AilinБлузка белая с длинным рукавом офисная",
        "quantity": 43,
        "distance": 17
    },
    {
        "date": new Date(),
        "name": "Darya Selskaya / Рубашки классическая прямая",
        "quantity": 17,
        "distance": 5
    },
    {
        "date": new Date(),
        "name": "SH&SH Классическая женская рубашка в клетку",
        "quantity": 56,
        "distance": 19
    },
    {
        "date": new Date(),
        "name": "Iho wear / Рубашки оверсайз",
        "quantity": 62,
        "distance": 24
    },
];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../app/build')));

app.get('/api/users', (req, res) => {
    console.log('api/users called!')
    res.json(users);
});

app.get('/', (req,res) => {
    res.send(`<h1>API Running on the port ${port}</h1>`);
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
