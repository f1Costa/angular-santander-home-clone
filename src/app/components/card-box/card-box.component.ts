import { Component, OnInit } from '@angular/core';
import { AccountDataModel } from 'src/app/model/accountDataModel';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css']
})
export class CardBoxComponent implements OnInit {
  ngOnInit(): void {
    this.getAccountData();
  }

  getAccountData() {
    this.servivce.getCard().subscribe(data => {
      this.accountData.name = data.name
      this.accountData.account.agency = data.account.agency;
      this.accountData.account.number = data.account.number;
      this.accountData.card.limit = data.card.limit;
      this.accountData.card.number = data.card.number.split(' ')[3];
      //this.formattedCardLimit = FormatCurrencyService.formatCurrency(
      this.accountData.card.limit
    })

  }
  constructor(private servivce: CardsService) {

  }

  accountData: AccountDataModel = {
    name: "Sebastião Teles",
    account: {
      agency: "0002",
      number: "00.12345-0",
    },

    card: {
      limit: 10000,
      number: "1111",
    }
  };
}