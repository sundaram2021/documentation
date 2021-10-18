module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  VoltoSidebar: [
    'volto',
    'test',
    {
      type: 'category',
      label: 'Views',
      items: ['tutorials/upload'],
    },
  ],
  ClassicSidebar: [
    'classic',
    'overview',
    {
      type: 'category',
      label: 'Theming',
      items: ['guides/post'],
    },
  ],
};
