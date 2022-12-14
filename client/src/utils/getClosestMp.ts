import { type LatLng } from 'leaflet'

// interfaces
import { type MpData } from '@/lib/trpc'

export default function getClosestMp(
  userLocation: LatLng,
  mps: Array<MpData>
): MpData | undefined {
  let closestDistance: number = Infinity
  let closestMp: MpData | undefined = undefined

  mps.forEach((mp) => {
    const distance = userLocation.distanceTo(mp.position)
    if (distance < closestDistance) {
      closestDistance = distance
      closestMp = mp
    }
  })

  return closestMp
}
