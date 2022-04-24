import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
      .then(res => {
        if(!res.ok)
        {
          throw Error('could not fetch');
        }
        return res.json()
      })
      .then((data) => {
        setData(data)
        setIsPending(false)
        setError(null)
      })
    })
  })
}