import axios from 'axios';

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem("token");

    return axios.create({
        headers: {
            Authorization: `Bearer ${token}`
        },
        baseURL: "https://foodtruck-tt58.herokuapp.com"
        // baseURL:"http://localhost:2019"
    });
}

// @PropertySource(value = "file:/Users/yf/Coding/oktafoundationconf.properties")