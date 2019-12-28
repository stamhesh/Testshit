import { Red } from '.'

let red

beforeEach(async () => {
  red = await Red.create({ name: 'test', sessionid: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = red.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(red.id)
    expect(view.name).toBe(red.name)
    expect(view.sessionid).toBe(red.sessionid)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = red.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(red.id)
    expect(view.name).toBe(red.name)
    expect(view.sessionid).toBe(red.sessionid)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
