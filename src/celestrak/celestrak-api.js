import axios from 'axios';

const BASE_URL = "https://celestrak.org/NORAD/elements/gp.php?";

const Celestrak = {
    querrySampleData: () => {
        return axios.get(BASE_URL + "NAME=ISS&FORMAT=JSON");
    },
    querry: (querry) => {
        return axios.get(BASE_URL + querry);
    },
    querryBySatelliteName: (name) => {
        return axios.get(BASE_URL + "NAME=" + name + "&FORMAT=JSON-PRETTY");
    },
    querryBySatelliteNameAndFormat: (name, format) => {
        return axios.get(BASE_URL + "NAME=" + name + "&FORMAT=" + format);
    },
}

export default Celestrak;