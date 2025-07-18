import { IUserRepository } from "../repository/userRepository";
import { User } from "../entities/Users";
import { IUser } from "../Types/user";

export class UserService {
  constructor(private repository: IUserRepository) {}

  createUser = async (userData: Omit<IUser, "id">): Promise<User> => {
    const user = new User(
      crypto.randomUUID(),
      userData.name,
      userData.lastName,
      userData.email
    );

    await this.repository.save(user);
    return user;
  };

  findAll = async (): Promise<User[]> => {
    return await this.repository.findAll();
  };
}
