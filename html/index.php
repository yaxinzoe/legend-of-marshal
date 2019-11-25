<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Legend of Marshal</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body class="mainStyle">
<?php

ini_set("display_errors", 1);
error_reporting(E_ALL ^ E_NOTICE);


$api_url = "https://www.data.qld.gov.au/api/3/action/datastore_search?resource_id=a46b4d2b-243f-41f9-9a61-a231f1d1b6d0&limit=1000";

$data = file_get_contents($api_url);

$data = json_decode($data, true);

$smallImg = array();
$nameRecords = array();
$imgRecords = array();

if(is_array($data)) {


    foreach($data["result"]["records"] as $recordKey => $recordValue) {

        $thumbnailImage= $recordValue["Thumbnail image"];
        $recordImage = $recordValue["Medium resolution image"];
        $recordName = $recordValue["Full name (from National Archives of Australia)"];

        if( $thumbnailImage && $recordImage && $recordName) {

            array_push($smallImg, $thumbnailImage);
            array_push($nameRecords, $recordName);
            array_push($imgRecords, $recordImage);
        }

    }

}

function unique_rand($min, $max, $num) {
    $count = 0;
    $return = array();
    while ($count < $num) {
        $return[] = mt_rand($min, $max);
        $return = array_flip(array_flip($return));
        $count = count($return);
    }
    shuffle($return);
    return $return;
}

$randomNumber = unique_rand(0, count($imgRecords)-1, 10);

$_SESSION['smallImgs'] = $smallImg;
$_SESSION['name'] = $nameRecords;
$_SESSION['mediumImgs'] = $imgRecords;
$_SESSION['randomNumber'] = $randomNumber;

?>
    <div class="welcomeMsg">
        <p>Welcome to</p>
        <h1>Legend of Marshal</h1>
    </div>

    <div class="indexBtn">
        <a href="html/home.html">
            <img src="images/goButton.svg" alt="">
        </a>
    </div>

</body>
</html>