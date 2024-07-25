import axios from "axios";

export const fetchFirmPopular = async () => {
  const options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/v2/get-popular',
    params: {
      first: '27',
      country: 'US',
      language: 'en-US'
    },
    headers: {
      'x-rapidapi-key': '14348d8d40msh44191441b6d6e03p1f5eb6jsn416e2e61ff14',
      'x-rapidapi-host': 'imdb8.p.rapidapi.com'
    }
  };
      try {
          const response = await axios.request(options);
          const data = response.data.data.movies.edges.map((item: any) => {
            return {
              id: item.node.id,
              url: item.node.primaryImage.url,
              width : item.node.primaryImage.width,
              height : item.node.primaryImage.height,
              titleText : item.node.titleText.text,
              ratingsSummary : item.node.ratingsSummary.aggregateRating,
              year : item.node.releaseYear.year,
            };
          });
         return data;
      } catch (error) {
          console.error(error);
      }
}

export const GetPathOfMovieVideo = async (videoId: string) => {
  const options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/get-videos',
    params: {
      tconst: videoId,
      limit: '1',
      region: 'US'
    },
    headers: {
      'x-rapidapi-key': '14348d8d40msh44191441b6d6e03p1f5eb6jsn416e2e61ff14',
      'x-rapidapi-host': 'imdb8.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options); 
    const data = response.data.resource.videos[0].id;
    const analysisData = data.split('/');
    return analysisData[2];
  } catch (error) {
    console.error(error);
  }
}

export const GetVideoPlayUrl = async () => {
  const options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/v2/get-video-playback',
    params: {
      viconst: 'vi3134834201'
    },
    headers: {
      'x-rapidapi-key': '14348d8d40msh44191441b6d6e03p1f5eb6jsn416e2e61ff14',
      'x-rapidapi-host': 'imdb8.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    return response.data.data.video.playbackURLs[1].url;
  } catch (error) {
    console.error(error);
  }
}