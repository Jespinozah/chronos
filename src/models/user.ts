export type UserStatus = 'active' | 'inactive';

export interface User {
  id: string;
  status: UserStatus;
  name: string;
  email: string;
}
