# Простой пример использования Rx-Vue при ассинхронной работе с API на примере Github API

Проект размещён на [Github Pages](https://pages.github.com/)
и доступен по [ссылке](https://mikhail-shpakov.github.io/fetch-github-profiles-with-vue-rx/).

## Использованные технологии и инструменты

[Vue.js](https://vuejs.org/)  
[RxJS](https://rxjs.dev/)  
[Rx-Vue](https://github.com/vuejs/vue-rx)  
[Vuetify](https://vuetifyjs.com/)  
[Pug](https://pugjs.org/)  

## Загрузка и запуск проекта

Для скачивания и запуска `dev` сервера необходимо выполнить:

```
git clone https://github.com/mikhail-shpakov/fetch-github-profiles-with-vue-rx.git
cd fetch-github-profiles-with-vue-rx
npm ci
npm run serve
```

После этого проект будет доступен по адресу `localhost:8080`.

### Линтер

Проверка кода будет выполняться автоматически во время работы `dev` сервера.  
Для ручного запуска выполнить:

```
npm run lint
```

### `Production` сборка

Для подготовки проекта к размещению в `production` необходимо выполнить:

```
npm run build
```

При этом будет выполнена компиляции и минификации проекта.  
Итоговая сборка будет находиться в директории `/dist`.
