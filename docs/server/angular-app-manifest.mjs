
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/pierre-lidholm-portfolio/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 6448, hash: '06442debe63d02e42b415da7fe21846d5a4238d2e56bfa3ef899fbe04c62b614', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1420, hash: 'addb33aa2a2bce6efc59cdb16c27ee11e43514b33590d4cc6a463dcfd9ddf6f3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-7OFPK6YQ.css': {size: 15148, hash: '4rXWLq+hY6c', text: () => import('./assets-chunks/styles-7OFPK6YQ_css.mjs').then(m => m.default)}
  },
};
