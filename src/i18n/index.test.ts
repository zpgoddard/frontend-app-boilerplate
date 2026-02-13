import { t, setLocale, getLocale, supportedLocales } from './index';

describe('i18n', () => {
  beforeEach(() => {
    setLocale('en');
  });

  describe('t()', () => {
    it('returns English string for known key when locale is en', () => {
      expect(t('common.hello')).toBe('Hello World');
      expect(t('home.title')).toBe('This is my new app.');
    });

    it('returns Spanish string after setLocale to es', () => {
      setLocale('es');
      expect(t('common.hello')).toBe('Hola Mundo');
      expect(t('home.title')).toBe('Esta es mi nueva aplicación.');
    });

    it('returns French string after setLocale to fr', () => {
      setLocale('fr');
      expect(t('common.hello')).toBe('Bonjour le monde');
    });

    it('falls back to key when key is missing', () => {
      expect(t('unknown.key')).toBe('unknown.key');
    });

    it('falls back to English when key missing in current locale', () => {
      setLocale('de');
      expect(t('common.hello')).toBe('Hallo Welt');
    });
  });

  describe('setLocale / getLocale', () => {
    it('defaults to en', () => {
      expect(getLocale()).toBe('en');
    });

    it('updates current locale', () => {
      setLocale('es');
      expect(getLocale()).toBe('es');
      setLocale('fr');
      expect(getLocale()).toBe('fr');
    });

    it('ignores invalid locale', () => {
      setLocale('en');
      setLocale('xx' as 'en');
      expect(getLocale()).toBe('en');
    });
  });

  describe('supportedLocales', () => {
    it('includes en, es, fr, de', () => {
      expect(supportedLocales).toEqual(['en', 'es', 'fr', 'de']);
    });
  });
});
