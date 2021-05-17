import { TipoDocumentoPipe } from './tipo-documento.pipe';

describe('Formatear tipo de documento', () => {

  let pipe: TipoDocumentoPipe;

  beforeEach(() => {
    pipe = new TipoDocumentoPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Transformar "CC" a "C.C."', () => {
    expect(pipe.transform('CC')).toBe('C.C.');
  });

  it('Transformar "XX" a "Sin especificar"', () => {
    expect(pipe.transform('XX')).toBe('Sin especificar');
  });

});
