//Utility type to make dynamic types easier to read
//eslint-disable-next-line
export type Prettify<T> = { [K in keyof T]: T[K] } & {};

type UserApiResponse = {
	id: string;
	name: string;
	email: string;
};

type User = Prettify<UserApiResponse>;
type UserPost = Omit<User, 'id'>;
type UserPut = UserPost;

export type { User, UserPost, UserPut };
