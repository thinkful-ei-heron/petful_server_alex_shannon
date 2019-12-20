//Cat array of objects
// {
//   imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
//   imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
//   name: 'Fluffy',
//   sex: 'Female',
//   age: 2,
//   breed: 'Bengal',
//   story: 'Thrown on the street'
// }
//
// Dog array of objects
// {
//   imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
//   imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
//   name: 'Zeus',
//   sex: 'Male',
//   age: 3,
//   breed: 'Golden Retriever',
//   story: 'Owner Passed away'
// }
//User array of object
// {
//   name: 'Some Name',
// }
//Adoption Success array of objects
// {
//   animalName:'',
//   imageUrl:'',
//   humanName:''
// }
let STORE = {
  dogs: [
    {
      imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
      imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
      name: 'Zeus',
      sex: 'Male',
      age: 3,
      breed: 'Golden Retriever',
      story: 'Owner Passed away'
    },
    {
      imageURL: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      imageDescription: 'A smiling golden-brown dog',
      name: 'Fluffers',
      sex: 'Female',
      age: 3,
      breed: 'Akita',
      story: 'Found downtown'
    },
    {
      imageURL: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      imageDescription: 'Black pug.',
      name: 'Bo',
      sex: 'Male',
      age: 3,
      breed: 'Pug',
      story: 'Owner Passed away'
    },
    {
      imageURL: 'https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      imageDescription: 'Border collie.',
      name: 'Shep',
      sex: 'Male',
      age: 3,
      breed: 'Collie',
      story: 'Owner Passed away'
    },
    {
      imageURL: 'https://images.pexels.com/photos/374898/pexels-photo-374898.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      imageDescription: 'pug.',
      name: 'Yoda',
      sex: 'Male',
      age: 3,
      breed: 'Pug',
      story: 'Owner Passed away'
    },
    {
      imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
      imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
      name: 'Zeus',
      sex: 'Male',
      age: 3,
      breed: 'Golden Retriever',
      story: 'Owner Passed away'
    },
    {
      imageURL: 'https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
      name: 'Buddy',
      sex: 'Male',
      age: 3,
      breed: 'Golden Retriever',
      story: 'Owner Passed away'
    },
    {
      imageURL: 'https://images.pexels.com/photos/1322182/pexels-photo-1322182.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      imageDescription: 'Australian sheppard',
      name: 'Pixie',
      sex: 'Female',
      age: 3,
      breed: 'Fluffy Dog',
      story: 'Owner Passed away'
    },
    {
      imageURL: 'https://images.pexels.com/photos/21259/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      imageDescription: 'terrier',
      name: 'Remy',
      sex: 'Male',
      age: 3,
      breed: 'Terrier',
      story: 'Found downtown'
    },
    {
      imageURL: 'https://images.pexels.com/photos/92380/pexels-photo-92380.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      imageDescription: 'A smiling golden-brown golden retreiver',
      name: 'Spot',
      sex: 'Male',
      age: 3,
      breed: 'Golden Retriever',
      story: 'Owner surrrendered dog'
    },
    {
      imageURL: 'https://images.pexels.com/photos/2007/animal-dog-pet-cute.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      imageDescription: 'boxer dog',
      name: 'Murphy',
      sex: 'Male',
      age: 3,
      breed: 'Boxer',
      story: 'Found in neighborhood'
    }
  ],
  cats: [
    {
      imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
      imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
      name: 'Fluffy',
      sex: 'Female',
      age: 2,
      breed: 'Bengal',
      story: 'Thrown on the street'
    },
    {
      imageURL:'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', 
      imageDescription: 'White cat',
      name: 'Snowflake',
      sex: 'Female',
      age: 2,
      breed: 'white cat',
      story: 'Thrown on the street'
    },
    {
      imageURL:'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', 
      imageDescription: 'Grey cat',
      name: 'Duffy',
      sex: 'Female',
      age: 2,
      breed: 'Bengal',
      story: 'Thrown on the street'
    },
    {
      imageURL:'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', 
      imageDescription: 'Orange cat',
      name: 'Scruffy',
      sex: 'Female',
      age: 2,
      breed: 'Bengal',
      story: 'Thrown on the street'
    },
    {
      imageURL:'https://images.pexels.com/photos/33537/cat-animal-cat-portrait-mackerel.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500', 
      imageDescription: 'Grey cat',
      name: 'Dave',
      sex: 'Male',
      age: 2,
      breed: 'Bengal',
      story: 'Thrown on the street'
    },
    {
      imageURL:'https://images.pexels.com/photos/991831/pexels-photo-991831.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', 
      imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
      name: 'Scrunches',
      sex: 'Female',
      age: 2,
      breed: 'Bengal',
      story: 'Thrown on the street'
    },
    {
      imageURL:'https://images.pexels.com/photos/691583/pexels-photo-691583.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', 
      imageDescription: 'Brown kitty',
      name: 'Cat',
      sex: 'Female',
      age: 2,
      breed: 'Bengal',
      story: 'Thrown on the street'
    },
    {
      imageURL:'https://images.pexels.com/photos/674570/pexels-photo-674570.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', 
      imageDescription: 'kitty',
      name: 'Muffy',
      sex: 'Female',
      age: 2,
      breed: 'Bengal',
      story: 'Thrown on the street'
    },
    {
      imageURL:'https://images.pexels.com/photos/54632/cat-animal-eyes-grey-54632.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', 
      imageDescription: 'grey cat',
      name: 'Dexter',
      sex: 'Male',
      age: 2,
      breed: 'Bengal',
      story: 'Thrown on the street'
    },
    {
      imageURL:'https://images.pexels.com/photos/1317844/pexels-photo-1317844.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', 
      imageDescription: 'grey cat',
      name: 'Spike',
      sex: 'Male',
      age: 2,
      breed: 'Grey cat',
      story: 'Thrown on the street'
    }
  ],
  users: [
    'Bobby Newport',
    'Leslie Knope',
    'April Ludgate',
    'Ron Swanson',
    'Jerry Gergich',
    'Joan Calamezzo',
    'Andy Dwyer',
    'Perd Hapley',
    'Mona Lisa Sapperstein',
    'Jean Ralphio Sapperstein',
    'Mark Brandanowitz',
    'Ben Wyatt',
  ],
  success: [
    {
      animalName:'Rusty',
      imageURL:'https://images.pexels.com/photos/485294/pexels-photo-485294.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      imageDescription: 'little dog',
      humanName:'Jeremy Jamm'
    }
  ]
};

module.exports = STORE;