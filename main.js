//PSEUDO CODE
//intervals of 10 minutes - max time two hours
            //onclick event invokes our countdown function
        //countdown function that runs every time interval specified by the user
        //once time is up, pop up window appears where user inputs water intake

//water input
 //ask the user how much water oz they want to drink?
    //needs to be wrapped in a form
    //change the icon when user drinks (3 phases)
    //store and reassign the user input everytime they enter the amount
    //if they've reached 64oz, they get a fun gif

//MAJOR ISSUE: THE COUNTDOWN FUNCTION STOPS WHEN THE USER SWITCHES TABS
    //clicking outside of extension will stop countdown and exit out of extension
    //look into chrome API as possible solution
//Pop-up input that asks user for how often user wants to be reminded to drink water
    let button = document.querySelector("button")
    let select = document.querySelector("select")
    let startTime = 10
    let time;
    let goal;
    let userOz = 0;
   
//add event listener to button
    button.addEventListener('click', function () {
        time = document.querySelector("select").value;
        time = Number(time);
        goal = document.querySelector('#goal').value;
        goal = Number(goal);
        console.log(goal);
        console.log(time);
        //grab the starting time for countdown in milliseconds
        startTime = new Date().getTime();
        //console.log('start is' , startTime);
        //create html tag and passin the startTime
        var storage = document.createElement('div');
        storage.setAttribute('id', 'starttime');
        storage.innerHTML = startTime;
    })
    
//countdown function
    const coundown = setInterval((function(){
        if (startTime) {
            //grab current time
            const curr = new Date().getTime();
            //console.log(curr);
            //compare with startTime from onlick
            const diff = curr - startTime;
            if (diff > .1 * 60 * 1000) {
                getValue()
                //give user an option if they want to continue to receive reminders
                startTime = new Date().getTime();
            }
        }
    }), 1000)

//popup function
    function getValue() {
        var retVal = prompt("Time to take a sip! Make sure to enter how much water you drank: ", "in oz please :)");
        console.log('user oz is', userOz)
        console.log('user input is', Number(retVal))
        console.log('userGoal is', goal)
        userOz += Number(retVal)
        //if the user reaches their total goal, call celebratory function
        if(userOz >= goal){
            yayHydration()
        }
     }
     //celebratory function, pops up image of cute pug chugging h20
    function yayHydration(){
        alert(`Nice job! You drank ${goal} oz today. Keep chugging away!`)
        var congrats = document.createElement('iframe');
        congrats.src="https://giphy.com/embed/da5BxvjlRRP9soY36k" 
        congrats.width="480" 
        congrats.height="480" 
        congrats.class="giphy-embed"
        document.body.appendChild(congrats);
        clearInterval(coundown)
    }

     //FRIDAY GOALS
     //prompt message and manifestJSON link to be a proper extension
     //sty;ing



