import { ArticlesSize, Images, Gender, Colors, Article } from './shop-store-full';

export interface ICustomProduct {
    id:          number;
    title:       string;
    description: string;
    images:      string;
    salePrice:   number;
    slug:        string;
    brand:       string;
    inStock:     number; //??
    sizes:       null;  //????
}

// export interface ICustomArticle {
//     id:            number;
//     title:         string;
//     articlesSizes: ArticlesSize[];
//     images:        Images[];
//     description:   string;
//     admissionDate: Date;
//     purchasePrice: number;
//     salePrice:     number;
//     genders:       Gender;
//     colors:        Colors;
//     status:        number;
// }