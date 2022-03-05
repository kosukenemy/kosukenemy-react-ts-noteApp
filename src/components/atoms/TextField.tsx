import { RefObject } from '../../types'

type TextFieldType = {
  type: "text" | "textarea";
  name: string;
  title?: RefObject<HTMLInputElement>;
  displayName: string;
  defaultValue?: string | undefined;
}

const TextField = (
  { type, 
    name, 
    title, 
    displayName 
  }: TextFieldType) => {
  return (
    <fieldset>
      <label htmlFor={name}>{displayName}</label>
      <input id={name} type={type} ref={title} required/>
    </fieldset>
  )
}

export default TextField