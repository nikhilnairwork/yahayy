export interface Brand {
    image: string
    price_json: {
      max: number
      min: number
      denominations?: string[]
    }
    discount: string
    is_stock: boolean
    url: string
    name: string
  }
  
  export interface BrandsResponse {
    data: Brand[]
  }
  
  export interface BrandDetails extends Brand {
   desc: string
   t_c_content: string
  }