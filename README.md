# 5S-processes

![image](https://github.com/user-attachments/assets/475a6eea-cbea-4abd-bc83-f1b4ff02f5a8)

## Содержание

- [Деплой](#Деплой)
- [Скрипты для запуска](#Скрипты-для-запуска)
- [Выполненные пункты](#Выполненные-пункты)

## Деплой

[Deploy]([https://effervescent-cobbler-60e9c8.netlify.app/](https://aliakseidomut.github.io/5s-processes/))

## Скрипты для запуска

```
npm install
npm run dev
```

## Выполненные пункты

Функциональные требования
Шапка сайта:
-Содержит логотип (можно использовать текст-заглушку) и меню с разделами:
-Главная(тут можно просто любой текст вставить)
-Задачи 5S
-Контакты

Раздел Задачи 5S
Список задач:
Вывод таблицы задач с колонками:
ID задачи
Название задачи
Статус (выбирается из: "Новая", "В работе", "Завершена")
Дата создания
Кнопки "Редактировать" и "Удалить".


Добавление задач:
Реализовать форму для добавления новых задач.
Поля: Название задачи, Статус (выпадающий список), Дата.
После добавления задача отображается в списке.


Редактирование задач:
По нажатию на кнопку "Редактировать" появляется модальное окно с формой редактирования выбранной задачи.

Удаление задач:
При удалении появляется подтверждающее сообщение: "Вы уверены, что хотите удалить задачу?".
Все данные хранятся в localStorage.

Контакты:
Сделать раздел с формой обратной связи:
Поля: Имя, Электронная почта, Сообщение.
После отправки данных в консоль выводится JSON-объект с заполненными полями.

Требования:
Приложение должно быть адаптивным и корректно отображаться на экранах от 320px до 1200px.
Использовать React, TypeScript для реализации функциональности.
Приложение должно быть структурировано:
Разделить стили, скрипты по отдельным файлам.

Дополнительные требование(по желанию):
Реализовать фильтрацию задач по статусу.
