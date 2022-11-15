import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const payload = req.body;

      const createUser = container.resolve(CreateUserUseCase);
      const response = await createUser.execute(payload);

      return res.status(200).send(response);
    } catch (error) {
      throw error;
    }
  };
}
