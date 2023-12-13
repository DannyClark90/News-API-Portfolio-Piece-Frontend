import '../css/Loading.css'
function Loading() {
    return (
      <>
      <div id="loadingPageWrapper">
      <h2 className='font-bold text-black text-4xl py-5'>Page Loading</h2>
      <h3 className='font-bold text-black text-2xl py-3'>Please Wait...</h3>
      <img id='loadingSpinner' src="src/assets/loading spinner.gif" alt="Red page loading spinner" />
      </div>
      </>
    )
}

export default Loading