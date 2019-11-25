<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Legend of Marshal</title>
    <link rel="stylesheet" href="../css/style.css">
    <script src="../js/script.js"></script>
</head>
<body class="mainStyle">
<?php
//    $_SESSION["username"] = $_POST["example"];
//    $_SESSION['username'] = "XXXX";
?>
<div class="enlistPart">
    <p>Please enter your name:</p>
    <form action="gameTest.php" method="post">
        <input id="userInput" name="example" type="text" />
        <div class="soldierIcon">
            <a href="gameTest.php">
                <input type="image" src="../images/enlist.svg" id="enlist">
            </a>
            <p>Enlist</p>
        </div>

    </form>
</div>


<div class="backIcon">
    <a href="home.html">
        <img src="../images/back.svg" alt="Back">
    </a>
</div>


</body>
</html>