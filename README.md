# Пример использования Rx-Vue при ассинхронной работе с API на примере Github API
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![Build Status](https://travis-ci.com/mikhail-shpakov/fetch-github-profiles-with-vue-rx.svg?branch=master)](https://travis-ci.com/mikhail-shpakov/fetch-github-profiles-with-vue-rx)
[![Maintainability](https://api.codeclimate.com/v1/badges/794a73055e347991f51a/maintainability)](https://codeclimate.com/github/mikhail-shpakov/fetch-github-profiles-with-vue-rx/maintainability)
[![DeepScan grade](https://deepscan.io/api/teams/8555/projects/10762/branches/153239/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=8555&pid=10762&bid=153239)

:ru: by Mikhail Shpakov

Пример простого [SPA](https://ru.wikipedia.org/wiki/%D0%9E%D0%B4%D0%BD%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5)
и [PWA](https://web.dev/progressive-web-apps/) приложения,
которое демонстрирует использование [RxJS](https://rxjs.dev/)
во [Vue](https://vuejs.org/)
для работы с API на примере [Github](https://github.com/).

:tada: [Демо](https://mikhail-shpakov.github.io/fetch-github-profiles-with-vue-rx/)

:hammer: [Используемые технологии и инструменты](#tools)

:wrench: [Локальный запуск проекта](#dev)

:rocket: [Деплой на Github Pages](#deploy)

## <a name="tools"></a>Используемые технологии и инструменты

- [Vue](https://vuejs.org/)  
- [RxJS](https://rxjs.dev/) + [Rx-Vue](https://github.com/vuejs/vue-rx)  
- [Vuetify](https://vuetifyjs.com/)  
- [Pug](https://pugjs.org/)  
- [Vue-cli](https://cli.vuejs.org/)
([Webpack](https://webpack.js.org/),
[Babel](https://babeljs.io/),
[Postcss](https://postcss.org/))
- [Eslint](https://eslint.org/) ([standard style](https://standardjs.com/))
- Графика [Undraw](https://undraw.co/)
- [Github Pages](https://pages.github.com/)
- [Travis CI](https://travis-ci.org/)

## <a name="dev"></a>Локальный запуск проекта

1. **Загрузка проекта на локальную машину**

    ```
    git clone https://github.com/mikhail-shpakov/fetch-github-profiles-with-vue-rx.git
    ```

2. **Установка зависимостей**

    ```
    npm ci
    ```

    Использование `npm ci` вместо `npm i` позволит гарантировать корректные версии устанавливаемых `npm` пакетов,
    так как они будут взяты из `package-lock.json`.  

3. **Запуск сервера для разработки**

    В качестве сервера для разработки используется
    [Webpack Dev Server](https://github.com/webpack/webpack-dev-server).

    Для его запуска выполните из корневой директории проекта:

    ```
    npm run serve
   ```

    После этого приложение будет доступно по адресу `localhost:8080`.

    Во время разработки изменения в файлах будут отслеживаться автоматически,
    при этом будет вызываться линтер и сервер будет перезапускаться.

    Также доступны следующие команды:

    ```
    npm run build // сборка приложения Vue для развёртывания на production
    npm run lint // ручной запуск линтера
    ```

## <a name="deploy"></a>Деплой на Github Pages

Для публикации приложения на [Github Pages](https://pages.github.com/)
с помощью [Travis CI](https://travis-ci.org/), требуется:
1. Зарегистрировать аккаунт на [Travis CI](https://travis-ci.org/).
2. Получить персональный токен доступ на Github ([инструкция](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)).
3. Создать в корне проекта файл с описанием опций публикации с названием `.travis.yml`.
Описание опций можно найти [здесь](https://docs.travis-ci.com/user/deployment/pages/).

После этого, при каждом коммите в отслеживаемую ветку
(указывается в `.travis.yml`) при условии успешного прохождения CI
(эта стадия может отсутствовать, как, например, в этом проекте)
проект будет автоматически опубликован на [Github Pages](https://pages.github.com/)
и по умолчанию будет доступен по адресу `http(s)://<user>.github.io/<repository>`.
