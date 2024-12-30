/* eslint-disable react/react-in-jsx-scope */

import Button from '../components/Button/Button';
import {
  COUNTRY,
  LANGUAGE,
} from '../utils/getPartnerConfigFromScriptUrl/getPartnerConfigFromScriptUrl.interface';

// Ensure the default export is properly defined
export default {
  title: 'Widgets/Button', // The title used in the Storybook sidebar
  component: Button, // The component to render in this story
};

export const Default = () => (
  <Button
    config={{
      allowed: true,
      name: 'taxefy',
      country: COUNTRY.AT,
      language: LANGUAGE.DE,
      link: 'https://taxefy.at/',
    }}
  />
);

export const MobileView = () => (
  <Button
    config={{
      allowed: true,
      name: 'taxefy',
      country: COUNTRY.AT,
      language: LANGUAGE.DE,
      link: 'https://taxefy.at/',
    }}
  />
);

MobileView.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};
