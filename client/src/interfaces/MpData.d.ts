import { type LatLngExpression } from 'leaflet'

export default interface MpData {
  id: string
  position: LatLngExpression
  dateLastSeen: Date
  score: number
}
