import axios from 'axios';

export const getPlaceData= async (bl_lng,bl_lat,tr_lat,tr_lon ,aciveState)=>{    
     console.log({bl_lng,bl_lat,tr_lat,tr_lon ,aciveState})
      try {
          const {data : {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${aciveState}/list-in-boundary`,
          {
            params: {
                bl_latitude: bl_lat!==null ? bl_lat:'11.847676',
                tr_latitude: tr_lat!==null? tr_lat:'12.838442',
                bl_longitude: bl_lng !==null? bl_lng: '109.095887',
                tr_longitude: tr_lon!==null? tr_lon: '109.149359',
                limit: '30',
                currency: 'USD',
                open_now: 'false',
                lunit: 'km',
                lang: 'en_US'
              },
              headers: {
                'X-RapidAPI-Key': 'b95ad64b86msh79810ccf6ba82cfp179df4jsn2ef3d5518ab2',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
              }
          }
          );
        
          return data 
      } catch (error) {
          console.error(error.message);
      }
    
}


