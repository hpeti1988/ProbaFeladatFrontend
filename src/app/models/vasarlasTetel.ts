import { Cikkek } from './cikkek';
import { Vasarlas } from './vasarlas';

export class VasarlasTetel {
  id: number;
  partnerct: Cikkek;
  vasarlas: Vasarlas[];
  mennyiseg: number;
  brutto: number;
  partnerId: number;
}
