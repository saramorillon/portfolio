import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import { Banner } from './components/Banner'
import { Header } from './components/Header'

const Background = styled('div')({
  backgroundImage: 'url(background.jpg)',
  backgroundRepeat: 'no-repeat',
  height: '28rem',
  color: '#f2f3f5',
  display: 'flex',
  flexDirection: 'column'
})

export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Background>
        <Header />
        <Banner />
      </Background>
    </BrowserRouter>
  )
}

// Bonjour !

// 👩 Qui suis-je ?
// Je m'appelle Sara, je fais du développement depuis 2011. J'ai commencé en bricolant des sites en HTML/CSS et PHP, le tout en autodidacte, puis j'ai appris le Java et le Javascript à l'école. Depuis, la programmation est l'une de mes passions.

// 🎓 Un peu d'histoire
// J'ai d'abord travaillé en SSII, durant mes trois années d'alternance. J'étais en charge d'un projet Java GWT. Je m'occupais de la technique et de la relation client.
// Ensuite je suis entrée dans une startup dans le domaine de l'énergie, où j'ai travaillé sur une application web en HTML/CSS/javascript vanilla/Nodejs et ses APIs REST en Java.
// En 2018 je suis passée freelance, en mission chez Euler Hermes où je m'occupais, en équipe, de la refonte d'une interface client en Nodejs/React.
// Début 2020 je suis entrée chez Kering pour travailler sur la refonte d'un système de synchronisation entre deux systèmes externes, le tout à base de Kafka et de SQS.

// 💻 Parlons business
// Je suis à la recherche d’un poste en full remote, full stack, backend ou frontend, NodeJS et/ou ReactJS. Je suis ouverte à d'autres technos également. En freelance de préférence.
// Pourquoi full remote ? Parce que j'habite loin de Paris, et que mon poste de travail à la maison est plus confortable et efficace que tout ce qu'on m'a proposé jusqu'à présent.

// 🔥 Pourquoi moi ?
// Mon plus gros point fort est la rapidité avec laquelle je comprends le métier et je m'adapte à la technique. Je peux être autonome en peu de temps.
// Je suis également très consciencieuse et toujours en recherche de qualité. Je n'hésite jamais à remettre mon travail en question, c'est comme ça qu'on apprend !
