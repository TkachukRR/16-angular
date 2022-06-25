import { Component, OnInit } from '@angular/core';
import { loans } from './current-loans';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  loans = loans

  constructor() { }

  ngOnInit(): void {
  }

  hidden = false

  showModal() {
    this.hidden = !this.hidden
  }

  
  currentTotalAvailable() {

  }
}
