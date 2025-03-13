import { generateFakeProduct } from '~/utils/generate'
import type { Product } from '~/shared/types/types'

export default defineEventHandler(() => {
  const products: Product[] = []
  // Math.floor(Math.random() * 36)
  const productAmount = 12
  for (let i = 0; i < productAmount; i++)
    products.push(generateFakeProduct())

  return products
})
