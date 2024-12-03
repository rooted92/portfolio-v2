import React from 'react'
import HeadingOne from '../ui/HeadingOne'
import SkillsTabs from '../components/SkillsTabs'

const page = () => {

  const tabs = [
    {
      name: 'Frontend',
      tag: 'frontend',
      iconName: 'icon-[icon-park-outline--code-computer]'
    },

    {
      name: 'Backend',
      tag: 'backend',
      iconName: 'icon-[mynaui--servers]'
    },
    {
      name: 'WordPress',
      tag: 'cms',
      iconName: 'icon-[simple-icons--wordpress]'
    },
    {
      name: 'Tools',
      tag: 'tools',
      iconName: 'icon-[ep--tools]'
    },
  ]

  const skills = [
    {
      name: 'React',
      tag: 'frontend',
      url: 'https://reactjs.org/',
      iconName: 'icon-[simple-icons--react]',
      iconClasses: 'text-blue-500'
    },
    {
      name: 'Next.js',
      tag: 'frontend',
      url: 'https://nextjs.org/',
      iconName: 'icon-[cib--next-js]',
      iconClasses: 'text-gray-800'
    },
    {
      name: 'Node.js',
      tag: 'backend',
      url: 'https://nodejs.org/',
      iconName: 'icon-[fa-brands--node-js]',
      iconClasses: 'text-green-500'
    },
    {
      name: 'Express',
      tag: 'backend',
      url: 'https://expressjs.com/',
      iconName: 'icon-[simple-icons--express]',
      iconClasses: 'text-gray-700'
    },
    {
      name: 'MongoDB',
      tag: 'backend',
      url: 'https://www.mongodb.com/',
      iconName: 'icon-[simple-icons--mongodb]',
      iconClasses: 'text-green-600'
    },
    {
      name: 'Tailwind CSS',
      tag: 'frontend',
      url: 'https://tailwindcss.com/',
      iconName: 'icon-[teenyicons--tailwind-solid]',
      iconClasses: 'text-blue-500'
    },
    {
      name: 'WordPress',
      tag: 'cms',
      url: 'https://wordpress.org/',
      iconName: 'icon-[simple-icons--wordpress]',
      iconClasses: 'text-blue-500'
    },
    {
      name: 'PHP',
      tag: 'cms',
      url: 'https://www.php.net/',
      iconName: 'icon-[simple-icons--php]',
      iconClasses: 'text-blue-500'
    },
    {
      name: 'WP Engine',
      tag: 'cms',
      url: 'https://wpengine.com/',
      iconName: 'icon-[simple-icons--wpengine]',
      iconClasses: 'text-blue-500'
    },
    {
      name: 'Postman',
      tag: 'tools',
      url: 'https://www.postman.com/',
      iconName: 'icon-[cib--postman]',
      iconClasses: 'text-blue-500'
    },
    {
      name: 'VS Code',
      tag: 'tools',
      url: 'https://code.visualstudio.com/',
      iconName: 'icon-[file-icons--vscode]',
      iconClasses: 'text-blue-500'
    },
    {
      name: 'Git',
      tag: 'tools',
      url: 'https://git-scm.com/',
      iconName: 'icon-[simple-icons--git]',
      iconClasses: 'text-blue-500'
    },
    {
      name: 'GitHub',
      tag: 'tools',
      url: 'https://github.com/',
      iconName: 'icon-[ion--social-octocat]',
      iconClasses: 'text-blue-500'
    },
    {
      name: 'Browserstack',
      tag: 'tools',
      url: 'https://www.browserstack.com/',
      iconName: 'icon-[devicon-plain--browserstack]',
      iconClasses: 'text-blue-500'
    },
    {
      name: 'pnpm',
      tag: 'tools',
      url: 'https://pnpm.io/',
      iconName: 'icon-[simple-icons--pnpm]',
      iconClasses: 'text-blue-500'
    },
    {
      name: 'npm',
      tag: 'tools',
      url: 'https://www.npmjs.com/',
      iconName: 'icon-[simple-icons--npm]',
      iconClasses: 'text-blue-500'
    },
    {
      name: 'EJS',
      tag: 'frontend',
      url: 'https://ejs.co/',
      iconName: 'icon-[file-icons--ejs]',
      iconClasses: 'text-blue-500'
    },
    {
      name: 'Bootstrap',
      tag: 'frontend',
      url: 'https://getbootstrap.com/',
      iconName: 'icon-[simple-icons--bootstrap]',
    },
    {
      name: 'Daisy UI',
      tag: 'frontend',
      url: 'https://daisyui.com/',
      iconName: 'icon-[simple-icons--daisyui]',
    },
    {
      name: 'CSS',
      tag: 'frontend',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      iconName: 'icon-[simple-icons--css3]',
    },
    {
      name: 'HTML',
      tag: 'frontend',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      iconName: 'icon-[simple-icons--html5]',
    },
    {
      name: 'JavaScript',
      tag: 'frontend',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      iconName: 'icon-[simple-icons--javascript]',
    },
    {
      name: 'TypeScript',
      tag: 'frontend',
      url: 'https://www.typescriptlang.org/',
      iconName: 'icon-[simple-icons--typescript]',
    },
    {
      name: 'Vercel',
      tag: 'frontend',
      url: 'https://vercel.com/',
      iconName: 'icon-[simple-icons--vercel]',
    },
    {
      name: 'Hostinger',
      tag: 'tools',
      url: 'https://www.hostinger.com/',
      iconName: 'icon-[simple-icons--hostinger]',
    },
    {
      name: 'FileZilla',
      tag: 'tools',
      url: 'https://filezilla-project.org/',
      iconName: 'icon-[tabler--brand-filezilla]',
    },
    {
      name: 'Mongoose',
      tag: 'backend',
      url: 'https://mongoosejs.com/',
      iconName: 'icon-[simple-icons--mongoose]',
    },
    {
      name: 'Passport',
      tag: 'backend',
      url: 'http://www.passportjs.org/',
      iconName: 'icon-[simple-icons--passport]',
    },
    {
      name: 'Flowbite',
      tag: 'frontend',
      url: 'https://flowbite.com/',
      iconName: 'icon-[flowbite--flowbite-solid]',
    },
    {
      name: 'CLI',
      tag: 'tools',
      url: 'https://en.wikipedia.org/wiki/Command-line_interface',
      iconName: 'icon-[grommet-icons--cli]'
    },
    {
      name: 'Figma',
      tag: 'tools',
      url: 'https://www.figma.com/',
      iconName: 'icon-[simple-icons--figma]',
    },
    {
      name: 'JSON',
      tag: 'backend',
      url: 'https://www.json.org/json-en.html',
      iconName: 'icon-[tabler--json]',
    }
  ]
  return (
    <section className='container mx-auto flex flex-col items-center'>
      <HeadingOne text="Skills" />
      <SkillsTabs tabs={tabs} skills={skills} />
    </section>
  )
}

export default page