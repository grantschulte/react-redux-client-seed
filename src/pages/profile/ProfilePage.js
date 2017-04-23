import React from "react"
import PageHeading from "../../components/page-heading/PageHeading"
import "./ProfilePage.scss"

const ProfilePage = () => (
  <div className="profile-page">
    <PageHeading text="Profile" />
    <p>This is a private page. You must be authenticated to view this. Your username is _____ and your user id is _____.</p>
  </div>
)

export default ProfilePage
