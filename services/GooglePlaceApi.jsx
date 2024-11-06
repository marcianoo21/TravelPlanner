export const GetPhotoRef = async(placeName) => {
    const response = await fetch('https://maps.googleapis.com/maps/api/place/textsearch/json'+'?query='+ placeName +'&key=' + process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY)

    const result = await response.json()

    console.log("Photo ref:", result.results[0].photos[0].photo_reference)

    const photo = result.results[0].photos[0].photo_reference
    return photo
}