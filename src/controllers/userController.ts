/* REGRAS PARA FUNCIONALIDADE DE CADA AÇÃO DO SISTEMA*/

import{Request, Response} from "express";
import { getRepository } from "typeorm";
import {User} from "../models/user";

class userController{

    async create(request:Request,response:Response){
        const {name,email} = request.body
        const usersRepository = getRepository(User);


         // SELECT * FROM USERS WHERE EMAIL = 'EMAIL'
        const userAlreadyExists = await usersRepository.findOne({
            email
        })

        if(userAlreadyExists){
        return response.status(400).json({
            error: "User already exists!",
        });
        }
        const user = usersRepository.create({

            name,email

        }) // entity manager inserções, seleções, DDO
 
        await usersRepository.save(user)


        return response.json(user);

    }

}

export {userController}