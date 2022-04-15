// const contents = document.getElementById('contents');
// //capture parent in a variable
// const parent = contents.parentNode
// //now delete contents
// contents.parentNode.removeChild(contents);

// //get background image and attach to parent
// const img = document.createElement('img');
// img.src = 'https://www.roadaffair.com/wp-content/uploads/2020/12/thi-lo-su-waterfall-thailand-shutterstock_1556344196.jpg';
// parent.prepend(img);

//need a function that will capture current date
    // let today = new Date();
    // let date = `${today.getMonth()+1}.${today.getDate()}.${today.getFullYear()}`
    // const dateEl = document.createElement('div');
    // dateEl.innerText = date;
    // parent.appendChild(dateEl)

    //Good Habits
    //Pop-up input that asks user for how often user wants to be reminded to drink water
    let button = document.querySelector("button")
    let select = document.querySelector("select")
    let startTime;
    let time;
    let goal;
   
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
    })
    
    //countdown function
    const coundown = setInterval((function(){
        if (startTime) {
            //grab current time
            const curr = new Date().getTime();
            //console.log(curr);
            //compare with startTime from onlick
            const diff = curr - startTime;
            console.log(diff)
            if (diff > time * 60 * 1000) {
                getValue()
                //give user an option if they want to continue to receive reminders
                startTime = new Date().getTime();
            }
        }
    }), 1000)

    //popup function
    function getValue() {
        var retVal = prompt("Enter your name : ", "your name here");
        console.log(retVal);
     }

     //FRIDAY GOALS
     //prompt message and manifestJSON link to be a proper extension
     //sty;ing

    //intervals of 10 minutes - max time two hours
            //onclick event invokes our countdown function
        //countdown function that runs every time interval specified by the user
        //once time is up, pop up window appears where user inputs water intake

    //water input
    //ask the user how much water they want to drink?
    //needs to wrapped be wrapped in a form
        //asks user how many oz of water they drank
            //change the icon when user drinks (3 phases)
            //store and reassign the user input everytime they enter the amount
            //if they've reached 64oz, they get a fun video?
//ACTUAL CODE

