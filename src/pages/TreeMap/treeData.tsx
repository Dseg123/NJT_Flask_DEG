export interface TreeData {
  latinName: string;
  commonName: string;
  address: string;
  comments: string;
  plantingSeason: string;
  plantingYear: string;
  treeCareTaker: string;
  nursery: string;
  replacementTree: string;
  city: string;
  coords: [number, number];
}

const treeNames = ['okame cherry', 'Red Maple', 'Linden'];
const cities = ['Newark', 'New Haven', 'Princeton'];
const speciesNames = ['tilia cordata', 'prunus okame', 'acer campestre', 'cercis canadensis'];
const seasons = ['Fall', 'Summer', 'Spring', 'Winter'];

// export const generateTrees = (count: number): TreeData[] => {
//   const trees: TreeData[] = [];

//   for (let i = 0; i < count; i++) {
//     const randomNameIndex = Math.floor(Math.random() * treeNames.length);
//     const randomSpeciesIndex = Math.floor(Math.random() * speciesNames.length);
//     const randomCityIndex = Math.floor(Math.random() * cities.length);
//     const randomSeasonIndex = Math.floor(Math.random() * seasons.length);
//     const randomLatitude = Math.random() * (42 - 39 + 1) + 39;
//     const randomLongitude = Math.random() * (-71 + 69 + 1) - 71;
//     const randomYear = 2017;
//     const randomCaretaker = 'new jersey';

//     const tree: TreeData = {
//       city: cities[randomCityIndex],
//       name: treeNames[randomNameIndex],
//       species: speciesNames[randomSpeciesIndex],
//       coords: [parseFloat(randomLatitude.toFixed(2)), parseFloat(randomLongitude.toFixed(2))],
//       plantYear: randomYear.toString(),
//       caretaker: randomCaretaker,
//       season: seasons[randomSeasonIndex]
//     };

//     trees.push(tree);
//   }

//   return trees;
// };
