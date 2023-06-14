export const geocode = async (address: string): Promise<{
    lat: number;
    lon: number;
}> => {
    const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
    const geoData = await geoRes.json();

    const lat = parseFloat(geoData[0].lat);
    const lon = parseFloat(geoData[0].lon);

    return {lat, lon};
}