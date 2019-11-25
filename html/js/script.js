
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    setTimeout(function(){
        $("#card").show(5000);
    },40); 

    setTimeout(function(){
        $(".content-presentation").show(5000);
    },40); 
    
  
$(document).ready(function(){
    // Get user's name

    // Lv1 -> Lv2
    $("#nextIcon1").click(function(){
        $("#textLv1").hide();
        // $("#lastText").hide(); 
        // $("#imgLv2").show();
        $("#textLv2").show(); 
        animateProgressBar_Lv2();

        $("#powerNum").text("50");
        $("#prestigeNum").text("50");
        $(".levelDes").text("Lv 2. PTE");
        $(".box-word__specific--rank").text("Lv 2. PTE");
    });

    // Lv2 -> Lv3
    $("#nextIcon2").click(function(){
        // $("#textLv2").hide();
        // $("#imgLv2").hide();
        // $("#textLv3").show();

        // $("#textLv2").hide();
        $("#gameSection").css('visibility', 'visible');
        $("#textContainer").hide();
        // $("#textLv4").show();
        $(".eventContainer").show();
        $("#eventLv6").hide();
        $("#eventLv7").hide();
        $(".soilder-picture1").show();
        $(".name_1").show();

        animateProgressBar_Lv3();

        $("#powerNum").text("100");
        $("#prestigeNum").text("100");
        $(".levelDes").text("Lv 3. LCPL");
        $(".box-word__specific--rank").text("Lv 3. LCPL");
        document.getElementById("rank_level").src='../images/rank1.jpg';
    });


    function animateProgressBar_Lv2 () {

        $("#powerBar").animate ({width: '5%'}, 1000);
        $("#prestigeBar").animate ({width: '5%'}, 1000);
    }

    function animateProgressBar_Lv3 () {
        $("#powerBar").animate ({width: '10%'}, 1000);
        $("#prestigeBar").animate ({width: '10%'}, 1000);
    }

    function animateProgressBar_Lv4 () {
        $("#powerBar").animate ({width: '17%'}, 1000);
        $("#prestigeBar").animate ({width: '5%'}, 1000);
    }

    function animateProgressBar_Lv6 () {
        $("#powerBar").animate ({width: '22%'}, 1000);
        $("#prestigeBar").animate ({width: '10%'}, 1000);
    }
});