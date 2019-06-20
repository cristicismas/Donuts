import React from 'react';
import '../../css/Notifications.css';

class Notifications extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showNotifications: false,
            notifications: ['The duck was deleted with success!']
        };
    }

    render() {
        const { showNotifications, notifications } = this.state;

        const notificationsList = notifications.map((notif, index) => (
            <div className="notification-item" key={`${notif}-${index}`}>{notif}</div>
        ))

        return (
            <div 
                className="notifications" 
                onClick={() => 
                    this.setState({ showNotifications: !showNotifications })
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

export default Notifications;
