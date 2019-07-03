import Thing from './Thing'

jest.mock('/util')

it('should render 1', () => {
  expect(Thing()).toBe('Thing 1')
})