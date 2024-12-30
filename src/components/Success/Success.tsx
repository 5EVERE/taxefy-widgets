import React from 'react';
import { useTranslation } from 'react-i18next';
import './Success.css';

const Success: React.FC = () => {
  const { t } = useTranslation('success');

  return (
    <div>
      <h1 className="titleSucces">{t('title')}</h1>
      <p className="subTitleSucces">{t('subTitle')}</p>
      <h2 className="refund-amount">{t('refund')}</h2>
      <button className="submit-btn">{t('button')}</button>
      <p className="info-text">{t('info')}</p>
    </div>
  );
};

export default Success;
