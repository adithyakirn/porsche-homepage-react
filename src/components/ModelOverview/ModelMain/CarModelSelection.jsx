import React from 'react';
import OverviewIndividualItems from './OverviewIndividualItems';

function CarModelSection({ title, modelId }) {
  return (
    <section className="car-models-section">
      <div className="models-section-wrapper grid grid-cols-[repeat(auto-fit,minmax(275px,1fr))]">
        <div className="header-title-container flex items-center gap-[clamp(16px, 1.25vw + 12px, 36px)] grid">
          <h2 className="header-title mr-auto m-0">{title}</h2>
        </div>
        <div className="models-overview-container grid">
          <OverviewIndividualItems model={modelId} />
        </div>
      </div>
    </section>
  );
}

export default CarModelSection;