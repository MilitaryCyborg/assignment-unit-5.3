console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

myCollection = [];

//start addToCollection function
function addToCollection(collection, title, artist, yearPublished) {
  const album = {
    title,
    artist,
    yearPublished
  };

  collection.push(album);
  return album;
}
//end addToCollection function

//start of music collection
let addedAlbum = addToCollection(myCollection, "Mystery", "Tale Of Us", 2019);
console.log("Album added:", addedAlbum);

let addedAlbum1 = addToCollection(myCollection, "In Chicago", "John Summit", 2022);
console.log("Album added:", addedAlbum1);

let addedAlbum2 = addToCollection(myCollection, "Thing Called Love", "Above & Beyond", 2010);
console.log("Album added:", addedAlbum2);

let addedAlbum3 = addToCollection(myCollection, "Blue Sky Action", "Above & Beyond", 2015);
console.log("Album added:", addedAlbum3);

let addedAlbum4 = addToCollection(myCollection, "Because You Move Me", "Tinlicker", 2022);
console.log("Album added:", addedAlbum4);

let addedAlbum5 = addToCollection(myCollection, "Fractal", "Tinlicker", 2020);
console.log("Album added:", addedAlbum5);

let addedAlbum6 = addToCollection(myCollection, "Heroes (we could be)", "Alesso", 2014);
console.log("Album added:", addedAlbum6);
//end of music collection

//start of showCollection
function showCollection(collection) {
  for (let i = 0; i < collection.length; i++) {
    let album = collection[i];
    let albumInfo = `${album.title} by ${album.artist}, released in ${album.yearPublished}`;
    console.log(albumInfo);
  }
  return "Collection displayed successfully!";
}
//end of showCollection

//start of findByArtist
function findByArtist(collection, artist) {
  let results = [];
  
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].artist === artist) {
      results.push(collection[i]);
    }
  }
  
  return results;
}
//end of findByArtist

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
