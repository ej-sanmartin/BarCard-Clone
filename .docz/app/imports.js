export const imports = {
  'Components/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-index" */ 'Components/index.mdx'),
}
