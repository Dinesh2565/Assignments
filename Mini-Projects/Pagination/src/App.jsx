import { Profiler, useEffect, useState } from 'react'



function App() {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [products, setProducts] = useState([])
  const [total, setTotal] = useState(0);
  // let url = new URL("https://fakeapi.net/products")
  // let pageNo = page;
  // let limitNumber = limit;
  // url.searchParams.append("page", pageNo)
  // url.searchParams.append("limit", limitNumber)
  // url = url.toString();
  let url = `https://fakeapi.net/products?page=${page}&limit=${limit}`


  async function fetchProducts(url) {
    const response = await fetch(url)
    const result = await response.json();
    console.log(result)
    setProducts(result.data)
    setTotal(result.pagination.total)

  }
  useEffect(() => {
    fetchProducts(url)
  }, [url])

  let l = Math.ceil(total / limit)
  let array = new Array(Number(l))
  array.fill(0)


  return (
    <>
      <div>
        <h1> All products </h1>
        <div className='products-container'>
          {

            products.map((product, idx) => {
              return <div className="product-container" key={product.id}>
                <h2>{product.title}</h2>
                {/* <img src={product.image} alt='Image not found' /> */}
                <h2>{product.category}</h2>
                <p>{product.description}</p>
                <h2>{product.price}</h2>

              </div>

            })
          }</div>


        <div className='buttonContainer'>
          {
            array.map((_, idx) => {
              return <button onClick={() => setPage(idx + 1)} key={idx}>{idx + 1}</button>
            })
          }

          <div>
            <input placeholder='Enter a limit' onChange={(e) => {
              if (e.target.value > 0) {
                setLimit(Number(e.target.value))
                setPage(1)
              } else {
                setLimit(10)
              }
            }} />
          </div>

        </div>



      </div>
    </>
  )
}

export default App
