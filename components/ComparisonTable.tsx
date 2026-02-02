import React from 'react';

interface ComparisonRow {
  feature: string;
  v17: boolean | string;
  v18: boolean | string;
  v26: boolean | string;
  note?: string;
}

const comparisonData: ComparisonRow[] = [
  { feature: 'Opening Report by Elo', v17: false, v18: false, v26: true },
  { feature: 'Monte Carlo Analysis', v17: false, v18: false, v26: true },
  { feature: 'Consult AI Assistant', v17: false, v18: false, v26: true },
  { feature: 'Piece Path Visualization', v17: false, v18: false, v26: true },
  { feature: 'Raytracer 3D Board', v17: false, v18: false, v26: true },
  { feature: 'Access to 6 billion Lichess games', v17: false, v18: true, v26: true },
  { feature: 'Player Style Report', v17: false, v18: true, v26: true },
  { feature: 'Free Remote Engine (Premium Account)', v17: '1 CPU', v18: '2 CPUs', v26: '4 CPUs', note: '*' },
  { feature: 'Search for Strategic Topics', v17: false, v18: true, v26: true },
  { feature: 'Live Book', v17: true, v18: true, v26: true },
  { feature: '1 Year Premium Included', v17: false, v18: true, v26: true },
];

const renderCell = (value: boolean | string, isHighlight: boolean) => {
  if (typeof value === 'boolean') {
    if (value) {
      return <span className={`comparison-table__check ${isHighlight ? 'comparison-table__check--active' : 'comparison-table__check--inactive'}`}>✓</span>;
    }
    return <span className="comparison-table__dash">—</span>;
  }
  return <span className={`comparison-table__value ${isHighlight ? 'comparison-table__value--highlight' : 'comparison-table__value--muted'}`}>{value}</span>;
};

export const ComparisonTable: React.FC = () => {
  return (
    <section id="comparison" className="comparison-table">
      <div className="comparison-table__container">
        <div className="comparison-table__header">
          <h2 className="comparison-table__title">
            Version Comparison
            <div className="comparison-table__title-underline"></div>
          </h2>
          <p className="comparison-table__subtitle">See what's new in ChessBase '26</p>
        </div>

        <div className="comparison-table__wrapper">
          <table className="comparison-table__table">
              <thead className="comparison-table__thead">
                <tr>
                  <th className="comparison-table__th comparison-table__th--feature">
                    Feature
                  </th>
                  <th className="comparison-table__th comparison-table__th--version">
                    CB 17
                  </th>
                  <th className="comparison-table__th comparison-table__th--version">
                    CB 18
                  </th>
                  <th className="comparison-table__th comparison-table__th--version comparison-table__th--highlight">
                    CB '26
                  </th>
                </tr>
              </thead>
              <tbody className="comparison-table__tbody">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="comparison-table__row">
                    <td className="comparison-table__td comparison-table__td--feature">
                      {row.feature}
                      {row.note && <span className="comparison-table__note">{row.note}</span>}
                    </td>
                    <td className="comparison-table__td comparison-table__td--center">
                      {renderCell(row.v17, false)}
                    </td>
                    <td className="comparison-table__td comparison-table__td--center">
                      {renderCell(row.v18, false)}
                    </td>
                    <td className="comparison-table__td comparison-table__td--center comparison-table__td--highlight">
                      {renderCell(row.v26, true)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>

        <p className="comparison-table__footer">
          <span className="comparison-table__footer-star">*</span> Free Remote Engine (4 CPUs) available for Premium Account holders
        </p>
      </div>
    </section>
  );
};
