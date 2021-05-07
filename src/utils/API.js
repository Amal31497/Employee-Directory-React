import axios from 'axios';

export default function findPeople(amount){
    return axios.get(
        `https://randomuser.me/api/?results=${amount}?inc=name,email,location,picture,nat=us`
    )
}