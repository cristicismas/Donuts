import React, {Component} from 'react';
import '../css/Notifications.css';

class Notifications extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showNotifications: false,
            notifications: ['The duck was deleted with success!']
        };
    }

    render() {
        const { showNotifications, notifications } = this.state;

        const notificationsList = notifications.map(notif => (
            <div className="notification-item">{notif}</div>
        ))

        return (
            <div 
                className="notifications" 
                onClick={() => 
                    this.setState({ showNotifications: !showNotifications})
                }>
                <img src="/images/bell-icon.png" />

                {
                    notifications.length && showNotifications ?
                    (
                        <div className="notifications-list">
                            {notificationsList}
                        </div>
                    ) : null
                }
            </div>
        );
    }
}

Notifications.propTypes = {};
Notifications.defaultProps = {};

export default Notifications;
