// Write your code here.
const bannerInfo = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={className}>
      <h1>{headerText}</h1>
      <p>{description}</p>
      <button>Show more</button>
    </li>
  )
}

export default bannerInfo
