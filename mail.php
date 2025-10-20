<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

    $retour = mail("sannierdurandhugo@protonmail.com", "Essaie", "pouet", "From:tom.hanks@gmail.com");

    if($retour) {
        echo "<p>L'email à bien été envoyé.</p>";
    }
    ?>
    
</body>
</html>

