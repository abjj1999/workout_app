export const exerciseOptions = {
  method: "GET",
  // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    // "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Key": "4dfc059f59mshfbcc80152a0965ap1aa4d3jsndf5761350e07",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const FetchData = async (url, options) => {
  try {
    const res = await fetch(url, options);

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
