import { Injectable, TemplateRef } from '@angular/core';
import { ModalConfig } from '../interfaces/modal-config';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  open(config: ModalConfig) {
    console.log('open');
    return new ModalRef();
  }
}

export class ModalRef {
  close(): void {
    console.log('close');
  }
}
