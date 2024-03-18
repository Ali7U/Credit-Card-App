import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input() name!: string | null;
  @Input() cardNumber!: string | null;
  @Input() expiration!: string;
  constructor() {}

  ngOnInit(): void {}
}
