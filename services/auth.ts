import {v4 as uuid}  from 'uuid';
type SignInRequestData = {
    email: string;
    password: string;
}

const delay = (amount =750) => new Promise(resolve => setTimeout(resolve,amount))

export async function signInRequest(data : SignInRequestData){
    await delay()

    return{
        token: uuid(),
        user: {
            name: "William Cossa",
            email: "william@gmail.com",
            avatar_url: "https://avatar.iran.liara.run/public/41"
        }

    }
}