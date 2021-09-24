export default {
  widgets: [
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
                  buildHookId: '614e62f6b83b311c9ae5cace',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-1bht48wu',
                  apiId: '5cb5461a-3b31-4f09-909e-6a15c1553922'
                },
                {
                  buildHookId: '614e62f6e50a571a006fe7c9',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-cvaj3aza',
                  apiId: '725e099b-c989-4fdc-8af0-cc164180a4cf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sinrider/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-cvaj3aza.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
