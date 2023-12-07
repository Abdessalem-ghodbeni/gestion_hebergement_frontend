import { Bloc } from '../Bloc/bloc';
import { Universite } from '../Universite/universite';

export class Foyer {
  idFoyer!: number;
  nomFoyer!: string;
  capaciteFoyer!: number;
  // universite?: Universite;

  blocs?: Partial<Bloc>[];
}
