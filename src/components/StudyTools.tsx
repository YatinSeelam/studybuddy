import React from 'react'
import { Upload, MessageCircle, Brain, FileText, Headphones, Lightbulb } from 'lucide-react'

const tools = [
  {
    icon: Upload,
    title: 'Upload',
    description: 'Upload your files, notes, websites, youtube links, lectures, and textbooks for our AI to ingest.',
    demo: (
      <div className="bg-gray-50 rounded-lg p-4 border-2 border-dashed border-gray-300 text-center">
        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
        <p className="text-sm text-textSecondary">Choose a file or drag it</p>
      </div>
    )
  },
  {
    icon: MessageCircle,
    title: 'Chat',
    description: 'Ask any questions about the content, and get the answers you need in seconds.',
    demo: (
      <div className="space-y-2">
        <div className="bg-gray-100 rounded-lg p-3 text-sm">
          <div className="flex items-center space-x-2 mb-1">
            <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
            <span className="text-xs text-textSecondary">You</span>
          </div>
          <p className="text-textPrimary">Explain photosynthesis</p>
        </div>
        <div className="bg-primary-100 rounded-lg p-3 text-sm">
          <div className="flex items-center space-x-2 mb-1">
            <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
            <span className="text-xs text-primary-600">StudyBuddy</span>
          </div>
          <p className="text-textPrimary">Photosynthesis is the process...</p>
        </div>
      </div>
    )
  },
  {
    icon: Brain,
    title: 'Quiz',
    description: 'Turn your uploaded course materials into quizzes you can test your knowledge on.',
    demo: (
      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <div className="mb-3">
          <span className="text-sm font-medium text-textPrimary">Question 2</span>
        </div>
        <p className="text-sm text-textPrimary mb-3">When did the revolutionary war begin?</p>
        <input
          type="text"
          placeholder="April 19th, 1775"
          className="w-full p-2 border border-gray-300 rounded text-sm"
        />
        <button className="mt-2 bg-primary-500 text-white px-4 py-1 rounded text-sm">Check</button>
      </div>
    )
  },
  {
    icon: FileText,
    title: 'Flashcards',
    description: 'Create flashcard sets to study based on your uploaded course materials.',
    demo: (
      <div className="relative">
        <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
          <div className="text-center">
            <p className="text-sm font-medium text-textPrimary">Mitochondria</p>
          </div>
        </div>
        <div className="absolute top-1 left-1 bg-gray-100 rounded-lg w-full h-full -z-10"></div>
        <div className="absolute top-2 left-2 bg-gray-50 rounded-lg w-full h-full -z-20"></div>
      </div>
    )
  },
  {
    icon: FileText,
    title: 'Smart Notes',
    description: 'Turn your uploaded course materials into easily digestible notes.',
    demo: (
      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">Normal</span>
          <span className="text-xs">B I U</span>
        </div>
        <div className="space-y-1">
          <div className="h-2 bg-gray-200 rounded w-full"></div>
          <div className="h-2 bg-gray-200 rounded w-4/5"></div>
          <div className="h-2 bg-gray-200 rounded w-3/5"></div>
        </div>
      </div>
    )
  },
  {
    icon: Headphones,
    title: 'Lecture Listen',
    description: 'With a click of a button, automatically transcribe your lectures into easily digestible notes.',
    demo: (
      <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
          <Headphones className="w-6 h-6 text-primary-500" />
        </div>
        <p className="text-xs text-textSecondary mb-2">Status: Not Listening</p>
        <button className="bg-primary-500 text-white px-4 py-2 rounded text-sm">Start Listening</button>
      </div>
    )
  }
]

const StudyTools = () => {
  return (
    <section id="tools" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            AI Chat + Study Tools
          </h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-8">
            Turn your study materials into chatbots, practice quizzes, and flashcard sets.
          </p>
          <button className="button-accent text-textPrimary px-8 py-3 rounded-full font-semibold">
            Try Now
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-primary-800/50 backdrop-blur-sm rounded-xl p-6 border border-primary-700 card-hover"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center">
                  <tool.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{tool.title}</h3>
              </div>

              <p className="text-primary-100 mb-6 text-sm leading-relaxed">
                {tool.description}
              </p>

              <div className="mt-4">
                {tool.demo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StudyTools