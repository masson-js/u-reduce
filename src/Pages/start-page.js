import './start-page.css'

const Start = () => {

  return (
    <div className="background-container">
      <div className="start-container borders-reduce "> 
                <h1>
            WELCOME TO U-REDUCE
        </h1>
        <p>
          This page is created to help you understand the <span className="reduce-method">Reduce</span> method.
        </p>
        <p>
          <span className="reduce-method ">Reduce</span> is high powerful and importaint method for 
          work with <span className="reduce-array">Arrays</span>.
        </p>
        <p>
          The <span className="reduce-method">Reduce</span> method has two arguments: <span className="reduce-callback">Function</span> and <span className="reduce-start">start value</span>
        </p>
        <h2 className="reduce-high-letters"> 
          <span className="reduce-array ">array</span><span className="reduce-dot">.</span><span className="reduce-method">reduce</span>(<span className="reduce-callback">() =&gt; &#123; &#125;</span>, <span className="reduce-start">start value</span>)
        </h2>
        <div className="list-of-arguments">
          <ul><h2>Function has the next arguments:</h2>
            <li>
            <span className="reduce-callback-values">Accumulator</span> - result of previous call of <span className="reduce-callback">Callback function</span>, on the first call contains the parameters of <span className="reduce-start">start value</span>
            </li>
            <li>
            <span className="reduce-callback-values">Receiver</span> - the value of the first call an <span className="reduce-array">array</span>
            </li>
            <li>
            <span className="reduce-callback-values">Index</span> - the index position of reciver in an <span className="reduce-array">array</span>
            </li>
            <li>
            <span className="reduce-callback-values">Array</span> - the array being traversed
            </li>
          </ul>
        </div>
        <div className="list-of-values">
          <h2>
          The start value can be the next types: <span className="reduce-start">&#123;&#125;,&#91;&#93;, null, number, boolean</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Start;