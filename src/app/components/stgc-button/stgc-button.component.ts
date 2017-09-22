import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-stgc-button',
  templateUrl: './stgc-button.component.html',
  styleUrls: ['./stgc-button.component.css']
})
export class StgcButtonComponent implements OnInit {
  @Input() name: string;
  @Input() text: string;
  @Input() route: string;
  @Input() disabled: boolean;

  constructor(private router: Router) {  }

  ngOnInit() {
  }

  public click (event) {
    event.preventDefault()
    if (!this.disabled) {
      this.router.navigate([this.route])      
    }
  }

}
