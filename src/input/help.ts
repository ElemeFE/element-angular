/**
 *  initial file from Element
 *  see: github.com/ElemeFE/element/blob/dev/packages/input/src/calcTextareaHeight.js
 *
 */

type styling = {
  contextStyle: string,
  paddingSize: number,
  borderSize: number,
  boxSizing: string,
}
let hiddenTextarea: HTMLTextAreaElement

const HIDDEN_STYLE = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`

const CONTEXT_STYLE = [
  'letter-spacing',
  'line-height',
  'padding-top',
  'padding-bottom',
  'font-family',
  'font-weight',
  'font-size',
  'text-rendering',
  'text-transform',
  'width',
  'text-indent',
  'padding-left',
  'padding-right',
  'border-width',
  'box-sizing',
]

const calculateNodeStyling: Function = (targetElement: HTMLTextAreaElement): styling => {
  const style: CSSStyleDeclaration = window.getComputedStyle(targetElement)
  const boxSizing: string = style.getPropertyValue('box-sizing')
  const paddingSize: number = (
    parseFloat(style.getPropertyValue('padding-bottom')) +
    parseFloat(style.getPropertyValue('padding-top'))
  )
  const borderSize: number = (
    parseFloat(style.getPropertyValue('border-bottom-width')) +
    parseFloat(style.getPropertyValue('border-top-width'))
  )
  const contextStyle: string = CONTEXT_STYLE
    .map(name => `${name}:${style.getPropertyValue(name)}`)
    .join(';')

  return { contextStyle, paddingSize, borderSize, boxSizing }
}

const getTextareaHeight: Function = (
  targetElement: HTMLTextAreaElement,
  minRows: number = null,
  maxRows: number = null,
  ): string => {
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement<'textarea'>('textarea')
    document.body.appendChild(hiddenTextarea)
  }
  
  const { paddingSize, borderSize, boxSizing, contextStyle } = calculateNodeStyling(targetElement)
  
  hiddenTextarea.setAttribute('style', `${contextStyle};${HIDDEN_STYLE}`)
  hiddenTextarea.value = targetElement.value || targetElement.placeholder || ''

  let height: number = hiddenTextarea.scrollHeight

  if (boxSizing === 'border-box') {
    height += borderSize
  } else if (boxSizing === 'content-box') {
    height -= paddingSize
  }
  
  hiddenTextarea.value = ''
  const singleRowHeight: number = hiddenTextarea.scrollHeight - paddingSize
  
  if (minRows !== null) {
    let minHeight = singleRowHeight * minRows
    if (boxSizing === 'border-box') {
      minHeight += paddingSize + borderSize
    }
    height = Math.max(minHeight, height)
  }
  if (maxRows !== null) {
    let maxHeight = singleRowHeight * maxRows
    if (boxSizing === 'border-box') {
      maxHeight += paddingSize + borderSize
    }
    height = Math.min(maxHeight, height)
  }
  
  return height + 'px'
}

export {
  getTextareaHeight,
}


