'use client';

const TypographyTest = () => {
  return (
    <div className="p-8 space-y-6 bg-[var(--color-neutral-100)]">
      <h1 className="headlineL text-[var(--color-blue-700)]">headlineL - SUIT 폰트</h1>
      <h2 className="headlineM text-[var(--color-blue-600)]">headlineM</h2>
      <h3 className="headlineS text-[var(--color-blue-500)]">headlineS</h3>

      <p className="title1 text-[var(--color-neutral-800)]">title1</p>
      <p className="title2 text-[var(--color-neutral-600)]">title2</p>
      <p className="title3 text-[var(--color-neutral-500)]">title3</p>

      <p className="labelL text-[var(--color-brand-primary)]">labelL</p>
      <p className="labelM text-[var(--color-brand-secondary1)]">labelM</p>
      <p className="labelS text-[var(--color-brand-secondary2)]">labelS</p>

      <p className="body1 text-[var(--color-semantic-warning)]">body1 - 긴 문장용</p>
      <p className="body2 text-[var(--color-semantic-error)]">body2 - 조금 작은 본문</p>

      <p className="captionL">captionL</p>
      <p className="captionM">captionM</p>
      <p className="captionS">captionS</p>
    </div>
  );
};

export default TypographyTest;
