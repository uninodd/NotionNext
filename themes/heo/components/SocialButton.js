import BLOG from '@/blog.config'
import React from 'react'

/**
 * 社交联系方式按钮组
 * @returns {JSX.Element}
 * @constructor
 */
const SocialButton = () => {
  return <div className='w-full justify-center flex-wrap flex'>
    <div className='space-x-12 text-3xl text-gray-600 dark:text-gray-300 '>
      {BLOG.CONTACT_TWITTER && <a target='_blank' rel='noreferrer' title={'twitter'} href={BLOG.CONTACT_TWITTER} >
        <i className='transform hover:scale-125 duration-150 fab fa-twitter dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_INSTAGRAM && <a target='_blank' rel='noreferrer' title={'instagram'} href={BLOG.CONTACT_INSTAGRAM} >
        <i className='transform hover:scale-125 duration-150 fab fa-instagram dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_EMAIL && <a target='_blank' rel='noreferrer' title={'email'} href={`mailto:${BLOG.CONTACT_EMAIL}`} >
        <i className='transform hover:scale-125 duration-150 fas fa-envelope dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {JSON.parse(BLOG.ENABLE_RSS) && <a target='_blank' rel='noreferrer' title={'RSS'} href={'/feed'} >
        <i className='transform hover:scale-125 duration-150 fas fa-rss dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_BILIBILI && <a target='_blank' rel='noreferrer' title={'bilibili'} href={BLOG.CONTACT_BILIBILI} >
        <i className='transform hover:scale-125 duration-150 fab fa-bilibili dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_YOUTUBE && <a target='_blank' rel='noreferrer' title={'youtube'} href={BLOG.CONTACT_YOUTUBE} >
        <i className='transform hover:scale-125 duration-150 fab fa-youtube dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
    </div>
  </div>
}
export default SocialButton
