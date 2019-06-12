import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements  CanActivate{
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let id = +next.url[1].path;
      if(isNaN(id) || id < 1) {
        alert("Invalid product id");
        this.router.navigate(['products']);
        return false;
      };
      return true;
    }

  constructor(private router: Router) {}
  
}
