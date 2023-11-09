import {Link} from 'react-router-dom'
import './index.css'

const RepoCard = props => {
  const {itemDetails} = props
  const {id, name, description, owner, pushed_at, forks, open_issues} =
    itemDetails
  const {avatar_url} = owner
  // console.log(avatar_url)
  return (
    <Link to={`/${name}/${id}`} style={{textDecoration: 'none'}}>
      <div className="card-cont">
        <img src={avatar_url} alt="avatar" className="avatar-img" />
        <div style={{textAlign: 'left', width: '100%'}}>
          <h2 style={{color: '#212829'}}>{name}</h2>
          <p style={{color: '#51899e'}}>{description}</p>
          <div
            style={{
              display: 'flex',
              marginTop: '0px',
              color: '#439fe6',
              width: '100%',
            }}
          >
            <p style={{marginRight: '30px'}}>forks: {forks}</p>
            <p>open issues: {open_issues}</p>
            <p
              style={{
                marginLeft: '40%',
                textAlign: 'right',
                width: '40%',
              }}
            >
              Last pushed at {pushed_at} by {name}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default RepoCard
