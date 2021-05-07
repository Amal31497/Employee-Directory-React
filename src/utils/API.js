import axios from 'axios';
import { get } from 'http';

export default function findPeople(amount){
    return axios.get(
        `https://randomuser.me/api/?results=${amount}?inc=gender,name,email,location,picture`
    )
}