import React from 'react'
import HeadingOne from '../ui/HeadingOne'
import SkillsTabs from '../components/SkillsTabs'

const page = () => {

  const tabs = [
    {
      name: 'Frontend',
      tag: 'frontend',
      iconName: 'icon-[simple-icons--react]'
    },

    {
      name: 'Backend',
      tag: 'backend',
      iconName: 'icon-[fa-brands--node-js]'
    },
    {
      name: 'Database',
      tag: 'database',
      iconName: 'icon-[simple-icons--mongodb]'
    },
    {
      name: 'WordPress',
      tag: 'cms',
      iconName: 'icon-[simple-icons--wordpress]'
    }
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
      tag: 'database',
      iconName: 'icon-[simple-icons--mongodb]',
      iconClasses: 'text-green-600'
    },
    {
      name: 'icon-[teenyicons--tailwind-solid]',
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