import './index.css'

const RepoDetails = props => {
  return (
    <div className="repo-details-bg-cont">
      <h1>Repo Details</h1>
      <p>we have to fetch the details from the server</p>
      <p style={{fontSize: '16px', color: '#bf5650'}}>
        but api's provided are not working properly getting API rate limit
        exceeded even if i try to get the data in another tab
      </p>
    </div>
  )
}

export default RepoDetails
