<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    //si le formulaire a été soumis
    if (isset($_POST["Text"])) {

        $retour = mail("sannierdurandhugo@protonmail.com", $_POST["Name"], $_POST["Text"], "");
    
        if($retour) {
            echo "<p>L'email à bien été envoyé.</p>";
        }
    }
    ?>

    
</body>
</html>

