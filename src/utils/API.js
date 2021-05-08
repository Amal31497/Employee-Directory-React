import axios from 'axios';

export default {
    findPeople: function(amount){
    return axios.get(
        `https://randomuser.me/api/?results=${amount}&nat=us&inc=name,email,location,picture`
    )
    }
}