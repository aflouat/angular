import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  constructor() { }
  @Input() title : string;
  @Input() lovelts : number;
  @Input() content : string;
  @Input() created_at : Date;





  ngOnInit() {
  }
  onLove(){
    this.lovelts++;
    console.log('lovelts:'+this.lovelts);
  }
  onDontLove(){
    this.lovelts--;
    console.log('lovelts:'+this.lovelts);
  }
  getColor(){
    if(this.lovelts>0){
      return 'green';
    }else if(this.lovelts<0){
      return 'red';

    }

  }

}
