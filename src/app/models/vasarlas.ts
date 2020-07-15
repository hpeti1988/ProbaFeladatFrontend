import { VasarlasTetel } from './vasarlasTetel';
import { Bolt } from './bolt';

export class Vasarlas {
  id: number;
  esemenyDatumIdo: Date;
  vasarlasOsszeg: number;
  penztargepAzonosito: number;
  partnerId: number;
  vasarlasTetel: VasarlasTetel[];
  bolt_nev: string;
}
