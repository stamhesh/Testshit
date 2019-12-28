import { success, notFound } from '../../services/response/'
import { Red } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Red.create(body)
    .then((red) => red.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Red.find(query, select, cursor)
    .then((reds) => reds.map((red) => red.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Red.findById(params.id)
    .then(notFound(res))
    .then((red) => red ? red.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Red.findById(params.id)
    .then(notFound(res))
    .then((red) => red ? Object.assign(red, body).save() : null)
    .then((red) => red ? red.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Red.findById(params.id)
    .then(notFound(res))
    .then((red) => red ? red.remove() : null)
    .then(success(res, 204))
    .catch(next)

export const getName = ({ params }, res, next) =>
  res.json({ name: params.name + 'ya tmabal' })
