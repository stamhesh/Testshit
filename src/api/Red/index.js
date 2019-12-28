import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy, getName } from './controller'
import { schema } from './model'
export Red, { schema } from './model'

const router = new Router()
const { name, sessionid } = schema.tree

/**
 * @api {post} /Reds Create red
 * @apiName CreateRed
 * @apiGroup Red
 * @apiParam name Red's name.
 * @apiParam sessionid Red's sessionid.
 * @apiSuccess {Object} red Red's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Red not found.
 */
router.post('/',
  body({ name, sessionid }),
  create)

/**
 * @api {get} /Reds Retrieve reds
 * @apiName RetrieveReds
 * @apiGroup Red
 * @apiUse listParams
 * @apiSuccess {Object[]} reds List of reds.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /Reds/:id Retrieve red
 * @apiName RetrieveRed
 * @apiGroup Red
 * @apiSuccess {Object} red Red's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Red not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /Reds/:id Update red
 * @apiName UpdateRed
 * @apiGroup Red
 * @apiParam name Red's name.
 * @apiParam sessionid Red's sessionid.
 * @apiSuccess {Object} red Red's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Red not found.
 */
router.put('/:id',
  body({ name, sessionid }),
  update)

/**
 * @api {delete} /Reds/:id Delete red
 * @apiName DeleteRed
 * @apiGroup Red
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Red not found.
 */
router.delete('/:id',
  destroy)

router.post('/hello/',
  getName)
export default router
