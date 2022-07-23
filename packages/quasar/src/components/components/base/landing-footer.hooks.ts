import { computed, ref, onBeforeUnmount } from 'vue';
import { FooterConfig } from '../../models/index';
import { FooterLink } from '../../models/layout/footer';
import { byLocale, Locale } from '../../models/layout/locale.helpers';
import Vue from 'vue';
import { Screen } from 'quasar';
import { useAlignTwoElements, useAwaitDOMNode } from '../../tools';

const baseConfig: FooterConfig = {
  support: [
    {
      title: 'layout.footer.intercom.title',
      subtitle: 'layout.footer.intercom.subtitle',
      info: [
        'layout.footer.intercom.info.info1',
        'layout.footer.intercom.info.info2',
        'layout.footer.intercom.info.info3'
      ],
      actionText: 'layout.footer.intercom.action',
      actionTextMobile: 'layout.footer.intercom.actionMobile',
      icon: 'img:/png/intercom.png',
      action: () => {
        // Intercom.wakeUp();
      }
    },
    {
      title: 'layout.footer.phone.title',
      subtitle: 'layout.footer.phone.subtitle',
      info: ['layout.footer.phone.info.info1'],
      actionText: 'layout.footer.phone.action',
      actionTextMobile: 'layout.footer.phone.actionMobile',
      icon: 'img:/png/phone.png',
      action: () => {
        window.open('tel:0203031043');
      }
    },
    {
      title: 'layout.footer.mail.title',
      subtitle: 'layout.footer.mail.subtitle',
      info: ['layout.footer.mail.info.info1'],
      actionText: 'layout.footer.mail.action',
      actionTextMobile: 'layout.footer.mail.actionMobile',
      icon: 'img:/png/mail.png',
      action: () => {
        window.open('mailto:support@ligo.nl');
      }
    }
  ],
  columns: [
    {
      title: 'layout.footer.services_title',
      items: [
        {
          locales: ['en'],
          text: 'layout.footer.service_1',
          link: 'incorporate-dutch-bv'
        },
        {
          locales: ['nl'],
          text: 'layout.footer.service_1',
          link: 'bv-oprichten'
        },
        {
          locales: ['nl', 'en'],
          text: 'layout.footer.service_2',
          link: 'persoonlijke-holding-oprichten'
        },
        {
          locales: ['nl'],
          text: 'layout.footer.service_3',
          link: 'omzetting-naar-bv'
        },
        {
          locales: ['nl'],
          text: 'layout.footer.service_4',
          external: true,
          link: '/aandelenoverdracht'
        },
        {
          locales: ['nl', 'en'],
          text: 'layout.footer.service_5',
          link: 'stichting-oprichten'
        }
      ]
    },
    {
      title: 'layout.footer.resource_title',
      items: [
        {
          locales: ['nl'],
          text: 'layout.footer.service_other_1',
          external: true,
          link: '/contracten'
        },
        {
          locales: ['en'],
          text: 'layout.footer.service_other_1',
          external: true,
          link: '/contracten?locale=en'
        },
        {
          locales: ['nl', 'en'],
          text: 'layout.footer.service_other_2',
          external: true,
          link: 'https://www.ligo.nl/dga-salaris'
        },
        {
          locales: ['nl'],
          text: 'layout.footer.service_other_3',
          external: true,
          link: 'https://www.ligo.nl/legal-help?locale=nl'
        },
        {
          locales: ['en'],
          text: 'layout.footer.service_other_3',
          external: true,
          link: 'https://www.ligo.nl/legal-help?locale=en'
        },
        {
          locales: ['nl'],
          text: 'layout.footer.service_other_4',
          link: '/legal-checkup ',
          external: true,
          badge: 'layout.footer.free_badge'
        },
        {
          locales: ['en'],
          text: 'layout.footer.service_other_4',
          link: '/legal-checkup ',
          external: true,
          badge: 'layout.footer.free_badge'
        }
      ]
    },
    {
      title: 'layout.footer.company_title',
      items: [
        {
          locales: ['nl', 'en'],
          text: 'layout.footer.company_1',
          link: 'over'
        },
        {
          locales: ['nl', 'en'],
          text: 'layout.footer.company_2',
          external: true,
          link: 'https://careers.ligo.nl'
        },
        {
          locales: ['nl'],
          text: 'layout.footer.company_3',
          external: true,
          link: '/contact'
        },
        {
          locales: ['en'],
          text: 'layout.footer.company_3',
          external: true,
          link: '/contact?locale=en'
        },
        { locales: [], text: 'layout.footer.company_4' }
      ]
    },
    {
      title: 'layout.footer.more_information_title',
      items: [
        {
          locales: ['nl', 'en'],
          text: 'layout.footer.more_information_1',
          link: 'bv-oprichten'
        },
        {
          locales: ['nl', 'en'],
          text: 'layout.footer.more_information_2',
          external: true,
          link: 'https://blog.ligo.nl'
        },
        {
          locales: ['nl', 'en'],
          text: 'layout.footer.more_information_3',
          external: true,
          link: 'https://www.ligo.nl/legal-checkup'
        }
      ]
    }
  ],
  social: [
    {
      icon: '../svg/linkedin.svg',
      link: 'https://www.linkedin.com/company/ligo-bv'
    },
    { icon: '../svg/facebook.svg', link: 'https://www.facebook.com/ligobv' },
    { icon: '../svg/twitter.svg', link: 'https://twitter.com/ligo_' },
    { icon: '../svg/youtube.svg', link: 'https://www.youtube.com/ligonlbv' }
  ]
};

const filterLinks = (links: FooterLink[], locale: Locale): FooterLink[] =>
  links.filter(byLocale(locale));

export function useFooterConfig() {
  const config = computed<FooterConfig>(() => {
    const locale = Vue['i18n'].locale;
    return {
      ...baseConfig,
      columns: baseConfig.columns.map((col) => ({
        ...col,
        items: filterLinks(col.items, locale)
      }))
    };
  });

  return { config };
}

export function useAlignmentFooterTools() {
  const selectors = [
    '#support-icon',
    '#footer-column-3',
    '#support-info-element-0',
    '#support-info-element-2'
  ];
  const guideLines = ref();
  let cleanUp = ref();
  const supportContentLeftPadding = 16;
  const footerColumnLeftPadding = 8;

  function cleanElement(node: HTMLElement) {
    node.style.margin = '0px 0px 0px 0px';
  }

  let init: any;
  (init = function () {
    useAwaitDOMNode(selectors).then(
      ([
        supportIcon,
        footerColumn3,
        supportInfoElement0,
        supportInfoElement2
      ]) => {
        cleanElement(supportInfoElement0);
        cleanElement(supportInfoElement2);
        if (cleanUp.value) cleanUp.value();
        cleanUp.value = null;
        guideLines.value = null;

        if (Screen.gt.sm) {
          const iconWidth = supportIcon.getBoundingClientRect().width;
          supportInfoElement0.style.marginLeft = `${-(
            iconWidth +
            supportContentLeftPadding -
            footerColumnLeftPadding
          )}px`;

          useAlignTwoElements(
            footerColumn3,
            supportInfoElement2,
            iconWidth + supportContentLeftPadding - footerColumnLeftPadding
          ).then(({ useGuideLines, cleanUp: cp }) => {
            guideLines.value = useGuideLines;
            cleanUp = cp;
          });
        }
      }
    );
  })();

  const resizeObserver = new ResizeObserver(() => {
    init();
  });
  resizeObserver.observe(document.body);

  onBeforeUnmount(() => {
    if (cleanUp.value) cleanUp.value();
  });
  return { guideLines };
}
