import { describe, expect, it } from 'vitest'
import { validateReservation } from './reservation'

describe('validateReservation', () => {
  it('reports every missing required booking field', () => {
    expect(validateReservation({
      date: '', time: '', guests: '', name: '', email: '', phone: '',
    })).toEqual({
      date: 'Selecciona una fecha.',
      time: 'Selecciona una hora.',
      guests: 'Indica el número de comensales.',
      name: 'Escribe tu nombre.',
      email: 'Escribe un email válido.',
      phone: 'Escribe un teléfono de contacto.',
    })
  })

  it('accepts a complete booking for a future date', () => {
    expect(validateReservation({
      date: '2030-06-18', time: '21:00', guests: '4', name: 'Lucía Serra',
      email: 'lucia@example.com', phone: '600 123 123',
    })).toEqual({})
  })
})
