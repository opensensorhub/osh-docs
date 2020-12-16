const { description } = require('../../package')

module.exports = {
  dest: 'gh-pages/v2',
  base: '/v2/',
  title: 'OpenSensorHub Documentation',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/img/logo.png' }]
  ],
  themeConfig: {
    logo: '/img/logo.png',
    repo: 'opensensorhub',
    docsRepo: 'opensensorhub/osh-docs',
    docsBranch: 'v2',
    docsDir: 'src',
    editLinks: true,
    editLinkText: 'Edit',
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Web APIs',
        link: '/web/',
      },
      {
        text: 'Developers',
        link: '/dev/'
      },
      {
        text: 'Add-Ons',
        link: '/addons/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Quick Start',
          collapsable: false,
          children: [
            '',
            'quickstart/installation',
            'quickstart/download-addons',
            'quickstart/protocols',
            'quickstart/license'
          ]
        },{
          title: 'General Concepts',
          collapsable: false,
          children: [
            'concepts/architecture-overview',
            'concepts/data-model',
            'concepts/system-drivers',
            'concepts/services-and-apis',
            'concepts/persistence',
            'concepts/security'
          ]
        },
        {
          title: 'Admin Guide',
          collapsable: false,
          children: [
            'admin/admin-console',
            'admin/config-reference',
            'admin/osgi-bundles'
          ]
        },
      ],
      '/web/': [
        {
          title: 'Sensor Web API',
          collapsable: false,
          children: [
            'sensorweb-api/intro',
            'sensorweb-api/examples',
            'sensorweb-api/openapi',
          ]
        },
        {
          title: 'SWE Services',
          collapsable: false,
          children: [
            'swe-services/intro',
            'swe-services/examples',
          ]
        },
        {
          title: 'SensorThings API',
          collapsable: false,
          children: [
            'sensorthings-api/intro'
          ]
        }
      ],
      '/dev/': [
        {
          title: 'Quick Start',
          collapsable: false,
          children: [
            'dev-setup',
            'architecture-overview',
            'osgi-bundles',
          ]
        },
        {
          title: 'Tutorials',
          collapsable: false,
          children: [
            'tutorials/adding-new-modules',
            'tutorials/your-first-sensor-driver',
            'tutorials/migrating-sensor-driver-from-v1'
          ]
        },
        {
          title: 'Real-time Device Drivers',
          collapsable: false,
          children: [
            'procedure-registry',
            'driver-lifecycle',
            'real-time-driver-api'
          ]
        },
        {
          title: 'Events & Messaging',
          collapsable: false,
          children: [
            'event-bus',
            'tasking-queues'
          ]
        },
        {
          title: 'Persistence',
          collapsable: false,
          children: [
            'federated-database',
            'latest-state-database',
            'datastore-api'
          ]
        },
        {
          title: 'Processing',
          collapsable: false,
          children: [
            'processing-api'
          ]
        },
        {
          title: 'Security',
          collapsable: false,
          children: [
            'security-api'
          ]
        }
      ]
    }
  },
  plugins: [
    /*'@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',*/
  ]
}
