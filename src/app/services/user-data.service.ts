import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  authValue = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private router: Router,
    private routing: ActivatedRoute
  ) {}

  addUserData(data: any) {
    return this.http.post('http://localhost:3000/RegistraionForm', data, {
      observe: 'response',
    });
  }
  GetUserData() {
    return this.http.get('http://localhost:3000/RegistraionForm');
  }

  getDataUsingID(id: any) {
    return this.http.get(`http://localhost:3000/RegistraionForm/${id}`);
  }
  deleteData(id: any) {
    return this.http.delete(`http://localhost:3000/RegistraionForm/${id}`);
  }
  updateDataPerID(product: any) {
    return this.http.patch(
      `http://localhost:3000/RegistraionForm/${product.id}`,
      product,
      { observe: 'response' }
    );
  }

  loginUser(loginData: any) {
    const formData = loginData.value;
    console.warn(formData);

    return this.http
      .get('http://localhost:3000/RegistraionForm')
      .subscribe((result: any) => {
        let dataFind = result.find(
          (data: any) =>
            data.Email === loginData.Email &&
            loginData.Password === data.Password
        );
        if (dataFind) {
          this.authValue.next(true);
          this.router.navigate(['home-page']);
          localStorage.setItem('userData', JSON.stringify(dataFind));
        } else {
          console.warn('something went to wrong!!');
        }
      });
  }
  reloadUser() {
    if (localStorage.getItem('userData')) {
      this.router.navigate(['home-page']);
    }
  }
}
