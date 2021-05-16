import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';

// rxjs
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.component.html',
  styleUrls: ['./creditos.component.scss']
})
export class CreditosComponent implements OnInit, OnDestroy {

  public nombrePagina!: string;
  private subscribes!: Subscription[];

  constructor(
    private readonly router: Router,
  ) {
    this.inicializarVariables();
    this.obtenerNombrePagina();
  }

  private inicializarVariables(): void {
    this.nombrePagina = '';
    this.subscribes = [];
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscribes.forEach((sub) => sub.unsubscribe());
  }

  public obtenerNombrePagina(): void {
    this.subscribes.push(
      this.router.events
        .pipe(
          filter((event: any) => event instanceof ActivationEnd),
          filter((event: ActivationEnd) => event.snapshot.firstChild == null),
          map((evento: ActivationEnd) => evento.snapshot.data)
        )
        .subscribe(
          (data) => (this.nombrePagina = data?.title)
        )
    );
  }
}
