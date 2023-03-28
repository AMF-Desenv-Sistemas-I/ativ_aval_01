import { gitHubUsers, randomJokes } from '../fetch';
import fetchMock from 'jest-fetch-mock';

// 1. Faça uma requisição GET para a API do Chuck Norris e exiba no console uma piada aleatória
// https://api.chucknorris.io/jokes/random

// 2. Faça uma requisição GET para a API do GitHub e exiba no console os dados retornados
// https://api.github.com/users/**NOMEDOUSUARIO**
describe('randomJokes e gitHubUsers', () => {
    afterEach(() => jest.clearAllMocks());

    it('deve retornar uma piada aleatória', async () => {
        const joke = {
            id: '7h3oGtrOfxc',
            joke: 'Whiteboards ... are remarkable.',
            status: 200,
        };

        jest.spyOn(global, 'fetch');
        global.fetch.mockResolvedValue({
            json: jest.fn().mockResolvedValue(joke),
        });
        randomJokes();
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith('https://api.chucknorris.io/jokes/random')

    });

    it('gitHubUsers() retorna objeto JSON com propriedades esperadas', async () => {
        const gitUser = {
            login: 'nunesfb',
            id: 35842441,
            node_id: 'MDQ6VXNlcjM1ODQyNDQx',
            avatar_url: 'https://avatars.githubusercontent.com/u/35842441?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/nunesfb',
            html_url: 'https://github.com/nunesfb',
            followers_url: 'https://api.github.com/users/nunesfb/followers',
            following_url: 'https://api.github.com/users/nunesfb/following{/other_user}',
            gists_url: 'https://api.github.com/users/nunesfb/gists{/gist_id}',
            starred_url: 'https://api.github.com/users/nunesfb/starred{/owner}{/repo}',
            subscriptions_url: 'https://api.github.com/users/nunesfb/subscriptions',
            organizations_url: 'https://api.github.com/users/nunesfb/orgs',
            repos_url: 'https://api.github.com/users/nunesfb/repos',
            events_url: 'https://api.github.com/users/nunesfb/events{/privacy}',
            received_events_url: 'https://api.github.com/users/nunesfb/received_events',
            type: 'User',
            site_admin: false,
            name: 'Felipe Becker Nunes',
            company: '@betrybe',
            blog: 'https://www.youtube.com/@TecEdu4All',
            location: 'Brazil',
            email: null,
            hireable: null,
            bio: 'Trybe ||\r\nCanal TecEdu4All\r\n\r\n',
            twitter_username: null,
            public_repos: 35,
            public_gists: 6,
            followers: 116,
            following: 0,
            created_at: '2018-01-26T14:41:31Z',
            updated_at: '2023-03-23T21:22:41Z'
        };

        jest.spyOn(global, 'fetch');
        global.fetch.mockResolvedValue({
            json: jest.fn().mockResolvedValue(gitUser),
        });

        gitHubUsers();

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith('https://api.github.com/users/nunesfb')
    });
   
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////