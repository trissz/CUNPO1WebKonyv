<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css" type="text/css">
    <title>Beküldött adatok</title>
</head>
<body>

    <div class="header_">
        <h2>Űrlap</h2>
    </div>

    <?php
        $data = array();

        if ( isset($_POST['name']) )
        {
            array_push($data, $_POST['name']);
        }

        if ( isset($_POST['pin']) )
        {
            array_push($data, $_POST['pin']);
        }

        if ( isset($_POST['age']) )
        {
            array_push($data, $_POST['age']);
        }

        if ( isset($_POST['favfruit']) )
        {
            array_push($data, $_POST['favfruit']);
        }

        if ( isset($_POST['shoesize']) )
        {
            array_push($data, $_POST['shoesize']);
        }

        if ( isset($_POST['confidence']) )
        {
            array_push($data, $_POST['confidence']);
        }
    ?>

    <h1>Beküldött adatok</h1>

    <section class="form">
        <p><b>Név:</b>&nbsp<?php echo($_POST['name']);?></p>
        <p><b>PIN kód:</b>&nbsp<?php echo($_POST['pin']);?></p>
        <p><b>Életkor:</b>&nbsp<?php echo($_POST['age']);?></p>
        <p><b>Kedvenc gyümölcs:</b>&nbsp<?php echo($_POST['favfruit']);?></p>
        <p><b>Lábméret:</b>&nbsp<?php echo($_POST['shoesize']);?></p>
        <p><b>Önbizalom:</b>&nbsp<?php echo($_POST['confidence']);?></p>
    </section>

    <div class="footer_">
        <h2>CUNPO1</h2>
    </div>

</body>
</html>