interface IState {
  name?: string
  email?: string
  subject?: string
  body?: string
}

interface IAction {
  name: string
  value?: string
}

export function reducer(state: IState, action: IAction | 'reset'): IState {
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
}
