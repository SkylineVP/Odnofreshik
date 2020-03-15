import AuthenticationService from '../services/AuthenticationService';
import { TOKEN_KEY }         from '../constants';
import util                  from 'util';
import * as jwt              from 'jsonwebtoken';
import {RefreshToken}          from '../models';
import AppErrors from '../utils/application_errors';
const express = require('express');
const authenticationRouter = express.Router();
const verifyAsync=util.promisify(jwt.verify);
const decodeAsync=util.promisify(jwt.decode);

authenticationRouter.post('/sign_in',async (req,res,next)=>{
	console.log(1);
	try {
		const data=await AuthenticationService.loginByEmail(req.body);
		console.log(data);
		res.send(data);
	}
	catch (e) {
		next(e);

	}
});

authenticationRouter.post('/sign_up');
authenticationRouter.post('/refresh_auth',async (req,res,next)=>{
	try {
		const {body,headers:{authorization:accessToken}}=req;

		await verifyAsync(body,TOKEN_KEY);
		const {userID}=await decodeAsync(accessToken,TOKEN_KEY);
		const refreshToken= await RefreshToken.findOne({
			where:{
				userId:userID,
				refreshToken:body
			}
		});
		if (refreshToken){
			return res.send(await AuthenticationService.genTokenPair());

		}
		next(new AppErrors.UnauthorizedError());
	}
	catch (e) {

		
	}
	
});


export default authenticationRouter;