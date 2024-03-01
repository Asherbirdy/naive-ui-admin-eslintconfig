export type ProductItem = {
  store_zh_name: string
  product_id: number
  title: string
  description: string
  code: string
  link: string
  imgUrl: string
}

export interface ProductType {
  data: ProductItem[]
  selectedId: number[]
  storeList: string[]
  storeList_selected: string[]
}

export interface PopSelectItem {
  label: string,
  value: string
}
export interface PopSelectType {
  items: PopSelectItem[]
  selected: string[]
}

export interface TagType {
  data: ProductItem[]
  selected: string[]
}

export type ProductItemFinal = Pick<ProductItem, 'store_zh_name' | 'product_id' | 'title' | 'link'>;

