import { useState, useEffect, useCallback, useMemo, useRef, MouseEvent, KeyboardEvent } from 'react' 

interface User {
  id: number,
  username: string,
}

type fibFunc = (n: number) => number 

const fib: fibFunc = (n) => {
  if (n < 2) return n 
  return fib(n - 1) + fib(n - 2) 
}

const myNum: number = 37 

function App() {
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null>(null)
  const [input, setInput] = useState<string>("")

  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef?.current) 
  console.log(inputRef?.current?.value)

  useEffect(() => {
    console.log('mounting')
    console.log('Users: ', users)

    return () => console.log('unmounting')
  }, [users])

  useEffect(()=>{
    if(inputRef.current)
    inputRef.current.focus();
  },[])
  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void  => setCount(prev => prev + 2),[])

  const result = useMemo<number>(() => fib(myNum),[myNum])

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
      <input ref={inputRef} onChange={e=>(setInput(e.currentTarget.value))} type="text" />
      <h3>{input}</h3>
    </div>
  )
}

export default App
