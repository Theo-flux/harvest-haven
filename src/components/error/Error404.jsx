import spaceIllustration from '../../images/error404_illustration.svg'
import './error404.css'
import Content from '../Content/Content';
function Error404() {
  return (
    <div className='error-section'>
      <div className='error'>
        <div className='error-inner'>
          <figure>
            <img src={spaceIllustration} alt="space illustration" />
          </figure>
          <div className='error-inner-info'>
            <p className='tag'>Page not found</p>
            <h1 className='title'>Oh NO! Error 404</h1>
            <p className='info'>We’re sorry, but the page you’re trying to access is currently unavailable</p>
            <div className='btn-section'>
              <button className='goback-home'>Back to Home</button>
              <button className='help-center'>Vist our help center</button>
            </div>
          </div> {/** error-inner-info */}
        </div>
        <Content/>
        <div className='social-desktop-container'>
            <i className="icon ri-facebook-circle-line"></i>
            <i className="icon ri-twitter-line"></i>
            <i className="icon ri-instagram-line"></i>
          </div>
        
        <div className='error-footer'>
          <div className='social-container'>
            <i className="icon ri-facebook-circle-line"></i>
            <i className="icon ri-twitter-line"></i>
            <i className="icon ri-instagram-line"></i>
          </div>
          <div className='contact'><div></div><small>Contact Information</small></div>
        </div> {/** error footer */ }
      </div> {/** error ends  */ }
    </div> /**Error section */ 
  )
}

export default Error404;