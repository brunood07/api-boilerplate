import {
  CreateUserDTO,
  CreateUserResponse
} from '@modules/accounts/dtos/CreateUserDTO';

export class CreateUserUseCase {
  execute = async (data: CreateUserDTO): Promise<CreateUserResponse> => {
    return {
      firstName: '',
      lastName: '',
      email: ''
    };
  };
}
