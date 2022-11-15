export type CreateUserDTO = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  password: string;
};

export type CreateUserResponse = {
  firstName: string;
  lastName: string;
  email: string;
};
