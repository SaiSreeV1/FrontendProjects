                      //  Implement the JavaScript code so that every time you click the “Party Time!” button in the time range that you specify, you get a different LOLcat. You can set different times to see different images — there are four images total
                       
                       var wakeuptime=6;
                                  var noon=12;
                                  var lunchtime=12;
                                  var naptime=lunchtime+1;
                                  var partyTime;
                                  var evening=16;
                                  var night=21;
                                  
                                  // Getting it to show the current time on the page
                              var showCurrentTime = function(){
                                console.log(partyTime);
                                  // display the string on the webpage
                                  var clock=document.getElementById('clock');
                                  var currenttime=new Date();
                                  var date=currenttime.getDate();
                                  var month=currenttime.getMonth()+1;
                                  // +1 converts the month from digital (0-11) to normal
                                  var year=currenttime.getFullYear();
                                  
                                  var fulldate=date+" / "+month+" / "+year;

                                      
                                      var datedisplay=document.getElementById('date');
                                      datedisplay.innerText=fulldate;
                                    
                                      
                      // just specifying getting current date,hours.min,sec,msec store in variable
                              
                              
                                  var currentHours=currenttime.getHours();
                                  var currentMinutes=currenttime.getMinutes();
                                  var currentSeconds=currenttime.getSeconds();
                                  
                                  var meridian="AM";

                      // setting the data we got date,h,min,sec,msec, meridian
                  

                      if(currentHours>=noon){
                          meridian="PM";
                      }
                      // set hours
                      if(currentHours>noon){
                          currentHours=currentHours-12;

                      }
                      
                      //  set minutes
                      if(currentMinutes<10){
                          currentMinutes="0"+currentMinutes;
                          
                      }
                      // set seconds
                      if(currentSeconds<10){
                          currentSeconds="0"+currentSeconds;
                          
                      }
                  
                  
                  
                          var clockTime=currentHours+":"+currentMinutes+":"+currentSeconds+" "+meridian;
                          clock.innerText=clockTime;
                          console.log("clocktime "+clockTime)
                          
                          //return clockTime+" "+fulldate;
                              };
                              // showCurrentTime()
                              console.log(showCurrentTime());
                              // Getting the clock to increment on its own and change out messages and pictures
          var updateClock = function() 
          {
            var time = new Date().getHours();
            console.log("time in hours "+time);
            var messageText;
            var image = "https://images.unsplash.com/photo-1541480601022-2308c0f02487?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80";

            var timeEventJS = document.getElementById("timeEvent");
            var imageJS = document.getElementById('image');
          
            if (time == partyTime)
            {
              image = "https://cdn3.vectorstock.com/i/1000x1000/86/57/party-time-vector-8458657.jpg";
              messageText = "Let's party!";
              console.log("party time "+partyTime);
              
            }
            
            else if (time == wakeuptime)
            {
              image = "https://media.istockphoto.com/vectors/angry-alarm-clock-flat-character-illustration-wakeup-time-concept-vector-id606704950";
              messageText = "Wake up!";
            }
            else if (time == lunchtime)
            {
              image = "https://en.pimg.jp/055/986/186/1/55986186.jpg";
              messageText = "Let's have some lunch!";
            }
            else if (time == naptime)
            {
              image = "https://images-na.ssl-images-amazon.com/images/I/81ZLKWMsfEL.jpg";
              messageText = "Sleep tight!";
            }
            else if (time < noon)
            {
              image = "https://images.8tracks.com/cover/i/010/212/385/2.5_version-6473.jpg?rect=560,0,1440,1440&q=98&fm=jpg&fit=max";
              messageText = "Good morning!";
            }
            else if (time<night && time >= evening)
            {
              image = "https://i.ytimg.com/vi/oRxjsjLPnO4/maxresdefault.jpg";
              messageText = "Good evening!";
            }
            else if (time>=night){
              image="https://image.shutterstock.com/image-vector/night-time-full-moon-view-260nw-1460493929.jpg";
              messageText="Good night! Have a sound sleep!"
            }
            else
            {
              image = "https://www.smitcreation.com/sc/05/34058/34058.jpg";
              messageText = "Good afternoon!";
            }

            console.log(messageText); 
            timeEventJS.innerText = messageText;
            imageJS.src = image;
            
            showCurrentTime();
          };
        updateClock();
        
   
          // Getting the clock to increment once a second
          // setInterval(updateClock,1000);
          var oneSecond=1000;
      var updatedClock= setInterval(updateClock,oneSecond);
      // setInterval method default return id by the javascript inbuilt code itself so we get 2 when debugging

        console.log("upatedclock "+updatedClock);

        
          //  Getting the Party Time Button To Work
          var partyTimeButton=document.getElementById('partyTimeButton');
          var partyEvent=function(){
            if(partyTime<0)
          
            //if partyTime is false  i.e < 0 means false value
            {
            
    partyTime=new Date().getHours();
    partyTimeButton.innerText="Party Over!";
    partyTimeButton.style.backgroundColor="#0A8DAB";
    }
  else
    {
      
    partyTime=-1;
  
  
    partyTimeButton.innerText="Party Time";
    partyTimeButton.style.backgroundColor="#222";

    }
            
          };
          partyTimeButton.addEventListener('click',partyEvent);
          partyEvent();

          // Activates Wake-Up selector
          var wakeUpTimeSelector=document.getElementById('wakeUpTimeSelector');
          var wakeUpEvent=function(){
            wakeuptime=wakeUpTimeSelector.value;
          };
          wakeUpTimeSelector.addEventListener("change",wakeUpEvent);
          
          // Activates lunch Time Selector
          var lunchTimeSelector=document.getElementById('lunchTimeSelector');
          var lunchTimeEvent=function(){
            lunchtime =lunchTimeSelector.value;
          };
          lunchTimeSelector.addEventListener("change",lunchTimeEvent);
          
          // Activates nap Time selector
          var napTimeSelector=document.getElementById('napTimeSelector');
          var napTimeEvent=function(){
            naptime=napTimeSelector.value;
          };
          napTimeSelector.addEventListener("change",napTimeEvent);


          