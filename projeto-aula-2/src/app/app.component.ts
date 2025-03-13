import { Component } from '@angular/core';
import { Pessoa } from './model/pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'projeto-aula2';

  pessoas: Pessoa[] = [
    {
      favorite: 0,
      curtidas: 0,
      titulo: 'Alice',
      subtitulo: 'Silva',
      paragrafo:
        'Alice Silva é uma escritora apaixonada por ficção científica. Seu trabalho é conhecido por explorar temas futuristas e filosóficos.',
    },
    {
      favorite: 0,
      curtidas: 0,
      titulo: 'Bruno',
      subtitulo: 'Ferreira',
      paragrafo:
        'Bruno Ferreira é um desenvolvedor de software com mais de 10 anos de experiência. Ele é especialista em inteligência artificial e aprendizado de máquina.',
    },
    {
      favorite: 0,
      curtidas: 0,
      titulo: 'Carla',
      subtitulo: 'Mendes',
      paragrafo:
        'Carla Mendes é fotógrafa profissional e viajante. Suas fotos capturam a essência da natureza e das culturas ao redor do mundo.',
    },
    {
      favorite: 0,
      curtidas: 0,
      titulo: 'Daniel',
      subtitulo: 'Souza',
      paragrafo:
        'Daniel Souza é um músico autodidata e compositor. Ele mistura ritmos tradicionais com elementos modernos para criar um som único.',
    },
    {
      favorite: 0,
      curtidas: 0,
      titulo: 'Elisa',
      subtitulo: 'Pereira',
      paragrafo:
        'Elisa Pereira é professora de história e autora de vários livros sobre civilizações antigas. Seu trabalho inspira alunos a explorar o passado.',
    },
  ];
}
