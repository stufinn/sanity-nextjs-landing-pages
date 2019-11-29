export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5de1550fdd6ef997671bd821',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nrqi427i',
                  apiId: '9129a263-d319-45e3-8f80-6409d6678209'
                },
                {
                  buildHookId: '5de1550fb8d594e26584ce94',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-8tr13pcx',
                  apiId: '05610186-d67c-4d84-a923-82e61cd1474d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stufinn/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-8tr13pcx.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
