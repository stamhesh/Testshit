import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Red } from '.'

const app = () => express(apiRoot, routes)

let red

beforeEach(async () => {
  red = await Red.create({})
})

test('POST /Reds 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', sessionid: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.sessionid).toEqual('test')
})

test('GET /Reds 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /Reds/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${red.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(red.id)
})

test('GET /Reds/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /Reds/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${red.id}`)
    .send({ name: 'test', sessionid: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(red.id)
  expect(body.name).toEqual('test')
  expect(body.sessionid).toEqual('test')
})

test('PUT /Reds/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test', sessionid: 'test' })
  expect(status).toBe(404)
})

test('DELETE /Reds/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${red.id}`)
  expect(status).toBe(204)
})

test('DELETE /Reds/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
