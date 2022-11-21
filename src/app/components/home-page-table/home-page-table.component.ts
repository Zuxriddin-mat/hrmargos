import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-table',
  templateUrl: './home-page-table.component.html',
  styleUrls: ['./home-page-table.component.scss']
})
export class HomePageTableComponent implements OnInit {
  @Input() id!: string;
  @Input() full_name!: string;
  @Input() gender!: string;
  @Input() birth_date!: string;
  @Input() passport!: string;
  @Input() update!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
