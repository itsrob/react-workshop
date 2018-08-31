export const incrementCounter = (input) => (
  {
  type: 'INCREMENT',
  input: input
})

export const resetCounter = () => ({
  type: 'RESET'
})