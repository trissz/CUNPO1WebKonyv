<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Beküldött adatok</title>
    </head>

    <body>

        <header id="header_">
            <h1>HTML5 Űrlap - CUNPO1</h1>
        </header>

        <h2>&nbsp-&nbspBeküldött adatok</h2>

        <?php
            echo("<strong style='margin-left: 2em;'>Név: </strong>" . $_POST['name'] . "<br><br>");
            echo("<strong style='margin-left: 2em;'>PIN kód: </strong>" . $_POST['pin'] . "<br><br>");
            echo("<strong style='margin-left: 2em;'>Életkor: </strong>" . $_POST['age'] . "<br><br>");
            echo("<strong style='margin-left: 2em;'>Gyümölcs: </strong>" . $_POST['favourite_fruits'] . "<br><br>");
            echo("<strong style='margin-left: 2em;'>Lábméret: </strong>" . $_POST['shoe_size'] . "<br><br>");
            echo("<strong style='margin-left: 2em;'>Önbizalom: </strong>" . $_POST['confidence'] . "<br><br>");
        ?>

        <a href="CUNPO1_urlap.html" style="margin-left: 2em;">Vissza az űrlapra</a>

        <footer id="footer_">
            <h2>CUNPO1</h2>
        </footer>

    </body>
</html>