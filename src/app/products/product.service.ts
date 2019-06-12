import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'api/products/products.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.baseUrl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<IProduct | undefined> {
    return this.getProducts().pipe(
      map((products: IProduct[]) => products.find(p => p.productId === id))
    );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'An error occurred : ${err.error.message}';
    } else {
      errorMessage = 'Server returned code : ${err.status}, error message is : ${err.message}';
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  } 
}
