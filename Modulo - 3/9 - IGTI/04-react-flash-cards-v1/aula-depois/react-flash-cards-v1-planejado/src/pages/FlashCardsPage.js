import { useState } from 'react';
import Button from '../components/Button';
import Header from '../components/containers/Header';
import Main from '../components/containers/Main';
import FlashCard from '../components/FlashCard';
import RadioButton from '../components/RadioButton';

import { serviceGetNewId } from '../services/idService';
import { helperShuffleArray } from '../helpers/arrayHelpers';

const FLASH_CARDS = [
  {
    id: serviceGetNewId(),
    title: 'JSX',
    description:
      'JavaScript and XML. Linguagem de marcação que pode ser utilizada para a criação de componentes React de forma mais declarativa. É bem semelhante ao HTML.',
  },
  {
    id: serviceGetNewId(),
    title: 'React',
    description:
      'Biblioteca criada pelo Facebook para renderização otimizada. Pode ser utilizada em diversas plataformas como web, mobile e Realidade Virtual.',
  },
  {
    id: serviceGetNewId(),
    title: 'Componente React',
    description:
      'Representa código reutilizável pelo React. Em regra, deve começar com letra maiúscula. Pode ser customizável através de "props"',
  },
  {
    id: serviceGetNewId(),
    title: 'Hooks',
    description:
      'Estruturas que são acopladas às funções para aumentar o poder de componentes React. Podem permitir a utilização de estado e gerenciamento de efeitos colaterais, por exemplo.',
  },
  {
    id: serviceGetNewId(),
    title: 'Function Components',
    description:
      'Componentes baseados em função. São amplamente utilizados atualmente em detrimento às Class Components, que aos poucos podem se tornar obsoletas.',
  },
  {
    id: serviceGetNewId(),
    title: 'useState',
    description:
      'Hook nativo do React que permite o gerenciamento de estado da aplicação e de componentes.',
  },
  {
    id: serviceGetNewId(),
    title: 'Estado',
    description:
      'Também conhecido como "state". Pode ser representando por "dados que mudam com o tempo" e que também podem ser manipulados pelos usuários, geralmente através de formulários, e também por API\'s, outros componentes, etc.',
  },
  {
    id: serviceGetNewId(),
    title: 'Efeitos colaterais',
    description:
      'Também conhecido como "side effects". Representa tudo o que o React não controla diretamente. Bons exemplos são a manipulação manual do DOM e requisições HTTP.',
  },
  {
    id: serviceGetNewId(),
    title: 'useEffect',
    description: 'Hook nativo do React para lidar com efeitos colaterais.',
  },
  {
    id: serviceGetNewId(),
    title: 'Virtual DOM',
    description:
      'Estrutura utilizada pelo React para manipulação do DOM em memória. Permite a atualização do DOM real somente onde necessário, o que pode garantir uma melhor performance da aplicação.',
  },
].sort((a, b) => a.title.localeCompare(b.title));

export default function FlashCardsPage() {
  const [flashCards, setFlashCards] = useState([...FLASH_CARDS]);
  const [showFirst, setShowFirst] = useState('description');

  function handleShuffle() {
    const shuffledFlashCards = helperShuffleArray(flashCards);
    setFlashCards(shuffledFlashCards);
  }

  return (
    <div>
      <Header>
        <h1 className="text-center text-xl font-semibold">React FlashCards</h1>
      </Header>

      <Main>
        <div className="flex flex-row items-center justify-center space-x-4 mb-4">
          <RadioButton
            name="radioShowFirst"
            labelDescription="Título"
            onRadioClick={() => {
              setShowFirst('title');
            }}
            value={showFirst}
            checked={showFirst === 'title'}
          />

          <RadioButton
            name="radioShowFirst"
            labelDescription="Descrição"
            onRadioClick={() => {
              setShowFirst('description');
            }}
            value={showFirst}
            checked={showFirst === 'description'}
          />

          <Button onClick={handleShuffle}>Embaralhar</Button>
        </div>

        <h3 className="text-center text-xl font-semibold">
          {flashCards.length} cards disponíveis
        </h3>

        <ul className="flex flex-row items-center justify-center flex-wrap">
          {flashCards.map(({ id, title, description }) => {
            return (
              <li key={id} className="m-2">
                <FlashCard
                  title={title}
                  description={description}
                  showFirst={showFirst}
                />
              </li>
            );
          })}
        </ul>
      </Main>
    </div>
  );
}
