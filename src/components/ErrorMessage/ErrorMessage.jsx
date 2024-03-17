const ErrorMessage = ( { message = "" }) => {
  return (
    <div>
      {message.length > 0 ? message : <p>Whoops, something went wrong! Please try reloading this page!</p>}
    </div>
  )
}

export default ErrorMessage