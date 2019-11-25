<?php session_start(); ?>
<!doctype html>
<html lang="en">
        <head>
            <meta charset="UTF-8">
            <title></title>
            <link rel="stylesheet" type="text/css" href="../css/trans.css">
            <script type="text/javascript" src="../js/trans.js"></script>

        </head>
        <body>

        <div class="wrap" id="wrap">
            <div class="slide" id="slide">
                <ul>
                    <li><img src="<?php echo $_SESSION['mediumImgs'][$_SESSION['randomNumber'][0]];?>" alt="potrait1"/></li>
                    <li><img src="<?php echo $_SESSION['mediumImgs'][$_SESSION['randomNumber'][1]];?>" alt="potrait2"/></li>
                    <li><img src="<?php echo $_SESSION['mediumImgs'][$_SESSION['randomNumber'][2]];?>" alt="potrait3"/></li>
                    <li><img src="<?php echo $_SESSION['mediumImgs'][$_SESSION['randomNumber'][3]];?>" alt="potrait4"/></li>
                    <li><img src="<?php echo $_SESSION['mediumImgs'][$_SESSION['randomNumber'][4]];?>" alt="potrait5"/></li>
                </ul>
                <div class="arrow" >
				<span>
					<button href="javascript:;" class="prev"></button>
				</span>
                </div>
            </div>
        </div>
	</body>
</html>