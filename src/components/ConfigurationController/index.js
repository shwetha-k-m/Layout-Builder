// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showLeftNavbar,
        showRightNavbar,
        showContent,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      return (
        <div className="configuration-container">
          <h1 className="heading">Layout</h1>
          <div className="inputs-container">
            <div className="input-container">
              <input
                type="checkbox"
                className="checkbox"
                id="content"
                checked={showContent}
                onClick={onChangeContent}
              />
              <label htmlFor="content" className="label">
                Content
              </label>
            </div>
            <div className="input-container">
              <input
                type="checkbox"
                className="checkbox"
                id="Left-navbar"
                checked={showLeftNavbar}
                onClick={onChangeLeftNavbar}
              />
              <label htmlFor="Left-navbar" className="label">
                Left Navbar
              </label>
            </div>
            <div className="input-container">
              <input
                type="checkbox"
                className="checkbox"
                id="right-navbar"
                checked={showRightNavbar}
                onClick={onChangeRightNavbar}
              />
              <label htmlFor="right-navbar" className="label">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
