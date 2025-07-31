import { IUserRepository } from "../repository/userRepository";
import { User } from "../entities/Users";
import { IUser, UserQueryParams } from "../types/user";

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

  findAll = async (queryParams: UserQueryParams): Promise<User[]> => {
    return await this.repository.findAll(queryParams);
  };

  findUser = async (id: string): Promise<User> => {
    return await this.repository.findUser(id);
  };

  updateUser = async (id: string, newData: Omit<User, "id">): Promise<User> => {
    const existUser = await this.findUser(id);
    if (!existUser) throw new Error("User not found");
    existUser.updateUser(newData);
    const updateUser = await this.repository.updateUser(existUser);
    if (!updateUser) throw new Error("Failed to update");
    return existUser;
  };
}
