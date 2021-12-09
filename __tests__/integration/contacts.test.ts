process.env.NODE_ENV = 'test'
import request from 'supertest'
import app from '../../src/app'
import connectDB, { closeDB, clearDB } from '../../src/config/database'
import Contact from '../../src/models/contact.model'
import ContactHistory from '../../src/models/contactLogs.model'

// before everything - create the table
beforeAll(async () => await connectDB())
afterAll(async () => await closeDB())
afterEach(async () => await Contact.deleteMany())

const newContact = {
  firstName: 'Andrew',
  lastName: 'Anthony',
  phone: '08137038977',
  email: 'anthony.andrew@mail.com'
}

describe('POST /contact', () => {
  test('that the API returns a status of 201 and the contact object on success', async () => {
    const response = await request(app)
      .post('/api/v1/contacts')
      .send(newContact)
    const { data } = response.body

    expect(response.statusCode).toBe(201)
    expect(data.email).toBe(newContact.email)
    expect(data.phone).toBe(newContact.phone)
    expect(newContact.firstName.toLowerCase()).toBe(data.firstName)
    expect(newContact.lastName.toLowerCase()).toBe(data.lastName)
  })

  test('that the new contact is created', async () => {
    const response = await request(app)
      .post('/api/v1/contacts')
      .send(newContact)
    const savedContact = await Contact.findOne({
      email: newContact.email
    })

    expect(savedContact).toBeTruthy()
    expect(response.body.data.phone).toBe(savedContact.phone)
    expect(savedContact.firstName.toLowerCase()).toBe(
      response.body.data.firstName
    )
  })

  test('that the new contactHistory is created', async () => {
    const response = await request(app)
      .post('/api/v1/contacts')
      .send(newContact)
    const contactHistory = await ContactHistory.findOne({
      contactId: response.body.data._id
    })

    expect(contactHistory).toBeTruthy()
    expect(contactHistory.from).not.toBeTruthy()
    expect(String(contactHistory.contactId)).toBe(response.body.data._id)
  })

  test('that duplicate entries are not allowed', async () => {
    const duplicate = await Contact.create(newContact)
    const response = await request(app)
      .post('/api/v1/contacts')
      .send(newContact)
    expect(response.statusCode).toBe(400)
  })

  test('that the API return a 400 for invalid entries', async () => {
    const response = await request(app).post('/api/v1/contacts').send({})
    expect(response.statusCode).toBe(400)
  })
})
