export interface Brand {
    image: string
    min?: number;
    max?: number;
    checkout:{
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