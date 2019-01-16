// Instruments
import { MAIN_URL } from '../config';

export class Person {
    async get (page = 1) {
        const response = await fetch(`${MAIN_URL}/people?page=${page}`, {
            method: 'GET',
        });

        const {results} = await response.json();


        if (response.status !== 200) {
            throw new Error(response.status);
        }

        return results;
    }

    async search (search) {
        const response = await fetch(`${MAIN_URL}/people?search=${search}`, {
            method: 'GET',
        });

        const {results} = await response.json();


        if (response.status !== 200) {
            throw new Error(response.status);
        }

        return results;
    }

    async getPerson (id) {
        const response = await fetch(`${MAIN_URL}/people/${id}`, {
            method: 'GET',
        });

        const person = await response.json();

        if (response.status !== 200) {
            throw new Error(response.status);
        }

        return person;
    }

    async getUrlListData (arrayLinks) {
        const data = await Promise.all(
            arrayLinks.map(
                async (url) => {
                    const response = await fetch(url, {
                        method: 'GET',
                    });

                    if (response.status !== 200) {
                        throw new Error(response.status);
                    }

                    return response.json();
                },
            ),
        );

        return data;
    }

    async createPost (data) {
        const response = await fetch(`${MAIN_URL}/posts`, {
            method:  'POST',
            body:    JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        const post = await response.json();

        if (response.status !== 201) {
            throw new Error(response.status);
        }

        return post;
    }

    async removePost (id) {
        const response = await fetch(`${MAIN_URL}/posts/${id}`, {
            method: 'DELETE',
        });

        await response.json();

        if (response.status !== 200) {
            throw new Error(response.status);
        }
    }
}
