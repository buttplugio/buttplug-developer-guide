/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    'foreword',
    {
      type: 'category',
      label: 'Introduction',
      items: ['intro/introduction', 'intro/how-to-read', 'intro/buttplug-ethics', 'intro/getting-help'],
    },
    {
      type: 'category',
      label: 'Strategies Against Buttplug Architecture',
      items: ['architecture/intro', 'architecture/sessions-and-components', 'architecture/protocol-in-depth', 'architecture/client-in-depth', 'architecture/server-in-depth', 'architecture/terms'],
    },
    {
      type: 'category',
      label: 'Sticking Buttplug In',
      items: ['writing-buttplug-applications/intro', 
      'writing-buttplug-applications/api-basics',
      'writing-buttplug-applications/connectors', 
      'writing-buttplug-applications/connecting',
      'writing-buttplug-applications/device-enum',
      'writing-buttplug-applications/device-control',
      'writing-buttplug-applications/application',
      'writing-buttplug-applications/logging',
    ]
    },
  ],
};

module.exports = sidebars;
