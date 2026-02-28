import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';

export interface CargoSalario {
  cargo: string;
  setor: 'publico' | 'privado';
  salario: number;
  auxilios: number;
  pessoas: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  ],
})
export class HomePage {
  readonly maxValor = 130000;

  readonly cargos: CargoSalario[] = [
    // --- Setor Público / Político (ordem decrescente por total, STF no topo) ---
    // Fonte: ASMETRO, Terra, BBC Brasil (fev/2026). Teto constitucional: R$ 46.366.
    // Ganho médio líquido magistrado: R$ 81.500 (76% acima do teto). TJSP: R$ 122.800.
    // Penduricalhos incluem: férias vendidas (R$ 5,3 bi/ano), auxílio-saúde (até R$ 11.601/mês),
    // auxílio-alimentação (até R$ 4.184/mês), licença compensatória, honorários sucumbência, etc.
    { cargo: 'Ministro do STF', setor: 'publico', salario: 46366, auxilios: 35134, pessoas: 11 },
    { cargo: 'Desembargador (TJSP)', setor: 'publico', salario: 35462, auxilios: 87338, pessoas: 2500 },
    { cargo: 'Ministro do TCU', setor: 'publico', salario: 46366, auxilios: 35134, pessoas: 9 },
    { cargo: 'Juiz Federal', setor: 'publico', salario: 33689, auxilios: 47811, pessoas: 1900 },
    { cargo: 'Juiz do Trabalho', setor: 'publico', salario: 33689, auxilios: 47811, pessoas: 3600 },
    { cargo: 'Senador', setor: 'publico', salario: 33763, auxilios: 30000, pessoas: 81 },
    { cargo: 'Procurador da República', setor: 'publico', salario: 35462, auxilios: 25000, pessoas: 1200 },
    { cargo: 'Deputado Federal', setor: 'publico', salario: 33763, auxilios: 26000, pessoas: 513 },
    { cargo: 'Advogado Público (AGU)', setor: 'publico', salario: 27303, auxilios: 32000, pessoas: 10000 },
    { cargo: 'Governador', setor: 'publico', salario: 34000, auxilios: 18000, pessoas: 27 },
    { cargo: 'Defensor Público Federal', setor: 'publico', salario: 30404, auxilios: 15000, pessoas: 650 },
    { cargo: 'Vereador (capitais)', setor: 'publico', salario: 18991, auxilios: 12000, pessoas: 1100 },
    { cargo: 'Delegado da Polícia Federal', setor: 'publico', salario: 23692, auxilios: 5000, pessoas: 1500 },
    { cargo: 'Auditor Fiscal da Receita', setor: 'publico', salario: 21029, auxilios: 6000, pessoas: 10000 },

    // --- Setor Privado (ordem decrescente por total) ---
    { cargo: 'Engenheiro Sênior', setor: 'privado', salario: 14000, auxilios: 2000, pessoas: 350000 },
    { cargo: 'Desenvolvedor Sênior', setor: 'privado', salario: 12000, auxilios: 1800, pessoas: 150000 },
    { cargo: 'Médico (CLT)', setor: 'privado', salario: 12000, auxilios: 1500, pessoas: 300000 },
    { cargo: 'Advogado (CLT)', setor: 'privado', salario: 8000, auxilios: 1200, pessoas: 120000 },
    { cargo: 'Professor Universitário', setor: 'privado', salario: 6500, auxilios: 800, pessoas: 200000 },
    { cargo: 'Contador', setor: 'privado', salario: 6000, auxilios: 900, pessoas: 400000 },
    { cargo: 'Enfermeiro', setor: 'privado', salario: 4500, auxilios: 600, pessoas: 600000 },
    { cargo: 'Analista Administrativo', setor: 'privado', salario: 4000, auxilios: 700, pessoas: 500000 },
    { cargo: 'Professor Educação Básica', setor: 'privado', salario: 3400, auxilios: 500, pessoas: 2300000 },
    { cargo: 'Operador de Máquinas', setor: 'privado', salario: 2800, auxilios: 400, pessoas: 350000 },
    { cargo: 'Salário Mínimo', setor: 'privado', salario: 1412, auxilios: 0, pessoas: 57000000 },
  ];

  getTotal(c: CargoSalario): number {
    return c.salario + c.auxilios;
  }

  getBarWidth(c: CargoSalario): number {
    return Math.min((this.getTotal(c) / this.maxValor) * 100, 100);
  }

  getSalarioWidth(c: CargoSalario): number {
    const total = this.getTotal(c);
    return total > 0 ? (c.salario / total) * 100 : 0;
  }

  getAuxiliosWidth(c: CargoSalario): number {
    const total = this.getTotal(c);
    return total > 0 ? (c.auxilios / total) * 100 : 0;
  }

  getAuxiliosStart(c: CargoSalario): number {
    return (this.getBarWidth(c) * this.getSalarioWidth(c)) / 100;
  }

  labelFits(c: CargoSalario, tipo: 'salario' | 'auxilios'): boolean {
    const segmentPct = tipo === 'salario' ? this.getSalarioWidth(c) : this.getAuxiliosWidth(c);
    const effectivePct = (this.getBarWidth(c) * segmentPct) / 100;
    return effectivePct > 15;
  }

  formatCurrency(value: number): string {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 });
  }

  formatPessoas(value: number): string {
    if (value >= 1000000) {
      const mi = value / 1000000;
      return mi % 1 === 0 ? `${mi} mi` : `${mi.toFixed(1).replace('.', ',')} mi`;
    }
    if (value >= 1000) {
      const mil = value / 1000;
      return mil % 1 === 0 ? `${mil} mil` : `${mil.toFixed(1).replace('.', ',')} mil`;
    }
    return value.toString();
  }
}
