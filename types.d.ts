type Category = {
    id: number;
    name_en: string;
    name_ar: string;
    description_en: string;
    description_ar: string;
    image: string;
    sku: string;
};

type Image = {
    id: number;
    image: string;
    alt_text: string;
    created_at: string;
};

type ProductAPI = {
    id: number;
    category: Category;
    banner_images: Image[];
    detail_images: Image[];
    name_en: string;
    name_ar: string;
    description_en: string;
    description_ar: string;
    price: number;
    currency: string;
    stock: number;
    material: string;
    diamond_weight: string;
    diamond_quality: string;
    sku: string;
    thumbnail_image: string;
    created_at: string;
    updated_at: string;
    is_trending: boolean;
    is_promoted: boolean;
    is_arabic_special: boolean;
};



  type Product ={
    id: number;
    banner_images: Image[];
    detail_images: Image[];
    name_en: string;
    name_ar: string;
    description_en: string;
    description_ar: string;
    price: string;
    currency: string;
    stock: number;
    material: string;
    diamond_weight: string;
    diamond_quality: string;
    sku: string;
    thumbnail_image: string;
    created_at: string;
    updated_at: string;
    is_trending: boolean;
    is_promoted: boolean;
    is_arabic_special: boolean;
    category: number;
  }
  
  type ApiResponse ={
    count: number;
    next: string | null;
    previous: string | null;
    results: Product[];
  }