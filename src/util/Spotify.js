// Object Model: https://developer.spotify.com/documentation/web-api/reference/object-model/

let accessToken;
let clientId = 'f0f1235359a74490a0527dc3367a5f23'; // Spotify Client ID
const redirectUri = 'https://garrownt17.github.io/jamming/build/'; // Return to portfolio site

const Spotify = {
  getAccessToken() {
    if(accessToken) {
      return accessToken;
    }
    const accessTokenURI = window.location.href.match(/access_token=([^&]*)/);
    const expiresInURI = window.location.href.match(/expires_in=([^&]*)/);

    if(accessTokenURI && expiresInURI) {
      accessToken = accessTokenURI[1];
      const expiresIn = parseInt(expiresInURI[1], 10);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/'); // Set timeout to refresh accessToken so new token can be saved when needed
      return accessToken;
    } else {
      window.location = 'https://accounts.spotify.com/authorize?client_id='+clientId+'&response_type=token&scope=playlist-modify-public&redirect_uri='+redirectUri;
    }
  },

  search(term) {
    const accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response=> {
      return response.json();
    }).then(jsonResponse=> {
      if(!jsonResponse.tracks) {
        return [];
      }
      console.log("searching");

      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    });
  },

  savePlaylist(playlistName, trackURIs) {
    if(!playlistName || !trackURIs) {
      console.log("Not saving playlist");
      return;
    }
    console.log(playlistName);
    const playlistToken = Spotify.getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`
    }
    let userId;

    return fetch('https://api.spotify.com/v1/me', {headers: headers}).then(response=>{
      return response.json();
    }).then(jsonResponse=>{
      userId = jsonResponse.id;
      console.log(userId);
      return fetch('https://api.spotify.com/v1/users/'+userId+'/playlists', {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({name: playlistName})
      }).then(response=>response.json()).then(jsonResponse=>{
        const playlistId = jsonResponse.id;
        console.log(jsonResponse);
        return fetch('https://api.spotify.com/v1/users/'+userId+'/playlists/'+playlistId+'/tracks', {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({uris: trackURIs})
        });
      });
    });
  }
}

export default Spotify;
