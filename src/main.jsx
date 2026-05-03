/**
 * ФАЙЛ: src/main.jsx
 * НАЗНАЧЕНИЕ: Точка входа JavaScript/React приложения.
 * 
 * ЭТОТ ФАЙЛ запускается первым из всех JS-файлов. Он находит в HTML элемент <div id="root">
 * и "рендерит" (отрисовывает) внутрь него главный компонент App.
 * 
 * КЛЮЧЕВЫЕ МОМЕНТЫ:
 * - import App from './App.jsx': Импортирует главный компонент.
 * - ReactDOM.createRoot(...).render(...): Создает корень React-приложения и отрисовывает компонент App.
 * - React.StrictMode: Режим разработки, который помогает найти потенциальные проблемы в коде.
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
