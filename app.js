// global vars

// SECTION GLOBAL VARS
const locations = [
    '🏤', '🏥', '🏭', '🏢', '🏣'
]

const people = [{
    name: 'Jimbo',
    picture: '🤵',
    location: '🏤'
},
{
    name: 'Sammy',
    picture: '🙆‍♀️',
    location: '🏤'
},
{
    name: 'Michael',
    picture: '👷',
    location: '🏤'
},
{
    name: 'Robert',
    picture: '👷',
    location: '🏥'
},
{
    name: 'Terry',
    picture: '🤴',
    location: '🏥',
},
{
    name: 'Bill',
    picture: '🕵️',
    location: '🏥',
},
{
    name: 'Marie',
    picture: '👩‍🍳',
    location: '🏭',
},
{
    name: 'Mykeal',
    picture: '💂',
    location: '🏭',
},
{
    name: 'Phil',
    picture: '🧜‍♂️',
    location: '🏭',
},
{
    name: 'Wilson',
    picture: '🏐',
    location: '🏢',
},
{
    name: 'Wendy',
    picture: '👩‍⚕️',
    location: '🏢',
},
{
    name: 'Jeremy',
    picture: '🦹',
    location: '🏢',
}
]

// !SECTION


// SECTION FUNCTIONS

function drawPeopleToLocations() {

    locations.forEach(location => {

        const peopleAtLocation = people.filter(person => person.location == location)

        console.log(peopleAtLocation)

        let locationEmojis = ''

        peopleAtLocation.forEach(person => locationEmojis += person.picture)

        console.log(location)

        const locationsElement = document.getElementById(location)
        locationsElement.innerText = locationEmojis



    })
}

function shufflePeople() {

    people.forEach(person => {
        if (person.picture == '🦇') {
            return
        }
        const randomLocationIndex = Math.floor(Math.random() * locations.length)
        const randomLocation = locations[randomLocationIndex]
        person.location = randomLocation

    })
    drawPeopleToLocations()


}

function attack(location) {
    const foundPeople = people.filter(person => person.location == location)
    const attackedPeople = location[foundPeople]
    attackedPeople.picture = '🦇'

    console.log(attackedPeople)

    drawPeopleToLocations()

}








// !SECTION


// SECTION CALLING FUNCTIONS

drawPeopleToLocations()

// !SECTION 