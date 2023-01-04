import { helperFormatMonthYear } from '../../helpers/dateHelpers';

import {
  helperFormatMoney,
  helperFormatPercentage,
} from '../../helpers/numberHelpers';

export default function Investment({ children: investmentItem }) {
  const { reports, investment } = investmentItem;
  const { description, initialValue, finalValue, totalPercent } = investment;

  const valueColor = totalPercent >= 0 ? 'text-green-700' : 'text-red-700';

  return (
    <div className="mb-8 border border-xl rounded-md p-4">
      <h3 className="text-center text-2xl font-semibold mb-4">{description}</h3>

      <h4 className="text-center text-xl font-semibold mb-4">
        Rendimento total:{' '}
        <span className={valueColor}>
          {helperFormatMoney(finalValue - initialValue)} (
          {helperFormatPercentage(totalPercent)})
        </span>
      </h4>

      {reports.map(({ id, percentage, year, month, value }) => {
        const percentageClass =
          percentage > 0
            ? 'text-green-700'
            : percentage < 0
            ? 'text-red-700'
            : '';

        return (
          <div
            key={id}
            className="flex flex-row items-center justify-start space-x-8 border-b py-2"
          >
            <span className="font-mono">
              {helperFormatMonthYear(month, year)}
            </span>

            <span
              className={`${percentageClass} flex-grow font-semibold text-lg`}
            >
              {helperFormatMoney(value)}
            </span>

            <span className={`${percentageClass} font-semibold text-lg`}>
              {helperFormatPercentage(percentage)}
            </span>
          </div>
        );
      })}
    </div>
  );
}
