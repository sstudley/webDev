var movieDB = [{
    title: "In Bruges",
    hasWatched: false,
    rating: 5
  },
  {
    title: "Frozen",
    hasWatched: false,
    rating: 4.5
  },
  {
    title: "Les Miserables",
    hasWatched: true,
    rating: 5
  },
  {
    title: "Seven Samuri",
    hasWatched: true,
    rating: 4.5
  }
];

function buildString(movie) {
  var result = "You have ";
  if (movie.hasWatched) {
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  return result;
}

movieDB.forEach(function (movie) {
  console.log(buildString(movie));
});