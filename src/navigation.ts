import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Главная',
      href: getPermalink('/'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'О компании',
      links: [
        { text: 'О нас', href: getPermalink('/about') },
        { text: 'Блог', href: getBlogPermalink() },
        { text: 'Услуги', href: getPermalink('/services') },
        { text: 'Контакты', href: getPermalink('/#contact') },
        { text: 'Цены', href: getPermalink('/pricing') },
      ],
    },
  ],
  socialLinks: [
    {
      ariaLabel: 'Telegram',
      icon: 'tabler:brand-telegram',
      href: 'https://t.me/+79252224190',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      ariaLabel: 'Max',
      icon: 'tabler:message-circle',
      href: 'https://max.ru/+79252224190',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  ],
  footNote: `
    Сделано в <a class="text-blue-600 underline dark:text-muted" href="https://habdev.ru">habdev</a> · All rights reserved.
  `,
};
