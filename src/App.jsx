/**
 * ФАЙЛ: src/App.jsx
 * НАЗНАЧЕНИЕ: Главный компонент приложения.
 * 
 * ЭТОТ ФАЙЛ содержит основной интерфейс, который вы видите на странице.
 * В React всё состоит из компонентов, и App — это корневой компонент, от которого строятся остальные.
 * 
 * КЛЮЧЕВЫЕ МОМЕНТЫ:
 * - function App(): Объявление функционального компонента.
 * - useState(0): Хук для создания "состояния" (переменной, которая хранит данные, например, счетчик).
 * - return (...): JSX-разметка, которая описывает, что должно отображаться на экране.
 * - export default App: Делает компонент доступным для импорта в других файлах (например, в main.jsx).
 */
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Vite + React</h1>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
