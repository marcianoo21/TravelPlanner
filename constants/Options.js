export const SelectTravelerList = [
    {
        id: 1,
        title: "Just Me",
        desc: 'A single traveler in exploration',
        icon: '✈️',
        people: '1'
    },
    {
        id: 2,
        title: "Couple",
        desc: 'Two travelers in tandem',
        icon: '🥂',
        people: '2'
    },
    {
        id: 3,
        title: "Family",
        desc: 'A group of adventures',
        icon: '👨‍👩‍👦',
        people: '3 to 6'
    },
    {
        id: 4,
        title: "Friends",
        desc: 'A bunch of thrill-seekers',
        icon: '🏕️',
        people: '3 to 10'
    }
]

export const SelectBudgetOptions = [
    {
        id: 1,
        title: "Cheap",
        desc: 'Budget-friendly trips',
        icon: '💰',
    }, 
    {
        id: 2,
        title: "Moderate",
        desc: 'Balanced trips',
        icon: '💸',
    }, 
    {
        id: 3,
        title: "Luxury",
        desc: 'No expense spared',
        icon: '💎',
    },
]

export const AI_PROMPT = 'Generate Travel Plan for Location: {location}, for {totalDays} Days and {totalNight} Night for {traveler} with a {budget} budget with a Flight details, Flight Price with Booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel each of the location for {totalDays} days and {totalNight} night with each day plan with best time to visit in JSON format.'