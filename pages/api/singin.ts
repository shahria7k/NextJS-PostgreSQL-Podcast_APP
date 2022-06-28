import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
export default (req: NextApiRequest, res: NextApiResponse) => {
	// sign in endpoing for neext js app
	const { email, password } = req.body;
	const isValid = bcrypt.compareSync(password);
};
