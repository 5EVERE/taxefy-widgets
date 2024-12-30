/* eslint-disable react/react-in-jsx-scope */
import { cloneElement, JSX, render } from 'preact';
import { getPartnerConfigFromScriptUrl } from './utils/getPartnerConfigFromScriptUrl/getPartnerConfigFromScriptUrl';
import NotAvailable from './components/NotAvailable/NotAvailable';
import { getPartnerConfig } from './api/config/config.service';
import { IConfig } from './api/config/config.interface';
import Loading from './components/Loading/Loading';
import './index.css';
import Form from './widgets/Form/Form';
import './i18n';

const addGoogleAnalytics = (trackingId: string, partner: string) => {
  // Add Google Analytics script to the document head
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  script.async = true;
  document.head.appendChild(script);

  // Inline script to initialize Google Analytics with persistent partner-specific data

  const scriptInline = document.createElement('script');
  scriptInline.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${trackingId}', { 'custom_map': { 'dimension1': 'partner' } });
        gtag('set', { 'partner_name': '${partner}' });
    `;

  document.head.appendChild(scriptInline);
};

// Function to detect widgets and render the corresponding component
const renderWidgets = async () => {
  const partnerConfig = getPartnerConfigFromScriptUrl();
  console.info('TW Version: ' + process.env.VERSION);
  addGoogleAnalytics('G-0GV613CK3B', partnerConfig?.partner || 'default');
  let config: null | IConfig = null;

  if (partnerConfig?.partner) {
    config = await getPartnerConfig(partnerConfig?.partner);
  }

  if (config) {
    config.language = partnerConfig?.language;
    config.country = partnerConfig?.country;
  }

  async function renderer(id: string, component: JSX.Element) {
    const renderComponent = document.getElementById(id);
    // Display a loading text while fetching config
    if (renderComponent) {
      render(<Loading />, renderComponent);
    }
    // Render the appropriate component based on the config and partner information
    if (renderComponent && config) {
      if (config.allowed && partnerConfig?.partner) {
        render(cloneElement(component, { config }), renderComponent);
      } else {
        render(<NotAvailable config={config} />, renderComponent);
      }
    }
  }

  // Pass the config prop when calling the renderer function
  if (config) {
    await renderer('default-banner', <Form />);
  }
};

// Ensure the script waits for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
  renderWidgets();
});
