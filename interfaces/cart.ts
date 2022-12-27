import { Article, ArticlesSize, Colors, Gender, Images, Size, Stock } from "./";


export interface IProduct {
    id:             number;
    brand:          string;
    slug:           string;
    article?:       Article;
    admissionDate:  Date;
    tags:           string;
    status:         number;
    quantity:       number;
}


export interface ICartArticle {
    id:             number;
    title:          string;
    articlesSizes?:  ArticlesSize;
    images:         Images[];
    description:    string;
    admissionDate:  Date;
    purchasePrice:  number;
    salePrice:      number;
    //sizes?:         Size; //Size;
    genders:        Gender;
    colors?:        Colors; //Colors;
    status:         number;
}