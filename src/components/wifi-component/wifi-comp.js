import './style.css'

const Wifi = () => {
    return (
        <>
            <div className="wifi-text">
                <p
                    style={{
                        marginTop: '5px',
                        textAlign: 'center',
                    }}
                >
                    rfkill unblock all
                </p>
                <p
                    style={{
                        textAlign: 'center',
                    }}
                >
                    iwctl
                </p>
                <p style={{ textAlign: 'center' }}>
                    station wlan0 connect ______
                </p>
            </div>
            <article style={{ marginTop: '20px' }}>
                <p>
                    First unblock the network card.
                    <br />
                </p>
                <p>
                    After go to iwctl to connect. <br />{' '}
                </p>
            </article>
        </>
    )
}

export default Wifi
