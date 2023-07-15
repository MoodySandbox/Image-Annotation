import { useState } from 'react'
import { Inter } from 'next/font/google'
import Constants from '@/config/Constants'
import Tabs from '@/elements/Tabs'
import ImagesTab from '@/components/Images/ImagesTab'
import PredictionsTab from '@/components/Predictions/PredictionsTab'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [files, setFiles] = useState([]);
  const [activeTab, setActiveTab] = useState('images');

  return (
    <main className={`min-h-screen bg-gray-100 dark:bg-slate-900 p-10 md:pt-12 md:p-24 ${inter.className}`}>

      <header className="mb-12">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Image Annotation</h1>
      </header>
      
      <Tabs active={activeTab} items={Constants.tabs} onTabClick={(key) => setActiveTab(key)} />

      {activeTab === 'images'
        ? <ImagesTab
            files={files}
            setFiles={setFiles}
            setActiveTab={setActiveTab}
          />
        : <PredictionsTab
            files={files}
          />
      }

    </main>
  )
}
