//  Use Function to loop through array and create new array with the items that meet our conditions

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
  ['Codeville Epic Academy', 15, 'school'],
  ['Big Al Pizza', 50, 'restaurant']
];


// function chooseStations(stations) {
function chooseStations(stations) {
  const goodStations = [];

  for (const station of stations) {
    const capacity = station[1];


    if (capacity >= 20) {
      // console.log('Station capacity is:' + capacity);
      const type = station[2];

      if (type === "school" || type === "community centre") {
        // console.log(station[0]);
        goodStations.push(station[0]);
      }
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));