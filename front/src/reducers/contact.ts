interface IState {
  name?: string
  email?: string
  subject?: string
  body?: string
  captcha?: string
}

interface IAction {
  name: string
  value?: string
}

export function reducer(state: IState, action: IAction | 'reset'): IState {
  console.log(action)
  if (action === 'reset') {
    return initialValues
  }
  return { ...state, [action.name]: action.value }
}

export const initialValues: IState = {
  name: '',
  email: '',
  subject: '',
  body: '',
  captcha: '',
}
