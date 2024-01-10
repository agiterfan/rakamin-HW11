const app = require('../app')
const request = require('supertest')

describe('Todo Unit Test', () => {
    it('should return all todos get /todos', (done) => {
        request(app)
        .get('/todos')
        .expect(200)
        .then(response => {
            const firstData = response.body[0]
            expect(firstData.title).toBe('Belajar javascript')
            done()
        })
        .catch(done)
    })

    it('should create new todos post /todos', (done) => {
        request(app)
        .post('/todos')
        .send({
            title: 'belajar backend',
            status: 'active'
        })
        .expect(201)
        .then(response => {
            const data = response.body
            expect(data.title).toBe('Belajar backend')
            expect(data.status).toBe('active')
            done()
        })
        .catch(done)
    })

    it('should get one data todos get /todos', (done) => {
        request(app)
        .get('/todos/1')
        .expect(200)
        .then(response => {
            const firstData = response.body[0]
            expect(firstData.title).toBe('Belajar javascript')
            done()
        })
        .catch(done)
    })

    it('should delete one data todos get /todos', (done) => {
        request(app)
        .delete('/todos/1')
        .expect(200)
        .then(response => {
            const firstData = response.body[0]
            expect(firstData.title).toBe('Todo successfully deleted!')
            done()
        })
        .catch(done)
    })

})