function calculateAge(){
    // let date=document.getElementById("date_field").value;
    // let month=document.getElementById("month_field").value;
    // let year=document.getElementById("year_field").value;

    let userDOB=document.getElementById("userDOB").value;

    // console.log(date);
    // console.log(month);
    // console.log(year);
    console.log(userDOB);

    // let dob=new Date(`${date} ${month} ${year}`);
    
    let dob=new Date(userDOB);

    let now=new Date();
    // if(date>31){
    //     alert("Invalid date");
    //     return;
    // }
    // console.log(dob);
    // let differenceDOB=now-dob;

    let differenceDOB=now-dob;

    console.log(differenceDOB);
    // let days=Math.ceil(differenceDOB/(1000*60*60*24));
    // console.log(days); 
    
    // let years=Math.ceil(differenceDOB/(1000*60*60*24*365));
    
    // console.log(years);  //27
    let days1=Math.floor(differenceDOB/(1000*60*60*24));
    let years1=Math.floor(differenceDOB/(1000*60*60*24*365));
    console.log(days1);
    console.log(years1);  //26
    alert(`Your Age is ${days1} days or ${years1} years.`);
    
   
}