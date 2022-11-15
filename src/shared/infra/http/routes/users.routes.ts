import { CreateUserController } from '@modules/accounts/useCases/createUser/CreateUserController';
import { Router } from 'express';

const usersRoutes = Router();

const createUser = new CreateUserController();

usersRoutes.post('/', createUser.handle);

export { usersRoutes };
