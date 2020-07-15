import { VasarlasTetel } from './vasarlasTetel';

export class Cikkek {
  id: number;
  cikkSzam: string;
  vonalKod: string;
  nev: string;
  mennyisegEgyseg: string;
  nettoEgysegar: number;
  verzio: number;
  partnerId: number;
  vasarlasTetel: VasarlasTetel[];
}
