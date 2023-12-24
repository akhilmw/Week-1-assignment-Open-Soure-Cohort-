// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)



const getTime = () => {

    const now = new Date();

    let hours = now.getHours();
    let mins = now.getMinutes();
    let secs = now.getSeconds();

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Handle midnight (12 AM)

    hours = hours < 10 ? '0' + hours : hours
    mins = mins < 10 ? '0' + mins : mins
    secs = secs < 10 ? '0' + secs : secs

    const formattedTime = `${hours}:${mins}:${secs} ${ampm}`;
    
    console.clear();
    console.log(formattedTime);
}


setInterval(getTime, 1000)


