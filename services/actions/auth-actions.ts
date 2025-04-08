import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import { redirect } from 'next/navigation';
import AuthServices from '../auth-services';

const prisma = new PrismaClient();

async function createAccount(formdata: FormData){
    'use server'
    
    // const { name, email, password } = formdata;
    const name = formdata.get('name') as string;
    const email = formdata.get('email') as string;
    const password = formdata.get('password') as string;
    
    const hashPassword = await bcrypt.hash(password,10);

    await prisma.user.create({
    data: {
        name,
        email,
        password : hashPassword
        },
    });

    redirect("/login");
}

async function login(formdata: FormData) {
    "use server"
    
    const email = formdata.get('email') as string;
    const password = formdata.get('password') as string;

    const user = await prisma.user.findFirst( {
        where: {
            email,
        }
    })

    if (!user) {
        console.log("User not found");
        redirect("/login");
        
    }
    
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        console.log("Email or Password incorrect");
        redirect("/login");
    }

    await AuthServices.createSessionToken({sub: user.id, name: user.name ,email: user.email})

    redirect("/dashboard");
}


import { decodeJwt } from "jose";
import { cookies } from "next/headers";

export async function getUser() {
    "use server";
  try {
    const token = cookies().get("session")?.value;
  
    if (!token) {
      return null;
    }

    return decodeJwt(token);
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    return null;
  }
}



const AuthActions ={ 
    createAccount, login
}

export default AuthActions;