/**
 *  this file from popper.js
 *  https://github.com/FezVrasta/popper.js
 *
 */

type Shape = { width: number, height: number }
type ClientRect = {
  width: number,
  height: number,
  top: number,
  bottom: number,
  left: number,
  right: number,
}
type Position = {
  top: number,
  left: number,
  arrowPosition: number,
  arrowDir: string,
  arrowFace: string,
}

const getBordersSize: Function = (styles: any, axis: any): any => {
  const sideA = axis === 'x' ? 'Left' : 'Top'
  const sideB = sideA === 'Left' ? 'Right' : 'Bottom'
  
  return (
    +styles[`border${sideA}Width`].split('px')[0] +
    +styles[`border${sideB}Width`].split('px')[0]
  )
}

const getStyleComputedProperty: Function = (element: Element): any => {
  if (element.nodeType !== 1) {
    return []
  }
  // NOTE: 1 DOM access here
  const css = window.getComputedStyle(element, null)
  return css
}

const getClientRect: Function = (offsets: any): any => {
  return {
    ...offsets,
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height,
  }
}

const getSize: Function = (axis: string, body: Element, html: Element): number => {
  return Math.max(body[`offset${axis}`], html[`client${axis}`], html[`offset${axis}`])
}

const getWindowSizes: Function = (): Shape => {
  const body: Element = window.document.body
  const html: Element = window.document.documentElement
  return {
    height: getSize('Height', body, html),
    width: getSize('Width', body, html),
  }
}

const getBoundingClientRect: Function = (element: HTMLElement): ClientRect => {
  let rect: any = element.getBoundingClientRect()
  
  const result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top,
  }
  
  // subtract scrollbar size from sizes
  const sizes: any = element.nodeName === 'HTML' ? getWindowSizes() : {}
  const width = sizes.width || element.clientWidth
  const height = sizes.height || element.clientHeight
  
  let horizScrollbar: number = element.offsetWidth - width
  let vertScrollbar: number = element.offsetHeight - height
  
  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    const styles = getStyleComputedProperty(element)
    horizScrollbar -= getBordersSize(styles, 'x')
    vertScrollbar -= getBordersSize(styles, 'y')
    
    result.width -= horizScrollbar
    result.height -= vertScrollbar
  }
  
  return getClientRect(result)
}

const getHiddenShape = (el: HTMLElement) => {
  const _old = {
    left: el.style.left,
    top: el.style.top,
    position: el.style.position,
    display: el.style.display
  }
  el.style.position = 'absolute'
  el.style.left = '-5000px'
  el.style.top = '-5000px'
  el.style.display = 'block'
  
  const shape: Shape = { width: el.offsetWidth + 10, height: el.offsetHeight }
  el.style.position = _old.position
  el.style.left = _old.left
  el.style.top = _old.top
  el.style.display = _old.display
  
  return shape
}

const getPositionForDir = (
  hostRect: ClientRect,
  selfRect: ClientRect,
  dir: string,
  arrowDir: string
): Position => {
  const topMap: any = {
    top: hostRect.top - selfRect.height - 10,
    bottom: hostRect.top + hostRect.height,
    left: arrowDir === 'top'
      ? hostRect.top - hostRect.height
      : arrowDir === 'right'
        ? hostRect.top - selfRect.height
        : hostRect.top - (hostRect.height / 2 - selfRect.height / 2),
    right: arrowDir === 'top'
      ? hostRect.top - hostRect.height
      : arrowDir === 'right'
        ? hostRect.top - selfRect.height
        : hostRect.top - (hostRect.height / 2 - selfRect.height / 2),
  }
  const leftMap: any = {
    left: hostRect.left - selfRect.width,
    right: hostRect.left + hostRect.width,
    top: arrowDir === 'left'
      ? hostRect.left
      : arrowDir === 'right'
        ? hostRect.left - (hostRect.width / 2 + selfRect.width / 2)
        : hostRect.left + (hostRect.width / 2 - selfRect.width / 2),
    bottom: arrowDir === 'left'
      ? hostRect.left
      : arrowDir === 'right'
        ? hostRect.left - (hostRect.width / 2 + selfRect.width / 2)
        : hostRect.left + (hostRect.width / 2 - selfRect.width / 2),
  }
  const isHorizontal: boolean = dir === 'left' || dir === 'right'
  
  const position = {
    arrowFace: dir,
    arrowDir: arrowDir === 'center' ? (isHorizontal ? 'left' : 'top') : arrowDir,
    arrowPosition: isHorizontal ? hostRect.width / 2 : hostRect.height / 2,
    top: topMap[dir],
    left: leftMap[dir],
  }
  
  return position
}

export {
  getBoundingClientRect,
  getPositionForDir,
  getHiddenShape,
}

