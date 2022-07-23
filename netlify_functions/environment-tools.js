export function useEnvironment(event, context) {
  if (process.env.CONTEXT === 'production')
    return {
      API: 'https://www.ligo.nl/',
      WEB_SOCKET_SERVER: 'wss://www.ligo.nl/cable/',
      CUSTOMER_DASHBOARD: 'https://www.ligo.nl/customer_dashboard/',
      QUESTIONNAIRE: 'https://www.ligo.nl/questionnaire/',
      SEGMENT_KEY: 'CkmreIc9KUZ20SU1VqiXukYfsFoz8FJr',
      GTM_ID: 'GTM-KZRR455',
      INTERCOM_KEY: 's1ehe6lz',
      STORYBLOK_TOKEN: 'qppLYxGGowuFt6bI8RMPfAtt',
      APP_CONTEXT: 'production',
      ADYEN: {
        environment: 'live',
        clientKey: 'live_QA2555YEV5CBNLFX7LPGGASIF4GV5DEV'
      }
    };
  else if (
    process.env.CONTEXT === 'deploy-preview' ||
    process.env.CONTEXT === 'branch-deploy'
  )
    return {
      API: 'https://staging.ligo.nl/',
      WEB_SOCKET_SERVER: 'wss://staging.ligo.nl/cable/',
      CUSTOMER_DASHBOARD: 'https://staging.ligo.nl/customer_dashboard/',
      QUESTIONNAIRE: 'https://staging.ligo.nl/questionnaire/',
      SEGMENT_KEY: 'GGIbpBfHQPyJy5sAiboHD9EjakrxfrpY',
      GTM_ID: 'GTM-W8WB9PP',
      INTERCOM_KEY: 'ppadyswj',
      STORYBLOK_TOKEN: 'NoOUok9ARPNwbBOVzKcaKQtt',
      APP_CONTEXT: 'staging',
      ADYEN: {
        environment: 'test',
        clientKey: 'test_NYF5OPL7O5ALBC7LOY5ANOJRNMBLMT3G'
      }
    };
  else
    return {
      API: 'https://staging.ligo.nl/',
      WEB_SOCKET_SERVER: 'wss://staging.ligo.nl/cable/',
      CUSTOMER_DASHBOARD: 'https://staging.ligo.nl/customer_dashboard/',
      QUESTIONNAIRE: 'https://staging.ligo.nl/questionnaire/',
      SEGMENT_KEY: 'GGIbpBfHQPyJy5sAiboHD9EjakrxfrpY',
      GTM_ID: 'GTM-W8WB9PP',
      INTERCOM_KEY: 'ppadyswj',
      STORYBLOK_TOKEN: 'lbEXHj1b6zrruFtdrL6QjQtt',
      APP_CONTEXT: 'development',
      ADYEN: {
        environment: 'test',
        clientKey: 'test_NYF5OPL7O5ALBC7LOY5ANOJRNMBLMT3G'
      }
    };
}
