import Header from '../components/containers/Header';
import Main from '../components/containers/Main';
import Investments from '../components/investments/Investments';
import Investment from '../components/investments/Investment';

import { apiGetItemsToRender } from '../api/apiInvestments';

export default function InvestmentsPage() {
  const itemsToRender = apiGetItemsToRender();

  return (
    <div>
      <Header>react-investments v1.0.1</Header>

      <Main>
        <Investments>
          {itemsToRender.map(investmentItem => {
            return (
              <Investment key={investmentItem.id}>{investmentItem}</Investment>
            );
          })}
        </Investments>
      </Main>
    </div>
  );
}
