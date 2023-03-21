import { User } from '~/api/swagger/Foxhole/data-contracts';
import { Users } from '~/api/swagger/Foxhole/Users';
import { IService } from '~/domain/users';

export class Service implements IService {
  // eslint-disable-next-line no-useless-constructor
  constructor(protected api: Users) {
  }

  async getMe(): Promise<User> {
    const response = await this.api.getUsers();
    if (!response.success) {
      return <User>{};
    }

    return response.data;
  }
}
