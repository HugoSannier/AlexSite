<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact</title>
    <link rel="stylesheet" href="./style contact.css" />
  </head>
  <body>
    <header>
      <nav class="topnav">
        <a href="./index.html" id="logo">
          <p id="Atelier">Atelier</p>
          <p id="jamet">Alexandre Jamet</p>
        </a>
        <ul>
          <li><a href="./A propos.html">A propos</a></li>
          <li><a href="./Atelier.html">L'Atelier</a></li>
          <li><a href="./Realisation.html">Réalisations</a></li>
          <li><a href="./Contact.html">Contact</a></li>
        </ul>
        <div class="logohamburger">
          <a class="hamburgerbtn"href="#">&middot;&middot;&middot;</a>
        </div>
        <div class="cross">
          <a class="crossbtn" href="#">&#9587;</a>
        </div>
      </nav>
      <nav class="telnav">
        <ul>
          <li><a href="./A propos.html">A propos</a></li>
          <li><a href="./Atelier.html">L'Atelier</a></li>
          <li><a href="./Realisation.html">Réalisations</a></li>
          <li><a href="./Contact.html">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <h2>Contactez nous:</h2>
      <section class="containerform">
        <div class="image"><img src="./assets/1S2A0472.jpg" alt=""></div>   
        <form  class="formulaire" method="post">
          <label class="Name" for="Name">
          <input type="text" name="Name" id="Name" placeholder="Nom"/>
          </label>
          
          <label class="FirstName"for="FirstName">
          <input type="text" name="FirstName" id="FirstName" placeholder="Prénom"/>
          </label>
          
          <label class="Mail" for="Mail">
          <input type="email" name="Mail" id="Mail" placeholder="Adresse E-mail" required>
          </label>
          
          <label for="Text"><textarea class="Text" name="Text" id="Text" cols="30" rows="10" placeholder="Entrez votre message ici"></textarea></label>
          
          <label for="Submit"><input type="submit" name="Submit" id="Submit" placeholder="Envoyer"></label>
        </form>
      </section>


      <?php
    //si le formulaire a été soumis
    if (isset($_POST["Text"])) {

        $retour = mail("sannierdurandhugo@protonmail.com", $_POST["Name"] . "_" . $_POST["FirstName"], $_POST["Text"], "From:contact@atelieralexandrejamet.com\r\nReply-to:" . $_POST["Mail"]);
    
        if($retour) {
            echo "<h3>L'email à bien été envoyé.</h3>";
        }
    }
    ?>
      <div class ="Contact">
        <p class="Atelier"> Atelier Alexandre Jamet</p>
        <p class="Tiret">-</p>
        <p class="Rue">9 Rue de la Nouvelle France</p>
        <p class="Ville"> 93000, Montreuil</p>
        <p class="Tel">01 02 03 04 05</p>
      </div>
    </main>
    <footer>
      <section class="botnav">
        <ul>
          <li><a href="#">Back to top</a></li>
          <li><a href="#">Contact</a></li>
          <li>
            <a href="https://www.instagram.com/jametalexandre/" target="_blank"
              >Instagram</a>
          </li>
          <li><a href="#">LinkedIn</a></li>
        </ul>
      </section>
    </footer>
    
  </body>
  <script src="./appContact.js"></script>
</html>
