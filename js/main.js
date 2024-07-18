document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,ScrollToPlugin,Draggable,MotionPathPlugin)
    // gsap code here!
   });


// **set initial screen number // like an array, called Num data type
let screenNum = 1;

// **total number of screens, get the screens then get the number
let allScreens = document.querySelectorAll("section");
let totalScreens = allScreens.length;
console.log(allScreens);
console.log(totalScreens);

// **transition duration
let dur = 1;

/**
 ** delay for starting screen animations
 ** make equal to duration... The time it takes content to transition off screen
 ** add more time to delay the build on a little more
*/
let delay = dur + 0.5;
// disables nav when transitioning from screen to screen
let navActive = true;
// vars used for nav
let currentScreen, prevScreen, nextScreen;
// hides all screens except for screen 1
allScreens.forEach((screen, num) =>{
    console.log(num);
    if(num!=0){
        console.log(`${num} should be hidden`);
        screen.style.opacity =0;
        screen.style.display = "none";   //Avoid users cannot click button at the back layer //  //Make the div space collapse//
    }else{
        console.log(`${num} should not be hidden`);
    }
})


// set up main div on paused timeline until begin button clicked
let main = gsap.from("main", {
    duration: dur,
    opacity: 0
}).pause();

// set up begin button on paused timeline until page load
let begin = gsap.from("#btnContainer", {
    duration: dur,
    opacity: 0,
    onReverseComplete: function() {
        console.log("Reverse Complete");
        loadScreen1();
        // show the main div
        document.querySelector("main").style.display = "block"; //Make the div take up the space//
        document.querySelector("main").style.opacity = 1;
        main.play();
    }
}).pause();

// preload all content and then reveal begin button
document.addEventListener("DOMContentLoaded",function(){
    console.log("LOADED!!");
    // fade out preloader GIF
    gsap.to("#loading", {
        duration: dur,
        opacity: 0,
        onComplete: function() {
            document.querySelector("#begin").style.opacity = 1;
            // when done show begin button
            begin.play(); 
        }
    });
});

// begin button click function
document.querySelector("#begin").addEventListener("click",function() {
    begin.reverse();
});

// next and previous navigation functions
function showNextScreen(){
    // check if nav is active
    if(navActive){
        console.log("nextScreen");
        navActive = false;
        // ! Make sure you got that hashtag!
        // target the current
        currentScreen = `#screen${screenNum}`;
        console.log(currentScreen);
        // set the next screen number 
        screenNum++;
        showHideNav(screenNum);
        // target the next screen
        nextScreen = `#screen${screenNum}`;
        // transitions current screen out
        gsap.fromTo(currentScreen, {
            y: 0
        }, {
            duration: dur,
            delay: 0.5,
            y: -600,     // Moving the screen to the left//
            ease: "power2.inOut"
        });
        // show next screen
        document.querySelector(nextScreen).style.display = "block";
        document.querySelector(nextScreen).style.opacity = 1;
        gsap.fromTo(nextScreen, {
            y: 600      // Moving the screen from the right//
        }, {
            duration: dur,
            delay: 0.5,
            y: 0,
            ease: "power2.inOut",
            onComplete: function() {
                console.log("Next Screen Animation Finished");
                // hide current screen
                document.querySelector(currentScreen).style.opacity = 0;
                document.querySelector(currentScreen).style.display = "none";
                // re-enable nav
                navActive = true;
            }
        });

        // ! ACCESS FIELD OF AN OBJECT [] allows for a field but we have a variable
        // ! CAN CONCATENATE BUT ALSO RUN THE FUNCTION
        // load function to animate conents of the screen
        // set up off screen
        window[`loadScreen${screenNum}`]();
    }
}

function showPrevScreen(){
    // check if nav is active
    if(navActive){
        console.log("prevScreen");
        navActive = false;
        // ! Make sure you got that hashtag!
        // target the current
        currentScreen = `#screen${screenNum}`;
        // set the prev screen number 
        screenNum--;
        showHideNav(screenNum);
        // target the prev screen
        prevScreen = `#screen${screenNum}`;
        // transitions current screen out
        gsap.fromTo(currentScreen, {
            y: 0
        }, {
            duration: dur,
            delay: 0.5,
            y: 600,
            ease: "power2.inOut"
        });

        // show prev screen
        document.querySelector(prevScreen).style.opacity = 1;
        document.querySelector(prevScreen).style.display = "block";

        gsap.fromTo(prevScreen, {
            y: -600
        }, {
            duration: dur,
            delay: 0.5,
            y: 0,
            ease: "power2.inOut",
            onComplete: function() {
                console.log("Prev Screen Animation Finished");
                // hide current screen
                document.querySelector(currentScreen).style.opacity = 0;
                document.querySelector(currentScreen).style.display = "none";
                // re-enable nav
                navActive = true;
            }
        });

        // ! ACCESS FIELD OF AN OBJECT [] allows for a field but we have a variable
        // ! CAN CONCATENATE BUT ALSO RUN THE FUNCTION
        // load function to animate conents of the screen
        // set up off screen
        window[`loadScreen${screenNum}`]();
    
    }
}
// next and previous button clicks
document.querySelector("#next").addEventListener("click",showNextScreen);
document.querySelector("#prev").addEventListener("click", showPrevScreen);
// show/hide next/prev buttons
function showHideNav(currentScreen) {
    console.log("showHideNav reached");
    let nextBtn = document.querySelector("#next");
    let prevBtn = document.querySelector("#prev");
    if(currentScreen == 1) {
        console.log("should show just the next");
        gsap.to(prevBtn,{opacity: 0, duration: 1});
        gsap.to(nextBtn,{opacity: 1, duration: 1});
    } else if(currentScreen == totalScreens) {
        console.log("should show just the prev")
        gsap.to(prevBtn,{opacity: 1, duration: 1});
        gsap.to(nextBtn,{opacity: 0, duration: 1});
    }
    else {
        console.log("show all nav")
        gsap.to(prevBtn,{opacity: 1, duration: 1});
        gsap.to(nextBtn,{opacity: 1, duration: 1});
    }

}

// set up nav on page load
showHideNav(screenNum);
let bgm = document.querySelector('#Slide_all_audio');
let Slide1_1_audio = document.querySelector('#Slide1_1_audio');
let Slide1_2_audio = document.querySelector('#Slide1_2_audio');
let rotate_audio = document.querySelector('#rotate_audio');
let sparkling_audio = document.querySelector('#sparkling_audio');
let Slide2_1_audio = document.querySelector('#Slide2_1_audio');
let Slide2_2_audio = document.querySelector('#Slide2_2_audio');
let Slide2_3_audio = document.querySelector('#Slide2_3_audio');
let wind_audio = document.querySelector('#wind_audio');
let cloud_audio= document.querySelector('#cloud_audio');
let Slide3_1_audio = document.querySelector('#Slide3_1_audio');
let Slide3_2_audio = document.querySelector('#Slide3_2_audio');
let Slide3_3_audio = document.querySelector('#Slide3_3_audio');
let joyful_dream_audio = document.querySelector('#joyful_dream_audio');
let horror_dream_audio = document.querySelector('#horror_dream_audio');
let Slide4_1_audio = document.querySelector('#Slide4_1_audio');
let Slide4_2_audio = document.querySelector('#Slide4_2_audio');
let Slide4_3_audio = document.querySelector('#Slide4_3_audio');
let dinosaur_audio = document.querySelector('#dinosaur_audio');
let fly_audio = document.querySelector('#fly_audio');
let run_audio = document.querySelector('#run_audio');
let whoosh_audio= document.querySelector('#whoosh_audio');
let Slide5_4_audio= document.querySelector('#Slide5_4_audio');
let Slide5_5_audio= document.querySelector('#Slide5_5_audio');
let Slide5_2_audio= document.querySelector('#Slide5_2_audio');
let Slide5_3_audio= document.querySelector('#Slide5_3_audio');
let heartbeat_audio = document.querySelector('#heartbeat_audio');
let pac_man_audio = document.querySelector('#pac_man_audio');
let ghost_horror_audio = document.querySelector('#ghost_horror_audio');
let wind_chimes_audio = document.querySelector('#wind_chimes_audio');

function StopAllAudio(){
    Slide1_1_audio.pause();
    Slide1_2_audio.pause();
    rotate_audio.pause();
    sparkling_audio.pause();
    Slide2_1_audio.pause();
    Slide2_2_audio.pause();
    Slide2_3_audio.pause();
    wind_audio.pause();
    cloud_audio.pause();
    Slide3_1_audio.pause();
    Slide3_2_audio.pause();
    Slide3_3_audio.pause();
    joyful_dream_audio.pause();
    horror_dream_audio.pause();
    Slide4_1_audio.pause();
    Slide4_2_audio.pause();
    Slide4_3_audio.pause();
    dinosaur_audio.pause();
    fly_audio.pause();
    run_audio.pause();
    whoosh_audio.pause();
    Slide5_4_audio.pause();
    Slide5_5_audio.pause();
    Slide5_2_audio.pause();
    Slide5_3_audio.pause();
    heartbeat_audio.pause();
    pac_man_audio.pause();
    ghost_horror_audio.pause();
    wind_chimes_audio.pause();
}


// functions for loading on content of each screen
// LOAD SCREEN 1 ///////////////////////////////////////////////
function loadScreen1() {
    // animate content on with delays
    gsap.from("#screen1 h1", {
        duration: dur,
        delay: delay,
        opacity: 0
    });

    StopAllAudio();
    Slide1_1_audio.play();
    bgm.play();
    bgm.volume = 0.2;
}

document.querySelector('#DreamCatch_1').addEventListener('drag',rotateImage);

document.querySelector('#girl_1').addEventListener('click',zoomin);

function zoomin(){
    let CameraRoll1 = gsap.timeline();
    CameraRoll1.fromTo(".zoom_left",
    {opacity:0,
     scale:1.3,
     y:-150},
    {opacity:1,
     scale:1,
     y:0,
     duration:5}
    );

    bgm.pause();
    Slide1_2_audio.play();
    sparkling_audio.play();
}

    var initialMouseY;
    var initialMouseX;
    var rotationDegree = 0;

    function rotateImage(event) {
        if (initialMouseY === undefined) {
          initialMouseY = event.clientY;
        }
        if (initialMouseX === undefined) {
          initialMouseX = event.clientX;
        }
        
        var deltaY = event.clientY - initialMouseY;
        var deltaX = event.clientX - initialMouseX;
        rotationDegree = (deltaY+deltaX)/1.5; // Adjust the rotation speed as needed
  
        var image = document.getElementById('DreamCatch_1');
        image.style.transform = 'rotate(' + rotationDegree + 'deg)';
        
        let CameraRoll3 = gsap.timeline();
        CameraRoll3.fromTo('#L_Feather_Line',
        {height:0},
        {height:"110px", duration:2}
        )
        .fromTo('#L_feather_1',
        {opacity:0},
        {opacity:1, duration:2}
        )
        .fromTo('#R_Feather_Line',
        {height:0},
        {height:"65px", duration:2}
        )
        .fromTo('#R_feather_1',
        {opacity:0},
        {opacity:1, duration:2}
        );

        let CameraRoll2 = gsap.timeline();
        CameraRoll2.fromTo(".zoom_center",
        {opacity:0,
        scale:1.5,
        y:50},
        {opacity:1,
         scale:1,
         y:0,
         delay:8,
        duration:3}
        );
      
        rotate_audio.play();
      }

// LOAD SCREEN 2 ///////////////////////////////////////////////
function loadScreen2() {
    // animate content on with delays
    gsap.from("#screen2 h1", {
        duration: dur,
        delay: delay,
        opacity: 0
    });

    StopAllAudio();
    bgm.play();
    bgm.volume = 0.2;
}

document.querySelector('#main_text_1_2').addEventListener('click',dropping);
document.querySelector('#girl_2').addEventListener('click',zoomin2);
document.querySelector('#L_teapot_2').addEventListener('click',wish);

function wish(){
let CameraRoll7 = gsap.timeline();
CameraRoll7.fromTo("#WISH",
{opacity:0,
 x:0,
 y:0,
 scale:1,
 rotate:0},
{opacity:1,
x:-40,
y:-40,
scale:1.5,
duration:3,
rotate:40}
)
.fromTo(".wish_left",
{opacity:0,
 scale:1.3,
 y:-150},
{opacity:1,
 scale:1,
 y:0,
 duration:5}
)
.fromTo(".zoom_top_2",
{y:0,
x:0,
scale:0.7
},
{y:-180,
x:-10,
scale:1,
opacity:1,
duration:5
}    
)
    StopAllAudio();
    Slide2_2_audio.play();
    wind_audio.play();
}


function zoomin2(){
console.log("run");
let CameraRoll5 = gsap.timeline();
CameraRoll5.fromTo("#L_teapot_2",
{opacity:0,
 y:-200,
 scale:1,
 rotate:-15},
{opacity:1,
y:0,
scale:0.8,
duration:3,
rotate:15}
)

Slide2_1_audio.play();
}

function dropping(){
    let CameraRoll4 = gsap.timeline();
    CameraRoll4.fromTo(".extra",
    {opacity:1,
    y:0,
    scale:1},
    {opacity:0,
    y:150,
    scale:1.3,
    duration:3}
    )
    .fromTo(".wish_left",
    {opacity:1,
    y:0
    },
    {opacity:0,
    y:150,
    duration:3}
    )
    .fromTo(".main_text_2",
    {opacity:0},
    {opacity:1,
     duration:3}
    )
    .fromTo(".zoom_center_2",
   {opacity:0,
    scale:1.5,
    y:50},
   {opacity:1,
   scale:1,
    y:0,
    duration:3})
    .fromTo("#R_Cloud_2",
    {opacity:0,
    scale:1.3,
    y:-100},
    {opacity:1,
     scale:1,
    y:0,
    duration:5},   
    )
    .fromTo("#text_stage1_2",
    {opacity:0,
     scale:1.3},
    {opacity:1,
    scale:1,
    duration:3})
    .fromTo("#RR_Cloud_2",
    {opacity:0,
    scale:1.3,
    y:-100},
    {opacity:1,
     scale:1,
    y:0,
    duration:5},   
    )
    .fromTo("#text_stage2_2",
    {opacity:0,
     scale:1.3},
    {opacity:1,
    scale:1,
    duration:3}
    )
    .fromTo("#PPPP_Cloud_2",
    {opacity:0,
    scale:1.3,
    y:-100},
    {opacity:1,
     scale:1,
    y:0,
    duration:5},   
    )
    .fromTo("#text_stage3_2",
    {opacity:0,
     scale:1.3},
    {opacity:1,
    scale:1,
    duration:3}
    )
    .fromTo("#PP_Cloud_2",
    {opacity:0,
    scale:1.3,
    y:-100},
    {opacity:1,
     scale:1,
    y:0,
    duration:5},   
    )    
    .fromTo("#text_stage4_2",
    {opacity:0,
     scale:1.3},
    {opacity:1,
    scale:1,
    duration:3}
    )
    .fromTo("#PPP_Cloud_2",
    {opacity:0,
    scale:1.3,
    y:-100},
    {opacity:1,
     scale:1,
    y:0,
    duration:5},   
    )    
    .fromTo("#text_stage5_2",
    {opacity:0,
     scale:1.3},
    {opacity:1,
    scale:1,
    duration:3}
    )   
    .fromTo("#text_5_2",
    {opacity:0,
     scale:1.3},
    {opacity:1,
    scale:1,
    duration:3}
    )   
    
    StopAllAudio();
    Slide2_3_audio.play();
    cloud_audio.play();
}

// LOAD SCREEN 3 ///////////////////////////////////////////////
function loadScreen3() {
    // animate content on with delays
    gsap.from("#screen3 h1", {
        duration: dur,
        delay: delay,
        opacity: 0
    });
    
    StopAllAudio();
    bgm.play();
    bgm.volume = 0.2;
}

document.querySelector('#girl_3').addEventListener('click',zoomin3);

function zoomin3(){
    let CameraRoll12 = gsap.timeline();
    CameraRoll12.fromTo(".zoom_top_3",
        {opacity:0,
         scale:1.3,
         y:-150},
        {opacity:1,
         scale:1,
         y:0,
        duration:5}
    )
    
    sparkling_audio.play();
    sparkling_audio.volume = 0.3;
    Slide3_1_audio.play();
    }

    document.querySelector('#L_Mini_Cloud_3').addEventListener('mouseenter',showtext3);
    document.querySelector('#L_Mini_Cloud_3').addEventListener('mouseleave',hidetext3);
    document.querySelector('#R_Mini_Cloud_3').addEventListener('mouseenter',showtext32);
    document.querySelector('#R_Mini_Cloud_3').addEventListener('mouseleave',hidetext32);
    document.querySelector('#mars_3').addEventListener('mouseenter',showchart13);
    document.querySelector('#mars_3').addEventListener('mouseleave',hidechart13);
    document.querySelector('#R_Cloud_N_3').addEventListener('mouseover',showchart23);
    document.querySelector('#R_Cloud_N_3').addEventListener('mouseleave',hidechart23); 
    document.querySelector('#carpet_3').addEventListener('mouseover',showchart33);
    document.querySelector('#carpet_3').addEventListener('mouseleave',hidechart33); 
    document.querySelector('#door_3').addEventListener('mouseover',showchart43);
    document.querySelector('#door_3').addEventListener('mouseleave',hidechart43); 
    
    function showtext3(){
    let CameraRoll13 = gsap.timeline();    
    CameraRoll13.fromTo("#L_Mini_Cloud_3",
       {rotate: 15},
       {rotate:0,
        duration:3}
    )
    .fromTo(".characters_L_3",
    {opacity:0,
        scale:1.3,
        y:-150},
       {opacity:1,
        scale:1,
        y:0,
       duration:5})
    
       StopAllAudio();
       joyful_dream_audio.play();
       joyful_dream_audio.volume = 0.2;
    }
    
    function hidetext3(){
        let CameraRoll14 = gsap.timeline();    
        CameraRoll14.fromTo("#L_Mini_Cloud_3",
           {rotate:-15},
           {rotate:0,
            duration:3}
        )
        .fromTo(".characters_L_3_E",
        {opacity:1,
            scale:1,
            y:0},
           {opacity:0,
            scale:0.7,
            y:400,
           duration:7})
        }
    
    function showtext32(){
            let CameraRoll15 = gsap.timeline();    
            CameraRoll15.fromTo("#R_Mini_Cloud_3",
               {rotate: 15},
               {rotate:0,
                duration:3}
            )
            .fromTo(".characters_R_3",
            {opacity:0,
                scale:1.3,
                y:-150},
               {opacity:1,
                scale:1,
                y:0,
               duration:5})

            StopAllAudio();
            horror_dream_audio.play();
            }
    
    function hidetext32(){
            let CameraRoll16 = gsap.timeline();    
            CameraRoll16.fromTo("#R_Mini_Cloud_3",
                   {rotate:-15},
                   {rotate:0,
                    duration:3}
                )
    
             .fromTo(".characters_R_3_E",
             {opacity:1,
                scale:1,
                y:0},
            {opacity:0,
                scale:0.7,
                y:400,
               duration:7})
    }

    function showchart13(){
        let CameraRoll17 = gsap.timeline();    
        CameraRoll17.fromTo("#mars_3",
           {opacity:1},
           {opacity:0, duration:2}
        )
        .fromTo(".chart_1_3",
        {opacity:0},
         {opacity:1, duration:2
        })

        Slide3_2_audio.play();
        }

     function hidechart13(){
            let CameraRoll18 = gsap.timeline();    
            CameraRoll18.fromTo(".chart_1_3",
               {opacity:1},
               {opacity:0, duration:2}
            )
            .fromTo("#mars_3",
            {opacity:0},
             {opacity:1, duration:2
            })
            }

            function showchart23(){
                let CameraRoll19 = gsap.timeline();    
                CameraRoll19.fromTo("#R_Cloud_N_3",
                   {opacity:1},
                   {opacity:0, duration:2}
                )
                .fromTo(".chart_2_3",
                {opacity:0},
                 {opacity:1, duration:2
                })
                }
        
             function hidechart23(){
                    let CameraRoll20 = gsap.timeline();    
                    CameraRoll20.fromTo(".chart_2_3",
                       {opacity:1},
                       {opacity:0, duration:2}
                    )
                    .fromTo("#R_Cloud_N_3",
                    {opacity:0},
                     {opacity:1, duration:2
                    })
                    }

                    function showchart33(){
                        let CameraRoll21 = gsap.timeline();    
                        CameraRoll21.fromTo("#carpet_3",
                           {opacity:1},
                           {opacity:0, duration:2}
                        )
                        .fromTo(".chart_3_3",
                        {opacity:0},
                         {opacity:1, duration:2
                        })

                        Slide3_3_audio.play();
                        }
                
                     function hidechart33(){
                            let CameraRoll22 = gsap.timeline();    
                            CameraRoll22.fromTo(".chart_3_3",
                               {opacity:1},
                               {opacity:0, duration:2}
                            )
                            .fromTo("#carpet_3",
                            {opacity:0},
                             {opacity:1, duration:2
                            })
                            }

                            function showchart43(){
                                let CameraRoll23 = gsap.timeline();    
                                CameraRoll23.fromTo("#door_3",
                                   {opacity:1},
                                   {opacity:0, duration:2}
                                )
                                .fromTo(".chart_4_3",
                                {opacity:0},
                                 {opacity:1, duration:2
                                })
                                }
                        
                             function hidechart43(){
                                    let CameraRoll24 = gsap.timeline();    
                                    CameraRoll24.fromTo(".chart_4_3",
                                       {opacity:1},
                                       {opacity:0, duration:2}
                                    )
                                    .fromTo("#door_3",
                                    {opacity:0},
                                     {opacity:1, duration:2
                                    })
                                    }                  

// LOAD SCREEN 4 ///////////////////////////////////////////////
function loadScreen4() {
    // animate content on with delays
    gsap.from("#screen4 h1", {
        duration: dur,
        delay: delay,
        opacity: 0
    });

    StopAllAudio();
    bgm.play();
    bgm.volume = 0.2;
}

document.querySelector('#girl_4').addEventListener('click',zoomin4);

//document.querySelector('#L_Memories_4').addEventListener('mouseenter',showtext4);
//document.querySelector('#L_Memories_4').addEventListener('mouseleave',hidetext4);
//document.querySelector('#R_Memories_4').addEventListener('mouseenter',showtext42);
//document.querySelector('#R_Memories_4').addEventListener('mouseleave',hidetext42);
document.querySelector('#carpet_L_4').addEventListener('click',floating);
document.querySelector('#dinosaur_4').addEventListener('drag',chasing);
document.querySelector('#carpet_4').addEventListener('mouseenter',hidingdown);
document.querySelector('#carpet_4').addEventListener('drag',flying);
document.querySelector('#girl_4').addEventListener('drag',wearing);


function zoomin4(){
    let CameraRoll8 = gsap.timeline();
    CameraRoll8.fromTo(".zoom_top_4",
        {opacity:0,
         scale:1.3,
         y:-150},
        {opacity:1,
         scale:1,
         y:0,
        duration:5}
    )
    StopAllAudio();
    wind_chimes_audio.play();
    Slide4_1_audio.play();
    }

function showtext4(){
let CameraRoll9 = gsap.timeline();    
CameraRoll9.fromTo("#L_Memories_4",
   {rotate: 15},
   {rotate:0,
    duration:3}
)
.fromTo("#main_text_2_4",
{opacity:0,
    scale:1.3,
    y:-150},
   {opacity:1,
    scale:1,
    y:0,
   duration:5})
}

function hidetext4(){
    let CameraRoll10 = gsap.timeline();    
    CameraRoll10.fromTo("#L_Memories_4",
       {rotate:-15},
       {rotate:0,
        duration:10}
    )
    .fromTo(".L_Memory",
    {opacity:1,
        scale:1,
        y:0},
       {opacity:0,
        scale:0.7,
        y:400,
       duration:7})
    }

function showtext42(){
        let CameraRoll11 = gsap.timeline();    
        CameraRoll11.fromTo("#R_Memories_4",
           {rotate: 15},
           {rotate:0,
            duration:3}
        )
        .fromTo("#main_text_3_4",
        {opacity:0,
            scale:1.3,
            y:-150},
           {opacity:1,
            scale:1,
            y:0,
           duration:5})
        }

function hidetext42(){
        let CameraRoll12 = gsap.timeline();    
        CameraRoll12.fromTo("#R_Memories_4",
               {rotate:-15},
               {rotate:0,
                duration:10}
            )

         .fromTo(".R_Memory",
         {opacity:1,
            scale:1,
            y:0},
        {opacity:0,
            scale:0.7,
            y:400,
           duration:7})
}


function floating(event){
    let CameraRoll25 = gsap.timeline();  
    CameraRoll25.fromTo("#carpet_L_4",
      {scale:1},
      {scale:0.75,
       duration:2}
    )
    .fromTo("#girl_4",
       {scale:1,
        y:0},
       {scale:0.8,
        y:-40,
        duration:2}
    )
    .fromTo("#dinosaur_4",
        {x:-200,
        opacity:0},
        {x:0, 
         opacity:1,
         duration:2,
         ease: "bounce.out",
         delay:10
       })
    .fromTo(".graph_3_4",
       {opacity:0},
       {opacity:1}
    )
    hidetext4();
    hidetext42();

    StopAllAudio();
    setTimeout(playdinosaur, 14000);
    }

function playdinosaur(){
    dinosaur_audio.play();
}

function playwhoosh(){
    whoosh_audio.play();
}

function playfly(){
    fly_audio.play();
}

function chasing(event){
    const mouseX = event.clientX;
    document.querySelector('#dinosaur_4').style.left = mouseX-170+ 'px';


    if (mouseX>800){
        document.querySelector('#dinosaur_4').style.left ='700px';
        let CameraRoll32 = gsap.timeline();     
        CameraRoll32.fromTo(".chart_2_4",
        {opacity:0},
        {opacity:1, duration:6})
        let CameraRoll31 = gsap.timeline(); 
        CameraRoll31.fromTo(".goingup",
        {y:0},
        {y:-150,
        ease: "slow(0.3,0.3,false)",
        duration:3}
        )
        .fromTo("#girl_4",
         {y:-150},
         {y:-190}) 
        .fromTo('#carpet_4',
         {x:-250,
        opacity:0},
         {x:0,
        opacity:1,
        duration:4,
        ease: "bounce.out" }
        )  
        
        StopAllAudio();
        setTimeout(playwhoosh, 3000);
        setTimeout(playfly, 5000);
         }

    if (mouseX>480) {
        document.querySelector('#girl_4').setAttribute("src","img/Screen_4/Asset 48.png");
        document.querySelector('#girl_4').style.top='80%';}
     
        StopAllAudio();
        dinosaur_audio.play();
     }

function flying(event){
    const mouseX = event.clientX;
    document.querySelector('#carpet_4').style.left = mouseX-170+ 'px';

    if (mouseX>800){
        document.querySelector('#carpet_4').style.left ='700px';
        let CameraRoll27 = gsap.timeline(); 
        CameraRoll27.fromTo("#main_text_1_4",
        {opacity:1},
        {opacity:0, duration:5}
        )
        .fromTo(".goingup",
        {y:-150},
        {y:-300,
        ease: "slow(0.3,0.3,false)",
        duration:3})
        .fromTo("#girl_4",
        {y:-300,
        scale: 1,
        x:0},
        {y:-362,
        scale: 1,
        x:25,
        duration:4,
        ease: "bounce.out"})
        .fromTo(".chart_1_4",
        {opacity:1},
        {opacity:0, duration:5})
        .fromTo(".graph_2_4",
        {opacity:1},
        {opacity:0, duration:5})
        .fromTo(".graph_1_4",
        {opacity:0},
        {opacity:1, duration:5})
        
        StopAllAudio();
        setTimeout(playwhoosh, 6500);
    }
    if (mouseX>480) {
        document.querySelector('#girl_4').setAttribute("src","img/Screen_4/Asset 47.png");
    }

    StopAllAudio();
    Slide4_2_audio.play();
    fly_audio.play();
}

function hidingdown(event){
    let CameraRoll29 = gsap.timeline(); 
    CameraRoll29.fromTo(".chart_2_4_E",
        {opacity:1},
        {opacity:0, duration:7})
    .fromTo(".graph_2_4",
    {opacity:0},
    {opacity:1, duration:5})
    Slide4_3_audio.play();
}

function wearing(event){
    const mouseX = event.clientX;
    document.querySelector('#girl_4').style.left = mouseX-170+ 'px';
    if (mouseX>800){
        document.querySelector('#carpet_4').style.left ='720px';
        let CameraRoll43 = gsap.timeline(); 
        CameraRoll43.fromTo("#carpet_L_4",
        {y:-300,
         opacity:1},
        {y:-530,
        scale:0.4,
        opacity:0,
        ease: "power2.out",
        duration:5}
        )
        setTimeout(playwhoosh, 1000);
    }
    StopAllAudio();
    run_audio.play();
    run_audio.volume=0.2;
}

// LOAD SCREEN 5 ///////////////////////////////////////////////
function loadScreen5() {
    // animate content on with delays
    gsap.from("#screen5 h1", {
        duration: dur,
        delay: delay,
        opacity: 0
    });

    StopAllAudio();
    bgm.play();
    bgm.volume = 0.2;
}

document.querySelector('#girl_5').addEventListener('click',zoomin5);
document.querySelector('#DreamCatch_1_5').addEventListener('drag',function(){
    StopAllAudio();
    rotateImage5('#DreamCatch_1_5', "#L_Feather_Line_1_5", "#R_Feather_Line_1_5", "#DreamCatch_1_L_feather_5", "#DreamCatch_1_R_feather_5");
    pacman();
    pacman2();
    setTimeout(playpacman, 9000);
    setTimeout(playpacman, 12000);
    setTimeout(play5_5audio, 15000);
    });
document.querySelector('#DreamCatch_2_5').addEventListener('drag',function(){
    StopAllAudio();
    rotateImage5('#DreamCatch_2_5', "#L_Feather_Line_2_5", "#R_Feather_Line_2_5", "#DreamCatch_2_L_feather_5", "#DreamCatch_2_R_feather_5");
    ghostflowing();
    ghostflowing2();
    setTimeout(playghost, 9000);
    setTimeout(playghost, 12000);
    });
document.querySelector('#DreamCatch_3_5').addEventListener('drag',function(){
    StopAllAudio();
    rotateImage5('#DreamCatch_3_5', "#L_Feather_Line_3_5", "#R_Feather_Line_3_5", "#DreamCatch_3_L_feather_5", "#DreamCatch_3_R_feather_5");
    cloudflowing();});
document.querySelector('#DreamCatch_4_5').addEventListener('drag',function(){
    StopAllAudio();
    rotateImage5('#DreamCatch_4_5', "#L_Feather_Line_4_5", "#R_Feather_Line_4_5", "#DreamCatch_4_L_feather_5", "#DreamCatch_4_R_feather_5");
    heartflowing();
    heartflowing2();
    setTimeout(playheartbeat, 9000);
    setTimeout(playheartbeat, 12000);
    setTimeout(play5_2audio, 15000);
 });

function playheartbeat(){
    heartbeat_audio.play();
}

function playghost(){
    ghost_horror_audio.play();
}

function playpacman(){
    pac_man_audio.play();
    pac_man_audio.volume=0.2;
}

function play5_2audio(){
    Slide5_2_audio.play();
}

function play5_5audio(){
    Slide5_5_audio.play();
}

function zoomin5(){
    let CameraRoll35 = gsap.timeline();
    CameraRoll35.fromTo(".zoom_top_5",
        {opacity:0,
         scale:1.3,
         y:-150},
        {opacity:1,
         scale:1,
         y:0,
        duration:5}
    )

      StopAllAudio();
      wind_chimes_audio.play();
      Slide5_4_audio.play();
    }

    var initialMouseY;
    var initialMouseX;
    var rotationDegree = 0;

function rotateImage5(wheel, Lline, RLine, LFeather, RFeather) {
      console.log("wheel");   

      function rotateImageMousePosition(event){
      if (initialMouseY === undefined) {
          initialMouseY = event.clientY;
        }
        if (initialMouseX === undefined) {
          initialMouseX = event.clientX;
        }
        
        var deltaY = event.clientY - initialMouseY;
        var deltaX = event.clientX - initialMouseX;
        rotationDegree = (deltaY+deltaX)/1.5; // Adjust the rotation speed as needed
    }

        rotateImageMousePosition;

        var image = document.querySelector(wheel);
        image.style.transform = 'rotate(' + rotationDegree + 'deg)';
        
        let CameraRoll3 = gsap.timeline();
        CameraRoll3.fromTo(Lline,
        {height:0},
        {height:"55px", duration:2}
        )
        .fromTo(LFeather,
        {opacity:0},
        {opacity:1, duration:2}
        )
        .fromTo(RLine,
        {height:0},
        {height:"40px", duration:2}
        )
        .fromTo(RFeather,
        {opacity:0},
        {opacity:1, duration:2}
        );

        let CameraRoll2 = gsap.timeline();
        CameraRoll2.fromTo(".zoom_center",
        {opacity:0,
        scale:1.5,
        y:50},
        {opacity:1,
         scale:1,
         y:0,
         delay:8,
        duration:3}
        );
       
        StopAllAudio();
        rotate_audio.play();
      }

    function heartflowing(){
        let CameraRoll36 = gsap.timeline();
        CameraRoll36.fromTo("#W_heart_5",
        {opacity:0,
        scale:0.4,
        y:0},
        {opacity:1,
         scale:1,
         y:-70,
         delay:7,
         ease: "power2.out",
        duration:3}
        )
        .to("#W_heart_5",
        {x:320,
         ease: "power2.in",
        duration:5}
        );

    }

    function heartflowing2(){
        console.log("heartunlocked");
        let CameraRoll37 = gsap.timeline();
        CameraRoll37.fromTo("#P_heart_5",
        {opacity:0,
        scale:0.4,
        y:0},
        {opacity:1,
         scale:1,
         y:-70,
         delay:9,
         ease: "power2.out",
        duration:3}
        )
        .to("#P_heart_5",
        {x:300,
         ease: "power2.in",
        duration:5}
        )
        .fromTo("#graph_desc_2_1_5",
        {opacity:0},
        {opacity:1}
        );
      
    }

    function ghostflowing(){
        let CameraRoll38 = gsap.timeline();
        CameraRoll38.fromTo("#R_ghost_5",
        {opacity:0,
        scale:0.4,
        y:0},
        {opacity:1,
         scale:1,
         y:-220,
         delay:7,
         ease: "power2.out",
        duration:3}
        )
        .to("#R_ghost_5",
        {x:380,
         ease: "power2.in",
        duration:5}
        );

    }

    function ghostflowing2(){
        let CameraRoll39 = gsap.timeline();
        CameraRoll39.fromTo("#L_ghost_5",
        {opacity:0,
        scale:0.4,
        y:0},
        {opacity:1,
         scale:1,
         y:-240,
         delay:9,
         ease: "power2.out",
        duration:3}
        )
        .to("#L_ghost_5",
        {x:260,
         ease: "power2.in",
        duration:5}
        )
        .fromTo(".graph_1_5",
        {opacity:0},
        {opacity:1,
        duration:3})
    }
      
    function pacman(){
       let CameraRoll40 = gsap.timeline();
       CameraRoll40.fromTo("#main_text_1_5",
       {opacity:1},
       {opacity:0,
        duration:5})
       .fromTo("#pac_man_1",
       {opacity:0,
        scale:0.4,
        x:0,
        y:0},
        {opacity:1,
         scale:0.6,
         y:-200,
         delay:7,
         ease: "power2.out",
        duration:3}
       )
       .fromTo("#pac_man_1",
        {rotate:90},
        {rotate:0,
         duration:3},
       )
       .fromTo("#pac_man_1",
        {x:0},
        {x:-580,
        ease: "power2.out",
        duration:10}
       )
       }
    
    function pacman2(){
        let CameraRoll41 = gsap.timeline();
        CameraRoll41.fromTo("#pac_man_2",
        {opacity:0,
         scale:0.4,
         x:0,
         y:0},
        {opacity:1,
         scale:0.8,
         y:-260,
         delay:7,
         ease: "power2.out",
         duration:3}
        )    
        .fromTo("#pac_man_2",
        {rotate:90},
        {rotate:0,
         duration:3},
       )
       .fromTo("#pac_man_2",
        {x:0},
        {x:-80,
        ease: "power2.out",
        duration:3}
       )
       .fromTo(".pac_man_eat",
       {opacity:1},
       {opacity:0,
        duration:3}
       )
       .fromTo("#pac_man_2",
       {x:-80},
       {x:-580,
       ease: "power2.out",
       duration:7}
      )
       .fromTo(".chart_1_5",
       {opacity:0},
       {opacity:1,
       duration:3})
    }

    function cloudflowing(){
       let CameraRoll42 = gsap.timeline();
       CameraRoll42.fromTo("#girl_5",
       {x:0},
       {x:-60,
        delay:6,
       ease: "power2.out",
       duration:3}
       )
       .fromTo("#girl_5",
       {x:-60},
       {x:-260,
       ease:"power2.out",
       delay:1,
       duration: 5})
       .fromTo(".DreamCatch_3",
       {x:0},
       {x:-200,
       ease:"power2.out",
       delay:-2,
       duration: 5})
       .fromTo(".DreamCatch_3_E",
       {opacity:1},
       {opacity:0,
        duration:4})
       .fromTo('.chart_2_5',
       {opacity:0},
       {opacity:1,
        delay:0,
        duration:4})
    }

// LOAD SCREEN 6 ///////////////////////////////////////////////
function loadScreen6() {
    // animate content on with delays
    gsap.from("#screen6 h1", {
        duration: dur,
        delay: delay,
        opacity: 0
    });

    StopAllAudio();
    bgm.play();
    bgm.volume = 0.2;
    Slide5_3_audio.play();
}

document.querySelector('#DreamCatch_6').addEventListener('drag',rotateImage6);

document.querySelector('#girl_6').addEventListener('click',zoomin6);

var initialMouseY;
    var initialMouseX;
    var rotationDegree = 0;

    function rotateImage6(event) {
        if (initialMouseY === undefined) {
          initialMouseY = event.clientY;
        }
        if (initialMouseX === undefined) {
          initialMouseX = event.clientX;
        }
        
        var deltaY = event.clientY - initialMouseY;
        var deltaX = event.clientX - initialMouseX;
        rotationDegree = (deltaY+deltaX)/1.5; // Adjust the rotation speed as needed
  
        var image = document.getElementById('DreamCatch_6');
        image.style.transform = 'rotate(' + rotationDegree + 'deg)';
        
        let CameraRoll33 = gsap.timeline();
        CameraRoll33.fromTo('#L_Feather_Line_6',
        {height:0},
        {height:"110px", duration:2}
        )
        .fromTo('#L_feather_6',
        {opacity:0},
        {opacity:1, duration:2}
        )
        .fromTo('#R_Feather_Line_6',
        {height:0},
        {height:"65px", duration:2}
        )
        .fromTo('#R_feather_6',
        {opacity:0},
        {opacity:1, duration:2}
        );

        let CameraRoll34 = gsap.timeline();
        CameraRoll34.fromTo(".zoom_center_6",
        {opacity:0,
        scale:1.5,
        y:50},
        {opacity:1,
         scale:1,
         y:0,
         delay:8,
        duration:3}
        );

        StopAllAudio();
        rotate_audio.play();
    }


    function zoomin6(event) {
        let CameraRoll35 = gsap.timeline();
        CameraRoll35.fromTo("#left_references_6",
        {opacity:0,
        scale:1.5,
        y:50},
        {opacity:1,
         scale:1,
         y:0,
         delay:4,
        duration:3}
        )
        .fromTo("#right_references_6",
        {opacity:0,
        scale:1.5,
        y:50},
        {opacity:1,
         scale:1,
         y:0,
         delay:4,
        duration:3}
        );
        
        StopAllAudio();
        wind_chimes_audio.play();
      }