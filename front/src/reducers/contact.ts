interface IState {
  name?: string
  email?: string
  subject?: string
  body?: string
  captcha?: string
}

interface IAction {
  target: {
    name: string
    value?: string
  }
}

export function reducer(state: IState, action: IAction): IState {
  return { ...state, [action.target.name]: action.target.value }
}

export const initialValues: IState = {
  name: '',
  email: '',
  subject: '',
  body: '',
  captcha: '',
}
