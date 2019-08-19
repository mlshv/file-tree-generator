import React from 'react'
import ReactDOM from 'react-dom'

import Tree from './Tree'
import AsciiTree from './AsciiTree'
import './styles.css'

function App() {
  const [isEmoji, setIsEmoji] = React.useState(false)
  const [isCompact, setIsCompact] = React.useState(false)
  const [treeData, setTreeData] = React.useState([
    {
      title: 'root',
      isDirectory: true,
      expanded: true,
    },
  ])

  return (
    <div className="App">
      <h1>File tree generator</h1>
      <p className="description">
        Inspired by <code>tree</code>.
      </p>
      <h2>Structure</h2>
      <Tree value={treeData} onChange={setTreeData} />
      <h2>Result</h2>
      <label className="option">
        <input
          type="checkbox"
          checked={isEmoji}
          onChange={e => setIsEmoji(e.target.checked)}
        />
        Emoji
      </label>
      <label className="option">
        <input
          type="checkbox"
          checked={isCompact}
          onChange={e => setIsCompact(e.target.checked)}
        />
        Compact
      </label>
      <AsciiTree value={treeData} withEmoji={isEmoji} isCompact={isCompact} />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
