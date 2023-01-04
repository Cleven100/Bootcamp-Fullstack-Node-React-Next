import { getBackendData } from '../api/api'
import Header from '../components/Header'
import Main from '../components/Main'
import {
  formatMoney,
  formatPercent,
  getMonthNameFrom,
} from '../helpers/helpers'

function getColorClassNameFrom(value) {
  return value > 0 ? 'text-green-500' : 'text-red-500'
}

function InvestmentsPage() {
  const investments = getBackendData()

  return (
    <>
      <Header>react-investments</Header>

      <Main>
        <ul>
          {investments.map(investment => {
            const { id, description, balance, totalPercent, reports } =
              investment

            const balanceClass = getColorClassNameFrom(balance)

            return (
              <li key={id} className="border my-2 p-2">
                <h2 className="text-xl text-center font-semibold">
                  {description}
                </h2>

                <h3 className="text-lg text-center font-semibold">
                  Rendimento total:{' '}
                  <span className={balanceClass}>
                    {formatMoney(balance)} ({totalPercent.toFixed(2)})
                  </span>
                </h3>

                <ul className="font-mono">
                  {reports.map(report => {
                    const { id, month, year, percent, value } = report

                    const itemColor = getColorClassNameFrom(percent)

                    return (
                      <li
                        key={id}
                        className={`flex flex-row items-center justify-between ${itemColor}`}
                      >
                        <span>
                          {getMonthNameFrom(month)}/{year}
                        </span>

                        <span className="flex-1 ml-4">
                          {formatMoney(value)}
                        </span>

                        <span>{formatPercent(percent)}</span>
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
      </Main>
    </>
  )
}

export default InvestmentsPage
