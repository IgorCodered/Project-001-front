/**
 * ФАЙЛ: vite.config.js
 * НАЗНАЧЕНИЕ: Конфигурационный файл сборщика Vite.
 * 
 * ЗДЕСЬ НАСТРАИВАЕТСЯ, как Vite должен обрабатывать ваш проект: какие плагины использовать,
 * куда собирать файлы, как обрабатывать пути и т.д.
 * 
 * КЛЮЧЕВЫЕ МОМЕНТЫ:
 * - plugins: [react()]: Подключает плагин для поддержки React (чтобы понимал JSX).
 * - defineConfig: Helper-функция для автодополнения в редакторе кода.
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
