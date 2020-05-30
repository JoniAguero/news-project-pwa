import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-new',
  templateUrl: './card-new.component.html',
  styleUrls: ['./card-new.component.scss']
})
export class CardNewComponent implements OnInit {

  @Input() new: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.new);
    
  }

  goToNew(url: string) {
    window.open(url, "_blank");
  }

}
