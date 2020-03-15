const bcrypt = require('bcrypt');
const {User} = require('../models');
const {BadRequestError} = require('../utils/application_errors');
const jwt = require('jsonwebtoken');
const {TOKEN_KEY} = require('../constants');
const util = require('util');
const signTokenAsync = util.promisify(jwt.sign);

class AuthenticationService {
	async loginByEmail( credentials ) {
		const user = await User.findOne({
			where: {
				login: credentials.login
			}
		});
		if (user) {
			if (this.comparePasword(user.password, credentials.password)) {
				const preperedUser = user.get();
				delete preperedUser.password;
				const tokens = {
					accessToken: await this.genAccessToken(user),
					refreshToken: await this.genRefreshToken(user),
				};
				return {
					tokenPair: tokens,
					user: preperedUser
				};
			}
		}
		else {
			throw new BadRequestError('login or password bad request');
		}

	}

	async genTokenPair( user ) {
		return   {
			accessToken: await this.genAccessToken(user),
			refreshToken: await this.genRefreshToken(user),
		};
        

	}

	async comparePasword( passwordHash, password ) {
		return bcrypt.compare(password, passwordHash);
	}

	async genAccessToken( user ) {
		const payload = {
			userId: user.id,
			email: user.email,

		};
		return signTokenAsync({
			...payload,
		}, TOKEN_KEY, {
			expiresIn: Math.floor(Date.now() / 1000) + (60 * 10)
		});

	}

	async genRefreshToken( user ) {
		const refreshToken = await signTokenAsync({}, TOKEN_KEY, {
			expiresIn: Math.floor(Date.now() / 1000) + (60 * 10)
		});
		await user.createRefreshToken({
			refreshToken
		});
		return refreshToken;


	}


}

export default new AuthenticationService();