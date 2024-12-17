export const calculateAngle = (count: number): number => {
    const angleBetweenElements = 180 / count

    return angleBetweenElements + (count > 2 ? 0 : 45)
}