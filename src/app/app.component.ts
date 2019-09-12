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
