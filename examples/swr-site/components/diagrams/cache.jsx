import { useDraw } from './use-draw'

const PATHS = {
  'en-US': {
    defaultCacheProvider:
      'M26.6 32c2.8 0 4.5-1.8 4.5-4.7 0-3-1.7-4.8-4.4-4.8h-3.2V32h3zm-1.7-1.2v-7h1.7c2 0 3.1 1.2 3.1 3.5 0 2.2-1 3.5-3.2 3.5h-1.6zM35.8 32c1.5 0 2.6-.7 3-1.9l-1.4-.2c-.2.7-.8 1-1.6 1-1.2 0-2-.8-2-2.1h5v-.5c0-2.6-1.5-3.6-3.1-3.6-2 0-3.3 1.5-3.3 3.7s1.3 3.6 3.4 3.6zm-2-4.3c0-1 .7-1.8 1.9-1.8 1 0 1.7.8 1.7 1.8h-3.6zm9.8-2.9h-1.5v-.6c0-.7.3-1 1-1l.6.1.3-1.1-1.2-.2c-1 0-2 .7-2 2v.8h-1.2V26h1.1v6h1.4v-6h1.5v-1zm3.2 7.3c1.2 0 1.9-.6 2.1-1.2h.1v1h1.3v-4.7c0-2-1.6-2.5-2.7-2.5-1.3 0-2.5.5-3 1.8l1.4.3c.2-.5.7-1 1.6-1 .9 0 1.4.5 1.4 1.3 0 .5-.6.5-1.8.7-1.4.1-2.8.5-2.8 2.1 0 1.4 1.1 2.2 2.4 2.2zm.3-1.2c-.7 0-1.3-.3-1.3-1s.7-1 1.5-1c.4-.2 1.5-.3 1.7-.5v1c0 .8-.7 1.5-1.9 1.5zm9.5-2c0 1.3-.9 1.8-1.7 1.8-.8 0-1.4-.6-1.4-1.5v-4.4h-1.4v4.5c0 1.8 1 2.7 2.3 2.7 1.1 0 1.8-.6 2.2-1.3V32H58v-7h-1.4v4zm4.6-6.5h-1.4V32h1.4v-9.5zm5 2.4h-1.4v-1.7h-1.4V25h-1v1h1v4.2c0 1.3 1 2 2.1 1.9l.9-.2-.3-1.1h-.4c-.5 0-.9 0-.9-.9V26h1.5v-1zm12.9.7c-.4-2-2-3.2-4-3.2-2.4 0-4.2 1.8-4.2 4.9 0 3 1.8 4.8 4.3 4.8 2 0 3.6-1.3 3.9-3.1h-1.5c-.2 1.2-1.2 1.8-2.4 1.8-1.6 0-2.9-1.2-2.9-3.5s1.2-3.6 2.9-3.6c1.2 0 2.2.7 2.4 2h1.5zm3.6 6.6c1.1 0 1.8-.6 2-1.2h.1v1h1.4v-4.7c0-2-1.7-2.5-2.8-2.5-1.3 0-2.5.5-3 1.8l1.4.3c.2-.5.7-1 1.6-1 1 0 1.4.5 1.4 1.3 0 .5-.5.5-1.8.7-1.4.1-2.7.5-2.7 2.1 0 1.4 1 2.2 2.4 2.2zM83 31c-.8 0-1.4-.3-1.4-1s.7-1 1.5-1c.4-.2 1.5-.3 1.7-.5v1c0 .8-.7 1.5-1.8 1.5zm8 1.1c1.6 0 2.7-1 2.8-2.3h-1.3c-.2.7-.8 1.2-1.6 1.2-1.1 0-1.9-1-1.9-2.5 0-1.6.8-2.5 2-2.5.8 0 1.3.5 1.5 1.2h1.3c-.1-1.4-1.3-2.4-2.9-2.4-2 0-3.3 1.5-3.3 3.7 0 2.1 1.3 3.6 3.3 3.6zm5.6-4.3c0-1.1.7-1.8 1.7-1.8s1.5.6 1.5 1.7V32h1.4v-4.5c0-1.8-1-2.7-2.4-2.7-1.1 0-1.8.5-2.1 1.3v-3.6h-1.5V32h1.4v-4.2zm9.5 4.3c1.5 0 2.6-.7 3-1.9l-1.4-.2c-.2.7-.8 1-1.6 1-1.2 0-2-.8-2-2.1h5v-.5c0-2.6-1.5-3.6-3.1-3.6-2 0-3.3 1.5-3.3 3.7s1.3 3.6 3.4 3.6zm-2-4.3c0-1 .7-1.8 1.9-1.8 1 0 1.7.8 1.7 1.8h-3.6zm10 4.2h1.4v-3.3h2c2.1 0 3.2-1.3 3.2-3 0-1.8-1-3.2-3.3-3.2h-3.3V32zm1.4-4.5v-3.7h1.8c1.4 0 2 .7 2 1.8 0 1-.6 1.9-2 1.9h-1.8zm6.7 4.5h1.4v-4.3c0-1 .7-1.6 1.7-1.6h.7v-1.3h-.6c-.8 0-1.5.5-1.8 1.2v-1h-1.4v7zm7.6.1c2 0 3.4-1.4 3.4-3.6s-1.4-3.7-3.4-3.7-3.3 1.5-3.3 3.7 1.3 3.6 3.3 3.6zm0-1.1c-1.3 0-1.9-1.2-1.9-2.5 0-1.4.6-2.5 2-2.5 1.3 0 1.9 1.1 1.9 2.5 0 1.3-.6 2.5-2 2.5zm10.6-6H139l-1.8 5.4h-.1l-1.8-5.5h-1.5l2.6 7.1h1.5l2.5-7zm1.3 7h1.4v-7h-1.4v7zm.7-8.2c.4 0 .8-.4.8-.8 0-.5-.4-.8-.8-.8-.5 0-.9.3-.9.8 0 .4.4.8.9.8zm5.1 8.3c1.3 0 1.8-.8 2-1.2h.2V32h1.3v-9.5h-1.4v3.6c-.3-.5-.8-1.3-2-1.3-1.8 0-3 1.4-3 3.7 0 2.3 1.2 3.6 2.9 3.6zm.3-1.1c-1.2 0-1.9-1.1-1.9-2.5 0-1.5.7-2.5 2-2.5 1.1 0 1.8 1 1.8 2.5 0 1.4-.7 2.5-1.9 2.5zm8.2 1c1.5 0 2.6-.7 3-1.9l-1.4-.2c-.2.7-.8 1-1.6 1-1.2 0-2-.8-2-2.1h5v-.5c0-2.6-1.5-3.6-3.1-3.6-2 0-3.3 1.5-3.3 3.7s1.3 3.6 3.4 3.6zm-2-4.3c0-1 .8-1.8 1.9-1.8 1 0 1.8.8 1.8 1.8H154zm6.5 4.2h1.4v-4.3c0-1 .7-1.6 1.7-1.6h.7v-1.3h-.6c-.8 0-1.5.5-1.8 1.2v-1h-1.4v7z',
    firstCacheProvider:
      'M60.2 57.6c-.3-2-1.9-3.2-3.9-3.2-2.4 0-4.3 1.8-4.3 4.9 0 3 1.8 4.8 4.3 4.8 2 0 3.6-1.3 4-3.1h-1.5c-.3 1.2-1.3 1.8-2.5 1.8-1.6 0-2.8-1.2-2.8-3.5s1.2-3.6 2.8-3.6c1.2 0 2.2.7 2.5 2h1.4zm3.6 6.6c1.2 0 1.8-.6 2.1-1.2v1h1.4v-4.7c0-2-1.6-2.5-2.8-2.5-1.2 0-2.4.5-2.9 1.8l1.3.3c.2-.5.7-1 1.7-1 .9 0 1.3.5 1.3 1.3 0 .5-.5.5-1.8.7-1.3.1-2.7.5-2.7 2.1 0 1.4 1 2.2 2.4 2.2zm.3-1.2c-.8 0-1.3-.3-1.3-1s.6-1 1.4-1c.5-.2 1.5-.3 1.7-.5v1c0 .8-.6 1.5-1.8 1.5zm8 1.1c1.6 0 2.7-1 2.9-2.3h-1.4c-.1.7-.7 1.2-1.5 1.2-1.2 0-2-1-2-2.5 0-1.6.8-2.5 2-2.5.8 0 1.4.5 1.5 1.2H75c-.2-1.4-1.3-2.4-3-2.4-2 0-3.2 1.5-3.2 3.7 0 2.1 1.2 3.6 3.3 3.6zm5.7-4.3c0-1.1.7-1.8 1.7-1.8s1.5.6 1.5 1.7V64h1.4v-4.5c0-1.8-1-2.7-2.5-2.7-1 0-1.7.5-2 1.3h-.2v-3.6h-1.3V64h1.4v-4.2zm9.4 4.3c1.5 0 2.6-.7 3-1.9l-1.4-.2c-.2.7-.8 1-1.6 1-1.2 0-2-.8-2-2.1h5v-.5c0-2.6-1.5-3.6-3.1-3.6-2 0-3.3 1.5-3.3 3.7s1.3 3.6 3.4 3.6zm-2-4.3c0-1 .8-1.8 2-1.8 1 0 1.7.8 1.7 1.8h-3.7zm10 4.2h1.4v-3.3h2c2.2 0 3.2-1.3 3.2-3 0-1.8-1-3.2-3.2-3.2h-3.4V64zm1.4-4.5v-3.7h1.8c1.4 0 2 .7 2 1.8 0 1-.6 1.9-2 1.9h-1.8zm6.7 4.5h1.4v-4.3c0-1 .7-1.6 1.7-1.6h.7v-1.3h-.6c-.8 0-1.5.5-1.8 1.2v-1h-1.4v7zm7.7.1c2 0 3.3-1.4 3.3-3.6s-1.3-3.7-3.3-3.7c-2 0-3.3 1.5-3.3 3.7S109 64 111 64zm0-1.1c-1.3 0-2-1.2-2-2.5 0-1.4.7-2.5 2-2.5s1.9 1.1 1.9 2.5c0 1.3-.6 2.5-2 2.5zm10.6-6H120l-1.8 5.4-1.9-5.5H115l2.5 7.1h1.5l2.6-7zm1.2 7h1.4v-7h-1.4v7zm.7-8.2c.5 0 .9-.4.9-.8 0-.5-.4-.8-.9-.8s-.9.3-.9.8c0 .4.4.8 1 .8zm5.1 8.3c1.3 0 1.8-.8 2-1.2h.2V64h1.4v-9.5h-1.4v3.6h-.1c-.3-.5-.7-1.3-2-1.3-1.8 0-3 1.4-3 3.7 0 2.3 1.2 3.6 3 3.6zm.3-1.1c-1.2 0-1.8-1.1-1.8-2.5 0-1.5.6-2.5 1.8-2.5 1.3 0 1.9 1 1.9 2.5 0 1.4-.7 2.5-1.9 2.5zm8.2 1.1c1.6 0 2.7-.7 3-1.9l-1.3-.2c-.3.7-.9 1-1.7 1-1.2 0-2-.8-2-2.1h5v-.5c0-2.6-1.5-3.6-3-3.6-2 0-3.4 1.5-3.4 3.7s1.3 3.6 3.4 3.6zm-2-4.3c0-1 .8-1.8 2-1.8 1 0 1.7.8 1.7 1.8h-3.7zm6.5 4.2h1.4v-4.3c0-1 .7-1.6 1.7-1.6h.7v-1.3h-.6c-.8 0-1.5.5-1.8 1.2v-1h-1.4v7z',
    secondCacheProvider:
      'M92.2 89.6c-.3-2-1.9-3.2-3.9-3.2-2.4 0-4.3 1.8-4.3 4.9 0 3 1.8 4.8 4.3 4.8 2 0 3.6-1.3 4-3.1h-1.5c-.3 1.2-1.3 1.8-2.5 1.8-1.6 0-2.8-1.2-2.8-3.5s1.2-3.6 2.8-3.6c1.2 0 2.2.7 2.5 2h1.4zm3.6 6.6c1.2 0 1.8-.6 2.1-1.2v1h1.4v-4.7c0-2-1.6-2.5-2.8-2.5-1.2 0-2.4.5-2.9 1.8l1.3.3c.2-.5.7-1 1.7-1 .9 0 1.3.5 1.3 1.3 0 .5-.5.5-1.8.7-1.3.1-2.7.5-2.7 2.1 0 1.4 1 2.2 2.4 2.2zm.3-1.2c-.8 0-1.3-.3-1.3-1s.6-1 1.4-1c.5-.2 1.5-.3 1.7-.5v1c0 .8-.6 1.5-1.8 1.5zm8 1.1c1.6 0 2.7-1 2.9-2.3h-1.4c-.1.7-.7 1.2-1.5 1.2-1.2 0-2-1-2-2.5 0-1.6.8-2.5 2-2.5.8 0 1.4.5 1.5 1.2h1.4c-.2-1.4-1.3-2.4-3-2.4-2 0-3.2 1.5-3.2 3.7 0 2.1 1.2 3.6 3.3 3.6zm5.7-4.3c0-1.1.7-1.8 1.7-1.8s1.5.6 1.5 1.7V96h1.4v-4.5c0-1.8-1-2.7-2.5-2.7-1 0-1.7.5-2 1.3h-.2v-3.6h-1.3V96h1.4v-4.2zm9.4 4.3c1.5 0 2.6-.7 3-1.9l-1.4-.2c-.2.7-.8 1-1.6 1-1.2 0-2-.8-2-2.1h5v-.5c0-2.6-1.5-3.6-3.1-3.6-2 0-3.3 1.5-3.3 3.7s1.3 3.6 3.4 3.6zm-2-4.3c0-1 .8-1.8 2-1.8 1 0 1.7.8 1.7 1.8h-3.7zm10 4.2h1.4v-3.3h2c2.2 0 3.2-1.3 3.2-3 0-1.8-1-3.2-3.2-3.2h-3.4V96zm1.4-4.5v-3.7h1.8c1.4 0 2 .7 2 1.8 0 1-.6 1.9-2 1.9h-1.8zm6.7 4.5h1.4v-4.3c0-1 .7-1.6 1.7-1.6h.7v-1.3h-.6c-.8 0-1.5.5-1.8 1.2v-1h-1.4v7zm7.7.1c2 0 3.3-1.4 3.3-3.6s-1.3-3.7-3.3-3.7c-2 0-3.3 1.5-3.3 3.7S141 96 143 96zm0-1.1c-1.3 0-2-1.2-2-2.5 0-1.4.7-2.5 2-2.5s1.9 1.1 1.9 2.5c0 1.3-.6 2.5-2 2.5zm10.6-6H152l-1.8 5.4-1.9-5.5H147l2.5 7.1h1.5l2.6-7zm1.2 7h1.4v-7h-1.4v7zm.7-8.2c.5 0 .9-.4.9-.8 0-.5-.4-.8-.9-.8s-.9.3-.9.8c0 .4.4.8 1 .8zm5.1 8.3c1.3 0 1.8-.8 2-1.2h.2V96h1.4v-9.5h-1.4v3.6h-.1c-.3-.5-.7-1.3-2-1.3-1.8 0-3 1.4-3 3.7 0 2.3 1.2 3.6 3 3.6zm.3-1.1c-1.2 0-1.8-1.1-1.8-2.5 0-1.5.6-2.5 1.8-2.5 1.3 0 1.9 1 1.9 2.5 0 1.4-.7 2.5-1.9 2.5zm8.2 1.1c1.6 0 2.7-.7 3-1.9l-1.3-.2c-.3.7-.9 1-1.7 1-1.2 0-2-.8-2-2.1h5v-.5c0-2.6-1.5-3.6-3-3.6-2 0-3.4 1.5-3.4 3.7s1.3 3.6 3.4 3.6zm-2-4.3c0-1 .8-1.8 2-1.8 1 0 1.7.8 1.7 1.8h-3.7zm6.5 4.2h1.4v-4.3c0-1 .7-1.6 1.7-1.6h.7v-1.3h-.6c-.8 0-1.5.5-1.8 1.2v-1h-1.4v7z',
    leftSWRHooks:
      'M153.2 172h1.4c0-1.5-1.4-2.6-3.3-2.6s-3.3 1.1-3.3 2.7c0 1.3 1 2.1 2.4 2.5l1.1.3c1 .3 1.8.6 1.8 1.5s-.8 1.5-2 1.5-2-.5-2.2-1.5h-1.4c.1 1.7 1.4 2.8 3.6 2.8s3.5-1.2 3.5-2.8c0-1.7-1.6-2.4-2.8-2.7l-.9-.2c-.7-.2-1.7-.5-1.7-1.5 0-.8.7-1.4 1.9-1.4 1 0 1.8.6 2 1.4zm5 7h1.5l2-7 2 7h1.5l2.6-9.5h-1.5l-1.8 7.4h-.1l-2-7.4H161l-2 7.4-1.9-7.4h-1.5l2.6 9.5zm10.8 0h1.5v-3.6h1.9l2 3.6h1.6l-2-3.8c1.1-.5 1.7-1.4 1.7-2.7 0-1.7-1.1-3-3.3-3H169v9.5zm1.5-4.8v-3.4h1.8c1.4 0 2 .6 2 1.7 0 1-.6 1.7-2 1.7h-1.8zm10.2 4.8h1.5v-4.1h4.7v4.1h1.4v-9.5h-1.4v4.2h-4.7v-4.2h-1.5v9.5zm12.5.1c2 0 3.3-1.4 3.3-3.6s-1.3-3.7-3.3-3.7c-2 0-3.3 1.5-3.3 3.7s1.3 3.6 3.3 3.6zm0-1.1c-1.3 0-2-1.2-2-2.5 0-1.4.7-2.5 2-2.5s1.9 1.1 1.9 2.5c0 1.3-.6 2.5-2 2.5zm7.8 1.1c2 0 3.3-1.4 3.3-3.6s-1.3-3.7-3.3-3.7c-2 0-3.4 1.5-3.4 3.7s1.4 3.6 3.4 3.6zm0-1.1c-1.3 0-2-1.2-2-2.5 0-1.4.7-2.5 2-2.5s1.9 1.1 1.9 2.5c0 1.3-.6 2.5-2 2.5zm4.7 1h1.4v-2.5l.7-.7 2.4 3.2h1.7l-3-4 2.8-3h-1.6l-2.9 3v-5.5h-1.5v9.5zm12.5-5.4c-.3-1-1.1-1.8-2.7-1.8s-2.7.9-2.7 2.1c0 1 .6 1.7 2 2l1.1.3c.7.1 1 .4 1 .9s-.5 1-1.5 1c-.8 0-1.3-.4-1.5-1.1l-1.3.2c.2 1.2 1.3 2 2.9 2 1.7 0 2.9-1 2.9-2.3 0-1-.7-1.6-2-1.9l-1.1-.2c-.8-.2-1.1-.5-1.1-1s.6-.9 1.4-.9c.8 0 1.2.5 1.4 1l1.2-.3z',
    rightSWRHooks:
      'M404.2 172h1.4c0-1.5-1.4-2.6-3.3-2.6s-3.3 1.1-3.3 2.7c0 1.3 1 2.1 2.4 2.5l1.1.3c1 .3 1.8.6 1.8 1.5s-.8 1.5-2 1.5-2-.5-2.2-1.5h-1.4c.1 1.7 1.4 2.8 3.6 2.8s3.5-1.2 3.5-2.8c0-1.7-1.6-2.4-2.8-2.7l-.9-.2c-.7-.2-1.7-.5-1.7-1.5 0-.8.7-1.4 1.9-1.4 1 0 1.8.6 2 1.4zm5 7h1.5l2-7 2 7h1.5l2.6-9.5h-1.5l-1.8 7.4h-.1l-2-7.4H412l-2 7.4-1.9-7.4h-1.5l2.6 9.5zm10.8 0h1.5v-3.6h1.9l2 3.6h1.6l-2-3.8c1.1-.5 1.7-1.4 1.7-2.7 0-1.7-1.1-3-3.3-3H420v9.5zm1.5-4.8v-3.4h1.8c1.4 0 2 .6 2 1.7 0 1-.6 1.7-2 1.7h-1.8zm10.2 4.8h1.5v-4.1h4.7v4.1h1.4v-9.5h-1.4v4.2h-4.7v-4.2h-1.5v9.5zm12.5.1c2 0 3.3-1.4 3.3-3.6s-1.3-3.7-3.3-3.7c-2 0-3.3 1.5-3.3 3.7s1.3 3.6 3.3 3.6zm0-1.1c-1.3 0-2-1.2-2-2.5 0-1.4.7-2.5 2-2.5s1.9 1.1 1.9 2.5c0 1.3-.6 2.5-2 2.5zm7.8 1.1c2 0 3.3-1.4 3.3-3.6s-1.3-3.7-3.3-3.7c-2 0-3.4 1.5-3.4 3.7s1.4 3.6 3.4 3.6zm0-1.1c-1.3 0-2-1.2-2-2.5 0-1.4.7-2.5 2-2.5s1.9 1.1 1.9 2.5c0 1.3-.6 2.5-2 2.5zm4.7 1h1.4v-2.5l.7-.7 2.4 3.2h1.7l-3-4 2.8-3h-1.6l-2.9 3v-5.5h-1.5v9.5zm12.5-5.4c-.3-1-1.1-1.8-2.7-1.8s-2.7.9-2.7 2.1c0 1 .6 1.7 2 2l1.1.3c.7.1 1 .4 1 .9s-.5 1-1.5 1c-.8 0-1.3-.4-1.5-1.1l-1.3.2c.2 1.2 1.3 2 2.9 2 1.7 0 2.9-1 2.9-2.3 0-1-.7-1.6-2-1.9l-1.1-.2c-.8-.2-1.1-.5-1.1-1s.6-.9 1.4-.9c.8 0 1.2.5 1.4 1l1.2-.3z'
  },
  'es-ES': {},
  ru: {
    defaultCacheProvider:
      'M30.1313 32h-1.2251v-8.2393h-4.5576V32h-1.2187v-9.2422h7.0014V32ZM37.9707 28.6421c0 1.0452-.2391 1.8874-.7173 2.5264-.4782.639-1.1256.9585-1.9424.9585-.8336 0-1.4895-.2645-1.9677-.7935v3.3071h-1.1744v-9.5088h1.0728l.0571.7618c.4782-.5925 1.1426-.8887 1.9932-.8887.8252 0 1.4769.311 1.9551.9331.4824.6221.7236 1.4875.7236 2.5962v.1079Zm-1.1743-.1333c0-.7744-.1651-1.3859-.4951-1.8345-.3301-.4486-.7829-.6728-1.3584-.6728-.711 0-1.2442.3152-1.5996.9458v3.2817c.3512.6263.8886.9395 1.6123.9395.5628 0 1.0092-.2222 1.3393-.6665.3343-.4486.5015-1.113.5015-1.9932ZM39.1577 28.5024c0-.6728.1312-1.278.3936-1.8154.2666-.5374.6347-.9521 1.1045-1.2441.4739-.292 1.0135-.438 1.6186-.438.9352 0 1.6906.3237 2.2661.9712.5798.6474.8697 1.5086.8697 2.5835v.0825c0 .6686-.1291 1.2695-.3873 1.8027-.2539.529-.6199.9416-1.0981 1.2378-.474.2962-1.0199.4444-1.6377.4444-.931 0-1.6864-.3238-2.2661-.9712-.5755-.6475-.8633-1.5044-.8633-2.5708v-.0826Zm1.1807.1397c0 .7617.1756 1.3732.5268 1.8345.3555.4612.8295.6919 1.4219.6919.5967 0 1.0706-.2328 1.4219-.6983.3512-.4697.5268-1.1256.5268-1.9678 0-.7532-.1798-1.3626-.5395-1.8281-.3555-.4697-.8294-.7046-1.4219-.7046-.5797 0-1.0473.2307-1.4028.6919-.3555.4613-.5332 1.1214-.5332 1.9805ZM46.9907 32v-6.8682h2.6787c.9141 0 1.6145.1608 2.1011.4825.4909.3173.7363.785.7363 1.4028 0 .3174-.0952.6051-.2856.8633-.1904.2539-.4719.4485-.8442.584.4147.0973.7469.2877.9965.5712.2539.2836.3809.6221.3809 1.0157 0 .6305-.2328 1.1129-.6982 1.4472-.4613.3343-1.1151.5015-1.9615.5015h-3.104Zm1.1743-3.0151v2.0693h1.9424c.4909 0 .857-.091 1.0982-.273.2454-.1819.3681-.4379.3681-.768 0-.6856-.5036-1.0283-1.5107-1.0283h-1.898Zm0-.9395h1.5171c1.1003 0 1.6504-.3216 1.6504-.9648 0-.6433-.5205-.9755-1.5615-.9966h-1.606v1.9614ZM58.5498 32c-.0677-.1354-.1227-.3766-.165-.7236-.5459.567-1.1976.8506-1.9551.8506-.6771 0-1.2336-.1905-1.6694-.5713-.4317-.3851-.6475-.8718-.6475-1.46 0-.7152.2708-1.2695.8125-1.6631.5459-.3978 1.3118-.5967 2.2978-.5967h1.1426v-.5395c0-.4105-.1227-.7363-.3681-.9776-.2455-.2454-.6073-.3681-1.0855-.3681-.4189 0-.7702.1058-1.0537.3174-.2835.2116-.4253.4676-.4253.768h-1.1807c0-.3427.1206-.6728.3619-.9902.2454-.3216.5755-.5755.9902-.7617.4189-.1862.8781-.2793 1.3774-.2793.7914 0 1.4113.1989 1.8599.5967.4486.3935.6813.9373.6982 1.6313v3.1611c0 .6306.0804 1.132.2412 1.5044V32h-1.2314Zm-1.9487-.895c.3681 0 .7173-.0952 1.0473-.2857.3301-.1904.5692-.438.7173-.7426v-1.4092h-.9204c-1.4388 0-2.1582.421-2.1582 1.2632 0 .3681.1227.6559.3682.8632.2454.2074.5607.3111.9458.3111ZM65.8242 25.1318h1.1743V32h-1.1743v-5.0083L62.6567 32h-1.1743v-6.8682h1.1743v5.0147l3.1675-5.0147Zm.3174-2.5009c0 .512-.1756.9246-.5269 1.2378-.347.3089-.804.4633-1.371.4633-.5671 0-1.0263-.1565-1.3775-.4697-.3512-.3131-.5268-.7236-.5268-1.2314h.9585c0 .2962.0804.5289.2412.6982.1608.165.3956.2476.7046.2476.2962 0 .5268-.0826.6918-.2476.1693-.165.254-.3978.254-.6982h.9521ZM68.8267 31.0415l.4062-.5015c.457-.5924.7173-1.4811.7808-2.666l.1079-2.7422h4.4243v5.9097h.8823v2.9771h-1.1743V32h-4.7925v2.0186h-1.1743l.0064-2.9771h.5332Zm1.3901 0h3.1548v-4.8242h-2.1138l-.0698 1.6377c-.072 1.3668-.3957 2.429-.9712 3.1865ZM79.5796 32.127c-.931 0-1.6885-.3047-2.2725-.9141-.584-.6136-.8759-1.4325-.8759-2.4566v-.2158c0-.6813.129-1.2885.3872-1.8217.2623-.5375.6263-.9564 1.0918-1.2569.4697-.3047.9775-.457 1.5234-.457.8929 0 1.5869.2941 2.082.8823.4951.5882.7427 1.4303.7427 2.5264v.4887h-4.6528c.0169.6771.2137 1.2251.5903 1.6441.3809.4147.8633.6221 1.4473.6221.4147 0 .7659-.0847 1.0537-.2539.2877-.1693.5395-.3936.7553-.6729l.7173.5586c-.5755.8844-1.4388 1.3267-2.5898 1.3267Zm-.146-6.1573c-.474 0-.8718.1735-1.1934.5205-.3216.3428-.5205.8252-.5966 1.4473h3.4404v-.0889c-.0339-.5966-.1947-1.0579-.4824-1.3838-.2878-.33-.6771-.4951-1.168-.4951ZM89.4248 28.6421c0 1.0452-.2391 1.8874-.7173 2.5264-.4782.639-1.1256.9585-1.9424.9585-.8336 0-1.4895-.2645-1.9677-.7935v3.3071H83.623v-9.5088h1.0728l.0571.7618c.4782-.5925 1.1426-.8887 1.9932-.8887.8252 0 1.4769.311 1.9551.9331.4824.6221.7236 1.4875.7236 2.5962v.1079Zm-1.1743-.1333c0-.7744-.1651-1.3859-.4951-1.8345-.3301-.4486-.7829-.6728-1.3584-.6728-.711 0-1.2442.3152-1.5996.9458v3.2817c.3512.6263.8886.9395 1.6123.9395.5628 0 1.0092-.2222 1.3393-.6665.3343-.4486.5015-1.113.5015-1.9932ZM96.2866 29.0737h-.8569V32H94.249v-6.8682h1.1807v2.9073h.7681l2.3105-2.9073h1.4219l-2.7168 3.3008L100.159 32h-1.492l-2.3804-2.9263ZM103.917 32.127c-.931 0-1.689-.3047-2.273-.9141-.584-.6136-.876-1.4325-.876-2.4566v-.2158c0-.6813.129-1.2885.387-1.8217.263-.5375.627-.9564 1.092-1.2569.47-.3047.978-.457 1.524-.457.892 0 1.586.2941 2.082.8823.495.5882.742 1.4303.742 2.5264v.4887h-4.653c.017.6771.214 1.2251.591 1.6441.381.4147.863.6221 1.447.6221.415 0 .766-.0847 1.054-.2539.287-.1693.539-.3936.755-.6729l.717.5586c-.575.8844-1.438 1.3267-2.589 1.3267Zm-.146-6.1573c-.474 0-.872.1735-1.194.5205-.321.3428-.52.8252-.597 1.4473h3.441v-.0889c-.034-.5966-.195-1.0579-.483-1.3838-.287-.33-.677-.4951-1.167-.4951ZM109.242 25.1318v5.9097h2.514v-5.9097h1.174v5.9097h2.508v-5.9097h1.18V32h-8.556v-6.8682h1.18ZM122.712 32c-.068-.1354-.123-.3766-.165-.7236-.546.567-1.198.8506-1.955.8506-.677 0-1.234-.1905-1.67-.5713-.431-.3851-.647-.8718-.647-1.46 0-.7152.271-1.2695.812-1.6631.546-.3978 1.312-.5967 2.298-.5967h1.143v-.5395c0-.4105-.123-.7363-.368-.9776-.246-.2454-.608-.3681-1.086-.3681-.419 0-.77.1058-1.053.3174-.284.2116-.426.4676-.426.768h-1.18c0-.3427.12-.6728.361-.9902.246-.3216.576-.5755.991-.7617.419-.1862.878-.2793 1.377-.2793.791 0 1.411.1989 1.86.5967.448.3935.681.9373.698 1.6313v3.1611c0 .6306.081 1.132.241 1.5044V32h-1.231Zm-1.949-.895c.368 0 .717-.0952 1.048-.2857.33-.1904.569-.438.717-.7426v-1.4092h-.921c-1.438 0-2.158.421-2.158 1.2632 0 .3681.123.6559.368.8632.246.2074.561.3111.946.3111ZM134.385 32h-1.174v-5.897h-3.161V32h-1.181v-6.8682h5.516V32ZM135.959 28.5024c0-.6728.132-1.278.394-1.8154.267-.5374.635-.9521 1.105-1.2441.473-.292 1.013-.438 1.618-.438.935 0 1.691.3237 2.266.9712.58.6474.87 1.5086.87 2.5835v.0825c0 .6686-.129 1.2695-.387 1.8027-.254.529-.62.9416-1.098 1.2378-.474.2962-1.02.4444-1.638.4444-.931 0-1.686-.3238-2.266-.9712-.576-.6475-.864-1.5044-.864-2.5708v-.0826Zm1.181.1397c0 .7617.176 1.3732.527 1.8345.355.4612.829.6919 1.422.6919.597 0 1.071-.2328 1.422-.6983.351-.4697.527-1.1256.527-1.9678 0-.7532-.18-1.3626-.54-1.8281-.355-.4697-.829-.7046-1.422-.7046-.58 0-1.047.2307-1.403.6919-.355.4613-.533 1.1214-.533 1.9805ZM149.156 30.2798l1.6-5.148h1.257l-2.762 7.9283c-.427 1.1425-1.106 1.7138-2.037 1.7138l-.222-.019-.438-.0825v-.9522l.317.0254c.398 0 .707-.0804.927-.2412.224-.1608.408-.4549.552-.8823l.26-.6983-2.45-6.792h1.282l1.714 5.148ZM157.021 30.4448l2.336-5.313h1.466V32h-1.174v-4.9956L157.427 32h-.812l-2.266-5.1035V32h-1.175v-6.8682h1.524l2.323 5.313ZM162.404 28.5024c0-.6728.131-1.278.393-1.8154.267-.5374.635-.9521 1.105-1.2441.474-.292 1.013-.438 1.619-.438.935 0 1.69.3237 2.266.9712.579.6474.869 1.5086.869 2.5835v.0825c0 .6686-.129 1.2695-.387 1.8027-.254.529-.62.9416-1.098 1.2378-.474.2962-1.02.4444-1.638.4444-.931 0-1.686-.3238-2.266-.9712-.575-.6475-.863-1.5044-.863-2.5708v-.0826Zm1.18.1397c0 .7617.176 1.3732.527 1.8345.356.4612.83.6919 1.422.6919.597 0 1.071-.2328 1.422-.6983.351-.4697.527-1.1256.527-1.9678 0-.7532-.18-1.3626-.54-1.8281-.355-.4697-.829-.7046-1.421-.7046-.58 0-1.048.2307-1.403.6919-.356.4613-.534 1.1214-.534 1.9805ZM175.658 25.1318V32h-1.181v-5.897h-2.336l-.14 2.5708c-.076 1.1807-.275 2.0249-.596 2.5327-.318.5079-.823.7723-1.517.7935h-.47v-1.0347l.336-.0254c.381-.0423.654-.2623.819-.6601.165-.3978.271-1.1341.318-2.209l.127-2.939h4.64ZM182.729 32h-1.181v-2.4883c-.516.1354-1.045.2031-1.587.2031-.859 0-1.515-.22-1.967-.6601-.449-.4401-.677-1.0664-.686-1.8789v-2.0503h1.174v2.0884c.022 1.0241.515 1.5361 1.479 1.5361.542 0 1.071-.0677 1.587-.2031v-3.4151h1.181V32ZM188.854 32c-.067-.1354-.122-.3766-.165-.7236-.545.567-1.197.8506-1.955.8506-.677 0-1.233-.1905-1.669-.5713-.432-.3851-.648-.8718-.648-1.46 0-.7152.271-1.2695.813-1.6631.546-.3978 1.312-.5967 2.298-.5967h1.142v-.5395c0-.4105-.122-.7363-.368-.9776-.245-.2454-.607-.3681-1.085-.3681-.419 0-.77.1058-1.054.3174-.283.2116-.425.4676-.425.768h-1.181c0-.3427.121-.6728.362-.9902.245-.3216.575-.5755.99-.7617.419-.1862.878-.2793 1.378-.2793.791 0 1.411.1989 1.859.5967.449.3935.682.9373.699 1.6313v3.1611c0 .6306.08 1.132.241 1.5044V32h-1.232Zm-1.948-.895c.368 0 .717-.0952 1.047-.2857.33-.1904.569-.438.717-.7426v-1.4092h-.92c-1.439 0-2.158.421-2.158 1.2632 0 .3681.123.6559.368.8632.245.2074.561.3111.946.3111ZM197.297 32h-1.174v-2.9326h-3.155V32h-1.181v-6.8682h1.181v2.9771h3.155v-2.9771h1.174V32ZM203.632 25.1318h1.174V32h-1.174v-5.0083L200.464 32h-1.174v-6.8682h1.174v5.0147l3.168-5.0147ZM207.974 28.0454h1.65c.089-.9141.413-1.6483.971-2.2026.563-.5586 1.272-.8379 2.127-.8379.897 0 1.631.3026 2.202.9077.572.6051.881 1.3923.927 2.3613l.006.3682c0 .6686-.131 1.2716-.393 1.8091-.263.5374-.631.9521-1.105 1.2441-.474.2878-1.015.4317-1.625.4317-.884 0-1.608-.2878-2.171-.8633-.562-.5798-.878-1.3309-.945-2.2534h-1.644V32h-1.175v-6.8682h1.175v2.9136Zm2.805.5967c0 .7617.176 1.3732.527 1.8345.356.4612.832.6919 1.428.6919.597 0 1.069-.2349 1.416-.7046.351-.4698.527-1.1236.527-1.9615 0-.749-.178-1.3584-.533-1.8281-.356-.4697-.83-.7046-1.422-.7046-.584 0-1.054.2307-1.41.6919-.355.4613-.533 1.1214-.533 1.9805Z',
    firstCacheProvider:
      'M55.1313 64h-1.2251v-8.2393h-4.5576V64h-1.2187v-9.2422h7.0014V64ZM62.9707 60.6421c0 1.0452-.2391 1.8874-.7173 2.5264-.4782.639-1.1256.9585-1.9424.9585-.8336 0-1.4895-.2645-1.9677-.7935v3.3071h-1.1744v-9.5088h1.0728l.0571.7618c.4782-.5925 1.1426-.8887 1.9932-.8887.8252 0 1.4769.311 1.9551.9331.4824.6221.7236 1.4875.7236 2.5962v.1079Zm-1.1743-.1333c0-.7744-.1651-1.3859-.4951-1.8345-.3301-.4486-.7829-.6728-1.3584-.6728-.711 0-1.2442.3152-1.5996.9458v3.2817c.3512.6263.8886.9395 1.6123.9395.5628 0 1.0092-.2222 1.3393-.6665.3343-.4486.5015-1.113.5015-1.9932ZM64.1577 60.5024c0-.6728.1312-1.278.3936-1.8154.2666-.5374.6347-.9521 1.1045-1.2441.4739-.292 1.0135-.438 1.6186-.438.9352 0 1.6906.3237 2.2661.9712.5798.6474.8697 1.5086.8697 2.5835v.0825c0 .6686-.1291 1.2695-.3873 1.8027-.2539.529-.6199.9416-1.0981 1.2378-.474.2962-1.0199.4444-1.6377.4444-.931 0-1.6864-.3238-2.2661-.9712-.5755-.6475-.8633-1.5044-.8633-2.5708v-.0826Zm1.1807.1397c0 .7617.1756 1.3732.5268 1.8345.3555.4612.8295.6919 1.4219.6919.5967 0 1.0706-.2328 1.4219-.6983.3512-.4697.5268-1.1256.5268-1.9678 0-.7532-.1798-1.3626-.5395-1.8281-.3555-.4697-.8294-.7046-1.4219-.7046-.5797 0-1.0473.2307-1.4028.6919-.3555.4613-.5332 1.1214-.5332 1.9805ZM71.9907 64v-6.8682h2.6787c.9141 0 1.6145.1608 2.1011.4825.4909.3173.7363.785.7363 1.4028 0 .3174-.0952.6051-.2856.8633-.1904.2539-.4719.4485-.8442.584.4147.0973.7469.2877.9965.5712.2539.2836.3809.6221.3809 1.0157 0 .6305-.2328 1.1129-.6982 1.4472-.4613.3343-1.1151.5015-1.9615.5015h-3.104Zm1.1743-3.0151v2.0693h1.9424c.4909 0 .857-.091 1.0982-.273.2454-.1819.3681-.4379.3681-.768 0-.6856-.5036-1.0283-1.5107-1.0283h-1.898Zm0-.9395h1.5171c1.1003 0 1.6504-.3216 1.6504-.9648 0-.6433-.5205-.9755-1.5615-.9966h-1.606v1.9614ZM83.5498 64c-.0677-.1354-.1227-.3766-.165-.7236-.5459.567-1.1976.8506-1.9551.8506-.6771 0-1.2336-.1905-1.6694-.5713-.4317-.3851-.6475-.8718-.6475-1.46 0-.7152.2708-1.2695.8125-1.6631.5459-.3978 1.3118-.5967 2.2978-.5967h1.1426v-.5395c0-.4105-.1227-.7363-.3681-.9776-.2455-.2454-.6073-.3681-1.0855-.3681-.4189 0-.7702.1058-1.0537.3174-.2835.2116-.4253.4676-.4253.768h-1.1807c0-.3427.1206-.6728.3619-.9902.2454-.3216.5755-.5755.9902-.7617.4189-.1862.8781-.2793 1.3774-.2793.7914 0 1.4113.1989 1.8599.5967.4486.3935.6813.9373.6982 1.6313v3.1611c0 .6306.0804 1.132.2412 1.5044V64h-1.2314Zm-1.9487-.895c.3681 0 .7173-.0952 1.0473-.2857.3301-.1904.5692-.438.7173-.7426v-1.4092h-.9204c-1.4388 0-2.1582.421-2.1582 1.2632 0 .3681.1227.6559.3682.8632.2454.2074.5607.3111.9458.3111ZM90.8242 57.1318h1.1743V64h-1.1743v-5.0083L87.6567 64h-1.1743v-6.8682h1.1743v5.0147l3.1675-5.0147Zm.3174-2.5009c0 .512-.1756.9246-.5269 1.2378-.347.3089-.804.4633-1.371.4633-.5671 0-1.0263-.1565-1.3775-.4697-.3512-.3131-.5268-.7236-.5268-1.2314h.9585c0 .2962.0804.5289.2412.6982.1608.165.3956.2476.7046.2476.2962 0 .5268-.0826.6918-.2476.1693-.165.254-.3978.254-.6982h.9521ZM93.8267 63.0415l.4062-.5015c.457-.5924.7173-1.4811.7808-2.666l.1079-2.7422h4.4243v5.9097h.8821v2.9771h-1.1741V64h-4.7925v2.0186h-1.1743l.0064-2.9771h.5332Zm1.3901 0h3.1548v-4.8242h-2.1138l-.0698 1.6377c-.072 1.3668-.3957 2.429-.9712 3.1865ZM104.58 64.127c-.931 0-1.689-.3047-2.273-.9141-.584-.6136-.876-1.4325-.876-2.4566v-.2158c0-.6813.129-1.2885.387-1.8217.263-.5375.627-.9564 1.092-1.2569.47-.3047.978-.457 1.524-.457.892 0 1.587.2941 2.082.8823.495.5882.742 1.4303.742 2.5264v.4887h-4.653c.017.6771.214 1.2251.591 1.6441.381.4147.863.6221 1.447.6221.415 0 .766-.0847 1.054-.2539.288-.1693.539-.3936.755-.6729l.717.5586c-.575.8844-1.438 1.3267-2.589 1.3267Zm-.146-6.1573c-.474 0-.872.1735-1.194.5205-.321.3428-.52.8252-.596 1.4473h3.44v-.0889c-.034-.5966-.195-1.0579-.482-1.3838-.288-.33-.678-.4951-1.168-.4951ZM114.425 60.6421c0 1.0452-.239 1.8874-.717 2.5264-.479.639-1.126.9585-1.943.9585-.834 0-1.489-.2645-1.968-.7935v3.3071h-1.174v-9.5088h1.073l.057.7618c.478-.5925 1.143-.8887 1.993-.8887.825 0 1.477.311 1.955.9331.483.6221.724 1.4875.724 2.5962v.1079Zm-1.175-.1333c0-.7744-.165-1.3859-.495-1.8345-.33-.4486-.783-.6728-1.358-.6728-.711 0-1.244.3152-1.6.9458v3.2817c.352.6263.889.9395 1.613.9395.562 0 1.009-.2222 1.339-.6665.334-.4486.501-1.113.501-1.9932ZM121.287 61.0737h-.857V64h-1.181v-6.8682h1.181v2.9073h.768l2.31-2.9073h1.422l-2.717 3.3008L125.159 64h-1.492l-2.38-2.9263ZM128.917 64.127c-.931 0-1.689-.3047-2.273-.9141-.584-.6136-.876-1.4325-.876-2.4566v-.2158c0-.6813.129-1.2885.387-1.8217.263-.5375.627-.9564 1.092-1.2569.47-.3047.978-.457 1.524-.457.892 0 1.586.2941 2.082.8823.495.5882.742 1.4303.742 2.5264v.4887h-4.653c.017.6771.214 1.2251.591 1.6441.381.4147.863.6221 1.447.6221.415 0 .766-.0847 1.054-.2539.287-.1693.539-.3936.755-.6729l.717.5586c-.575.8844-1.438 1.3267-2.589 1.3267Zm-.146-6.1573c-.474 0-.872.1735-1.194.5205-.321.3428-.52.8252-.597 1.4473h3.441v-.0889c-.034-.5966-.195-1.0579-.483-1.3838-.287-.33-.677-.4951-1.167-.4951ZM134.242 57.1318v5.9097h2.514v-5.9097h1.174v5.9097h2.508v-5.9097h1.18V64h-8.556v-6.8682h1.18ZM147.712 64c-.068-.1354-.123-.3766-.165-.7236-.546.567-1.198.8506-1.955.8506-.677 0-1.234-.1905-1.67-.5713-.431-.3851-.647-.8718-.647-1.46 0-.7152.271-1.2695.812-1.6631.546-.3978 1.312-.5967 2.298-.5967h1.143v-.5395c0-.4105-.123-.7363-.368-.9776-.246-.2454-.608-.3681-1.086-.3681-.419 0-.77.1058-1.053.3174-.284.2116-.426.4676-.426.768h-1.18c0-.3427.12-.6728.361-.9902.246-.3216.576-.5755.991-.7617.419-.1862.878-.2793 1.377-.2793.791 0 1.411.1989 1.86.5967.448.3935.681.9373.698 1.6313v3.1611c0 .6306.081 1.132.241 1.5044V64h-1.231Zm-1.949-.895c.368 0 .717-.0952 1.048-.2857.33-.1904.569-.438.717-.7426v-1.4092h-.921c-1.438 0-2.158.421-2.158 1.2632 0 .3681.123.6559.368.8632.246.2074.561.3111.946.3111Z',
    secondCacheProvider:
      'M87.0015 95.3691h-1.2251v-8.2392h-4.5576v8.2392H80V86.127h7.0015v9.2421ZM94.8408 92.0112c0 1.0453-.2391 1.8874-.7173 2.5264-.4782.639-1.1256.9585-1.9423.9585-.8337 0-1.4896-.2645-1.9678-.7935v3.3072h-1.1743V88.501h1.0727l.0571.7617c.4782-.5925 1.1426-.8887 1.9932-.8887.8252 0 1.4769.3111 1.9551.9331.4824.6221.7236 1.4875.7236 2.5962v.1079Zm-1.1743-.1333c0-.7744-.165-1.3859-.4951-1.8344-.3301-.4486-.7829-.6729-1.3584-.6729-.7109 0-1.2442.3153-1.5996.9458v3.2817c.3512.6263.8887.9395 1.6123.9395.5628 0 1.0093-.2222 1.3393-.6665.3343-.4486.5015-1.113.5015-1.9932ZM96.0278 91.8716c0-.6729.1312-1.278.3936-1.8154.2666-.5375.6348-.9522 1.1045-1.2442.4739-.292 1.0135-.438 1.6186-.438.9355 0 1.6905.3238 2.2665.9712.579.6475.869 1.5086.869 2.5835v.0825c0 .6687-.129 1.2696-.387 1.8028-.254.5289-.62.9415-1.098 1.2378-.474.2962-1.0199.4443-1.6378.4443-.931 0-1.6863-.3237-2.2661-.9712-.5755-.6475-.8633-1.5044-.8633-2.5708v-.0825Zm1.1807.1396c0 .7617.1756 1.3732.5269 1.8345.3554.4613.8294.6919 1.4218.6919.5967 0 1.0708-.2327 1.4218-.6982.351-.4698.527-1.1257.527-1.9678 0-.7533-.18-1.3626-.54-1.8281-.355-.4698-.829-.7046-1.4215-.7046-.5797 0-1.0473.2306-1.4028.6919-.3555.4612-.5332 1.1214-.5332 1.9804ZM103.861 95.3691V88.501h2.679c.914 0 1.614.1608 2.101.4824.491.3174.736.785.736 1.4028 0 .3174-.095.6052-.286.8633-.19.2539-.472.4486-.844.584.415.0973.747.2878.997.5713.254.2835.381.6221.381 1.0156 0 .6305-.233 1.113-.699 1.4473-.461.3343-1.115.5014-1.961.5014h-3.104Zm1.174-3.0151v2.0693h1.943c.49 0 .856-.0909 1.098-.2729.245-.182.368-.438.368-.7681 0-.6855-.504-1.0283-1.511-1.0283h-1.898Zm0-.9394h1.517c1.101 0 1.651-.3217 1.651-.9649s-.521-.9754-1.562-.9966h-1.606v1.9615ZM115.42 95.3691c-.068-.1354-.123-.3766-.165-.7236-.546.5671-1.198.8506-1.955.8506-.677 0-1.234-.1904-1.67-.5713-.431-.3851-.647-.8717-.647-1.46 0-.7151.271-1.2695.812-1.663.546-.3978 1.312-.5967 2.298-.5967h1.143v-.5396c0-.4105-.123-.7363-.368-.9775-.246-.2455-.608-.3682-1.086-.3682-.419 0-.77.1058-1.053.3174-.284.2116-.426.4676-.426.7681h-1.18c0-.3428.12-.6729.361-.9903.246-.3216.576-.5755.991-.7617.419-.1862.878-.2793 1.377-.2793.791 0 1.411.1989 1.86.5967.448.3936.681.9373.698 1.6314v3.1611c0 .6305.081 1.132.241 1.5044v.1015h-1.231Zm-1.949-.895c.368 0 .717-.0952 1.048-.2856.33-.1905.569-.438.717-.7427v-1.4092h-.921c-1.438 0-2.158.4211-2.158 1.2632 0 .3682.123.6559.368.8633.246.2073.561.311.946.311ZM122.694 88.501h1.175v6.8681h-1.175v-5.0083l-3.167 5.0083h-1.174V88.501h1.174v5.0146l3.167-5.0146Zm.318-2.501c0 .512-.176.9246-.527 1.2378-.347.3089-.804.4634-1.371.4634s-1.026-.1566-1.378-.4698c-.351-.3131-.527-.7236-.527-1.2314h.959c0 .2962.08.529.241.6982.161.1651.396.2476.705.2476.296 0 .527-.0825.692-.2476.169-.165.254-.3977.254-.6982h.952ZM125.697 94.4106l.406-.5014c.457-.5925.717-1.4811.781-2.666l.108-2.7422h4.424v5.9096h.882v2.9771h-1.174v-2.0186h-4.792v2.0186h-1.175l.007-2.9771h.533Zm1.39 0h3.155v-4.8242h-2.114l-.07 1.6377c-.072 1.3669-.396 2.4291-.971 3.1865ZM136.45 95.4961c-.931 0-1.689-.3047-2.273-.9141-.584-.6136-.876-1.4324-.876-2.4565v-.2158c0-.6813.129-1.2886.387-1.8218.263-.5374.627-.9564 1.092-1.2568.47-.3047.978-.4571 1.524-.4571.893 0 1.587.2941 2.082.8823.495.5883.742 1.4304.742 2.5264v.4888h-4.652c.017.6771.213 1.2251.59 1.644.381.4147.863.6221 1.447.6221.415 0 .766-.0846 1.054-.2539.288-.1693.539-.3936.755-.6729l.718.5586c-.576.8845-1.439 1.3267-2.59 1.3267Zm-.146-6.1572c-.474 0-.872.1735-1.194.5205-.321.3427-.52.8252-.596 1.4472h3.44v-.0888c-.034-.5967-.195-1.058-.482-1.3838-.288-.3301-.677-.4951-1.168-.4951ZM146.295 92.0112c0 1.0453-.239 1.8874-.717 2.5264-.479.639-1.126.9585-1.943.9585-.833 0-1.489-.2645-1.968-.7935v3.3072h-1.174V88.501h1.073l.057.7617c.478-.5925 1.143-.8887 1.993-.8887.825 0 1.477.3111 1.955.9331.483.6221.724 1.4875.724 2.5962v.1079Zm-1.174-.1333c0-.7744-.165-1.3859-.496-1.8344-.33-.4486-.782-.6729-1.358-.6729-.711 0-1.244.3153-1.6.9458v3.2817c.352.6263.889.9395 1.613.9395.563 0 1.009-.2222 1.339-.6665.334-.4486.502-1.113.502-1.9932ZM153.157 92.4429h-.857v2.9262h-1.181V88.501h1.181v2.9072h.768l2.31-2.9072h1.422l-2.717 3.3008 2.946 3.5673h-1.492l-2.38-2.9262ZM160.787 95.4961c-.931 0-1.689-.3047-2.273-.9141-.584-.6136-.876-1.4324-.876-2.4565v-.2158c0-.6813.129-1.2886.387-1.8218.263-.5374.627-.9564 1.092-1.2568.47-.3047.978-.4571 1.524-.4571.893 0 1.587.2941 2.082.8823.495.5883.742 1.4304.742 2.5264v.4888h-4.653c.017.6771.214 1.2251.591 1.644.381.4147.863.6221 1.447.6221.415 0 .766-.0846 1.054-.2539.288-.1693.539-.3936.755-.6729l.717.5586c-.575.8845-1.438 1.3267-2.589 1.3267Zm-.146-6.1572c-.474 0-.872.1735-1.194.5205-.321.3427-.52.8252-.596 1.4472h3.44v-.0888c-.034-.5967-.195-1.058-.482-1.3838-.288-.3301-.677-.4951-1.168-.4951ZM166.112 88.501v5.9096h2.514V88.501h1.174v5.9096h2.508V88.501h1.18v6.8681h-8.556V88.501h1.18ZM179.582 95.3691c-.068-.1354-.123-.3766-.165-.7236-.546.5671-1.198.8506-1.955.8506-.677 0-1.234-.1904-1.67-.5713-.431-.3851-.647-.8717-.647-1.46 0-.7151.271-1.2695.813-1.663.545-.3978 1.311-.5967 2.297-.5967h1.143v-.5396c0-.4105-.123-.7363-.368-.9775-.246-.2455-.607-.3682-1.086-.3682-.419 0-.77.1058-1.053.3174-.284.2116-.426.4676-.426.7681h-1.18c0-.3428.12-.6729.361-.9903.246-.3216.576-.5755.991-.7617.419-.1862.878-.2793 1.377-.2793.792 0 1.411.1989 1.86.5967.449.3936.681.9373.698 1.6314v3.1611c0 .6305.081 1.132.241 1.5044v.1015h-1.231Zm-1.949-.895c.368 0 .718-.0952 1.048-.2856.33-.1905.569-.438.717-.7427v-1.4092h-.92c-1.439 0-2.159.4211-2.159 1.2632 0 .3682.123.6559.369.8633.245.2073.56.311.945.311Z',
    leftSWRHooks:
      'M157.796 174.88c-1.045-.3-1.807-.668-2.285-1.104-.474-.44-.711-.982-.711-1.625 0-.728.29-1.329.869-1.803.584-.478 1.342-.717 2.273-.717.635 0 1.2.123 1.695.368.499.245.884.584 1.155 1.016.275.431.413.903.413 1.415h-1.226c0-.558-.177-.996-.533-1.314-.355-.321-.857-.482-1.504-.482-.601 0-1.071.133-1.409.4-.335.262-.502.628-.502 1.098 0 .376.159.696.476.958.322.258.866.495 1.632.711.77.216 1.371.455 1.802.718.436.258.758.56.965.907.212.347.318.756.318 1.225 0 .749-.292 1.35-.876 1.803-.584.449-1.365.673-2.343.673-.634 0-1.227-.121-1.777-.362-.55-.245-.975-.58-1.276-1.003-.296-.423-.444-.903-.444-1.441h1.225c0 .559.205 1.001.616 1.327.414.322.967.482 1.656.482.644 0 1.137-.131 1.479-.393.343-.263.515-.62.515-1.073 0-.453-.159-.802-.477-1.047-.317-.25-.892-.495-1.726-.737ZM164.785 176.086l.177 1.219.261-1.098 1.828-6.449h1.028l1.784 6.449.254 1.117.196-1.244 1.435-6.322h1.225L170.732 179h-1.11l-1.905-6.735-.146-.704-.146.704-1.974 6.735h-1.111l-2.234-9.242h1.219l1.46 6.328ZM177.721 175.261h-2.171V179h-1.225v-9.242h3.06c1.041 0 1.841.237 2.399.711.563.474.844 1.163.844 2.069 0 .576-.156 1.077-.469 1.504-.309.428-.741.747-1.295.959l2.171 3.923V179h-1.308l-2.006-3.739Zm-2.171-.996h1.873c.605 0 1.085-.157 1.441-.47.359-.313.539-.732.539-1.257 0-.571-.171-1.009-.514-1.314-.338-.305-.829-.459-1.472-.463h-1.867v3.504ZM187.687 174.639l1.523-2.507h1.372l-2.248 3.396 2.317 3.472h-1.358l-1.587-2.571-1.587 2.571h-1.365l2.317-3.472-2.247-3.396h1.359l1.504 2.507ZM194.079 177.28l1.6-5.148h1.257l-2.762 7.928c-.427 1.143-1.106 1.714-2.037 1.714l-.222-.019-.438-.083v-.952l.317.026c.398 0 .707-.081.927-.242.224-.16.408-.455.552-.882l.26-.698-2.45-6.792h1.282l1.714 5.148ZM200.128 176.074h-.857V179h-1.18v-6.868h1.18v2.907h.769l2.31-2.907h1.422l-2.717 3.301L204 179h-1.491l-2.381-2.926ZM209.453 172.132h1.174V179h-1.174v-5.008L206.286 179h-1.175v-6.868h1.175v5.014l3.167-5.014Z',
    rightSWRHooks:
      'M409.288 175.25c-1.045-.301-1.807-.669-2.285-1.105-.474-.44-.711-.982-.711-1.625 0-.728.29-1.329.87-1.803.584-.478 1.341-.717 2.272-.717.635 0 1.2.123 1.695.368.499.246.884.584 1.155 1.016.275.431.413.903.413 1.415h-1.225c0-.558-.178-.996-.534-1.314-.355-.321-.856-.482-1.504-.482-.601 0-1.071.133-1.409.4-.334.262-.502.628-.502 1.098 0 .377.159.696.477.958.321.259.865.496 1.631.711.77.216 1.371.455 1.803.718.435.258.757.56.964.907.212.347.318.756.318 1.226 0 .749-.292 1.349-.876 1.802-.584.449-1.365.673-2.342.673-.635 0-1.228-.121-1.778-.362-.55-.245-.975-.579-1.276-1.003-.296-.423-.444-.903-.444-1.441h1.225c0 .559.205 1.001.616 1.327.415.322.967.483 1.657.483.643 0 1.136-.132 1.479-.394.342-.262.514-.62.514-1.073 0-.453-.159-.802-.476-1.047-.318-.25-.893-.495-1.727-.736ZM416.277 176.456l.178 1.218.26-1.098 1.828-6.449h1.028l1.784 6.449.254 1.117.197-1.244 1.434-6.322h1.225l-2.24 9.242h-1.111l-1.905-6.735-.146-.704-.146.704-1.974 6.735h-1.11l-2.235-9.242h1.219l1.46 6.329ZM429.213 175.63h-2.171v3.739h-1.225v-9.242h3.06c1.041 0 1.841.237 2.399.711.563.474.845 1.164.845 2.069 0 .576-.157 1.077-.47 1.505-.309.427-.741.747-1.295.958l2.171 3.923v.076h-1.308l-2.006-3.739Zm-2.171-.996h1.873c.605 0 1.085-.157 1.441-.47.36-.313.54-.732.54-1.257 0-.571-.172-1.009-.515-1.314-.338-.304-.829-.459-1.472-.463h-1.867v3.504ZM439.179 175.008l1.524-2.507h1.371l-2.247 3.396 2.317 3.472h-1.359l-1.587-2.571-1.587 2.571h-1.364l2.316-3.472-2.247-3.396h1.359l1.504 2.507ZM445.571 177.649l1.6-5.148h1.257l-2.761 7.928c-.428 1.143-1.107 1.714-2.038 1.714l-.222-.019-.438-.082v-.953l.317.026c.398 0 .707-.081.927-.241.224-.161.408-.455.552-.883l.26-.698-2.45-6.792h1.282l1.714 5.148ZM451.621 176.443h-.857v2.926h-1.181v-6.868h1.181v2.907h.768l2.31-2.907h1.422l-2.717 3.301 2.946 3.567h-1.492l-2.38-2.926ZM460.945 172.501h1.175v6.868h-1.175v-5.008l-3.167 5.008h-1.174v-6.868h1.174v5.015l3.167-5.015Z'
  }
}

export const Cache = () => (
  <svg viewBox="0 0 588 311" fill="none" className="invert-on-dark">
    <path stroke="#D2D2D2" d="M22.5 59.5h543v232h-543z" />
    <path fill="#fff" d="M40 43h116v33H40z" />
    <path fill="#141414" d={useDraw(PATHS, 'firstCacheProvider')} />
    <path stroke="#D2D2D2" d="M54.5 91.5h256v168h-256z" />
    <circle cx={183} cy={174} r={44.5} fill="#EAEAEA" stroke="#D3D3D3" />
    <path fill="#000" d={useDraw(PATHS, 'leftSWRHooks')} />
    <circle cx={434} cy={174} r={44.5} fill="#EAEAEA" stroke="#D3D3D3" />
    <path fill="#000" d={useDraw(PATHS, 'rightSWRHooks')} />
    <path fill="#fff" d="M72 75h116v33H72z" />
    <path fill="#141414" d={useDraw(PATHS, 'secondCacheProvider')} />
    <path fill="#9A9A9A" d={useDraw(PATHS, 'defaultCacheProvider')} />
  </svg>
)
