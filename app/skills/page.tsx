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
      iconName: 'icon-[simple-icons--react]',
      iconClasses: 'text-blue-500'
    },
    {
      name: 'Next.js',
      tag: 'frontend',
      iconName: 'icon-[cib--next-js]',
      iconClasses: 'text-gray-800'
    },
    {
      name: 'Node.js',
      tag: 'backend',
      iconName: 'icon-[fa-brands--node-js]',
      iconClasses: 'text-green-500'
    },
    {
      name: 'Express',
      tag: 'backend',
      iconName: 'icon-[simple-icons--express]',
      iconClasses: 'text-gray-700'
    },
    {
      name: 'MongoDB',
      tag: 'backend',
      iconName: 'icon-[simple-icons--mongodb]',
      iconClasses: 'text-green-600'
    },
    {
      name: 'Tailwind CSS',
      tag: 'frontend',
      iconName: 'icon-[teenyicons--tailwind-solid]',
      iconClasses: 'text-blue-500'
    },
    {
      name: 'WordPress',
      tag: 'cms',
      iconName: 'icon-[simple-icons--wordpress]',
      iconClasses: 'text-blue-500'
    },
    {
      name: 'PHP',
      tag: 'cms',
      iconName: 'icon-[simple-icons--php]',
      iconClasses: 'text-blue-500'
    },
    {
      name: 'WP Engine',
      tag: 'cms',
      iconName: 'icon-[simple-icons--wpengine]',
      iconClasses: 'text-blue-500'
    },
    {
      name: 'Postman',
      tag: 'tools',
      iconName: 'icon-[cib--postman]',
      iconClasses: 'text-blue-500'
    },
    {
      name: 'VS Code',
      tag: 'tools',
      iconName: 'icon-[file-icons--vscode]',
      iconClasses: 'text-blue-500'
    },
    {
      name: 'Git',
      tag: 'tools',
      iconName: 'icon-[simple-icons--git]',
      iconClasses: 'text-blue-500'
    },
    {
      name: 'GitHub',
      tag: 'tools',
      iconName: 'icon-[ion--social-octocat]',
      iconClasses: 'text-blue-500'
    },
    {
      name: 'Browserstack',
      tag: 'tools',
      iconName: 'icon-[devicon-plain--browserstack]',
      iconClasses: 'text-blue-500'
    },
    {
      name: 'pnpm',
      tag: 'tools',
      iconName: 'icon-[simple-icons--pnpm]',
      iconClasses: 'text-blue-500'
    },
    {
      name: 'npm',
      tag: 'tools',
      iconName: 'icon-[simple-icons--npm]',
      iconClasses: 'text-blue-500'
    },
    {
      name: 'EJS',
      tag: 'frontend',
      iconName: 'icon-[file-icons--ejs]',
      iconClasses: 'text-blue-500'
    },
    {
      name: 'Bootstrap',
      tag: 'frontend',
      iconName: 'icon-[simple-icons--bootstrap]',
    },
    {
      name: 'Daisy UI',
      tag: 'frontend',
      iconName: 'icon-[simple-icons--daisyui]',
    },
    {
      name: 'CSS',
      tag: 'frontend',
      iconName: 'icon-[simple-icons--css3]',
    },
    {
      name: 'HTML',
      tag: 'frontend',
      iconName: 'icon-[simple-icons--html5]',
    },
    {
      name: 'JavaScript',
      tag: 'frontend',
      iconName: 'icon-[simple-icons--javascript]',
    },
    {
      name: 'TypeScript',
      tag: 'frontend',
      iconName: 'icon-[simple-icons--typescript]',
    },
    {
      name: 'Vercel',
      tag: 'frontend',
      iconName: 'icon-[simple-icons--vercel]',
    },
    {
      name: 'Hostinger',
      tag: 'tools',
      iconName: 'icon-[simple-icons--hostinger]',
    },
    {
      name: 'FileZilla',
      tag: 'tools',
      iconName: 'icon-[tabler--brand-filezilla]',
    },
    {
      name: 'Mongoose',
      tag: 'backend',
      iconName: 'icon-[simple-icons--mongoose]',
    },
    {
      name: 'Passport',
      tag: 'backend',
      iconName: 'icon-[simple-icons--passport]',
    },
    {
      name: 'Flowbite',
      tag: 'frontend',
      iconName: 'icon-[flowbite--flowbite-solid]',
    },
    {
      name: 'CLI',
      tag: 'tools',
      iconName: 'icon-[grommet-icons--cli]'
    },
    {
      name: 'Figma',
      tag: 'tools',
      iconName: 'icon-[simple-icons--figma]',
    },
    {
      name: 'JSON',
      tag: 'backend',
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