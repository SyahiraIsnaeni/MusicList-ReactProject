class ApiService {
    static async fetchData(query, setContainer, updateMusicData) {
      const url = `https://shazam.p.rapidapi.com/search?term=${query}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '565511a496msh8194eae2c516466p12a97cjsnc1b798f5c29d',
          'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
        },
      };
  
      try {
        const response = await fetch(url, options);
        const result = await response.text();
  
        // Convert text response to JSON object
        const data = JSON.parse(result);
  
        // Check if the "tracks" property is present in the data object
        if (data.tracks) {
          // Get the desired data from the "hits" property within "tracks"
          const hits = data.tracks.hits;
          setContainer(hits);
          updateMusicData(hits);
          console.log(hits);
        } else {
          console.error('Property "tracks" not found in the API response.');
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  export default ApiService;
  