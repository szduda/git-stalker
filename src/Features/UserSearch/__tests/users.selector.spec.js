import { selectUsers } from '../users.selectors'

describe("users selectors will", () => {

  test("return user array", () => {
    const usersObj = {
      100: { id: 100, name: 'user 100' },
      500: { id: 500, name: 'user 500' }
    }

    const expectedArray = [
      { id: 100, name: 'user 100' },
      { id: 500, name: 'user 500' }
    ]

    const usersArray = selectUsers(usersObj)

    expect(usersArray).toMatchObject(expectedArray)
  })
})