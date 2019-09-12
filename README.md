Cuando recibimos un token de JWT podemos utilizarlo como tal para ser validados ante una API, pero también debemos obtener los datos de él para extrer los datos y tomar acciones sobre el frontend

# decodeJWT

### Crear proyecto
```bash
ng new decodeJWT
```

### Instalar librerías
```bash
npm install jwt-decode --save
```

### Crear servicio
```bash
ng g service services/decode
```

### Modificar servicio decode.services.ts
```javascript
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class DecodeService {

  constructor() {}

  decodeToken(token: string) {
    const tkn = token;
    const decoded = jwt_decode(tkn);
    console.log(decoded);
  }
}
```

### Modificar app.module.ts
```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DecodeService } from './services/decode.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DecodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Modificar app.component.ts
```javascript
import { Component, OnInit } from '@angular/core';
import { DecodeService } from './services/decode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'decodeJWT';

  constructor(private service: DecodeService) { }

  ngOnInit() {
    this.service.decodeToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiZHVtbXkiLCJleHAiOjE1NjgyMDY2NjQsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxIn0.CeHYum-0w4M8_7egCpE7C5-2-UmrVr2tc9oWb1kXfxs');
  }
}
```

### Ejecutar aplicación
```bash
ng serve -o
```
