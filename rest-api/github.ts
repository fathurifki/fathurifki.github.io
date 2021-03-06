import { User, UserDetail } from "../models";

const baseRoot = 'https://api.github.com';
const userCollectionURL = `${baseRoot}/orgs/lemoncode/members`;
const userDetailURL = `${baseRoot}/users`;

export const fetchUsers = async (): Promise<User[]> => {
    const res = await fetch(userCollectionURL)
    const data = await res.json()

    console.log('data', data)

    return data.map(
        ({ id, login, avatar_url, }) => ({ id, login, avatar_url, } as User)
    );
}

export const fetchUserDetail = async (user: string): Promise<UserDetail> => {
    const res = await fetch(`${userDetailURL}/${user}`)
    const { id, login, avatar_url, name, company, followers } = await res.json();

    return {
        id,
        login,
        avatar_url,
        name,
        company,
        followers
    }
}