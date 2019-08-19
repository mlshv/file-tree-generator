import React from 'react'

function renderIndent(isRoot, prefix, hasNextSibling, isCompact) {
  let result = ''

  if (!isRoot) {
    result += prefix

    if (hasNextSibling) {
      result += isCompact ? '├─ ' : '├── '
    } else {
      result += isCompact ? '└─ ' : '└── '
    }
  }

  return result
}

function renderTree(treeData, withEmoji, isCompact) {
  return renderChildTree(treeData, undefined, undefined, withEmoji, isCompact)
}

function renderLeaf(leaf, withEmoji) {
  if (withEmoji) {
    return `${leaf.isDirectory ? '📂' : '📄'}${leaf.title}`
  } else {
    return leaf.title
  }
}

function renderChildPrefix(
  isRoot,
  parentPrefix,
  parentHasNextSibling,
  isCompact,
) {
  const spaceIndent = isCompact ? '  ' : '   '
  const childIndent = isRoot ? '' : spaceIndent
  const extraSpaceForChildOnly = !isRoot && !parentHasNextSibling ? ' ' : ''

  return (
    parentPrefix +
    (parentHasNextSibling ? '|' : extraSpaceForChildOnly) +
    childIndent
  )
}

function renderChildTree(
  treeData = [],
  prefix = '',
  level = 0,
  withEmoji,
  isCompact,
) {
  let result = ''
  const isRoot = level === 0

  treeData.forEach((leaf, index) => {
    const hasNextSibling = treeData.length > index + 1
    const indent = renderIndent(isRoot, prefix, hasNextSibling, isCompact)
    const childPrefix = renderChildPrefix(
      isRoot,
      prefix,
      hasNextSibling,
      isCompact,
    )

    result += indent + renderLeaf(leaf, withEmoji) + '\n'
    result += renderChildTree(
      leaf.children,
      childPrefix,
      level + 1,
      withEmoji,
      isCompact,
    )
  })

  return result
}

function AsciiTree({ value, withEmoji, isCompact }) {
  return (
    <pre style={{ lineHeight: '1.2' }}>
      {renderTree(value, withEmoji, isCompact)}
    </pre>
  )
}

export default AsciiTree
