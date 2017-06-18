/**
 * Created by Mihail on 6/18/2017.
 */
import React from "react"
import ClockDisplay from "./ClockDisplay"
import TopOverlay from "./TopOverlay"
import SlideToUnlock from "./SlideToUnlock"
import PropTypes from 'prop-types'

export default class LockScreen extends React.Component {
  render() {

    const {
      wallpaperPath,
      userInfoMessage,
      onUnlocked,
    } = this.props

    return (
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          backgroundImage: wallpaperPath ? `url(${wallpaperPath})` : "",
          backgroundColor: "black",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <ClockDisplay />
        {userInfoMessage ? (
          <TopOverlay
            style={{
              padding: "2em",
              marginBottom: "auto",
            }}
          >
            {userInfoMessage}
          </TopOverlay>
        ) : null}
        <SlideToUnlock onSlide={onUnlocked} />
      </div>
    )
  }
}

LockScreen.propTypes = {
  wallpaperPath: PropTypes.string,
  userInfoMessage: PropTypes.string,
  onUnlocked: PropTypes.func,
}