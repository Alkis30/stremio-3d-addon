module.exports = {
  manifest: require('./manifest.json'),
  catalogHandler: async ({ type, id }) => {
    if (type !== "movie" || id !== "trakt-3d-movies") return { metas: [] };

    const metas = [
      {
        id: "tt0499549",
        name: "Avatar",
        type: "movie",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg",
        background: "https://image.tmdb.org/t/p/original/8I37NtDffNV7AZlDa7uDvvqhovU.jpg",
        description: "A paraplegic Marine dispatched to the moon Pandora..."
      },
      {
        id: "tt2293640",
        name: "Minions",
        type: "movie",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/q0R4crx2SehcEEQEkYObktdeFy.jpg",
        background: "https://image.tmdb.org/t/p/original/8G1H8UkbuFfyxU5YyCkDkRiOqkC.jpg",
        description: "Minions Stuart, Kevin and Bob are recruited by Scarlet Overkill..."
      }
    ];

    metas.sort((a, b) => a.name.localeCompare(b.name));
    return { metas };
  }
};
