const mode = import.meta.env.MODE
const baseUrl = mode === 'development' ? '/api' : import.meta.env.VITE_SERVER
export { baseUrl }