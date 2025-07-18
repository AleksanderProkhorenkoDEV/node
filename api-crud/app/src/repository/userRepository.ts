import { User } from "../entities/Users";
import { IUser } from "../Types/user";
import { sleep } from "../utils/helpers";

export interface IUserRepository {
  save(user: User): Promise<void>;
  findAll(): Promise<User[]>;
}

export class UserRepository implements IUserRepository {
  private users: IUser[] = [];

  async save(user: User): Promise<void> {
    if (!user.isValid()) throw new Error("User entity isn't valid");
    this.users.push(user);
    await sleep(1500);
  }

  async findAll(): Promise<User[]> {
    const usersRaw = this.users;
    await sleep(1000);
    return usersRaw.map((userRaw) => User.fromJson(userRaw));
  }
}
