import React from 'react';
import { askForPermissionToReceiveNotifications } from '../push-notification';

const NotificationButton = () => (
  <button onClick={askForPermissionToReceiveNotifications} >
    click to start notification
  </button>
);

export default NotificationButton;
