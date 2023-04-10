export const getAddressFromLatLng = async(lat, lng, apiKey) =>{
    const url = `https://www.mapquestapi.com/geocoding/v1/reverse?key=${apiKey}&location=${lat},${lng}&outFormat=json&thumbMaps=false`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.results && data.results.length > 0) {
        console.log(data.results)
        return [
            data.results[0].locations[0].street,
            data.results[0].locations[0].adminArea6,
            data.results[0].locations[0].adminArea5
        ];
      } else {
        throw new Error('No se encontró ninguna dirección para la latitud y longitud proporcionadas');
      }
    } catch (error) {
      console.error(error);
    }
  }