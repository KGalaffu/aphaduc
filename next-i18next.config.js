// next-i18next.config.js
module.exports = {
  i18n: {
      defaultLocale: 'fr',
      locales: ['fr', 'en'], // Liste de toutes les locales supportées
  },
  localePath: typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',
};
