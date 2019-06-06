import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  filteredProducts: IProduct[];
  products: IProduct[] = [
    {
      'productId': 1,
      'productName': 'Leaf Rake',
      'productCode': 'GDN-0011',
      'releaseDate': 'March 19, 2016',
      'description': 'Leaf rake with 48-inch wooden handle.',
      'price': 19.95,
      'starRating': 3.2,
      'imageUrl': 'https://cdn.fredericia.com/Perfion/Image.aspx?id=2c28bced-37fc-4a5b-9d21-4ce5d1869f86&size=550x275&format=png'
    },
    {
      'productId': 2,
      'productName': 'Garden Cart',
      'productCode': 'GDN-0023',
      'releaseDate': 'March 18, 2016',
      'description': '15 gallon capacity rolling garden cart',
      'price': 32.99,
      'starRating': 4.2,
      'imageUrl': 'http://rnbtheme.com/forty_two/wp-content/uploads/2017/10/slider_2_2.png'
    },
    {
      'productId': 5,
      'productName': 'Hammer',
      'productCode': 'TBX-0048',
      'releaseDate': 'May 21, 2016',
      'description': 'Curved claw steel hammer',
      'price': 8.9,
      'starRating': 4.8,
      'imageUrl': 'https://cdn.webshopapp.com/shops/9368/files/237662738/fredericia-furniture-swoon-lounge-chair-fredericia.jpg'
    },
    {
      'productId': 8,
      'productName': 'Saw',
      'productCode': 'TBX-0022',
      'releaseDate': 'May 15, 2016',
      'description': '15-inch steel blade hand saw',
      'price': 11.55,
      'starRating': 3.7,
      // tslint:disable-next-line:max-line-length
      'imageUrl': 'https://hauteliving.imgix.net/product-photos/fredericia-eve-chair/fredericia-eve-chair-angle-haute-living_181128_145049_1.jpg?auto=format%2Ccompress&fit=clip&q=5&w=1682&s=65c3cc0ad678b2532d4c9d1e0fd8d4df'
    },
    {
      'productId': 10,
      'productName': 'Video Game Controller',
      'productCode': 'GMG-0042',
      'releaseDate': 'October 15, 2015',
      'description': 'Standard two-button video game controller',
      'price': 35.95,
      'starRating': 4.6,
      'imageUrl': 'https://cdn.fredericia.com/Perfion/Image.aspx?id=28eacb0b-17a7-4276-98f3-693706f804b3&size=550x275&format=png'
    }
  ];
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
    console.log(this.filteredProducts);
  }

  toShowImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit() {
  }

}
