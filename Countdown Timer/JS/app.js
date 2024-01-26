const endDate = " 18 August 2024 10:00 AM "

document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input")



// we can write the functions in two diffeernt ways 
// function clock{ }

// this is arrow function
const clock = () => {
    const end = new Date(endDate)
    const now = new Date()

    console.log(end, now)

    //getting the days remaining 
    const dif = (end - now);
    console.log(dif)

    if (dif < 0) return 0;

    //converting into days hours and seconds 

    //calculating days 
    console.log(Math.floor(dif / (1000 * 60 * 60 * 24)));
    inputs[0].value = Math.floor(dif / (1000 * 60 * 60 * 24));

    //calcualting hours
    inputs[1].value = Math.floor((dif % (1000 * 60 *60*24)) / (1000 * 60 * 60));
    //calcutating minutes
    inputs[2].value = Math.floor((dif % (1000 * 60*60 )) / (1000 * 60));
    //calculating seconds 
    inputs[3].value = Math.floor((dif % (1000 *60)) / 1000);


    //calculate Hours 


}

setInterval(() => {
    clock()
}, 100)