import { createContext } from 'react'

const context = createContext({ title: '', setTitle: (title: string) => null })

export default context
