function quizInit() {

  // Selectors
  var $quizQuestionText = $('.quiz .question .questionText');
  var $quizQuestionOptions = $('.quiz .question .options');
  var $quizProgress= $('.quiz .barPower progress');
  var $quizProgressDataCurrent= $('.quiz .barPower .progressData .current');
  var $quizProgressDataLimit= $('.quiz .barPower .progressData .limit');
  var $quizProgressDataLimit2= $('.quiz .barPrestige .progressData .limit');
  var $quizProgress2= $('.quiz .barPrestige progress');
  var $quizProgressDataCurrent2= $('.quiz .barPrestige .progressData .current');

  var $quizImages = $('.quiz .images')
  // Data input for Questions and Results
  var questions = [{
    text: '1. Quiz. Major-General Sir William Birdwood took command of the Australian and New Zealand units in Egypt. These units were formed into an army corps of three divisions — 1st Australian Division, the New Zealand and Australian Division and a mounted division. What abbreviation does the corps known as?',
    image: '3William_Birdwood.jpg',
    answers: {
      type: 'range',
      options: [{
          order: 0,
          text: 'A. ANAA',
          power: -50,
          prestige: 0
      }, {
          order: 1,
        text: 'B. ANZAC',
        power: 50,
        prestige: 0
      }]
    },
  },{
    text: '2. In 1914, ship Kyarra left Brisbane carrying nurses from the Austrlian Army Nursing Service (AANS) to Egypt, used as a hospital ship and she was painted white with a red cross on her hull. The "Kyarra" then operated as a hospital ship transporting Australians back from the First World War from November 1914 to March 1915. Where did the first Australian General Hospital opened?',
    image: '4Nurse.jpg',
    answers: {
      type: 'range',
      options: [{
          order: 0,
        text: 'A. Egypt',
        power: 50,
        prestige: 0
      }, {
          order: 1,
        text: 'B. Sarajevo',
        power: -50,
        prestige: 0
      }]
     },
  },{
    text: '3. You received an order from your superior to move to the front in Egypt, what do you respond?',
    image: 'None',
    answers: {
      type: 'range',
      options: [{
          order: 0,
        text: 'A. Obey',
        power: -50,
        prestige: 50
      }, {
          order: 1,
        text: 'B. Disobey',
        power: 50,
        prestige: -50
      }]
    },
  },{
    text: '4. To prepare for the invasion of Turkey, there’s a place where ANZAC practised and began its landing on the way to Gallipoli, where Australian nurses and medical staff established their hospitals, and where the sick and injured returned for treatment and other soldiers returned for periods of rest after the horrors of battle. It’s also where 148 Australians and 76 New Zealanders are buried in the two military cemeteries. This place is rarely talked about in the Gallipoli campaign, comparing to its pivotal role in history. What is the place?',
    image: '6gave.jpg',
    answers: {
      type: 'range',
      options: [{
          order: 0,
        text: 'A. Istanbul, Turkey',
        power: -50,
        prestige: -50
      }, {
          order: 1,
        text: 'B. Lemnos, Greece',
        power: 50,
        prestige: 50
          }]
         },    
      },{
    text: '5. As planned, the landing of Gallipoli Peninsula began at 3:30am. It was supposed to take place on a beach about a kilometre and a half further south from Ari Burnu and north of the promontory of Gaba Tepe. However, in the dark the battleship tows lost direction, bunched up and converged on Ari Burnu point. It was quickly realised that they had landed in the wrong place. What order did the commander, officer of the 11th Battalion, Lieutenant-Colonel Johnstone has given,  in response to the mistake?',
    image: '7response.jpg',
    answers: {
      type: 'range',
      options: [{
          order: 0,
        text: 'A. Go forward',
        power: 50,
        prestige: 50
      }, {
          order: 1,
        text: 'B. Evacuate',
        power: -50,
        prestige: -50
      }]
    },
  },{
    text: '6. Between 4.30am and 4.45am the 3rd Australian Brigade — 9th (Queensland), 10th (South Australia), 11th (Western Australia) and 12th (Tasmania, with some South Australia and Western Australia) Battalions and the 3rd Field Ambulance — landed on Gallipoli around Ari Burnu point. The rest of the Anzac corps came ashore throughout the day. By the evening, despite strong Turkish counter-attacks, the Anzacs held a narrow triangle of land roughly two kilometres long at its base on the coast and extending to just under a kilometre inland at its widest. What’s the exact date of landing?',
    image: '8landing.jpg',
    answers: {
      type: 'range',
      options: [{
          order: 0,
        text: 'A. 1 Apr 1915',
        power: -50,
        prestige: -50
      }, {
          order: 1,
        text: 'B. 25 Apr 1915',
        power: 100,
        prestige: 100
         }]
       },
      },{
    text: '7. At Anzac, Turkish forces led by Lieutenant-Colonel Mustafa Kemal attacked and held on to the high ground. The Australians and New Zealanders were unable to advance. The first hospital ship to evacuate wounded from Anzac, the Gascon, reached Alexandria, Egypt. Of the 548 casualties carried, 14 died on the voyage which took one and a half-days. Do you wish to continue the invasion, or evacuate from Gallipoli Peninsula?',
    image: '9Gascon.jpg',
    answers: {
      type: 'range',
      options: [{
          order: 0,
        text: 'A. Continue to fight',
        power: -100,
        prestige: 100
      }, {
          order: 1,
        text: 'B.Evacuate from the conflict',
        power: 100,
        prestige: -100
      }]
    },
  },{
    text: '8. By 3 am on 26 April more than 1700 casualties had been evacuated from the area of the Anzac landing, mainly via the beach to the south of Ari Burnu which became known as:',
    image: '10cove.jpg',
    answers: {
      type: 'range',
      options: [{
          order: 0,
        text: 'A. ANZAC Bay',
        power: -50,
        prestige: -50
      }, {
          order: 1,
        text: 'B.ANZAC Cove',
        power: 50,
        prestige: 50
         }]
        },
      },{
    text: '9. It is estimated that by 15 Aug 1915, 45 percent of its soldiers from the 10th Battalion (South Australia) had been evacuated from Gallipoli suffering from acute diarrhoea, including you. As a result, you are no longer able to command the battle before being healed. What will you do?',
    image: '11Acute_Diarrhoea.jpg',
    answers: {
      type: 'range',
      options: [{
          order: 0,
        text: 'A. Continue your duty even though you’re very sick',
        power: -100,
        prestige: 100
      }, {
          order: 1,
        text: 'B. Inform your superior to request a new temporary commander',
        power: 100,
        prestige: -100
      }]
    },
  },{
    text: '10. On 22 Aug, the newly arrived 18th Battalion (New South Wales) failed to break into the Turkish positions and lost half its men killed or wounded. On 27 Aug, renewed attempt to take Hill 60 was made. Between 27 and 29 August, a mixed force of Australian, New Zealand and British units again attacked Hill 60, gained some ground, but failed to take and hold the main Turkish position. Eventually, a combined British, Anzac and Gurkha force failed to take Hill 60 at Suvla. Who was in charge of the battle?',
    image: '12Sir_Ian_Hamilton.jpg',
    answers: {
      type: 'range',
      options: [{
          order: 0,
        text: 'A.Sir Ian Hamilton',
        power: 100,
        prestige: 100
      }, {
          order: 1,
        text: 'B. Winston Churchill',
        power: -50,
        prestige: -50
        }]
       },
      },{
    text: '11. The Kingdom of Bulgaria entered the war as an ally of Germany, Austro-Hungary and Turkey. This made it likely that the Turks on Gallipoli would be able to receive reinforcements from Germany along the Berlin to Constantinople railway. Is it true or false?',
    // image: 'none',
    answers: {
      type: 'range',
      options: [{
          order: 0,
        text: 'A. True',
        power: 100,
        prestige: 0
      }, {
          order: 1,
        text: 'B. False',
        power: -100,
        prestige: 0
      }]
    },
  },{
    text: '12. Who advised a complete withdrawal from Gallipoli, with an estimated that an  evacuation could lead to a casualty rate of 30-40 percent of the force and an equal amount of war material?',
    image: '14Sir_Charles_Monro_in_1915.jpg',
    answers: {
      type: 'range',
      options: [{
          order: 0,
        text: 'A. Sir Ian Hamilton',
        power: 0,
        prestige: 50
      }, {
          order: 1,
        text: 'B. General Monro',
        power: 0,
        prestige: -50
          }]
        },
      },{
    text: '13. Severe autumn storm lashed the Gallipoli peninsula from the south-west. Considerable damage was done at Anzac Cove, particularly to the water supply. As the commander, what do you do?',
    image: '15storm.jpg',
    answers: {
      type: 'range',
      options: [{
          order: 0,
        text: 'A. Ask for help from allies',
        power: 100,
        prestige: -100
      }, {
          order: 1,
        text: 'B.  Reduce the water supply for each soldier',
        power: 50,
        prestige: -50
          }]
        },   
      },{
    text: '14. Over two nights — 18–19 and 19–20 December — all of the remaining 20,000 Australians and New Zealanders were withdrawn from the Anzac area of Gallipoli. The last man to leave at 4.10 am on 20 December from North Beach was Colonel J Paton who was in charge of the ‘rear-guard’. There were virtually no casualties. Did the evaluation noticed by the Turks?',
    image: '16John_Gibson_Paton_portrait.jpg',
    answers: {
      type: 'range',
      options: [{
          order: 0,
        text: 'A. Yes',
        power: 0,
        prestige: -50
      }, {
          order: 1,
        text: 'B. No',
        power: 0,
        prestige: 50
      }]
    },
  },{
    text: '15. The Western Front Campaign is often said to be one of the darkest periods of the First World War.In March 1916, after Gallipoli, which country did the ANZACs (Australian and New Zealand Army Corps) went to the conflict on the Western Front, where the war was bogged down in trenches and mud?',
    answers: {
      type: 'range',
      options: [{
          order: 0,
        text: 'A. France',
        power: 100,
        prestige: 100
      }, {
          order: 1,
        text: 'B. Austria',
        power: -50,
        prestige: -50
        }]
       },
      },{
    text: '16. On 19 July 1916,  – During the Battle of Fromelles, Australia has more than 5,500 casualties in 24 hours for no gain. Is it true or false?',
    answers: {
      type: 'range',
      options: [{
          order: 0,
        text: 'A. True',
        power: 100,
        prestige: 100
      }, {
          order: 1,
        text: 'B. False',
        power: -50,
        prestige: 0
      }]
    },
  },{
    text: '17. Be Appointed as the Commander of the Australian Corps and promoted to Lieutenant-General, which one of the following is the first time an Australian has commanded the Australians on the Western Front, and exhibited brilliant combat wisdom?',
    image: '19General-Sir-John-Monash.jpg',
    answers: {
      type: 'range',
      options: [{
          order: 0,
        text: 'A.General John Monash',
        power: 100,
        prestige: 100
      }, {
          order: 1,
        text: 'B.General Douglas Haig',
        power: 0,
        prestige: -50
      }]
    } 
  }];


// QUIZ ENGINE
function quiz() {
  var currentQuestion = 0; // default starting value
  var currentScore = 0; // default starting value
  var currentPrestige = 0; // default starting power
  var answerLog = [] // for storing answers for Marketo
  $quizProgress.attr("max", 1000);
  $quizProgress2.attr("max", 1000);
  $quizProgressDataLimit.html(1000);
  $quizProgressDataLimit2.html(1000);
  renderQuestion(currentQuestion);

  // RENDER
  function renderQuestion() {
    var question = questions[currentQuestion];
    var optionsHtml = [];
    var questionText = question.text;
    var questionOptionText = question.answers.options;

    var questionImage = question.image;
    console.log(questionImage);
      // add images tag
  

    if (questionImage != '') {
        var questionImageItem = '<img class="quiz-image" src="../images/'+questionImage+'" alt="">'
        $quizImages.html(questionImageItem);
    } else {
        var questionImageItem = ''
    }

    $quizQuestionText.html(questionText);
    for(var i = 0; i < questionOptionText.length; i++) {
      if (question.answers.type == 'range'){
        var questionOptionItem = '<button class="quiz-opt range" value="'+questionOptionText[i].power+'" id="'+questionOptionText[i].order+'">'+questionOptionText[i].text+'</button>'
      } else {
        var questionOptionItem = '<button class="quiz-opt" value="'+questionOptionText[i].power+'" id="'+questionOptionText[i].order+'">'+questionOptionText[i].text+'</button>'
      }
      optionsHtml.push(questionOptionItem);
    }
    question
    $quizQuestionOptions.html(optionsHtml.join(''));
    $('.quiz button').click(nextQuestion);   
    $('.quiz button').click(updateLevel);   
  } // END renderQuestion

  // HANDLER
  function nextQuestion() {
      var question = questions[currentQuestion];
      var questionText = question.text;
      var questionOptionText = question.answers.options;
    currentQuestion += 1;
    
    var optionValue = parseInt(this.value);
    order = parseInt(this.id);
    console.log(order);
    var optionPrestige = questionOptionText[order].prestige;
    console.log(optionPrestige);
    currentScore = optionValue ;
    currentPrestige += optionPrestige;
    console.log('currentScore=', currentScore);
    $quizProgress.attr("value", currentScore);
    $quizProgress2.attr("value", currentPrestige);
    $quizProgressDataCurrent.html(currentScore);
    $quizProgressDataCurrent2.html(currentPrestige);
    if (questions.length == currentQuestion){
      calculateResults();
      
    } else {
      renderQuestion();
      // addToAnswerLog();
    }
  } // END nextQuestion

  // Update Level of soldiers
  function updateLevel() {
    var title = ["CPL", 'SGT', 'SSGT', 'WO 2', 'WO 1', 'OCDT', '2LT', 'LT', 'CAPT', 'MAJ', 'LTCOL', 'COL', 'BRIG', 'MAJGEN', 'LTGEN', 'GEN', 'FM'];
    var rank = ['4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
    var rankPicture = [
       '../images/rank2.jpg','../images/rank3.jpg','../images/rank4.jpg','../images/rank5.jpg','../images/rank6.jpg','../images/rank7.jpg',
       '../images/rank9.jpg','../images/rank10.jpg','../images/rank11.jpg','../images/rank12.jpg',
       '../images/rank13.jpg','../images/rank15.jpg','../images/rank16.jpg','../images/rank17.jpg','../images/rank18.jpg',
       '../images/rank18.jpg','../images/rank18.jpg']
    var potrait = ['../images/voyage.jpg','../images/voyage.jpg','../images/voyage.jpg','../images/voyage.jpg',
        '../images/voyage.jpg','../images/voyage.jpg']
    currentTitle = title[currentQuestion-1];
    console.log(currentTitle);
    currentRank = rank[currentQuestion-1];
    console.log(currentRank);
    currentRankPicture = rankPicture[currentQuestion-1];
    console.log(currentRankPicture);
    $(".levelDes").text('Lv ' + currentRank + '. ' +currentTitle );
    $(".box-word__specific--rank").text('Lv ' + currentRank + '. ' +currentTitle );
    $(".box-picture2").html('<img src= '+ currentRankPicture + '  alt="rank" width="100px"/>');
  
  }

  // RESULTS
  function calculateResults() {
    // $('.quiz .question').html('<p class="questionText">Quiz Complete Here are the Results!</p>');

    $("#textContainer").show();
    $("#lastText").css('display', 'block');
    $("#gameSection").css('visibility', 'hidden');
    $("#textLv2").css('display', 'none');

  }

  } // END quiz engine

  // Init render
  quiz();

} // END quizInit

$(function() {
  quizInit();
});

// MARKETO FORM INJECTION
