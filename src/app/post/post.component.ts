import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  nblove =0;
  @Input() titre :string;
  @Input() contenu :string;
  @Input() date :Date;
  constructor() { }
   
  ngOnInit() {
  }
  getBG(){
    if(this.nblove===0){
      return 'white';

    }else{
      if(this.nblove>0){
        return 'green';
      }else{
        return 'red';
      }
    }
    }

    love(){
      this.nblove++;
    }
    didnt(){
      this.nblove--;
    }



  
}
