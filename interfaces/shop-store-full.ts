export interface Items {
    id:          number;
    name?:       string;
    categories?: Categories[];
    status:      number;
    createdAt:   Date;
    updatedAt:   Date;
    products?:   Product[];
}

export interface Categories {
    id:        number;
    name?:     string;
    products?: Product[];
    status:    number;
    createdAt: Date;
    updatedAt: Date;
}

export interface Product {
    id:            number;
    brand:         string;
    slug:          string;
    articles:      Article[];
    admissionDate: Date;
    tags:          string;
    status:        number;
    createdAt:     Date;
    updatedAt:     Date;
}


export interface Article {
    id:            number;
    title:         string;
    articlesSizes: ArticlesSize[];
    images:        Images[];
    description:   string;
    admissionDate: Date;
    purchasePrice: number;
    salePrice:     number;
    genders:       Gender;
    colors:        Colors;
    status:        number;
}

export interface Images {
    id:        number;
    name:      string;
    status:    number;
    createdAt: Date;
    updatedAt: Date;
}

export interface Stock {
    id:             number;
    articleSizeId:  number;
    inStock:        number;
    status:         number;
    createdAt:      Date;
    updatedAt:      Date;
}

export interface Size {
    id:        number;
    name:      string;
    status:    number;
    createdAt: Date;
    updatedAt: Date;
}

export interface Gender {
    id:        number;
    name:      string;
    status:    number;
    createdAt: Date;
    updatedAt: Date;
}

export interface Colors {
    id:        number;
    name:      string;
    code:      string;
    rgb:       string;
    status:    number;
    createdAt: Date;
    updatedAt: Date;
}

export interface ArticlesSize {
    id:        number;
    stocks:    Stock[]; //VER
    articleId: number;
    sizes:     Size;
    status:    number;
    createdAt: Date;
    updatedAt: Date;
}
