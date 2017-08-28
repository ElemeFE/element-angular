
type Shape = { width: number, height: number }

const getRealShape = (el: HTMLElement): any => {
  const rect: any = el.getBoundingClientRect()
  const { width, height } = window.getComputedStyle(el)
  const getCSSStyleVal: Function = (val: string | null | number, parentNum: number): number => {
    if (!val) return 0
    const str = String(val)
    const strVal = str.includes('px') ? str.split('px')[0] :
      str.includes('%') ? Number(str.split('%')[0]) * parentNum * 0.01 : str
    return Number.isNaN(Number(strVal)) ? 0 : Number(strVal)
  }
  return {
    width: getCSSStyleVal(width, rect.width),
    height: getCSSStyleVal(height, rect.height),
  }
}

const getPositionForDir = (
  hostRect: ClientRect,
  selfRect: any,
  dir: string,
  arrowDir: string
): any => {
  const diffWidth: number = hostRect.width - selfRect.width
  const diffHeight: number = selfRect.height - hostRect.height
  const topMap: any = {
    top:  - 10 - selfRect.height,
    bottom: hostRect.height,
    left: arrowDir === 'start' ? 0 : arrowDir === 'end' ? 0 - diffHeight : 0 - Math.abs(diffHeight / 2),
    right: arrowDir === 'start' ? 0 : arrowDir === 'end' ? 0 - diffHeight : 0 - Math.abs(diffHeight / 2),
  }
  const leftMap: any = {
    left: - 10 - selfRect.width,
    right: hostRect.width,
    top: arrowDir === 'start' ? 0 : arrowDir === 'end' ? diffWidth : diffWidth / 2,
    bottom: arrowDir === 'start' ? 0 : arrowDir === 'end' ? diffWidth : diffWidth / 2,
  }
  const isHorizontal: boolean = dir === 'left' || dir === 'right'
  const arrowLen = isHorizontal
    ? arrowDir === 'center' ? selfRect.height  : Math.min(hostRect.height, selfRect.height)
    : arrowDir === 'center' ? selfRect.width  : Math.min(hostRect.height, selfRect.height)
  
  const position = {
    arrowFace: dir,
    arrowDir: isHorizontal ? (arrowDir === 'end' ? 'bottom' : 'top') : (arrowDir === 'start' ? 'left' : 'right'),
    arrowPosition: arrowLen / 2 -5,
    top: topMap[dir],
    left: leftMap[dir],
  }
  
  return position
}

export {
  getPositionForDir,
  getRealShape,
}

