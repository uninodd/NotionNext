
import FlipCard from '@/components/FlipCard'
import Link from 'next/link'
import CONFIG from '../config'

/**
 * 交流频道
 * @returns
 */
export default function TouchMeCard() {
  if (!JSON.parse(CONFIG.SOCIAL_CARD)) {
    return <></>
  }
  return (
        <div className={'relative h-28 text-white flex flex-col'}>

            <FlipCard
                className='cursor-pointer lg:p-6 p-4 border rounded-xl bg-[#4f7bb6] dark:bg-yellow-600 dark:border-gray-600'
                frontContent={
                    <div className='h-full'>
                        <h2 className='font-[1000] text-3xl'>{CONFIG.SOCIAL_CARD_TITLE_1}</h2>
                        <h3 className='pt-2'>{CONFIG.SOCIAL_CARD_TITLE_2}</h3>
                        <div className='absolute left-0 top-0 w-full h-full' style={{ background: 'url(https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F488425be-6b65-4c3c-a100-e125475177d9%2F99908425-08a8-433d-a15f-f745aa6958b4%2FDC%25E7%25BE%25A4.jpg?table=block&id=ab9184b2-8fc5-4bea-b80c-2b64c89e17b9&spaceId=488425be-6b65-4c3c-a100-e125475177d9&width=2000&userId=17eda8fa-c091-4d88-88e4-411113b315e7&cache=v2) center center no-repeat' }}></div>
                    </div>}
                backContent={<Link href={CONFIG.SOCIAL_CARD_URL}>
                    <div className='font-[1000] text-xl h-full'>
                        {CONFIG.SOCIAL_CARD_TITLE_3}
                    </div>
                </Link>}
            />

        </div>
  )
}
