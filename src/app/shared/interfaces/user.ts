// Сообщения об ошибках в шаблоне USER TEmplate
export interface UserTe {
  id: number,
  name: string,
  role: string,
  age?: number
}

// Сообщения об ошибках из кода компонента USER COmponent
export interface UserCo {
  name?: string,
  email?: string,
  role?: string,
  age?: number
}