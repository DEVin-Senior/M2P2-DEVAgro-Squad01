import { Object } from './grao';

export const GRAOS: Object[] = JSON.parse(String(localStorage.getItem("listaGraos"))); // puxando do localStorage

/* export const GRAOS: Grao[] = [
    { id: 12, nome: 'Milho', fazenda: 'Serrinha', colheita: '10/11/22' },
    { id: 13, nome: 'Feijão', fazenda: 'Barraquinha', colheita: '11/11/22' },
    { id: 14, nome: 'Soja', fazenda: 'Terrinha', colheita: '12/11/22' },
    { id: 15, nome: 'Lentilha', fazenda: 'Altinho', colheita: '13/11/22' },
    { id: 16, nome: 'Aveia', fazenda: 'Morrinho', colheita: '14/11/22' },
    { id: 17, nome: 'Cevada', fazenda: 'Prainha', colheita: '15/11/22' },
    { id: 18, nome: 'Lúpulo', fazenda: 'Laguinho', colheita: '16/11/22' },
    { id: 19, nome: 'Atuia', fazenda: 'Torrinha', colheita: '17/11/22' },
    { id: 20, nome: 'Maruba', fazenda: 'Typescriptinho', colheita: '18/11/22' }
  ]; */