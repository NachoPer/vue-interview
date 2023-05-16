export interface Pieza {
  id: number
  tipo: 'cajón' | 'puerta' | 'lateral' | 'piso/techo'
  ancho: number
  alto: number
  largo: number
  material: 'Blanco MDF' | 'Negro MDF'
}
import data from './data.json' assert { type: 'json' }

export const TIPO_MATERIALES = {
  BLANCO_MDF: 'Blanco MDF',
  NEGRO_MDF: 'Negro MDF'
} as const

export async function getPiezas(): Promise<Pieza[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.piezas as Pieza[])
    }, 1000)
  })
}
