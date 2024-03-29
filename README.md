# Jobfi.app 

## Forked from the Laravel React Inertia Tailwind starter kit Altas
 
Includes Laravel Fortify for authentication

## Introduction

This starter kit provides a minimal and simple starting point for building a Laravel application with authentication. Styled with Tailwind. It also includes [Laravel Fortify](https://laravel.com/docs/8.x/fortify) which publishes authentication controllers to your application that can be easily customized based on your own application's needs.

This starter is powered by React, Inertia, Tailwind and Laravel.

### Includes

-   Laravel v8.40 --will be updated to the newest version
-   Laravel fortify v1.7
-   Laravel sail v1.0.1
-   React v17.0.2
-   React prop-types v15.7.2
-   Inertia v0.8.7
-   Inertia-react v0.5.12
-   Inertia-laravel v0.4.2
-   Inertia-progress v0.2.4
-   Tailwindcss v2.1.2
-   Ziggy v1.2

## Notable Packages

-   [Laravel](https://laravel.com) - Backend 🎰
-   [ReactJs](https://reactjs.com) - Frontend 💻
-   [InertiaJs](https://inertiajs.com) - Mediator(Helps discard API) 🧑‍🦯
-   [Tailwindcss](https://tailwindcss.com) - Styling 💅

## How do I set this up

### Installation Via Composer

If your computer already has PHP and Composer installed, you may create a new project by using Composer directly.

```bash
cd your-project-name //example cd jobfi.app

composer install

composer update

yarn install

cp .env.example .env 

// edit env datebase info  
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=jobfi
DB_USERNAME=jobfi
DB_PASSWORD=your database password

npm run prod

php artisan key:generate

php artisan storage:link

php artisan serv

```

## To remove the documentation

-   windows
    ```bash
    rmdir /s docs
    del README.md
    echo "" > README.md
    ```
-   linux
    ```bash
    rm -r docs
    rm README.md
    touch README.md
    ```

## Just Reminders 😅

-   Make Hard Visits with

    ```
    Inertia::Location(route('login'));
    ```

    Good for those pages that require refresh of sessions, to avoid 419 error (Page Expired).

-   Global alias

    ```bash
    const path = require('path');

    .webpackConfig({
        resolve: {
            alias: {
                '@': path.resolve('resources/js')
            },
        },
    });
    ```

    I made a global alias '@' for absolute path imports.

## How it looks

<img src='docs/login-page.png' />

<img src='docs/home-page.png' />

<img src ='docs/profile-page.png' />

<img src='docs/menu-page.png' />
# jobfi.app
# jobfi.app
