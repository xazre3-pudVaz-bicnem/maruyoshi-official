import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import RecruitContent from '@/components/pages/RecruitContent'

export const metadata: Metadata = {
  title: '求人募集｜左官・土間コンクリート作業員 未経験歓迎',
  description: '株式会社丸義の求人情報。左官・土間コンクリート作業員を正社員で募集中。未経験・学歴・年齢不問。月給197,000円〜、年間休日128日、社宅あり。東京都板橋区の建設会社です。',
  keywords: ['東京 左官 求人', '土間コンクリート 求人', '板橋区 建設 求人', '未経験 左官 正社員', '建設業 未経験歓迎'],
}

export default function RecruitPage() {
  return (
    <>
      <PageHero
        label="RECRUIT"
        title="求人募集"
        titleSub="未経験歓迎・正社員採用"
        desc="経験・学歴・年齢は問いません。一緒に現場で手に職をつけましょう。"
      />
      <RecruitContent />
    </>
  )
}
