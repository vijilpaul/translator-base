import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input() message: any;
  @Input() popupShow: any = false;
  @Input() popupShowBg: any;
  @Output() popupNotification =  new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }
  onClose(){
    this.popupShow = false;
    this.popupNotification.emit(false)
  }


}
