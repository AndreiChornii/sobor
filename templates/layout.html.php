<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="/jokes.css" type="text/css">
        <script defer src="/js/home_carousel.js" type="text/javascript"></script>
        <title><?= $title ?></title>
        <!-- CSS only -->
    </head>
    <body>
        <nav>
            <header>
                <img src="img/logo.png" alt="zsu">
                <h3>СОБОРНИЙ РАЙОННИЙ ЦЕНТР КОМПЛЕКТУВАННЯ ТА СОЦІАЛЬНОЇ ПІДТРИМКИ <?php if ($loggedIn) echo ' | Welcome: ' . $user->name; ?></h3>
                <div>Гаряча лінія<br/> (099) 111-22-33</div>
                <img src="img/logo_sobor.png" alt="zsu">
            </header>
            <ul>
                <li><a href="/">Головна</a></li>
                <li><a href="/joke/list">Jokes List</a></li>
                <li><a href="/joke/edit">Add a new Joke</a></li>
                <li><a href="/author/register">Register new author</a></li>
                <li><a href="/category/list">Categories list</a></li>
                <li><a href="/author/list">Users list</a></li>
                <?php if ($loggedIn): ?>
                    <li><a href="/logout">Log out</a>
                    </li>
                <?php else: ?>
                    <li><a href="/login">Log in</a></li>
                <?php endif; ?>
            </ul>
        </nav>

        <main>
            <?= $output ?>
        </main>

        <footer>
            <div id="main_footer">
                <div id = 'images'>
                    <img src="img/logo.png" alt="zsu">
                    <img src="img/logo_sobor.png" alt="zsu">
                </div>
                <div id = 'main'>
                    <a class='title' href="#">ГОЛОВНА</a>
                    <a href="#">Відео</a>
                    <a href="#">Нормативно-правові документи</a>
                    <a href="#">Корисна інформація</a>

                    <a class='title'href="#">СЛУЖБА ЗА КОНТРАКТОМ</a>
                    <a href="#">Переваги служби за контрактом</a>
                    <a href="#">Як підписати контракт</a>
                </div>
                <div id = 'to'>
                    <a class='title' href="#">Територіальна оборона</a>
                    <a class='title' href="#">Соціальний захист</a>
                    <a href="#">Як отримати статус УБД</a>
                    <a href="#">Порядок отримання виплати <br/>одноразової грошової допомоги <br/>у разі загибелі військово-службовця</a>
                    <a href="#">Допомога учасникам АТО</a>
                    <a class='title' href="#">Контакти</a>
                </div>
                <div id = 'contr'>
                    <div>Гаряча лінія (099) 111-22-33 <br/> Передрук матеріалів тільки за<br/> наявності посилання на www.sobor.org</div>
                    <div>© 2020 Соборний РТЦК та СП</div>
                </div>
            </div>
        </footer>
    </body>
</html>