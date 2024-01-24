export type User = { id: string; name: string; email: string };
export type UserPost = Omit<User, 'id'>;
