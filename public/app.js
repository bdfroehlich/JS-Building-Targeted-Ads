// get user's data
                                                             
// Get the user's coordinates:                                                              
// function getCoords(){
//     return new Promise((resolve, reject) => {
//         navigator.geolocation.getCurrentPosition(resolve, reject)
//     })
// }

// console.log(getCoords());


//changing getCoords to async function to get just lat and long
// Get the user's coordinates:                                                              
async function getCoords(){
    pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    return [pos.coords.latitude, pos.coords.longitude]
}

//can console.log the function itself because it returns an array [latitude,longitude]
console.log(getCoords());                           

// get user's time
function userTime(){
    const now = new Date()
    //date is a javascript constructor
    return now.getHours()
    //.getHours is a method of the Date object that allows us to grab just the hour from the object in military time 
    //some number between 0 & 23
}
console.log(userTime())
                                                             
                     

// helper functions
// check time of day
function getMealTime(){
    const tod = userTime()
    return tod > 20 ? 'latenight snack' : tod > 16 ? 'dinner' : tod > 11 ? 'lunch' : 'breakfast'
    //instead of using if else statements we are using a ternary operator
}
console.log(getMealTime())


// build ads
// build ad 1
function buildAd1(){
    const mealTime = getMealTime()
    let content = document.querySelector('.ad1')
    let inner = document.createElement('p')
    inner.innerHTML = `We've got the best <span>${mealTime}</span> in town.`
    content.append(inner)
}



// build ad 2
// Build Ad 2                                                             
function buildAd2(coordinates){
    const coords = coordinates
    const href = `https://www.google.com/maps/search/coffee/@${coords[0]},${coords[1]},15z/`
    //plugs in the users current latitude and longitude using getCoords() from the window.onload async function
    //and does a google.com/maps search using those coords as seen in the href link
    let content = document.querySelector('.ad2')
    let inner = document.createElement('p')
    inner.innerHTML = `It's time to try our coffee! <span><a href="${href}" target="_blank">We're this close!</a></span>`
    content.append(inner)
}

// console.log(buildAd2(getCoords()))

// event listeners
// on load, build ads
// On load, build ads:                                                             
window.onload = async () => {
    buildAd1()
    const coords = await getCoords()
    buildAd2(coords)
}