//Haversine formula	
//a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)
//c = 2 ⋅ atan2( √a, √(1−a) )
//d = R ⋅ c

exports.haversine = (firstLocation, secondLocation) => {
    firstLocation = toRadians(firstLocation);
    secondLocation = toRadians(secondLocation);

    const earthRay = 6371e3;
    const deltaLat = secondLocation.lat - firstLocation.lat;
    const deltaLong = secondLocation.long - firstLocation.long;

    const a = Math.pow(Math.sin(deltaLat / 2), 2) +
        Math.cos(firstLocation.lat) *
        Math.cos(secondLocation.lat) *
        Math.pow(Math.sin(deltaLong / 2), 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = earthRay * c

    return Math.round(d); //Aproximado
};

exports.isNear = (distance, meters) => {
    return distance <= meters
}

const toRadians = location => {
    return {
        lat: location.lat * Math.PI / 180,
        long: location.long * Math.PI / 180,
    }
}