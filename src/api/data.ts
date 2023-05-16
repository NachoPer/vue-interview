export interface Pieza {
  id: number
  tipo: 'cajón' | 'puerta' | 'lateral' | 'piso/techo'
  ancho: number
  alto: number
  largo: number
  material: 'Blanco MDF' | 'Negro MDF'
}
import data from './data.json' assert { type: 'json' }

export const TiposPieza = ['cajón', 'puerta', 'lateral', 'piso/techo']

export async function getPiezas(): Promise<Pieza[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.piezas as Pieza[])
    }, 1000)
  })
}
