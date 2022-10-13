## Установка

После клонирования репозитория, в папке проекта напишите 
```sh
npm run serve
``` 
Приложение развернётся по адресу `http://localhost:8080/`.

## Руководство по пользованию
### Интерфейс
Приложение содержит меню навигации, таблицу и пагинацию страницы. В навигации есть фильтрация таблицы, ссылка на этот репозиторий на GitHub и ссылка на автора.

### Функционал приложения
Наведясь на пункт "Фильтр" развертнется меню колонок, по которым можно сделать сортировку. У названия филтрация происходит по названию и совпадению со словом у колонок количества и расстояния - по равенству, большинству и меншинству. Необходимо ввести соответствующее значение для филтрации

Помимо фильтрации, таблица имеет сортировку по всем колонкам кроме даты. Для этого необходимо нажать на стрелочки, находящиеся справа от названия колонки.

Кнопки, находящиеся под таблицей служат для перехода по страницам таблицы.
