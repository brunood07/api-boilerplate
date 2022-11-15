import { Request, Response } from 'express';

export class CreateUserController {
  handle = async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send('');
  };
}
