import { Component, OnInit } from '@angular/core';
import data from './current-loans.json';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  loans = data.loans

  activeLoan = {
    "id": "",
    "title": "",
    "tranche": "",
    "available": "",
    "annualised_return": "",
    "term_remaining": "",
    "ltv": "",
    "amount": ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  hidden = false

  showModal(loan: any) {
    this.activeLoan = loan
    this.hidden = !this.hidden
  }

  convertSum = this.loans.reduce((accumulator, object) => {
    return accumulator + Number(object.available.replace(",", ""));
  }, 0);

  sum = this.convertSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


