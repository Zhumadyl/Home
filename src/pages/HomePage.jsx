import i18n from '@/i18next/i18next'
import React from 'react'

function HomePage() {
    const { t } = i18n
  return (
    <div>HomePage
        <h1>{t("welcome")}</h1>
    </div>
  )
}

export default HomePage