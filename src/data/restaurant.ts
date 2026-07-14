import chefImage from '../assets/chef-comal.png'
import heroImage from '../assets/hero-comal.png'
import tacosImage from '../assets/tacos-closeup.png'

export type MenuCategory = 'Todo' | 'Para empezar' | 'Del comal' | 'Tacos' | 'Especialidades' | 'Dulces'

export type Dish = { name: string; category: Exclude<MenuCategory, 'Todo'>; description: string; price: string; tag?: string }

export const restaurant = {
  name: 'El Comal',
  city: 'Calella de Mar',
  address: 'Carrer de la Platja, 18, 08370 Calella de Mar',
  phone: '+34 937 68 42 19',
  phoneHref: '+34937684219',
  email: 'hola@elcomalcalella.com',
  instagram: 'https://www.instagram.com/elcomal.restaurant/',
  hours: ['Martes a jueves · 19:30 - 23:30', 'Viernes y sábado · 13:00 - 16:00 · 19:30 - 00:00', 'Domingo · 13:00 - 16:00'],
  mapUrl: 'https://www.google.com/maps/dir/?api=1&destination=Carrer%20de%20la%20Platja%2018%2C%20Calella%20de%20Mar',
}

export const menuCategories: MenuCategory[] = ['Todo', 'Para empezar', 'Del comal', 'Tacos', 'Especialidades', 'Dulces']

export const dishes: Dish[] = [
  { name: 'Guacamole al momento', category: 'Para empezar', description: 'Aguacate, lima, cilantro, granada y totopos de maíz azul.', price: '12 €', tag: 'Vegano' },
  { name: 'Queso fundido', category: 'Para empezar', description: 'Queso asadero, setas de temporada, chile poblano y tortillas.', price: '13 €' },
  { name: 'Esquites de brasa', category: 'Para empezar', description: 'Maíz ahumado, crema de chipotle, queso cotija y lima.', price: '10 €', tag: 'Vegetariano' },
  { name: 'Tortilla de maíz azul', category: 'Del comal', description: 'Recién hecha, con mantequilla ahumada y sal de gusano.', price: '6 €', tag: 'Para compartir' },
  { name: 'Quesadilla de flor', category: 'Del comal', description: 'Flor de calabaza, queso Oaxaca, epazote y salsa verde.', price: '14 €', tag: 'Vegetariano' },
  { name: 'Taco al pastor', category: 'Tacos', description: 'Cerdo adobado, piña a la brasa, cebolla y cilantro.', price: '5 €' },
  { name: 'Taco de birria', category: 'Tacos', description: 'Ternera cocida a fuego lento, consomé y cebolla morada.', price: '6 €' },
  { name: 'Taco de pescado', category: 'Tacos', description: 'Pescado de lonja, col encurtida, crema de chipotle y lima.', price: '6 €' },
  { name: 'Taco de setas', category: 'Tacos', description: 'Setas salteadas, frijoles negros, pico de gallo y aguacate.', price: '5 €', tag: 'Vegano' },
  { name: 'Mole negro', category: 'Especialidades', description: 'Pollo de corral, mole de seis chiles, sésamo y arroz rojo.', price: '24 €' },
  { name: 'Pulpo al carbón', category: 'Especialidades', description: 'Crema de maíz, chile costeño, cebolla tatemada y cilantro.', price: '26 €' },
  { name: 'Pastel de tres leches', category: 'Dulces', description: 'Vainilla, nata montada, frutas rojas y piloncillo.', price: '9 €' },
]

export const dailyMenu = [
  ['Para empezar', 'Esquites de brasa o ensalada de nopal'],
  ['Principal', 'Taco de pescado o mole negro con arroz rojo'],
  ['Final dulce', 'Pastel de tres leches'],
]

export const images = { heroImage, tacosImage, chefImage }
