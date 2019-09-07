const app = require('../src/app');

describe('App', () =>{
    it('GET / responds with  containing "Hello, world!"', () =>{
        return supertest(app)
            .get('/')
            .expect(200, 'Hello, world!');
    });
});