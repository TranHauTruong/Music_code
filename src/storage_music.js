const storage_manager = (() => {
  const getMusics = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "db21b2c795msh55e8ed917248bbdp1e73ebjsna509c2266877",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    };

    return fetch(
      "https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?id=40008598&locale=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log('Success:', response);
        return response.tracks;
      })
      .catch((err) => console.error(err));
  };

  return {
    getMusics,
  };
})();

export { storage_manager };
