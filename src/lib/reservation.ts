export type ReservationData = {
  date: string
  time: string
  guests: string
  name: string
  email: string
  phone: string
}

export type ReservationErrors = Partial<Record<keyof ReservationData, string>>

export function validateReservation(data: ReservationData): ReservationErrors {
  const errors: ReservationErrors = {}
  const today = new Date().toISOString().slice(0, 10)
  const guests = Number(data.guests)

  if (!data.date || data.date < today) errors.date = 'Selecciona una fecha.'
  if (!data.time) errors.time = 'Selecciona una hora.'
  if (!data.guests || guests < 1 || guests > 12) errors.guests = 'Indica el número de comensales.'
  if (!data.name.trim()) errors.name = 'Escribe tu nombre.'
  if (!/^\S+@\S+\.\S+$/.test(data.email)) errors.email = 'Escribe un email válido.'
  if (!data.phone.trim()) errors.phone = 'Escribe un teléfono de contacto.'

  return errors
}

export function reservationReference(name: string): string {
  const value = Array.from(name).reduce((total, char) => total + char.charCodeAt(0), 0)
  return `EC-${String(1000 + (value % 9000))}`
}
