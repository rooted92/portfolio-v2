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
    },
    {
      name: 'Next.js',
      tag: 'frontend',
      url: 'https://nextjs.org/',
      iconName: 'icon-[cib--next-js]',
    },
    {
      name: 'Node.js',
      tag: 'backend',
      url: 'https://nodejs.org/',
      iconName: 'icon-[fa-brands--node-js]',
    },
    {
      name: 'Express',
      tag: 'backend',
      url: 'https://expressjs.com/',
      iconName: 'icon-[simple-icons--express]'
    },
    {
      name: 'MongoDB',
      tag: 'backend',
      url: 'https://www.mongodb.com/',
      iconName: 'icon-[simple-icons--mongodb]',
    },
    {
      name: 'Tailwind CSS',
      tag: 'frontend',
      url: 'https://tailwindcss.com/',
      iconName: 'icon-[teenyicons--tailwind-solid]',
    },
    {
      name: 'WordPress',
      tag: 'cms',
      url: 'https://wordpress.org/',
      iconName: 'icon-[simple-icons--wordpress]',
    },
    {
      name: 'PHP',
      tag: 'cms',
      url: 'https://www.php.net/',
      iconName: 'icon-[simple-icons--php]',
    },
    {
      name: 'WP Engine',
      tag: 'cms',
      url: 'https://wpengine.com/',
      iconName: 'icon-[simple-icons--wpengine]',
    },
    {
      name: 'Postman',
      tag: 'tools',
      url: 'https://www.postman.com/',
      iconName: 'icon-[cib--postman]',
    },
    {
      name: 'VS Code',
      tag: 'tools',
      url: 'https://code.visualstudio.com/',
      iconName: 'icon-[file-icons--vscode]',
    },
    {
      name: 'Git',
      tag: 'tools',
      url: 'https://git-scm.com/',
      iconName: 'icon-[simple-icons--git]',
    },
    {
      name: 'GitHub',
      tag: 'tools',
      url: 'https://github.com/',
      iconName: 'icon-[ion--social-octocat]',
    },
    {
      name: 'Browserstack',
      tag: 'tools',
      url: 'https://www.browserstack.com/',
      iconName: 'icon-[devicon-plain--browserstack]',
    },
    {
      name: 'pnpm',
      tag: 'tools',
      url: 'https://pnpm.io/',
      iconName: 'icon-[simple-icons--pnpm]',
    },
    {
      name: 'npm',
      tag: 'tools',
      url: 'https://www.npmjs.com/',
      iconName: 'icon-[simple-icons--npm]',
    },
    {
      name: 'EJS',
      tag: 'frontend',
      url: 'https://ejs.co/',
      iconName: 'icon-[file-icons--ejs]',
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