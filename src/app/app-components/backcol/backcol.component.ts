import { Component, OnInit, Input } from '@angular/core';
import { Router }    from '@angular/router';

@Component({
  selector: 'app-backcol',
  templateUrl: './backcol.component.html',
  styleUrls: ['./backcol.component.css']
})
export class BackcolComponent {
  @Input() msg = "添加渠道"
  constructor(private router: Router) { }

  backTo ():void{
    window.history.back()
  }
}
