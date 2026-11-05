// Conteúdos da seção Conteúdo, separados por estilo.
//
// Cada item tem:
// - url: o link do post (Instagram, TikTok ou YouTube), do jeito que vem ao copiar.
//   Sem url, o card aparece como "Em breve".
// - titulo: o texto que aparece no card
// - capa: a capa do post, importada de src/assets/conteudos/ (sem capa, o card usa uma provisória)
//
// Um estilo pode ter os itens direto (itens) ou separados em subdivisões (grupos).
// formato: 'video' (capa vertical 9:16) ou 'carrossel' (capa 4:5, como os posts do Instagram).

import extensaoLivros from '../assets/conteudos/extensao-livros.jpg'
import temporizadorLeitura from '../assets/conteudos/temporizador-leitura.jpg'
import iaOculos from '../assets/conteudos/ia-oculos.jpg'
import eventosLiterarios from '../assets/conteudos/eventos-literarios.jpg'
import classicosAdaptados from '../assets/conteudos/classicos-adaptados.jpg'
import iaHistorias from '../assets/conteudos/ia-historias.jpg'
import naoMexa from '../assets/conteudos/nao-mexa.jpg'
import recursao from '../assets/conteudos/recursao.jpg'
import materiaEscura from '../assets/conteudos/materia-escura.jpg'
import cronicasLunares from '../assets/conteudos/cronicas-lunares.jpg'
import muitoMaisQueTrintaDias from '../assets/conteudos/muito-mais-que-trinta-dias.jpg'
import guerraDoTempo from '../assets/conteudos/guerra-do-tempo.jpg'
import kindleOuTablet from '../assets/conteudos/kindle-ou-tablet.jpg'
import enviarLivrosKindle from '../assets/conteudos/enviar-livros-kindle.jpg'
import modelosKindle from '../assets/conteudos/modelos-kindle.jpg'

export const CATEGORIAS = [
  {
    id: 'resenhas',
    titulo: 'Resenhas e indicações de livros',
    icone: 'livro',
    formato: 'video',
    grupos: [
      {
        titulo: 'Encenado',
        itens: [
          {
            url: 'https://www.instagram.com/reel/DZqS1oBJe5n/',
            titulo: 'Não Mexa, de Miko Chinen',
            capa: naoMexa,
          },
          {
            url: 'https://www.instagram.com/reel/DXsIG21iTAi/',
            titulo: 'Recursão, de Blake Crouch',
            capa: recursao,
          },
          {
            url: 'https://www.instagram.com/reel/DW_u4bajdl1/',
            titulo: 'Matéria escura, de Blake Crouch',
            capa: materiaEscura,
          },
        ],
      },
      {
        titulo: 'Falado',
        itens: [
          {
            url: 'https://www.instagram.com/reel/DY2zSKvJQt1/',
            titulo: 'Crônicas Lunares, de Marissa Meyer',
            capa: cronicasLunares,
          },
          {
            url: 'https://www.instagram.com/reel/DbodjPwpYdA/',
            titulo: 'Muito mais que trinta dias, de Mika Serur',
            capa: muitoMaisQueTrintaDias,
          },
          {
            url: 'https://www.instagram.com/reel/DZf9AgJJO5f/',
            titulo: 'É assim que se perde a guerra do tempo',
            capa: guerraDoTempo,
          },
        ],
      },
    ],
  },
  {
    id: 'mercado',
    titulo: 'Reflexões sobre o mercado editorial',
    icone: 'jornal',
    formato: 'video',
    itens: [
      {
        url: 'https://www.instagram.com/reel/Db35WazpgMi/',
        titulo: 'O BookTok e os eventos literários lotados',
        capa: eventosLiterarios,
      },
      {
        url: 'https://www.instagram.com/reel/DbWcULaJOPI/',
        titulo: 'Clássicos: texto original ou adaptado?',
        capa: classicosAdaptados,
      },
      {
        url: 'https://www.instagram.com/reel/Dav0gQWJmwC/',
        titulo: 'A IA está mudando a forma de contar histórias?',
        capa: iaHistorias,
      },
    ],
  },
  {
    id: 'ciencia',
    titulo: 'Ciências e engenharia para leitores',
    icone: 'atomo',
    formato: 'video',
    itens: [
      {
        url: 'https://www.instagram.com/reel/Deh3yFpJpL2/',
        titulo: 'Criei uma extensão que me impede de comprar livros',
        capa: extensaoLivros,
      },
      {
        url: 'https://www.instagram.com/reel/Dez7TD6NEen/',
        titulo: 'Um temporizador para as minhas sprints de leitura',
        capa: temporizadorLeitura,
      },
      {
        url: 'https://www.instagram.com/reel/DfND6NbNTIT/',
        titulo: 'Um sistema com IA para eu não esquecer os óculos',
        capa: iaOculos,
      },
    ],
  },
  {
    id: 'kindle',
    titulo: 'Kindle',
    icone: 'kindle',
    formato: 'carrossel',
    itens: [
      {
        url: 'https://www.instagram.com/p/DVt7tDwCeCN/',
        titulo: 'Kindle ou tablet para ler?',
        capa: kindleOuTablet,
      },
      {
        url: 'https://www.instagram.com/p/DWhb7CYidYm/',
        titulo: 'Formas de enviar livros para o Kindle',
        capa: enviarLivrosKindle,
      },
      {
        url: 'https://www.instagram.com/p/DXFhKrNCdAL/',
        titulo: 'Qual o seu modelo de Kindle preferido?',
        capa: modelosKindle,
      },
    ],
  },
]
