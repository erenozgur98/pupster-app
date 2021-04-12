import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getRandomDog: function () {
        return axios.get("https://dog.ceo/api/breeds/image/random");
    },
    getDogsOfBreed: function (breed) {
        return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
    },
    getBaseBreedsList: function () {
        return axios.get("https://dog.ceo/api/breeds/list");
    }
}