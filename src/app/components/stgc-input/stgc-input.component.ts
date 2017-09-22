import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stgc-input',
  templateUrl: './stgc-input.component.html',
  styleUrls: ['./stgc-input.component.css']
})
export class StgcInputComponent implements OnInit {
  @Input() name: string;
  @Input() label: string;
  constructor() { }

  ngOnInit() {
  }

}
