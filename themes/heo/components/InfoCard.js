import BLOG from '@/blog.config'
import { ArrowRightCircle, GlobeAlt } from '@/components/HeroIcons'
import LazyImage from '@/components/LazyImage'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import CONFIG from '../config'
import Announcement from './Announcement'
import Card from './Card'

/**
 * 社交信息卡
 * @param {*} props
 * @returns
 */
export function InfoCard(props) {
  const { siteInfo, notice } = props
  const router = useRouter()
  // 在文章详情页特殊处理
  const isSlugPage = router.pathname === '/[...slug]'

  return (
        <Card className='bg-[#4f7bb6] dark:bg-yellow-600 text-white flex flex-col w-72 overflow-hidden relative'>
            {/* 信息卡牌第一行 */}
            <div className='flex justify-between'>
                {/* 问候语 */}
                <GreetingsWords />
                <div className={`${isSlugPage ? 'absolute right-0 -mt-8 -mr-5 hover:opacity-0 hover:scale-150 blur' : 'cursor-pointer'} justify-center items-center flex dark:text-gray-100 transform transitaion-all duration-200`}>
                    <LazyImage src={siteInfo?.icon} className='rounded-full' width={isSlugPage ? 100 : 28} alt={BLOG.AUTHOR} />
                </div>
            </div>

            /*<h2 className='text-3xl font-extrabold mt-3'>
                {BLOG.AUTHOR}
            </h2>*/

            {/* 公告栏 */}
            <div>
                <Announcement post={notice} style={{ color: 'white !important' }} />
            </div>

            
        </Card>
  )
}

/**
 * 欢迎语
 */
function GreetingsWords() {
  const greetings = CONFIG.INFOCARD_GREETINGS
  const [greeting, setGreeting] = useState(greetings[0])
  // 每次点击，随机获取greetings中的一个
  const handleChangeGreeting = () => {
    const randomIndex = Math.floor(Math.random() * greetings.length)
    setGreeting(greetings[randomIndex])
  }

  return <div onClick={handleChangeGreeting} className=' select-none cursor-pointer py-1 px-2 bg-indigo-400 hover:bg-indigo-50  hover:text-indigo-950 dark:bg-yellow-500 dark:hover:text-white dark:hover:bg-black text-sm rounded-lg  duration-200 transition-colors'>
        {greeting}
    </div>
}


