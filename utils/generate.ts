import { faker } from '@faker-js/faker'
import { path } from '~/utils/path'
import type { Product } from '~/shared/types/types'

export const generateFakeProduct = (): Product => {
  const hasOldPrice = faker.datatype.boolean()
  const newPrice = Number(faker.commerce.price({ min: 100, max: 100000 }))
  const discount = Number(faker.commerce.price({ min: 10, max: 10000 }))
  const oldPrice = hasOldPrice ? newPrice + discount : undefined
  const id = faker.string.uuid()

  return {
    id: id,
    image: faker.image.url(),
    newPrice: newPrice,
    oldPrice: oldPrice,
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    url: path.products + '/' + id,
  }
}
