import http from "./httpService";
import { apiUrl } from "../config.json";

const apiUrlRequest = apiUrl + "/users";

export function register(user){
    return http.post(apiUrlRequest,{
        email: user.username,
        password : user.password,
        name : user.name
    });
}
