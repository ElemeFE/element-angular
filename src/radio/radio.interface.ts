
interface RadioGroupConfig {
  buttonSize?: string,
  fillColor?: string,
  textColor?: string,
  disabled: boolean,
  modelChange: Function,
}

type Label = string | boolean | number
type ClassesType = { [key: string]: any }

export {
  RadioGroupConfig,
  Label,
  ClassesType,
}
