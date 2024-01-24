import { User, UserPost } from '../types/user';
import { endpointFactory } from './config';

export const userService = endpointFactory<User, UserPost>('/user');
