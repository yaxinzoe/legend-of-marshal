<?php session_start();
$_SESSION["username"] = $_POST["example"];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/quiz.css">
    <title>Legend of Marshal</title>
    <style>
        body {
            background: url("../images/the-whole-map.png") no-repeat;
            background-size: cover;
            vertical-align: middle;
            background-attachment: fixed;
            -webkit-background-size: cover;
            -o-background-size: cover;
            -moz-background-size:cover; 
        }
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="../js/quiz.js"></script>
</head>
<body>
    
    <!-- ------------------------Top part------------------------ -->

    <!-- Player's information part -->
    <div class="fixedAvt">           
        <!-- <div class="avtShown">
            <!-- player's portrait -->
            <!-- player's level -->
           
<!--     
        </div> --> 

        <div class="photo-dropdown">
                <input onclick="myFunction()" name="btn" type="image" value="" src="../images/playerAvt1.svg" class="box-picture1" />               
            <div class="level">   
                <p class="levelDes">Lv 1. REC</p>            
            </div> 
            <div id="myDropdown" class="box-dropdown">
                <div class="first-div">
                    <div class="box-picture2">
                        <img id="rank_level" src="../images/weapon.png" alt="voyage1" width=100px height=100px/>
                    </div>
                    <div class="box-word">
                        <span class="box-word__name">
                            <b>Name:<?php echo $_SESSION["username"] ?></b>
                        </span>
                        <span class="box-word__specific--name" id="receive_name"></span><br>
                        <span class="box-word__rank"><b>Rank:</b></span>
                        <span class="box-word__specific--rank">Lv 1.REC</span>
                    </div>
                </div>
                <div class="middle_box">
                    <p class="name">soldier(5)</p>
                    <p class="number"></p>
                </div>
                <div class="second_box-dropdown">
                    <div class="soilder">
                        <img class="soilder-picture1" src="<?php echo $_SESSION['smallImgs'][$_SESSION['randomNumber'][0]]?>" alt="voyage1" width=100px height=100px />
                        <div class="name_1">
                            name:<?php echo $_SESSION['name'][$_SESSION['randomNumber'][0]] ?><br>
                        </div>
                    </div>
                    <div class="soilder">
                        <img class="soilder-picture2" src="<?php echo $_SESSION['smallImgs'][$_SESSION['randomNumber'][1]]?>" alt="voyage1" width=100px height=100px />
                        <div class="name_2">
                            name:<?php echo $_SESSION['name'][$_SESSION['randomNumber'][1]] ?><br>
                        </div>  
                    </div>
                    <div class="soilder">
                        <img class="soilder-picture3" src="<?php echo $_SESSION['smallImgs'][$_SESSION['randomNumber'][2]]?>" alt="voyage1" width=100px height=100px />
                        <div class="name_3">
                            name:<?php echo $_SESSION['name'][$_SESSION['randomNumber'][2]] ?><br>
                        </div>  
                    </div>
                    <div class="soilder">
                        <img class="soilder-picture4" src="<?php echo $_SESSION['smallImgs'][$_SESSION['randomNumber'][3]]?>" alt="voyage1" width=100px height=100px />
                        <div class="name_4">
                            name:<?php echo $_SESSION['name'][$_SESSION['randomNumber'][3]] ?><br>
                        </div>  
                    </div>
                    <div class="soilder">
                        <img class="soilder-picture5" src="<?php echo $_SESSION['smallImgs'][$_SESSION['randomNumber'][4]]?>" alt="voyage1" width=100px height=100px />
                        <div class="name_5">
                            name:<?php echo $_SESSION['name'][$_SESSION['randomNumber'][4]] ?><br>
                        </div>  
                    </div>
                </div>
            </div>
        </div>          
    </div>

    <div id="gameSection" class="topPart invisible">

        <div class="container m_t_2"> 

            <!-- Bar plus quiz -->
            <div class="quiz ml2 mr2">
                <div class="flex ml16">
                    <div class="bar ml4 mt5">
                        <div class="barPower flex items-center">
                            <div class="p_1"><progress max="" value="0"></progress></div>
                            <div class="progressData indicator"><span>Power: </span><span class="current">0</span> / <span class="limit">0</span></div> 
                        </div>   
                        <div class="barPrestige flex mt2">
                            <div class="p_1"><progress max="" value="0"></progress></div>
                            <div class="progressData indicator"><span>Prestige: </span><span class="current">0</span> / <span class="limit">0</span></div> 
                        </div> 
                    </div>
                </div>

                <div class="cardContainer mt2">
                    <div class="question card">
                        <div class="images"></div> <!-- END .images -->
                        <p class="questionText"></p>
                        <div class="options"></div> <!-- END .options -->

                        <!-- <img class="quiz-image" src="../images/quiz-image-1.png" alt="a guy"> -->
                    </div> <!-- END .question -->
                </div>
            </div> <!-- END .quiz -->


        </div> <!-- END .container -->      

    </div>
    




    <div id="textContainer" class="dialogueContainer">

        <strong>Reginald: </strong>
        <hr>
        
        <!----------------------- Lv 1 Content ----------------------->
        <div class="textPart">
            <div id="textLv1">
                <p id="text">Hello, <span id="userName"><?php echo $_SESSION["username"] ?></span><br>I'm Reginald, the guide of the game. The commonwealth of Australia declared its independence as a distinct nation on 1 Jan 1901. To seek worldwide recognition as a young country,  on 3 August 1914, the Australian Federal Government decided that in the event of war it would offer to Great Britain a military force of 20,000 men and place the Royal Australian Navy (RAN) under the control of the British Admiralty.
                <br>If you want to <strong>QUIT</strong> the game, please click the little hat on the bottom left.   </p>
                
                <div class="next">
                    <p id="nextIcon1">Okay, next</p>
                </div>

            </div>
            
        </div>

        <!----------------------- Lv 2 Content ----------------------->       
        <div class="textPart">
            <div id="textLv2">
                <p>Game Intro: <br>Serving as an ordinary soldier for Australia, your beloved country, you are expected to participate in the war through answering questions and strategic decision-making in response to events. The response will collectively affect the number of subordinates you have, the military rank, the combat power as well as the prestige value stated on the top of the screen.</p>
                
                <div class="next">
                    <p id="nextIcon2">Get started!</p>
                </div> 

            </div>            
        </div>


        <!----------------------- Last text ----------------------->       
        <div class="textPart">
                <div id="lastText">
                    <p>Now the armistice was signed by Germany. Your mission is over. You’ve honorably completed your duty and been recorded in history. Please check your title.</p>
                    
                    <div class="next">
                        <a href="stamp.html">
                        <p id="nextIcon3">Check your level</p>
                    </div> 
    
                </div>            
        </div>


        <!----------------------- Final Title Content ----------------------->
                    <img id="titleImg" src="" alt="">

    </div>     
    </div>

    <!-- Guide part -->
    <div class="guideBox">
        <img class="guidePortrait" src="../images/guide.png" alt="Guide Portrait">
    </div>
    
    
    <!-- Menu part -->
    <div class="menuHat">
        <a href="home.html"><img src="../images/hat.png" alt="Quit the game."></a>
        <p>Click to quit the game.</p>       
    </div>





<script src="../js/script.js"></script>


</body>
</html>