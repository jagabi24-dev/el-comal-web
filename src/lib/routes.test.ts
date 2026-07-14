import { expect, it } from 'vitest'
import { singlePageNav } from './routes'

it('exposes every restaurant section in the single-page menu', () => {
  expect(singlePageNav.map((item) => item.target)).toEqual([
    'inicio', 'mesa', 'carta', 'menu', 'reservas', 'contacto',
  ])
})
