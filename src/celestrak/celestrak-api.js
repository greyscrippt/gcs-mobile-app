import axios from 'axios';

const BASE_URL = "https://celestrak.org/NORAD/elements/gp.php?";

const Celestrak = {
    getMicrosatDataAsJsonPretty: () => {
        return axios.get(BASE_URL + "NAME=MICROSAT-R&FORMAT=JSON")
    },
    querry: (querry) => {
        return axios.get(BASE_URL + querry + "&FORMAT=JSON");
    },
    querryBySatelliteName: (name) => {
        return axios.get(BASE_URL + "NAME=" + name + "&FORMAT=JSON")
    },
}

export default Celestrak;