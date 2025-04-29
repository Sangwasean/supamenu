// src/auth/interfaces/request-with-user.interface.ts
import { Request } from 'express';
import { User } from '../../user/user.entity';

export interface RequestWithUser extends Request {
  user: AuthPayload;
}