import { FormEvent, useState } from 'react'
import { Check, CalendarDays, Users } from 'lucide-react'
import { ReservationData, ReservationErrors, reservationReference, validateReservation } from '../lib/reservation'

const initialData: ReservationData = { date: '', time: '', guests: '2', name: '', email: '', phone: '' }
const hours = ['13:30', '14:00', '14:30', '20:00', '20:30', '21:00', '21:30', '22:00']

export function ReservationForm() {
  const [data, setData] = useState<ReservationData>(initialData)
  const [errors, setErrors] = useState<ReservationErrors>({})
  const [reference, setReference] = useState('')
  const today = new Date().toISOString().slice(0, 10)

  function updateField(key: keyof ReservationData, value: string) {
    setData((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateReservation(data)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) setReference(reservationReference(data.name))
  }

  if (reference) {
    return <div className="booking-success" role="status"><div className="success-icon"><Check size={28} /></div><p className="eyebrow">Mesa solicitada</p><h3>Nos vemos pronto, {data.name.split(' ')[0]}.</h3><p>Hemos guardado tu solicitud para el {new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long' }).format(new Date(`${data.date}T12:00:00`))} a las {data.time}, para {data.guests} personas.</p><strong>{reference}</strong><p className="muted">Te enviaremos la confirmación a {data.email}.</p></div>
  }

  return <form className="booking-form" onSubmit={submit} noValidate>
    <Field label="Fecha" error={errors.date}><div className="field-icon"><CalendarDays size={18} /><input type="date" min={today} value={data.date} onChange={(event) => updateField('date', event.target.value)} /></div></Field>
    <Field label="Hora" error={errors.time}><select value={data.time} onChange={(event) => updateField('time', event.target.value)}><option value="">Selecciona</option>{hours.map((hour) => <option key={hour}>{hour}</option>)}</select></Field>
    <Field label="Comensales" error={errors.guests}><div className="field-icon"><Users size={18} /><select value={data.guests} onChange={(event) => updateField('guests', event.target.value)}>{Array.from({ length: 12 }, (_, index) => <option key={index + 1} value={index + 1}>{index + 1} {index === 0 ? 'persona' : 'personas'}</option>)}</select></div></Field>
    <Field label="Nombre" error={errors.name}><input value={data.name} autoComplete="name" placeholder="Tu nombre" onChange={(event) => updateField('name', event.target.value)} /></Field>
    <Field label="Email" error={errors.email}><input type="email" value={data.email} autoComplete="email" placeholder="tu@email.com" onChange={(event) => updateField('email', event.target.value)} /></Field>
    <Field label="Teléfono" error={errors.phone}><input type="tel" value={data.phone} autoComplete="tel" placeholder="600 000 000" onChange={(event) => updateField('phone', event.target.value)} /></Field>
    <button className="button button-primary booking-submit" type="submit">Confirmar reserva <span>↗</span></button>
  </form>
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return <label className="form-field"><span>{label}</span>{children}{error && <small>{error}</small>}</label>
}
