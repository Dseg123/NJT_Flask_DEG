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

/*
export const fetchTreeData = async (endpoint: string): Promise<TreeData[]> => {
  try {
    const res = await fetch(endpoint);
    const resJson = await res.json();

    if (!resJson.is_valid) {
      console.log('Invalid response from server');
      return [];
    }

    return convertJsonToTrees(resJson.data);
  } catch (error) {
    console.error('Error fetching tree data:', error);
    return [];
  }
};
*/

// const convertJsonToTrees = (data: any[]): TreeData[] => {
//   return data.map((item) => ({
//     latinName: data[i][0],
//     commonName: data[i][1],
//     address: data[i][2],
//     comments: data[i][3],
//     plantingSeason: data[i][4],
//     plantingYear: data[i][5],
//     treeCareTaker: data[i][6],
//     nursery: data[i][7],
//     replacementTree: data[i][8],
//     city: data[i][9],
//     coords: JSON.parse(data[i][10])
//   }));
// };

//  const treeNames = ['okame cherrsy', 'Red Maple', 'Linden'];
//  const cities = ['Newark', 'New Haven', 'Princeton'];
//  const speciesNames = ['tilia cordata', 'prunus okame', 'acer campestre', 'cercis canadensis'];
//  const seasons = ['Fall', 'Summer', 'Spring', 'Winter']

const convertJsonToTrees = (data: any): TreeData[] => {
  const trees: TreeData[] = [];

  for (let i = 0; i < data.length; i++) {
    const tree: TreeData = {
      latinName: data[i]['Species - Latin Name'],
      commonName: data[i]['Common Name'],
      address: data[i]['Address'],
      comments: data[i]['Comments'],
      plantingSeason: data[i]['Planting Season'],
      plantingYear: data[i]['Planting Year'],
      treeCareTaker: data[i]['Tree Care-taker'],
      nursery: data[i]['Nursery'],
      replacementTree: data[i]['Replacement tree'],
      city: data[i]['City'],
      coords: data[i]['Coords']
    };
    trees.push(tree);
  }

  return trees;
};

// Fetch data function
export const fetchTreeData = async (): Promise<TreeData[]> => {
  try {
    console.log('HI');
    const apiURL = 'http://localhost:5000/get_items';
    const res = await fetch(apiURL);
    console.log(res);
    const resJson = await res.json(); // Assuming your API returns an array of Tree objects
    console.log(resJson);

    return convertJsonToTrees(resJson);
  } catch (error) {
    console.error('Error fetching tree data:', error);
    return []; // Return an empty array in case of error
  }
};
