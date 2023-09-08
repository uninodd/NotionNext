import CONFIG from '../config'

/**
 * 博客统计卡牌
 * @param {*} props
 * @returns
 */
export function AnalyticsCard(props) {
  const targetDate = new Date(CONFIG.SITE_CREATE_TIME)
  const today = new Date()
  const diffTime = today.getTime() - targetDate.getTime() // 获取两个日期之间的毫秒数差值
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) // 将毫秒数差值转换为天数差值

  const { postCount } = props
  return <>
        <div className='text-md flex flex-col space-y-1 justify-center px-3'>
            <div className='inline'>
                <div className='flex justify-between'>
                    <div>文章數量:</div>
                    <div>{postCount}</div>
                </div>
            </div>
            <div className='inline'>
                <div className='flex justify-between'>
                    <div>網站存活天數:</div>
                    <div>{diffDays} 天</div>
                </div>
            </div>
            <div className='hidden busuanzi_container_page_pv'>
                <div className='flex justify-between'>
                    <div>瀏覽次數:</div>
                    <div className='busuanzi_value_page_pv' />
                </div>
            </div>
            <div className='hidden busuanzi_container_site_uv'>
                <div className='flex justify-between'>
                    <div>瀏覽人次:</div>
                    <div className='busuanzi_value_site_uv' />
                </div>
            </div>
        </div>
        </>
}
