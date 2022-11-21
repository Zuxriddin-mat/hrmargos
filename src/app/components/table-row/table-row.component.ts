import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {
  @Input() id!: string;
  @Input() job_title!: string;
  @Input() number_of_jobs!: number;
  @Input() full_name!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
