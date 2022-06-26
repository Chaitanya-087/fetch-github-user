import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkIcon from '@mui/icons-material/Link';
import WorkIcon from '@mui/icons-material/Work';
const GithubDetails = ({ data }) => {
    const { userData, lightTheme } = data
    return (
        <div className='github' data-light={lightTheme}>
            { userData ? <>
            <div className='top'>
                <div className='left'>
                    <img className='avatar' src={userData.avatar_url} alt="avatar" />
                </div>
                <div className='right'>
                    <div className='userPersonal'>
                        <h2 className='name'>
                            {userData.name}
                        </h2>
                        <span className='login'>
                            @{userData.login}
                        </span>
                    </div>
                    <p className='joined'>{userData.created_at}</p>
                </div>
            </div>
                <div className='middle'>
                    <p className='bio'>{userData.bio ? userData.bio : 'This profile has no bio'}</p>
                    <div className='items'>
                        <div className="item">
                            <p>Repos</p>
                            <h3>{userData.public_repos}</h3>
                        </div>
                        <div className="item">
                            <p>Followers</p>
                            <h3>{userData.followers}</h3>
                        </div>
                        <div className="item">
                            <p>Following</p>
                            <h3>{userData.following}</h3>
                        </div>
                    </div>
                    <div className='whereabouts'>
                        <div className='location'>
                            <LocationOnIcon className='icon'/>
                            <p>{userData.location ? userData.location : 'Not Available'}</p>
                        </div>
                        <div className='twitter'>
                            <TwitterIcon className='icon'/>
                            <p>{userData.twitter_username ? userData.twitter_username : 'Not Available'}</p>
                        </div>
                        <div className='link'>
                            <LinkIcon className='icon' />
                            <a href={userData.blog ? userData.blog : ''}>{userData.blog ? userData.blog : 'Not Available'}</a>
                        </div>
                        <div className='company'>
                            <WorkIcon className='icon'/>
                            <p>{userData.company ? userData.company : 'Not Available'}</p>
                        </div>
                    </div>
                </div>
                </> : null
}
        </div>
    )
}

export default GithubDetails