import { Component, ContentChild, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

// NgBootstrap Módulos
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-formulario-credito',
  templateUrl: './modal-formulario-credito.component.html',
  styleUrls: ['./modal-formulario-credito.component.scss']
})
export class ModalFormularioCreditoComponent implements OnInit {

  @Input()
  public textoTituloModal!: string;

  @ViewChild('contentModal')
  private modalRef!: TemplateRef<any>;

  @ContentChild('contenidoCuerpoModalTemplate')
  public contenidoCuerpoModalTemplate!: TemplateRef<any>;

  constructor(private readonly modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  abrirModalFormularioCredito(): void {
    this.modalService.open(this.modalRef, { ariaLabelledBy: 'modalFormularioCredito', size: 'xl' });
  }

  cerrarModalFormularioCredito(): void {
    this.modalService.dismissAll();
  }

}
