const albumId = 'SOME_ALBUM_ID';

fetch(`https://api.spotify.com/v1/albums/${albumId}`)
  .then(response => response.json())
  .then(data => {
    const albumImageUrl = data.images[0].url; // get the URL of the first image in the images array
    // use the albumImageUrl to set the background image of an HTML element
  })
  .catch(error => {
    console.error('Error fetching album data:', error);
  });